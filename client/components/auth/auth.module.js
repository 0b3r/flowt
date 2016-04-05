'use strict';

angular.module('flowtApp.auth', [
  'flowtApp.constants',
  'flowtApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
