const assert = require("assert");
require("./index");

describe("Testing expandTabs() prototype", function() {
  it("should replace tabs with spaces for tab size default", function() {
    const input = "Name\tAge\tLocation\nAlice\t30\tWonderland";
    const output = "Name    Age     Location\nAlice   30      Wonderland";
    assert.strictEqual(input.expandTabs(), output);
  });

  it("should replace tabs with spaces for tab size 2", function() {
    const input = "Name\tAge\tLocation\nAlice\t30\tWonderland";
    const output = "Name  Age Location\nAlice 30  Wonderland";
    assert.strictEqual(input.expandTabs(2), output);
  });

  it("should replace tabs with spaces for tab size 7", function() {
    const input = "Name\tAge\tLocation\nAlice\t30\tWonderland";
    const output = "Name   Age    Location\nAlice  30     Wonderland";
    assert.strictEqual(input.expandTabs(7), output);
  });

  it("should replace tabs with spaces for tab size 11", function() {
    const input = "Name\tAge\tLocation\nAlice\t30\tWonderland";
    const output = "Name       Age        Location\nAlice      30         Wonderland";
    assert.strictEqual(input.expandTabs(11), output);
  });

  it("should replace tabs with spaces for tab size 12", function() {
    const input = "Name\tAge\tLocation\nAlice\t30\tWonderland";
    const output = "Name        Age         Location\nAlice       30          Wonderland";
    assert.strictEqual(input.expandTabs(12), output);
  });

  it("should handle empty input", function() {
    const input = "";
    const output = "";
    assert.strictEqual(input.expandTabs(), output);
  });

  it("should handle input with no tabs", function() {
    const input = "No tabs here!";
    const output = "No tabs here!";
    assert.strictEqual(input.expandTabs(), output);
  });

  it("should handle tabs at the start of lines", function() {
    const input = "\tStart\n\t\tNested";
    const output = "        Start\n                Nested";
    assert.strictEqual(input.expandTabs(), output);
  });
});
