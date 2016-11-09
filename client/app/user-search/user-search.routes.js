'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('user-search', {
      url: '/user-search',
      template: '<user-search></user-search>'
    });
}
