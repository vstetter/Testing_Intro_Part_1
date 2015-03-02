//service: reusable business logic independent of views

(function () {
"use strict";

angular.module('storeApp')
  .factory('StoreService', function () {
    var products = [
    {
      image: "https://s-media-cache-ak0.pinimg.com/736x/43/c5/9e/43c59e8cc179639ecbf9f28d9f9927c8.jpg",
      productName: "Random Light by Moooi",
      price: "655",
      productDescription: "Modern classic made from resin drained yarn."

    },

    {
      image: "https://s-media-cache-ak0.pinimg.com/736x/65/5e/cc/655ecc43b71c7dafeac28056dab65917.jpg",
      productName: "Alium Light by John Lewis",
      price: "320",
      productDescription: "Light with 36 arms and crystal glass beads."
    },

    {
      image: "https://s-media-cache-ak0.pinimg.com/736x/b7/b6/92/b7b69237e7396f7bc5fcc285b5bf11f6.jpg",
      productName: "Roberta Pendant by John Lewis",
      price: "300",
      productDescription: "Brass rings with crystal drop glass droplets."
    },

    {
      image: "https://s-media-cache-ak0.pinimg.com/736x/f9/e1/e7/f9e1e7093e39b1c553de06a81fb63d80.jpg",
      productName: "The Nest by Edward Linacre",
      price: "345",
      productDescription: "Honeycomb pendant light made from bamboo veneer."
    },

    {
      image: "https://s-media-cache-ak0.pinimg.com/736x/1b/66/c6/1b66c60d689f371f31883ce526edd4a0.jpg",
      productName: "Koura Light by David Trubridge",
      price: "450",
      productDescription: "Bamboo plywood light comes ready to assemble."
    },

    {
      image: "https://s-media-cache-ak0.pinimg.com/736x/6d/ea/f8/6deaf89320625eb1b179e82354db049a.jpg",
      productName: "Pendant 2 by Flaco Design",
      price: "400",
      productDescription: "Ash veneer pendant handmade in Denmark."
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

    var editProduct = function (item, idx) {   //??? not working
      var idx = products.indexOf(item);
      products[idx] = item;

    };


//left side: public API for controller, right side: local service function
    return {
      getItems: getProducts,
      addItem: addProduct,
      deleteItem: deleteProduct,
      editItem: editProduct
    };

  });


})();
