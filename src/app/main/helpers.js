(function(helpers){
    helpers.first = function(array, func){
        var i = 0;
        for(; i< array.length; i++){
            if(func(array[i])){
                return array[i];
            }
        }
        return false;
    }

    helpers.indexOf = function(array, func){
        var i = 0;
        for(; i< array.length; i++){
            if(func(array[i])){
                return array[i];
            }
        }
        return i == array.length ? -1 : i;
    }
}( window.helpers = window.helpers || {}));