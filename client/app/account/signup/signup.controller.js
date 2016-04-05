'use strict';

class SignupController {
  //start-non-standard
  user = {};
  errors = {};
  submitted = false;
  //end-non-standard

  constructor(Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;
  }

  register(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.createUser({
        fname: this.user.fname,
        lname: this.user.lname,
        email: this.user.email,
        password: this.user.password,
        accountInfo: {
          creditCardType: 'visa',
          creditCardNum: 5432,
          creditCardExpiry: 201809
        }
      })
      .then(() => {
        // Account created, redirect to home
        this.$state.go('main');
      })
      .catch(err => {
        err = err.data;
        this.errors = {};

        // Update validity of form fields that match the sequelize errors
        if (err.name) {
          angular.forEach(err.fields, (value, key) => {
            form[key].$setValidity('mongoose', false);
            this.errors[key] = err.message;
          });
        }
      });
    }
  }
}

angular.module('flowtApp')
  .controller('SignupController', SignupController);
