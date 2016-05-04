(function(){
    "use strict";
    angular
        .module("ngFClass")
        .controller("FClassCtrl", function($scope,$http ,$mdSidenav, $mdToast) {
                $http.get('data/item.json').then(function(ref){
                    //console.log(item);
                    $scope.items = ref.data; 
                });
                
                $scope.openSidebar = function(){
                    $mdSidenav('left').open();
                };
                //$scope.ShowHide = function (context) {
                    //If DIV is visible it will be hidden and vice versa.
                    //$scope.context= $scope.IsVisible ? false : true;
                //};
                $scope.showPopover = function(context) {
                    context.popover = context.popover ? false : true;
                };
                $scope.closeSidebar = function(){
                    $mdSidenav('left').close();
                    showToast("Te mai asteptam");
                    $scope.user = {};
                };
                $scope.saveUser = function(user){
                    if (user) {
                       $scope.items.push(user); 
                       $scope.user = {};
                       $scope.closeSidebar();
                       showToast("Adaugarea a fost finalizata !");
                    }
                };
                $scope.editItem = function (itemEdit){
                     $scope.editing = true; 
                     $scope.openSidebar();
                     $scope.user = itemEdit;
                };
                $scope.deleteItem = function (item){
                    var index = $scope.items.indexOf(item);  
                    $scope.items.splice(index, 1);
                };

                $scope.saveEdit = function (){
                    $scope.editing = false;
                    $scope.user = {};
                    $scope.closeSidebar();
                    showToast("Editarea a fost finalizata !");
                };
                function showToast (mesaj){
                     $mdToast.show(
                            $mdToast.simple()
                            .textContent(mesaj)
                            .position('top, right')
                            .hideDelay(3000)
                    );
                }

            });
 })();
