import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './user-search.routes';

export class UserSearchController {

  searchText = "";
  showResult = false;
  /*@ngInject*/
  constructor($http, socket) {
    this.$http = $http;
    this.socket = socket;
  }

  validate(evt) {
      var theEvent = evt || window.event;
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
      var regex = /[0-9]|\./;
      if (!regex.test(key) || this.searchText.length >= 12) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
      }
    }
    search() {
      console.log('search', this.searchText);
      if(this.searchText.length < 12) {
        this.showResult = false;
        return;
      }
      this.showResult = true;
  }
}

export default angular.module('adminInterfaceApp.user-search', [uiRouter])
  .config(routing)
  .component('userSearch', {
    template: require('./user-search.html'),
    controller: UserSearchController,
    controllerAs: 'userSearchCtrl'
  })
  .name;
