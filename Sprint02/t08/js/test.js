describe("checkBrackets",function(){
    it("1)()(())2(()", function() {
      assert.equal(checkBrackets('1)()(())2(()'), 2);
    });
    it("15", function() {
      assert.equal(checkBrackets(15), -1);
    });
    it("hello_maan", function() {
      assert.equal(checkBrackets('hello_maan'), -1);
    });
    it("true", function() {
      assert.equal(checkBrackets('true'), -1);
    });
    it("null", function() {
      assert.equal(checkBrackets(null), -1);
    });
    it("dlas;jkdklas)))))(((((jdklasdlk()asakldajklss()", function() {
      assert.equal(checkBrackets('())'), 1);
    });
    it("()()((()))", function() {
      assert.equal(checkBrackets('dlas;jkdklas)))))(((((jdklasdlk()asakldajklss()'), 10);
    });
    it("1)()(())2(()", function() {
      assert.equal(checkBrackets('1)()(())2(()'), 2);
    });
    it("()", function() {
      assert.equal(checkBrackets('()'),0);
    });
    it("()()())))dasdada((())", function() {
      assert.equal(checkBrackets('()()())))dasdada((())'), 4);
    });
    it("1s)s(ds)sd(d(s))df2((s)", function() {
      assert.equal(checkBrackets('1s)s(ds)sd(d(s))df2((s)'), 2);
    });
    it("((((((()))))))(()())", function() {
      assert.equal(checkBrackets('1)()(())2(()((((dsadsa((((dasdsa))dasdas)))'), 5);
    });
    it("(1)))))()(()()()()()()()()(dasfsdg))2(()", function() {
      assert.equal(checkBrackets('1)))))()(()()()()()()()()(dasfsdg))2(()'), 6);
    });
    it("()()()()1)()(())2(()", function() {
      assert.equal(checkBrackets('()()()()1)()(())2(()'),2);
    });
    it("(1)()(())2(()((((((((", function() {
      assert.equal(checkBrackets('(1)()(())2(()(((((((('),9);
    });
});