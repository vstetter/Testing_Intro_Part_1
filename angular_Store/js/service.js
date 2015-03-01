(function () {
"use strict";

angular.module('storeApp')
  .factory('StoreService', function () {
    var products = [
    {
      image: "http://cdn.shopify.com/s/files/1/0076/2972/products/kurowan9_1024x1024.jpg?v=1401389010",
      productName: "Crackle Effect Bowl",
      price: "125",
      productDescription: "Japanese ceramic bowl"

    },

    {
      image: "http://cdn.shopify.com/s/files/1/0076/2972/products/smallcup10_1024x1024.jpg?v=1401463852",
      productName: "Crackle Effect Cup",
      price: "50",
      productDescription: "Ceramic water cup"
    },

    {
      image: "http://cdn.shopify.com/s/files/1/0076/2972/products/teacup3_1024x1024.jpg?v=1424099713",
      productName: "Teacup with Lid",
      price: "70",
      productDescription: "Japanese tea cup with lid"
    },

    {
      image: "http://cdn.shopify.com/s/files/1/0076/2972/products/maplecup3_1024x1024.jpg?v=1409666683",
      productName: "Maple Cup",
      price: "45",
      productDescription: "Fluted cup made from maple wood"
    },

    {
      image: "http://cdn.shopify.com/s/files/1/0076/2972/products/largetray3_1024x1024.jpg?v=1409666614",
      productName: "Large Round Tray",
      price: "55",
      productDescription: "Large teak wood tray"
    },

    {
      image: "http://cdn.shopify.com/s/files/1/0076/2972/products/ytypebowl8_1024x1024.jpg?v=1410792188",
      productName: "Wood Bowl",
      price: "40",
      productDescription: "Japanese Oak Wood Bowl"
    }

    ];

    var getProducts = function () {
      return products;

    };

    var addProduct = function (item) {
      products.push(item);

    };

    var deleteProduct = function (item) {
      var idx = products.indexOf(item);
      products.splice(idx,1);
    };

    var editProduct = function (item) {

    };


//left side: public API for controller, right side: local service function
    return {
      getItems: getProducts,
      addItem: addProduct,
      deleteItem: deleteProduct,
      editItem: editProduct
    };

  })(serve);


})();
