// 定义全局接口主机地址
var host = 'http://127.0.0.1/hduLibrary/';
angular.module('app', [])

// 今日文章
.controller('myInfoCtrl', function($scope,$http) {
	$scope.ff="fff";
	// 注销函数
	$scope.logOut = function(){
		document.cookie="";
		window.location.href="login.html";
	}
		// 学生信息查看
		$http({
		  method: 'GET',
		  url: host+'core/stuInfo.php'
		}).then(function successCallback(response) {
			console.log(response);
			$scope.books = response.data;
		}, function errorCallback(response) {
			console.log(response);
		});

})