describe("Validate the use of beforeAll", ()=> {
    
    var counter = 0;

    beforeAll(() => {
        counter = 10;
    });
    
    beforeEach(() => {
        counter++;
    });
    
    it('The counter value should be 11', () => {
        expect(counter).toBe(11);
    });

    it('The counter value should be 12 on the next test', () => {
        expect(counter).toBe(12);
    });
});