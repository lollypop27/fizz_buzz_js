describe('Fizz_Buzz_UI - index.html', function() {
  beforeEach(function()
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady('index.html');
    $('#number').val('100');
    $('#enter').trigger('click');
  });
  it("displays Fizz Buzz Value", function() {
      expect($('#display_value').text()).toBe('Your number equals');
  });
  it("displays Fizz Buzz Message", function() {
      expect($('#display_message').text()).toBe('and you get fizzbuzz');
  });
})
