import { PicturesData, tPayload } from "../../../../Types/dataTypes";
import { SET_GALLERY_STATE, TOGGLE_GALLERY_CHART } from "./galleryActions";

export const getInitialGalleryState = ():PicturesData[] => [({
    message: '',
    title: '',
    price: 0,
    stockLevel: 0,
    imageName: '',
    isInChart: false,
    toggleChart: () => {}
})]

export const galleryReducer = (state: PicturesData[], { type, payload }: { type: string, payload: tPayload | PicturesData[]} ): PicturesData[] => {
    const { index }: { index: number} = payload as tPayload;
    // IS this not a violation of Liskov subtype principle? data is omited
    switch(type) {
        case SET_GALLERY_STATE: {
            state = payload as PicturesData[]
            return [...state];
        }
        case TOGGLE_GALLERY_CHART: {
            const stateCp = [...state]
            const objectToModify: PicturesData = state[index] as PicturesData
            stateCp[index] = {...stateCp[index], isInChart: !objectToModify.isInChart}
            return stateCp;
        }
        default: throw new Error('Unpossible')
    }
}