import { useEffect, useState } from "react"
import { iSearchFunction, iUseSearch } from "../../Types/types";

const search = ({
    list, pattern, isFoundFunction
}: iSearchFunction) => {
    if (pattern === '') return list;
    const newFilteredList = list.filter((
        item: any
    ) => isFoundFunction(item, pattern))
    return newFilteredList;
}

export const useSearch = ({
    list,
    isFoundFunction,
}: iUseSearch) => {
    const [filteredList, setFilteredList] = useState(list || []);
    const [pattern, setPattern] = useState('');
    useEffect(() => {
        const newFilteredList = search({list, pattern, isFoundFunction})
        setFilteredList(newFilteredList);
    }, [list, pattern, isFoundFunction])
   return {
    filteredList,
    onPatternChange: (pattern: string) => {setPattern(pattern)}
    };
};
