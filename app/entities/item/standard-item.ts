import { Upgradeable } from "../../interfaces/upgradeable.interface";
import { Item } from "./item.class";

export class StandardItem extends Item implements Upgradeable{

    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality);
    }

    public update() {
        this.sellIn -= 1;
        this.quality -= this.quality > 0 ? this.sellIn < 0 ? 2 : 1 : 0;
    }
    
}