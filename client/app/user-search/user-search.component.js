import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './user-search.routes';

export class UserSearchController {

  searchText = "";
  showResult = false;
  overviewInfo = {};
  activity = {};
  /*@ngInject*/
  constructor($http, $scope, socket) {
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
      if(theEvent.keyCode === 13 && this.searchText.length == 12){
        this.search();
      }

    }
    search() {
      console.log('search', this.searchText);
      if(this.searchText.length < 12) {
        this.showResult = false;
        return;
      }
      this.$http.get('/api/persons/' + this.searchText)
        .then(response => {
          console.log(response.data);
          this.overviewInfo = {
            'Name': response.data.name,
            'Security number': response.data.securityNumber,
            'Address': response.data.address,
            'Age': response.data.age
          };
          this.activity = JSON.parse(response.data.activity);
          console.log(this.activity);
        });
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
