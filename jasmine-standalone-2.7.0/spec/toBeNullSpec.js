describe("Match toBeNull", function(){
    it("should validate the use of toBeNull", function(){
        var n1 = null;
        var n2 = undefined;
        var n3;
        var n4 = 1;
        var n5 = NaN;
        var n6 = "toBeNull";

        expect(n1).toBeNull();

        expect(n2).not.toBeNull();
        expect(n3).not.toBeNull();
        expect(n4).not.toBeNull();
        expect(n5).not.toBeNull();
        expect(n6).not.toBeNull();
    });
});