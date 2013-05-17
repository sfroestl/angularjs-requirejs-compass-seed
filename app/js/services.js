define(['angular', 'services/twitterService'],
  function (angular, twitterServiceFactory) {
	'use strict';

	var module = angular.module('myApp.services', []);
  module.factory("twitterService", twitterServiceFactory);

});