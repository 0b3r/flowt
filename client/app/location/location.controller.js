'use strict';
(function(){

class LocationComponent {

  constructor(Loc, $uibModal) {
    // Use the User $resource to fetch all users
    this.locations = Loc.query();
    this.$uibModal = $uibModal;
  }

  add(){
    var addInstance = this.$uibModal.open({
      templateUrl: 'app/location/add.modal.html',
      controller: 'LocationAddController',
      controllerAs: 'loc'
    });

    addInstance.result
      .then(loc => {

      })
      .catch(err => console.log(`Error Adding Location: ${err}`));
  }

  delete(loc) {
    loc.$remove();
    this.locations.splice(this.locations.indexOf(loc), 1);
  }

}

class LocationAddController {

  //start-non-standard
  newLocation = {};
  errors = {};
  submitted = false;
  //end-non-standard

  constructor($uibModalInstance) {
    //this.LocationService = LocationService;
    this.$uibModalInstance = $uibModalInstance;
  }

  createLocation(form) {
    this.submitted = true;

    if (form.$valid) {

      /*this.LocationService.save(this.newLocation, 
        loc => {
          this.$uibModalInstance.close(loc);
        }, 
        err => {
          err = err.data;
          this.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        }
      );*/
    }
  }

  cancel(){
    this.$uibModalInstance.dismiss('cancel');
  }


}

angular.module('flowtApp')
  .controller('LocationAddController', LocationAddController)
  .component('location', {
    templateUrl: 'app/location/location.html',
    controller: LocationComponent,
    controllerAs: 'loc',
    authenticate: ['owner','manager']
  });

})();
