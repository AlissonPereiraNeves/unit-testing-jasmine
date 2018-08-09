describe("Validate the use of beforeEach", () => {
    
    var counter = 0;

    beforeEach( ()=> {
        counter++;
    });
    
    it('The counter value should be 1', () => {
        expect(counter).toEqual(1);
    });

    it('The counter value should be 2', () => {
        expect(counter).toEqual(2);
    });
});