(function(){
    angular
        .module("ngFClass")
        .factory("FClassFacty", function($http){
                
                function getFClass {
                    return $http.get('data/item.json');
                }
                
                return {
                    getFClass: getFClass
                }    
        });
 })();
