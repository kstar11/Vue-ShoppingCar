var app = angular.module("app", [])
app.controller("myctrl", ['$scope', '$http', function ($scope, $http) {
    $http({
        url: './data/cartData.json',
        type: 'get'
    }).then(
        res => {
            console.log(res.data.result.list)
            $scope.proList = res.data.result.list
        }
        );
    $scope.changeNum = function (item, type) {
        if (type > 0) {
            item.productQuantity++
        } else {
            item.productQuantity--
            if (item.productQuantity < 1) {
                item.productQuantity = 1
            }
        }
        $scope.calcMoney()
    };
    $scope.allselect = false;
    $scope.select = function (item) {
        if (typeof item.checked == 'undefined') {
            item.checked = true
        } else {
            item.checked = !item.checked
        }
        var flag = true
        $scope.proList.forEach((v, i) => {
            flag = v.checked && flag
        })
        $scope.allselect = flag
        $scope.calcMoney()
    };
    $scope.selectAll = function (flag) {
        $scope.allselect = flag
        $scope.proList.forEach((v, i) => {
            if (typeof v.checked == 'undefined') {
                v.checked = $scope.allselect
            } else {
                v.checked = $scope.allselect;
            }
        });
        $scope.calcMoney()
    };
    $scope.calcMoney = function () {
        $scope.totalMoney = 0
        $scope.proList.forEach((v, i) => {
            if (v.checked) {
                $scope.totalMoney += v.productPrice * v.productQuantity
            }
        })
    };
    $scope.delIndex = null;
    $scope.delShow = false
    $scope.delBtn = function ($index) {
        $scope.delShow = true
        $scope.delIndex = $index
    };
    $scope.delList = function () {
        var index = $scope.delIndex
        $scope.proList.splice(index, 1)
        $scope.calcMoney()
        $scope.delShow = false
    }
}])