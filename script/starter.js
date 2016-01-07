// 定义全局接口主机地址
var host = 'http://127.0.0.1/hduLibrary/';
angular.module('app', [])

// 今日文章
.controller('starterCtrl', function($scope,$http) {
	$scope.searchTypeId = 0;
	$scope.searchItemInfo = "";
	// 搜索函数
	$scope.searchStart = function(){
		$http({
		  method: 'GET',
		  url: host+'core/searchBook.php?searchType='+$scope.searchTypeId+"&string="+$scope.searchItemInfo
		}).then(function successCallback(response) {
			console.log(response);
			$scope.books = response.data;
			for(var index in $scope.books){
				if($scope.books[index].bookStatus == 0){
					$scope.books[index].bookStatusInfo="借阅";
				}else{
					$scope.books[index].bookStatusInfo = "已借出";
				}
			}
		}, function errorCallback(response) {
			console.log(response);
		});
	}

	// 借书
	$scope.borrow = function(book){
		console.log(book);
		if(book.bookStatus != 0){
			alert("该书已被借出");
			return ;
		}
		$http({
		  method: 'GET',
		  url: host+'core/lendBook.php?bookId='+book.bookId
		}).then(function successCallback(response) {
			console.log(response);
			alert("借书成功");
		}, function errorCallback(response) {
			console.log(response);
			alert("借书失败，请检查网络");
		});
	}
	// 注销函数
	$scope.logOut = function(){
		document.cookie="";
		window.location.href="login.html";
	}

})