import { FC } from "react"

type tDoWithItem = (index: number, item: any) => void;

interface iListItem {
    items: any[],
    addItem: tDoWithItem,
    editItem: tDoWithItem,
    deleteItem: (index: number) => void,
    setItems: (items: any[]) => void
}

const withSearchableList = (ListItem: FC<any>) => ({
    items,
    addItem,
    deleteItem,
    setItems,
    editItem,
}: iListItem) => {
    const List = () => {
        new Error('Implement this')
    }
    return List
}

export default withSearchableList
