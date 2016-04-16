'use strict';

angular.module('currencyCounter', [])

    .controller('CurrencyCounterCtrl', ['$scope',
        function ($scope) {

            $scope.totalIt = function () {
                $scope.total = $scope.quarters * .25 + $scope.dimes * .10 + $scope.nickels * .05 + $scope.pennies * .01;
            }
        }
    ]);
