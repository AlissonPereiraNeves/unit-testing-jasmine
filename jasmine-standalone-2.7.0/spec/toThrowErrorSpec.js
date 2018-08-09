describe("Match toThrowError", () => {
    it('Should validate the use of toThrowError', () => {
        
        var calculatehalf = (number) => {
            if(number <= 0) {
                throw new TypeError("The number must be greater than 0.");
            }
            return number/number;
        }

        expect(() => {calculatehalf(0)}).toThrowError();
        expect(function(){calculatehalf(0)}).toThrowError(TypeError);
        expect(() => {calculatehalf(0)}).toThrowError(TypeError, "The number must be greater than 0.");
        expect(function(){calculatehalf(0)}).toThrowError(/must be greater/);
        expect(function(){calculatehalf(0)}).toThrowError("The number must be greater than 0.");
        expect(function(){calculatehalf(15)}).not.toThrowError();
        expect(calculatehalf).not.toThrowError();
    });
});