'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('dashboard', {
      url: '/',
      template: '<dashboard></dashboard>'
    });
}
