'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';


export class NavbarComponent {
  menu = [{
    title: 'Dashboard',
    state: 'dashboard'
  },
    {
      title: 'User search',
      state: 'user-search'
    }];

  isCollapsed = true;

  constructor(Auth) {
    'ngInject';

    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
  }
  
  toggleSidebar = function(){
    this.toggle = !this.toggle;
  }

}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
