import { DinerMenu } from "./domain/DinerMenu";
import { PancakeHouseMenu } from "./domain/PancakeHouseMenu"
import { Waitress } from "./domain/Waitress";

describe('chap9', () => {

    const consoleSpy = jest.spyOn(console, 'log');

    it('chap9', () => {
        // Given
        const pancakeHouseMenu = new PancakeHouseMenu();

        const dinerMenu = new DinerMenu();

        const waitress = new Waitress(pancakeHouseMenu, dinerMenu)


        // When
        waitress.printMenu();


        // Then
        expect(consoleSpy).toHaveBeenCalledWith("Waffles")
        expect(consoleSpy).toHaveBeenCalledWith("Hotdog")



    })
})