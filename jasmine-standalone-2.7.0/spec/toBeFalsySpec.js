describe("Match toBeFalsy", function(){
    it("should validate the use of toBeFalsy", function(){
        var text = "true";

        expect(null).toBeFalsy();
        expect("").toBeFalsy();
        expect(NaN).toBeFalsy();
        expect(undefined).toBeFalsy();
        expect(0).toBeFalsy();
        expect(false).toBeFalsy();

        expect(text).not.toBeFalsy();
    });
});