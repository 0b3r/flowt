'use strict';
(function(){

class UserComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('flowtApp')
  .component('user', {
    templateUrl: 'app/user/user.html',
    controller: UserComponent
  });

})();
