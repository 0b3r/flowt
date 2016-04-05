(function(angular, undefined) {
'use strict';

angular.module('flowtApp.constants', [])

.constant('appConfig', {userRoles:['guest','sales','staff','manager','owner','admin']})

;
})(angular);