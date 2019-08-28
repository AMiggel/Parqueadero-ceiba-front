import { browser, by, element, $, ElementFinder, ExpectedConditions, ProtractorExpectedConditions, promise } from 'protractor';

export class RegistrarVehiculo {
    until: ProtractorExpectedConditions;

    constructor() {
        this.until = ExpectedConditions;
    }
    navigateTo(urlNuevoRegistro = 'parqueadero'): Promise<any> {
        return browser.get(`${browser.baseUrl}${urlNuevoRegistro}`) as Promise<any>;
    }

    getTipoDeVehiculoInput(): ElementFinder {
        return $('#tipoVehiculo');
    }

    getPlacaInput(): ElementFinder {
        return $('#placaVehiculo');
    }

    getCilindrajeInput(): ElementFinder {
        return $('#cilindrajeVehiculo');
    }

    getGuardarButton(): ElementFinder {
        return $('#crearVehiculo');
    }

    getMensajeSwal(): ElementFinder {
        return element(by.className('swal2-title'));
    }

    async setTipoVehiculoToTipo(tipoVehiculo: string): Promise<void> {
      return await this.getTipoDeVehiculoInput().sendKeys(tipoVehiculo);
    }

    async setPlacaToPlate(placa: string): Promise<void> {
        return await this.getPlacaInput().sendKeys(placa);
    }

    async setCilindrajeToCilindraje(cilindraje: number): Promise<void> {
        return await this.getCilindrajeInput().sendKeys(cilindraje);
    }


     async clickBtnRegisterButton(): Promise<void> {
        await this.getGuardarButton().click();
    }

    async getTextFromSwal(): Promise<string> {
        return await this.getMensajeSwal().getText();
    }

    async esperarQueSwalAparezca(): Promise<void> {
        return await this.esperarElementoAparezca(this.getMensajeSwal());
    }

    async esperarElementoAparezca(element: ElementFinder): Promise<void> {
        const id = await element.getId();
        return await browser.wait(
            this.until.presenceOf(element),
            5000,
            `El elemento ${id} esta tardando mucho en aparecer en el DOM`
        );
    }
}
