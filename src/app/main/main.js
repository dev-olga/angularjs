(function (angular) {

    angular
        .module("app.main.controllers", []);

    angular
        .module("app.main.services", []);

    angular
        .module("app.main.directives", []);

    angular
        .module("app.main.filters", []);

    angular
        .module("app.main", [
            "app.main.services"
            , "app.main.controllers"
            , "app.main.directives"
            , "app.main.filters"
        ])

}(window.angular));
