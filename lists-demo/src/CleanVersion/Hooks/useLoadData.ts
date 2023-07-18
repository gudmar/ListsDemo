import { useEffect, useState } from "react"
import { AnyObject } from '../../Types/dataTypes'

const getDataFromLocalStorage: <T = AnyObject>(key: string) => (null | T[]) = (key: string) => {
    const dataFromStorage:string | null = localStorage.getItem(key);
    if (dataFromStorage === null) {
        return null;
    } else {
        const parsedData = JSON.parse(dataFromStorage);
        return parsedData
    }
}

export const useLoadData = <T = AnyObject>(initialData: T[], localStorageKey: string) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<T[]>([]);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            const dataFromStorage = getDataFromLocalStorage<T>(localStorageKey);
            if (!dataFromStorage) {
                setData(initialData)
            } else {
                setData(dataFromStorage);
            }
        }, 1000);
    }, [])
    return {data ,isLoading}
}

