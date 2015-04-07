(function (angular) {

    angular
        .module('app.main.filters')
        .filter("interval",  function() { return function(items, start, limitTo) {
            var newArr = [];
            start = +start;
            for (var i=start; i<start + limitTo && i < items.length; i++){
                newArr.push(items[i]);
            }
            return newArr;
        };})



}(window.angular));