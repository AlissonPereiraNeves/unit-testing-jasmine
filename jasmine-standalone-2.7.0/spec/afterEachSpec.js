describe("Validate the use of afterEach", () => {
    
    var counter = 0;

    beforeEach(() => {
        counter--;
    });

    afterEach(( )=> {
        counter++;
    });
    
    it('The counter value should be -1', () => {
        expect(counter).toEqual(-1);
    });

    it('The counter value should remain as -1', () => {
        expect(counter).toEqual(-1);
    });
});