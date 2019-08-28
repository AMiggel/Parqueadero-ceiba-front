import { browser } from 'protractor';
import { RegistrarVehiculo } from './registrarVehiculo.po';

describe('Parqueadero Crear Registro Vehiculo', () => {
    let crear: RegistrarVehiculo ;
    const PLACACARRO = 'PLM21E';
    const TIPOCARRO  = 'CARRO';
    const CILINDRAJE = 510;
    const SE_AGREGO_CON_EXITO = 'Nuevo vehiculo registrado';
    beforeEach(async () => {
        crear = new RegistrarVehiculo();
        await crear.navigateTo();
    });

    it('deberia crear Registro Vehiculo Carro', async () => {
        await crear.setTipoVehiculoToTipo(TIPOCARRO);
        await crear.setPlacaToPlate(PLACACARRO);
        await crear.setCilindrajeToCilindraje(CILINDRAJE);
        await crear.clickBtnRegisterButton();
        await crear.esperarQueSwalAparezca();

        const toast = await crear.getTextFromSwal();

        expect(toast).toEqual(SE_AGREGO_CON_EXITO);
    });
});
