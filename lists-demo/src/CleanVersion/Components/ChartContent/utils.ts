import { iPicturesData, OneOfListsData } from "../../../Types/dataTypes";

export const isPictureType = (items: OneOfListsData[]) => {
    const iPictureKeys = ['title', 'price', 'stockLevel']
    const isEveryTypePicture = items.every((item: any) => {
        if (iPictureKeys.some((key: string) => (item[key] === undefined))) {
            return false
        }
        return true;
    })
    return isEveryTypePicture;
}

export const getBoughtItems = (items: OneOfListsData[]) => {
    const boughtItems = items.filter((item) => (item as iPicturesData).isInChart)
    return boughtItems;
}

export const shouldDisplayBoughtReport = (items: OneOfListsData[]) => !!getBoughtItems(items).length;