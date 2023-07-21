export const isNumber = (val: any) => {
    return typeof val === typeof 0
}

export const isNull = (val: any) => {
    return val === null
}

export const isUndefined = (val: any) => {
    return val === undefined;
}

export const isBoolean = (val: any) => {
    return typeof val === typeof true;
}

export const isArray = (val: any) => {
    return Array.isArray(val)
}

export const isFunction = (val: any) => {
    return typeof val === typeof (() => {});
}

export const isString = (val: any) => {
    return typeof val === typeof 'str';
}

const primitiveCheckers = [
    isNull, isUndefined, isNumber, isBoolean, isString,
]

const nonObjectCheckers = [...primitiveCheckers, isArray, isFunction]

export const isPrimitive = (val: any) => {
    const isPrim = primitiveCheckers.some((func) => func(val));
    return isPrim;
}

export const isObject = (val:any) => {
    const isNotObj = nonObjectCheckers.some((func) => func(val));
    return !isNotObj;
}

