 beforeEach(function(fizz_buzz) {
  it("returns 1 if number = 1", function() {
    expect(fizz_buzz(1)).toEqual(1);
  });

  it("returns 'fizz' if number = 3", function() {
    expect(fizz_buzz(9)).toEqual('fizz');
  });

  it("returns 'buzz' if number = 5", function() {
    expect(fizz_buzz(20)).toEqual('buzz');
  });

  it("returns 'fizzbuzz' if number = 15", function() {
    expect(fizz_buzz(30)).toEqual('fizzbuzz');
  });
});
