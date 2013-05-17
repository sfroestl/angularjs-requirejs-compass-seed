define(['angular',
        'controllers/myctrl1',
        'controllers/twitterCtrl'
        ],
  function (angular,
            MyCtrl1,
            TwitterCtrl
            ) {

  var module = angular.module('myApp.controllers', ['myApp.services'])

  // Master & SessionController Controller
  module.controller("MyCtrl1", MyCtrl1);
  module.controller("TwitterCtrl", TwitterCtrl);

});
