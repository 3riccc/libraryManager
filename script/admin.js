// 定义全局接口主机地址
var host = 'http://127.0.0.1/hduLibrary/';
angular.module('app', [])

// 今日文章
.controller('adminCtrl', function($scope,$http) {
	// 标题
	$scope.functionName = "书籍添加";
	// 显示添加书籍
	$scope.addBookShow=true;
	$scope.borrowBookShow = false;
	$scope.continueShow = false;
	// 注销函数
	$scope.logOut = function(){
		document.cookie="";
		window.location.href="login.html";
	}
	// 点击左侧添加书籍
	$scope.clickAdd = function(){
	$scope.functionName = "书籍添加";

		$scope.addBookShow=true;
		$scope.borrowBookShow = false;
		$scope.continueShow = false;
	}
	// 点击左侧借阅书籍
	$scope.clickBorrow = function(){
		$scope.functionName = "书籍归还";
		$scope.addBookShow=false;
		$scope.borrowBookShow = true;
		$scope.continueShow = false;
		// 显示书籍列表
		$http({
		  method: 'GET',
		  url: host+'core/queryBooks.php'
		}).then(function successCallback(response) {
			console.log(response);
			$scope.books = response.data;
		}, function errorCallback(response) {
			alert("网络不佳，请检查您的网络连接");
		});
	}
	// 点击左侧续借书籍
	$scope.clickContinue = function(){
		$scope.functionName = "书籍续借";
		$scope.addBookShow=false;
		$scope.borrowBookShow = false;
		$scope.continueShow = true;
		// 显示书籍列表
		$http({
		  method: 'GET',
		  url: host+'core/queryBooks.php'
		}).then(function successCallback(response) {
			console.log(response);
			$scope.books = response.data;
		}, function errorCallback(response) {
			alert("网络不佳，请检查您的网络连接");
		});
	}
	// 还书函数
	$scope.returnBack = function(book){
		// 显示书籍列表
		$http({
		  method: 'GET',
		  url: host+'core/returnBooks.php?bookId='+book.bookId
		}).then(function successCallback(response) {
			console.log(response);
			$scope.books = response.data;
			alert("还书成功")
		}, function errorCallback(response) {
			alert("网络不佳，请检查您的网络连接");
		});
	}
	// 续借函数
	$scope.cuntinueBorrow = function(book){
		// 显示书籍列表
		$http({
		  method: 'GET',
		  url: host+'core/renew.php?bookId='+book.bookId
		}).then(function successCallback(response) {
			console.log(response);
			$scope.books = response.data;
			alert("续借成功")
		}, function errorCallback(response) {
			alert("网络不佳，请检查您的网络连接");
		});
	}
})