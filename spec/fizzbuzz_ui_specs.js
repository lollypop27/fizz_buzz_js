describe('Fizz_Buzz_UI - index.html', function() {
  beforeEach(function()
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady('index.html');
    $('#number').val('100');
    $('#calculate').trigger('click');
  });
});
