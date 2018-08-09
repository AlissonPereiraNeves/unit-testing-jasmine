describe("Matcher toContain", function(){
    it("Should validate the use of toContain", function(){
        var text = "My name is Alisson";
        var fruits = ["Apple", "Orange", "Avocado"];
        
        expect(text).toContain("Alisson");
        expect(text).not.toContain("alisson");
        
        expect(fruits).toContain("Orange");
        expect(fruits).not.toContain("Uva");
    });
});