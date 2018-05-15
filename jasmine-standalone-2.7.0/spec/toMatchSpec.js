describe("Matcher toMatch", function(){
    it("Should validate the use of toMatch", function(){
        var text = "Text with Jasmine";

        expect(text).toMatch("Jasmine");
        expect(text).toMatch(/jasmine/i);
        expect("12345-658").toMatch(/\d\d\d\d\d-\d\d\d/);
        expect("12345-658").toMatch(/\d{5}-\d{3}$/);
    });
});