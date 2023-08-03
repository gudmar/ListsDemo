import { tPayload } from "../../../../Types/dataTypes";

export const SET_GALERY_STATE = 'set state';
export const TOGGLE_GALERY_CHART='toggle chart';

export const toggleChartAction = (payload: tPayload) => ({
    type: TOGGLE_GALERY_CHART, payload
})

export const setStateAction = (payload: tPayload) => ({type: SET_GALERY_STATE, payload})
