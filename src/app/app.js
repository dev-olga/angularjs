(function (angular) {

    angular
        .module('app', [
            'ui.router'
            , 'ui.bootstrap'
            , "app.main"
        ])
        .config(config)
        .run(run)

    function config($urlRouterProvider, $locationProvider, $stateProvider){
        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise("/main");

        $stateProvider
            .state("layout", {
                abstract: true,
                url:"",
                templateUrl: 'app/main/views/layout.html'
            })
            .state("main", {
                abstract: true,
                parent: "layout",
                default: "/main",
                views:{
                    "top-navigation": {
                        templateUrl: 'app/main/views/tabs.tpl.html',
                        controller:"TabsCtrl"
                    },
                    "teams-list": {
                        templateUrl: 'app/main/views/teams-list.tpl.html',
                        controller:"TeamsCtrl"
                    }
                }
            })
            .state("main.search", {
                parent: "main",
                views:{
                    "container@layout":{
                        controller:"SearchCtrl",
                        templateUrl: "app/main/views/search.tpl.html"
                    }
                },
                url: "/main"
            })
            .state("main.info", {
                parent: "main",
                views:{
                    "container@layout":{
                        controller:"InfoCtrl",
                        templateUrl: "app/main/views/info.tpl.html"
                    }
                },
                url: "/main/info"
            });
    };

    function run($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        };

}(window.angular));

