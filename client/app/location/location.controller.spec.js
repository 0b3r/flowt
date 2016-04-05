'use strict';

describe('Component: LocationComponent', function () {

  // load the controller's module
  beforeEach(module('flowtApp'));

  var LocationComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    LocationComponent = $componentController('LocationComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
