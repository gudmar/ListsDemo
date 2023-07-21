import { isArray, isObject } from "./typeCheckers";

export const NOT_VALID_INPUT = 'Input value should be a tree';

export type TreeType = {[key: string]: any};

export type ConditionFunctionType = (val: any) => boolean;

export type ActionFunctionType = (val: any) => any;

export interface iConditionFunction {
    tree: TreeType,
    conditionFunction: ConditionFunctionType,
    actionFunction: ActionFunctionType,
}

const throwIfNotObject = (val: any) => {
    if (!isObject(val) && !isArray(val)) {
        throw new Error(NOT_VALID_INPUT);
    }
}

const processChildObjects = ({
    tree, conditionFunction, actionFunction
}: iConditionFunction) => {
    const childKeys = Object.keys(tree);
    childKeys.forEach((key:string) => {
        processGaneral({
            tree: tree[key], conditionFunction, actionFunction
        })
    })
}

const processObject = ({
    tree, conditionFunction, actionFunction
}: iConditionFunction) => {
    processChildObjects({tree, conditionFunction, actionFunction})
    if (conditionFunction(tree)) {
        actionFunction(tree);
    }
    return tree;
}

const processGaneral = ({
    tree, conditionFunction, actionFunction
}: iConditionFunction) => {
    if (isArray(tree)) {
        tree.forEach((item: any)=>{processObject({tree: item, conditionFunction, actionFunction})});
    } else if (isObject(tree)) {
        processObject({tree, conditionFunction, actionFunction});
    }
    return tree;
}

export const processTree = ({tree, conditionFunction, actionFunction}: iConditionFunction) => {
    throwIfNotObject(tree);
    processGaneral({tree, conditionFunction, actionFunction});
    return tree
}