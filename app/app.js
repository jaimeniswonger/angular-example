'use strict';

angular.module('currencyCounter', [])

    .controller('CurrencyCounterCtrl', ['$scope',
        function ($scope) {

            $scope.quarters = $scope.dimes = $scope.nickels = $scope.pennies = 0;

            $scope.totalIt = function () {
                $scope.total = $scope.quarters * .25 + $scope.dimes * .10 + $scope.nickels * .05 + $scope.pennies * .01;
            }
        }
    ]);
