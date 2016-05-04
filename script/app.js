angular
    .module ("ngFClass",["ngMaterial"])
    .config (function($mdThemingProvider){
        
        $mdThemingProvider.theme ('default')
            .primaryPalette('indigo')
            .accentPalette('orange');
        
    })
    .directive("helloWord", function() {
            return {
                template: "<h1>Hello, wordl! </h1>"
            }
        });

#232937
10273a