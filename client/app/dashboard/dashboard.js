'use strict';

angular.module('flowtApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        template: '<dashboard></dashboard>'
      });
  });
