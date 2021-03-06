(function (angular) {

    angular
        .module('app.main.directives')
        .directive('postRender', ['$timeout', function($timeout) {
            return{
                restrict: 'E',
                scope: {
                    callback: '&onCallback'
                },
                link: function (scope, element, attrs) {
                    $timeout(
                        function(){
                            scope.callback();
                        }, 0);
                }
            }
        }]);

}(window.angular));