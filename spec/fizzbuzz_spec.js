describe("fizz_buzz", function() {
    var fizz_buzz;

    it("returns 'fizz' if number is divisible by 3", function() {
      expect(fizz_buzz(9)).toEqual('fizz');
    });

    it("returns 'buzz' if number is divisible by 5", function() {
      expect(fizz_buzz(20)).toEqual('buzz');
    });

    it("returns 'fizzbuzz' if number is divisible by 15", function() {
      expect(fizz_buzz(30)).toEqual('fizzbuzz');
    });
});
