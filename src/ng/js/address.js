var addr = angular.module("addr", [])
addr.controller('addrctrl', ['$scope', '$http', function ($scope, $http) {
    $http({
        url: './data/address.json',
        type: 'get'
    }).then(res => {
        console.log(res.data.result)
        $scope.addList = res.data.result
    });
    $scope.sendType = 1;
    $scope.pageNum = 3;
    $scope.currentIndex = 0
    $scope.delShow = false
    $scope.checkSel = function ($index) {
        $scope.currentIndex = $index
    };
    $scope.defAddr = function (item, $index) {
        $scope.addList.forEach((v, i) => {
            if ($index == i) {
                v.isDefault = true
            } else {
                v.isDefault = false
            }
        })
    };
    $scope.changeNum = function () {
        if ($scope.pageNum == 3) {
            $scope.pageNum = $scope.addList.length - 1
        } else {
            $scope.pageNum = 3
        }
    };
    $scope.delBtn = function ($index) {
        $scope.delShow = true
        $scope.delIndex = $index
    };
    $scope.delAddr = function(){
        var index = $scope.delIndex
        $scope.addList.splice(index, 1)
        $scope.delShow = false
    };
    $scope.modShow = false
    $scope.modIndex  = null
    $scope.modAddress = {}
    $scope.modAddrShow = function($index){
        $scope.modIndex = $index
        $scope.modShow = true
        $scope.modAddress = $scope.addList[$index]
    };
    $scope.changeAddr = function(){
        var index = $scope.modIndex
        $scope.addList[index].userName = $scope.modAddress.userName
        $scope.addList[index].streetName = $scope.modAddress.streetName
        $scope.addList[index].tel = $scope.modAddress.tel
        $scope.modShow = false
    }
}])