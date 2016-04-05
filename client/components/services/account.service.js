'use strict';

(function() {

function AccountResource($resource) {
  return $resource('/api/account/:id/:controller', {
    id: '@_id'
  }, {});
}

angular.module('flowtApp')
  .factory('Account', AccountResource);

})();