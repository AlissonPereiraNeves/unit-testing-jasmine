describe("Validate the function fail", () => {
    it('Should validate the use of fail', () => {
        var operation = (run, callback) => {
            if(run){
                callback();
            }
        };

        operation(false, function(){
            fail("Not should run the callback function");
        });

    });
});