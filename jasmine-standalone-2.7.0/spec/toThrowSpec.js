describe("Match toThrow", () =>{
    it('Should validate the use of toThrow', () => {
        
        function multiply() {
            return xpto * 1;
        }

        function plus(n1, n2) {
            return n1 + n2;
        }

        expect(multiply).toThrow();
        expect(plus).not.toThrow();
    });
});