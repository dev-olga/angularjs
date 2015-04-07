(function (angular) {

    angular.module('app.main.controllers')
        .controller("TabsCtrl", ["$scope", "$state", TabsCtrl]);

    function TabsCtrl($scope, $state) {
        $scope.tabs = [
            { heading: "Search", route: "main.search", active: false },
            { heading: "Information", route: "main.info", active: false }
        ];

        $scope.go = function (route) {
            $state.go(route);
        };

        $scope.active = function (route) {
            return $state.is(route);
        };

        $scope.$on('$stateChangeSuccess', function () {
            $scope.tabs.forEach(function (tab) {
                tab.active = $scope.active(tab.route);
            });
        });
    }

}(window.angular));