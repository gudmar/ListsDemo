import { PicturesData, tPayload } from "../../../../Types/dataTypes";

export const SET_GALLERY_STATE = 'set state';
export const TOGGLE_GALLERY_CHART='toggle chart';

export const toggleChartAction = (payload: tPayload) => ({
    type: TOGGLE_GALLERY_CHART, payload
})

export const setGalleryStateAction = (payload: PicturesData[]) => ({type: SET_GALLERY_STATE, payload})
export const toggleGalleryChartItemAction = (payload: tPayload) => ({type: TOGGLE_GALLERY_CHART, payload})
