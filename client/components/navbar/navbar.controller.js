'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.isOwner = Auth.isOwner;
    this.isManager = Auth.isManager;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('flowtApp')
  .controller('NavbarController', NavbarController);
