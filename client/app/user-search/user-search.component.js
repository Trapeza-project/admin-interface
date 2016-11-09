import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './user-search.routes';

export class UserSearchController {

  /*@ngInject*/
  constructor($http, socket) {
    this.$http = $http;
    this.socket = socket;
  }

  validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }
}

export default angular.module('adminInterfaceApp.user-search', [uiRouter])
  .config(routing)
  .component('userSearch', {
    template: require('./user-search.html'),
    controller: UserSearchController
  })
  .name;
