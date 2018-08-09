describe("Match toBeGreaterThan", () => {

    it('Should validate the use of toBeGreaterThan', () => {
        var taxBH = 4.85;
        var taxCI = "3.95";

        expect(4.99).toBeGreaterThan(taxBH);
        expect(taxCI).not.toBeGreaterThan(taxBH);
    });
});