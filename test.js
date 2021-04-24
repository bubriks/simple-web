const assert = require("assert");

it("should perform string concatenation", function() {
    assert.strictEqual("haha, " + "made you look", "haha, made you look");
});

it("should perform arithmetic addition", () => {
    assert.strictEqual(1241 + 1241, 2482);
});