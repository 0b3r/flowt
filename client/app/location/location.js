'use strict';

angular.module('flowtApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('location', {
        url: '/location',
        template: '<location></location>'
      });
  });
