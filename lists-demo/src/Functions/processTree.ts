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
        tree.forEach((item: any)=>{ processObject({tree: item, conditionFunction, actionFunction })});
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

interface iDeleteBranch {
    tree: {[key: string]: any},
    conditionFunction: ConditionFunctionType,
}


const tryDeletingObject = (parent: any, key: string, conditionFunction: ConditionFunctionType) => {
    const shouldDelete = conditionFunction(parent[key])
    console.log('Should delete ', shouldDelete)
    if (shouldDelete) {
        delete parent[key];
    }
    return parent;
}

const removeFromArrayIfMatch = (parent: any, key: string, conditionFunction: ConditionFunctionType) => {
    if (isArray(parent[key])) {
        const newArr = parent[key].filter((tree: any) => !conditionFunction(tree));
        console.log(newArr);
        parent[key] = newArr;
    }
}

const tryDeletingChildren = (parent: any, key: string, conditionFunction: ConditionFunctionType) => {
    if (!isObject(parent[key])) return;
    const children = Object.keys(parent[key]);
    children.forEach((child) => {
        removeGeneral(parent[key], child, conditionFunction);
        const shouldDelete = conditionFunction(parent[key][child]);
        if (shouldDelete) {
            delete parent.key.child
        }
    })
}

const removeChildrenOfNode = (parent: any, conditionFunction: ConditionFunctionType) => {
    if (!isObject(parent)) return;
    const childKeys = Object.keys(parent);
    childKeys.forEach((key: string) => {
        removeGeneral(parent, key, conditionFunction);
    });
}

const removeChildrenOfAllArrayElements = (parent: any, key: string, conditionFunction: ConditionFunctionType) => {
    parent[key].forEach((item: any) => {
        removeChildrenOfNode(item, conditionFunction);
    })
}

const removeGeneral = (parent: any, key: string, conditionFunction: ConditionFunctionType) => {
    if (isArray(parent[key])) {
        removeChildrenOfAllArrayElements(parent, key, conditionFunction);
        removeFromArrayIfMatch(parent, key, conditionFunction)
    } if (isObject(parent[key])) {
        tryDeletingChildren(parent, key, conditionFunction)
        tryDeletingObject(parent, key, conditionFunction)
    }
}

export const deleteBranch = ({tree, conditionFunction}: iDeleteBranch) => {
    throwIfNotObject(tree);
    const parent = {root: tree};
    removeGeneral(parent, 'root', conditionFunction);
    return parent.root;
}