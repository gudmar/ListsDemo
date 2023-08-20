import { useRef } from "react"
import SearchBox from "../../Components/ListsFinal/SearchBox/SearchBox";
import { tIsFoundFunction } from "../../Types/types"
import { useSearch } from "./useSearch"


export const useSearchbox = (list: any[], isFoundFunction: tIsFoundFunction) => {
    const searchRef = useRef();
    const { filteredList, onPatternChange } = useSearch({searchboxReference: searchRef, list, isFoundFunction })
    const searchField = <SearchBox
            placeholder={'Search'}
            ref={searchRef}
            onPatternChange={onPatternChange}
        />
    return {filteredList, SearchBox: searchField}
}
