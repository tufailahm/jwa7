import { Calculator } from "./calculator"
describe("testing calculator", () => {
    var calculator: any

    beforeAll(() => {
        console.log("Before all called")

    });

    beforeEach(() => {
        calculator = new Calculator();

        console.log("Before each test")
    })


    it('should add the two numbers and return the sum', () => {
        console.log("testing 1")
        expect(calculator.add(10, 20)).toEqual(30);
    });

    it('should add the two numbers and return the sum', () => {
        console.log("testing 2")
        expect(calculator.add(2, 33)).toEqual(35);
    });

    afterEach(() => {
        calculator = null
        console.log("after each test")
    })

})