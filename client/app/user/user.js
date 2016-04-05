'use strict';

angular.module('flowtApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('user', {
        url: '/user',
        template: '<user></user>',
        authenticate: ['owner', 'manager']
      });
  });
