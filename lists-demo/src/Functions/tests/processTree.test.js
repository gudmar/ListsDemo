import { NOT_VALID_INPUT, processTree } from "../processTree";
const MARK = 'mark me'
const LOCK = 'lock'
const conditionFunction = (obj) => obj.process === MARK
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
    it('Shoudl return modified object that is nested in array', () => {
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