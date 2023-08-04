import { useEffect, useReducer } from "react"
import { LOCAL_STORAGE_GALERY } from "../../Const/const";
import { PicturesData } from "../../Types/dataTypes";
import { setGalleryStateAction, toggleChartAction } from "../Components/ListsFinal/galleryListState/galleryActions";
import { galleryReducer, getInitialGalleryState } from "../Components/ListsFinal/galleryListState/galleryReducer"
import { useLoadData } from "./useLoadData";

export const useGalleryState = () => {
    const [state, dispatch] = useReducer(galleryReducer, getInitialGalleryState());
    const {data} = useLoadData(getInitialGalleryState(), LOCAL_STORAGE_GALERY)
    useEffect(() => {
        setGalleryState(data)
    }, [data])

    const setGalleryState = (newState: PicturesData[]):void => dispatch(setGalleryStateAction(newState))
    const toggleGalleryIsInChart = (index: number) => dispatch(toggleChartAction({index}))
    return {
        galleryItems: state,
        setGalleryState,
        toggleGalleryIsInChart
    }
}