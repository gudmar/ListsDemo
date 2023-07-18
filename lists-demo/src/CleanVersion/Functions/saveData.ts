import { AnyObject } from "../../Types/dataTypes"

const saveToLocalStorage = <T = AnyObject>(key: string, data: T[]):void => {
    const serialized = JSON.stringify(data);
    localStorage.setItem(key, serialized);
}

export const saveData = <T = AnyObject>(key: string, data: T[]) => {
    const response = new Promise((resolve) => {
        setTimeout(() => {
            saveToLocalStorage(key, data);
            resolve({status: 'OK'})
        }, 1000)
    })
    return response;
}
