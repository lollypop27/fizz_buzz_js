describe("fizz_buzz", function() {
    var fizz_buzz;

    it("returns number if no conditions are met", function() {
      expect(fizz_buzz(1)).toEqual(1);
    });

    it("returns 'fizz' if number is divisible by 3", function() {
      expect(fizz_buzz(9)).toEqual('fizz');
    });

    it("returns 'buzz' if number is divisible by 5", function() {
      expect(fizz_buzz(20)).toEqual('buzz');
    });

    it("returns 'fizzbuzz' if number is divisible by 15", function() {
      expect(fizz_buzz(30)).toEqual('fizzbuzz');
    });

    it("shows 'try again' number must be greater than 0", function() {
      expect(fizz_buzz(0)).toThrow(new Error('Try again your number must be greater than 0'));
    });
});
