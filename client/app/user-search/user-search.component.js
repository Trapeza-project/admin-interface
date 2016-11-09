'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './user-search.routes';

export class UserSearchComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('adminInterfaceApp.user-search', [uiRouter])
  .config(routes)
  .component('userSearch', {
    template: require('./user-search.html'),
    controller: UserSearchComponent,
    controllerAs: 'userSearchCtrl'
  })
  .name;
