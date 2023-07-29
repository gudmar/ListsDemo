import { useCallback, useEffect, useState } from "react"
import { iSearchFunction, iUseSearch } from "./types";

const searchGenerator = (list: any[], filterItem: any) => (pattern: string) => {
    if (pattern === '') return list;
    const result = list.filter((item: any) => filterItem(item, pattern))
    return result;
}
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
    searchboxReference,
    list,
    isFoundFunction,
}: iUseSearch) => {
    const [filteredList, setFilteredList] = useState(list || []);
    const [pattern, setPattern] = useState('');
    useEffect(() => console.log(filteredList), [filteredList])
    useEffect(() => console.log(list), [list])
    useEffect(() => {
        const newFilteredList = search({list, pattern, isFoundFunction})
        setFilteredList(newFilteredList);
    }, [list, pattern, isFoundFunction])
    // const search = useCallback(() => {
    //     const resultFunction = searchGenerator(list, filterItem);
    //     return resultFunction;
    // }, [list, filterItem])
    // useEffect(() => {
    //     searchboxReference.current.subscribe(search)
    // }, [searchboxReference.current, setFilteredList, searchboxReference])
   return {
    filteredList,
    onPatternChange: (pattern: string) => {setPattern(pattern)}
    };
};
