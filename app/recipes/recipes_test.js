'use strict';

describe('myApp.recipes module', function() {

  beforeEach(module('myApp.recipes'));

  describe('recipes controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var recipeCtrl = $controller('recipeCtrl');
      expect(recipeCtrl).toBeDefined();
    }));

  });
});