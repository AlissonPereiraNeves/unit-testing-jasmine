describe("Matcher toEqual", function(){
    it("Should validate the use of toEqual", function(){
        var obj1 = { valor: true };
        var obj2 = { valor: true };
        
        expect(true).toEqual(true);
        expect(obj1).toEqual(obj2);
    });
});