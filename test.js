const assert = require("assert");

it("should perfrom string concatenation", function() {
    assert.strictEqual("a" + "b", "ab");
});

it("should perform arithmetic addition", () => {
    assert.strictEqual(2 + 2, 4);
});