(function (angular) {

    angular
        .module('app.main.directives')
        .directive('thSort', function(){
            return{
                restrict: 'A',
                templateUrl: 'app/main/directives/thSort/th-sort.tpl.html',
                transclude: true,
                scope: {
                    order: '=',
                    by: '=',
                    reverse : '='
                },
                link: function(scope, element, attrs) {
                    scope.onClick = function () {
                        if( scope.order === scope.by ) {
                            scope.reverse = !scope.reverse;
                        } else {
                            scope.by = scope.order ;
                            scope.reverse = false;
                        }
                    }
                }
            }
        });

}(window.angular));