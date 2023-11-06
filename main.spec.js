describe('main.js', function () {

    describe('main()', function () {
        it('validate expression');
        it('Calls  add');
        it('Calls  subtracts');
        it('Calls  multiple');
        it('Calls  divide');
        it('Validate operation');
        it('Calls  updateResult');
    });

    describe('updateResult()', function () {

        afterAll(function () {
            const element = document.getElementById('result');
            document.body.removeChild(element);
        });

        it('add result to the DOM element', function () {
            const element = document.createElement('div');
            element.setAttribute('id', 'result');
            document.body.appendChild(element);
            updateResult("5");
            expect(element.innerText).toBe("5");
        });
    });

});