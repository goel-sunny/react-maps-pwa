export enum ItemType {
    FRUITS = "Fruits",
    VEGETABLE = "Vegatable",
    BEVERAGES = "Beverages",
    BREAD_BAKERY = "Bread Bakery",
    PERSONAL_CARE = "Personal Care",
    DIARY = "Diary"
}

export interface IItem {
    itemType: ItemType;
    name: string;
    quantity: number;
}
