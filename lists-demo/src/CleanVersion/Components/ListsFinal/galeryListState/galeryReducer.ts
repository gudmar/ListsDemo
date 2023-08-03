import { PicturesData, tPayload } from "../../../../Types/dataTypes";
import { SET_GALERY_STATE, TOGGLE_GALERY_CHART } from "./galeryActions";

export const getInitialGaleryState = ():PicturesData[] => [({
    message: '',
    title: '',
    price: 0,
    stockLevel: 0,
    imageName: '',
    isInChart: false,
    toggleChart: () => {}  // REMOVE THIS, WHAT IS THIS?
})]

export const galeryReducer = (state: PicturesData[], { type, payload }: { type: string, payload: tPayload} ): PicturesData[] => {
    const {data, index }: {data?: any, index: number} = payload;
    switch(type) {
        case SET_GALERY_STATE: {
            state[index] = data
            return [...state];
        }
        case TOGGLE_GALERY_CHART: {
            const stateCp = [...state]
            const objectToModify: PicturesData = state[index] as PicturesData
            stateCp[index] = {...stateCp[index], isInChart: !objectToModify.isInChart}
            return stateCp;
        }
        default: throw new Error('Unpossible')
    }
}