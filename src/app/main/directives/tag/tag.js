(function (angular) {

    angular
        .module('app.main.directives')
        .directive('tag', function(){
            return{
                restrict: 'E',
                templateUrl: 'app/main/directives/tag/tag.tpl.html',
                replace: true,
                scope: {
                    item: '=item',
                    remove: '&onRemove'
                }
            }
        });

}(window.angular));