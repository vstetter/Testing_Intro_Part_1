(function () {
  "use strict";

  angular.module('storeApp')
    .controller('MainController', function (StoreService, $scope) {   //inject service here
                                                                  //add $location after $scope???$location makes url available to app, allows changes to url
                                                                  //get current path: $location.path(); change path: $location.path('/newValue')
      var mainCtrl = this;  //alias for MainController


      mainCtrl.items = StoreService.getItems(); //getting data from product array in service

  // add product
      mainCtrl.addProduct = function (newItem) { //using this method in form in addNewItem.html
        StoreService.addItem(newItem); //see service's public API method
        $scope.newItem = {};  //to clear out form
        // $location.path('/admin/listView'); //to go back to listView.add /admin/ ?

      };

  // delete product
      mainCtrl.deleteProduct = function (item) {
        StoreService.deleteItem(item);
      };

  // edit product
        mainCtrl.editProduct = function (item) {
          StoreService.editItem(item);
        };

//Routing??

    });

}) ();
