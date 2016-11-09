'use strict';

describe('Component: UserSearchComponent', function() {
  // load the controller's module
  beforeEach(module('adminInterfaceApp.user-search'));

  var UserSearchComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    UserSearchComponent = $componentController('user-search', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
