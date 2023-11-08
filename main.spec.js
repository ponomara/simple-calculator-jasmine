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

    describe('updateResult()', () => {

        beforeAll( () => {
            const element = document.createElement('div');
            element.setAttribute('id', 'result');
            document.body.appendChild(element);
            this.element = element;
        });

        afterAll(function () {
            document.body.removeChild(this.element);
        });

        it('add result to the DOM element', function () {
            updateResult("5");
            expect(this.element.innerText).toBe("5");
        });
    });

});