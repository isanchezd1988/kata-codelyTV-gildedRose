import { expect } from 'chai';
import { StandardItem } from '../app/entities/item/standard-item';

describe('StandarItem Suite', () => {

    it('After execute the item update the values of quality and sellIn should be minor that initial value', 
    () => {
        const initialQuality = 10;
        const initialSellIn = 15;
        const item = new StandardItem("+5 Dexterity Vest", initialSellIn, initialQuality);
        item.update();

        expect(item.quality).to.equal(initialQuality -1);
        expect(item.sellIn).to.equal(initialSellIn -1);
    });

    it('After execute the item update the value of quality cannot be minor than 0', 
    () => {
        const initialQuality = 0;
        const initialSellIn = 15;
        const item = new StandardItem("+5 Dexterity Vest", initialSellIn, initialQuality);
        item.update();

        expect(item.quality).to.equal(0);
    });

    it('After execute the item update the value of quality should be 2 times less', 
    () => {
        const initialQuality = 10;
        const initialSellIn = 0;
        const item = new StandardItem("+5 Dexterity Vest", initialSellIn, initialQuality);
        item.update();

        expect(item.quality).to.equal(initialQuality - 2);
    });

    it('After execute the item update the value of quality should be 0', 
    () => {
        const initialQuality = 1;
        const initialSellIn = 0;
        const item = new StandardItem("+5 Dexterity Vest", initialSellIn, initialQuality);
        item.update();

        expect(item.quality).to.equal(0);
    });
});
