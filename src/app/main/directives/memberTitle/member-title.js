(function (angular) {

    angular
        .module('app.main.directives')
        .directive('memberTitle', function(){
            return{
                restrict: 'E',
                templateUrl: 'app/main/directives/memberTitle/member-title.tpl.html',
                scope: {
                    item: '=item'
                }
            }
        });


}(window.angular));