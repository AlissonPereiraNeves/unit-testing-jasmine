describe("Matcher toBe", function() {
  it("Should validate the use of toBe", function(){
    var obj1 = {valor: true};
    var obj2 = {valor: true};

    expect(true).toBe(true);
    expect("Test").toBe("Test");
    expect(obj1).not.toBe(obj2);
  });
});
