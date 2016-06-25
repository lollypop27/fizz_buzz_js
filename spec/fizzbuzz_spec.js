describe("FizzBuzz", function() {
    var fizz_buzz;

  beforeEach(function() {
    fizz_buzz = new FizzBuzz();
  });

  it("returns 1 if number = 1" function() {
    expect(fizz_buzz(1)).toEqual('1');
  });
});
