describe("Match toBeLessThan", () => {
    it('Should validate the use of toBeLessThan', () => {
        var PI = 3.1415;

        expect(3).toBeLessThan(PI);
        expect(3.15).not.toBeLessThan(PI);
    });
});