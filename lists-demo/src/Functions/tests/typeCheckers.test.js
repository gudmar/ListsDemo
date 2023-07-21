import { isArray, isBoolean, isFunction, isNull, isNumber, isObject, isString, isUndefined } from "../typeCheckers"

// type TypeCheckFunction = (val:any) => boolean;
// type TestCaseInput = {
//     input: any,
//     expected: {
//         isNumber: boolean,
//         isNull: boolean,
//         isUndefined: boolean,
//         isBoolean: boolean,
//         isArray: boolean,
//         isObject: boolean,
//         isFunction: boolean,
//         isString: boolean,
// };

describe('Testing typeCheckers', () => {
    const TestCases = [
        { 
            input: null, 
            expected: {
                isNumber: false,
                isNull: true,
                isUndefined: false,
                isBoolean: false,
                isArray: false,
                isObject: false,
                isFunction: false,
                isString: false,
            }
        },
        { 
            input: undefined,
            expected: {
                isNumber: false,
                isNull: false,
                isUndefined: true,
                isBoolean: false,
                isArray: false,
                isObject: false,
                isFunction: false,
                isString: false,
            }
        },
        { 
            input: false,
            expected: {
                isNumber: false,
                isNull: false,
                isUndefined: false,
                isBoolean: true,
                isArray: false,
                isObject: false,
                isFunction: false,
                isString: false,
            }
        },
        { 
            input: true,
            expected: {
                isNumber: false,
                isNull: false,
                isUndefined: false,
                isBoolean: true,
                isArray: false,
                isObject: false,
                isFunction: false,
                isString: false,
            }
        },
        { 
            input: 9,
            expected: {
                isNumber: true,
                isNull: false,
                isUndefined: false,
                isBoolean: false,
                isArray: false,
                isObject: false,
                isFunction: false,
                isString: false,
            }
        },
        { 
            input: '2',
            expected: {
                isNumber: false,
                isNull: false,
                isUndefined: false,
                isBoolean: false,
                isArray: false,
                isObject: false,
                isFunction: false,
                isString: true,
            }
        },
        { 
            input: ()=>{},
            expected: {
                isNumber: false,
                isNull: false,
                isUndefined: false,
                isBoolean: false,
                isArray: false,
                isObject: false,
                isFunction: true,
                isString: false,
            }
        },
        { 
            input: [1, 2, 3],
            expected: {
                isNumber: false,
                isNull: false,
                isUndefined: false,
                isBoolean: false,
                isArray: true,
                isObject: false,
                isFunction: false,
                isString: false,
            }
        },
        { 
            input: {a: 5},
            expected: {
                isNumber: false,
                isNull: false,
                isUndefined: false,
                isBoolean: false,
                isArray: false,
                isObject: true,
                isFunction: false,
                isString: false,
            }
        },
        { 
            input: {},
            expected: {
                isNumber: false,
                isNull: false,
                isUndefined: false,
                isBoolean: false,
                isArray: false,
                isObject: true,
                isFunction: false,
                isString: false,
            }
        },

    ]

    describe('Does isNumber work', () => {
        TestCases.forEach(({input, expected}) => {
            const answerKey = 'isNumber'
            const testedFunction = isNumber;
            it(`Should return ${expected[answerKey]} when ${input} given`, () => {
                const result = testedFunction(input);
                expect(result).toEqual(expected[answerKey]);
            })
        })
    })
    describe('Does isNull work', () => {
        TestCases.forEach(({input, expected}) => {
            const answerKey = 'isNull'
            const testedFunction = isNull;
            it(`Should return ${expected[answerKey]} when ${input} given`, () => {
                const result = testedFunction(input);
                expect(result).toEqual(expected[answerKey]);
            })
        })
    })

    describe('Does isUndefined work', () => {
        TestCases.forEach(({input, expected}) => {
            const answerKey = 'isUndefined'
            const testedFunction = isUndefined;
            it(`Should return ${expected[answerKey]} when ${input} given`, () => {
                const result = testedFunction(input);
                expect(result).toEqual(expected[answerKey]);
            })
        })
    })

    describe('Does isBoolean work', () => {
        TestCases.forEach(({input, expected}) => {
            const answerKey = 'isBoolean'
            const testedFunction = isBoolean;
            it(`Should return ${expected[answerKey]} when ${input} given`, () => {
                const result = testedFunction(input);
                expect(result).toEqual(expected[answerKey]);
            })
        })
    })

    describe('Does isArray work', () => {
        TestCases.forEach(({input, expected}) => {
            const answerKey = 'isArray'
            const testedFunction = isArray;
            it(`Should return ${expected[answerKey]} when ${input} given`, () => {
                const result = testedFunction(input);
                expect(result).toEqual(expected[answerKey]);
            })
        })
    })

    describe('Does isFunction work', () => {
        TestCases.forEach(({input, expected}) => {
            const answerKey = 'isFunction'
            const testedFunction = isFunction;
            it(`Should return ${expected[answerKey]} when ${input} given`, () => {
                const result = testedFunction(input);
                expect(result).toEqual(expected[answerKey]);
            })
        })
    })

    describe('Does isString work', () => {
        TestCases.forEach(({input, expected}) => {
            const answerKey = 'isString'
            const testedFunction = isString;
            it(`Should return ${expected[answerKey]} when ${input} given`, () => {
                const result = testedFunction(input);
                expect(result).toEqual(expected[answerKey]);
            })
        })
    })

    describe('Does isObject work', () => {
        TestCases.forEach(({input, expected}) => {
            const answerKey = 'isObject'
            const testedFunction = isObject;
            it(`Should return ${expected[answerKey]} when ${input} given`, () => {
                const result = testedFunction(input);
                expect(result).toEqual(expected[answerKey]);
            })
        })
    })


})