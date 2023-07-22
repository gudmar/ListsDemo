import { deleteBranch, NOT_VALID_INPUT, processTree } from "../processTree";
const MARK = 'mark me'
const LOCK = 'lock'
const conditionFunction = (obj) => obj?.process === MARK
const actionFunction = (obj) => {
    obj.lock = 'lock'
}

describe('Testing a function that does an operation on every tree node, if a condition is fullfilled, and returns this object', () => {
    it('Should throw if not a tree passed', () => {
        const inputs = [null, undefined, 4, 'str', false, (()=>{})]
        const throwingFunctionGenerator = (input) => () => {
            const result = processTree({input, conditionFunction, actionFunction});
            return result
        }
        inputs.forEach((val) => {
            const throwigFunction = throwingFunctionGenerator(val);
            expect(throwigFunction).toThrow(NOT_VALID_INPUT)
        })
    })
    it('Should return an empty object in case empty object was passed', () => {
        const input = {};
        const result = processTree({tree: input, conditionFunction, actionFunction});
        expect(result).toEqual({})
    })
    it('Should return a non changed object when conditoin function not met', () => {
        const getInput = () => ({
            a: 'abba',
            process: 'don not mark me',
            arr: [],
        })
        const tree = getInput();
        const result = processTree({tree, conditionFunction, actionFunction});
        const expected = getInput();
        expect(result).toEqual(expected);
    })
    it('Should return a modified object if condition function matched (simple, not nested)', () => {
        const getInput = () => ({
            a: 'abba',
            process: MARK,
            arr: [],
        })
        const tree = getInput();
        const result = processTree({tree, conditionFunction, actionFunction});
        const expected = {...getInput(), lock: LOCK};
        expect(result).toEqual(expected);
    })
    it('Should return a not modified array in case all array items do not match', () => {
        const getInputArray = () => ([
            {a: 1}, {process: 'dont'}, {b: true}
        ])
        const tree = getInputArray();
        const result = processTree({tree, conditionFunction, actionFunction});
        const expected = getInputArray();
        expect(result).toEqual(expected);
    })
    it('Should return an array with modified objects that match', () => {
        const getInputArray = () => ([
            {a: 1}, {process: MARK}, {b: true}, {c: false, process: MARK}
        ])
        const tree = getInputArray();
        const result = processTree({tree, conditionFunction, actionFunction});
        const expected = getInputArray();
        expected[1].lock = LOCK;
        expected[3].lock = LOCK;
        expect(result).toEqual(expected);
    })
    it('Should return an array with modified objects that match (array has primitives case)', () => {
        const getInputArray = () => ([
            4, {process: MARK}, {b: true}, {c: false, process: MARK}, 'gagdsa', false
        ])
        const tree = getInputArray();
        const result = processTree({tree, conditionFunction, actionFunction});
        const expected = getInputArray();
        expected[1].lock = LOCK;
        expected[3].lock = LOCK;
        expect(result).toEqual(expected);
    })
    it('Should return modified nested branch of object', () => {
        const getInput = () => ({
            a: 'abba',
            process: 'dont mark',
            arr: [],
            nested: {
                b: 'adsfa',
                process: MARK
            }
        })
        const tree = getInput();
        const result = processTree({tree, conditionFunction, actionFunction});
        const expected = {...getInput()};
        expected.nested.lock = LOCK;
        expect(result).toEqual(expected);
    })
    it('Should return modified object that is nested in array', () => {
        const getInput = () => ({
            arr: [
                {a: 'e'}, {b: 'c'}, {nest: { process: MARK}},
            ],
            d: {
                nest: {
                    z: true
                }
            },
            nest: {
                nest: {
                    process: MARK
                }
            }
        })
        const tree = getInput();
        const result = processTree({tree, conditionFunction, actionFunction});
        const expected = getInput();
        expected.arr[2].nest.lock = LOCK;
        expected.nest.nest.lock =LOCK;
        expect(result).toEqual(expected);
    })
})

describe('Testing usage of processTree to branch deletion', () => {
    it('Should delete a not nested object if condition function matches', () => {
        const getInput = () => ({
            a: 'abba',
            process: MARK,
            arr: [],
        })
        const tree = getInput();
        const result = deleteBranch({tree, conditionFunction});
        expect(result).toBeUndefined();
    })
    it('Should NOT delete a not nested object if condition function does not match', () => {
        const getInput = () => ({
            a: 'abba',
            process: 'not process',
            arr: [],
        })
        const tree = getInput();
        const result = deleteBranch({tree, conditionFunction});
        expect(result).toEqual(getInput());
    })
    it('Should remove an object from array if it matches requirements', () => {
        const tree = [
            {a: false}, {process: 'not'}, {process: MARK}, {a: 2}
        ];
        const expected = [
            {a: false}, {process: 'not'}, {a: 2}
        ]
        const result = deleteBranch({tree, conditionFunction});
        expect(result).toEqual(expected);
    })

    it('Should remove a nested object if matches', () => {
        const getInput = () => ({
            a: 'abba',
            process: 'not process',
            arr: [],
            nested: {
                a: true,
                b: false,
                nested: {
                    process: MARK,
                    nested: {
                        comment: 'remove with parent'
                    }
                }
            }
        })
        const tree = getInput();
        const result = deleteBranch({tree, conditionFunction});
        const expected = getInput()
        delete expected.nested.nested
        expect(result).toEqual(expected);
    })
    it('Should remove a nested marked object, that is in array', () => {
        const getTree = () => ({
            a: 'abba',
            process: 'notProcess',
            arr: [],
            nested: {
                b: 'afd',
                nested: {
                    process: 'not'
                },
                arr: [
                    {
                        process: false,
                    },
                    {
                        nested:{
                            nested: {
                                process: MARK,
                                arr: [
                                    {process: MARK}
                                ]
                            }    
                        }
                    }
                ]
            }
        });
        const expected = getTree();
        delete expected.nested.arr[1].nested.nested;
        const tree = getTree();
        const result = deleteBranch({tree, conditionFunction})
        expect(result).toEqual(expected);
    })
})