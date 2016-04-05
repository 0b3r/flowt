'use strict';

(function() {

function LocationResource($resource) {
  return $resource('/api/locations/:id/:controller', {
    id: '@_id'
  }, {});
}

angular.module('flowtApp')
  .factory('Loc', LocationResource);

})();