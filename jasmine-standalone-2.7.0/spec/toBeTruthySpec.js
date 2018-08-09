describe("Match toBeTruthy", function(){
    it("should validate the use of toBeTruthy", function(){
        var text = "tobeTruthy";
        var value = 10;
        var nan = NaN;
        var n = null;
        var t = true;
        var f = false;
        var object;

        expect(text).toBeTruthy();
        expect(value).toBeTruthy();
        expect(t).toBeTruthy();

        expect(nan).not.toBeTruthy();
        expect(n).not.toBeTruthy();
        expect(f).not.toBeTruthy();
        expect(object).not.toBeTruthy();
    });
});