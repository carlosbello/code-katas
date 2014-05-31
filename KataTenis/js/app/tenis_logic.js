define(['jquery'], function($) {
    var public = this;
    
    var valor = {
        0: 15,
        15: 30,
        30: 40
    };
    
    public.iniciarTanteo = function () {
        return {
            jugador1: 0,
            jugador2: 0,
            ventaja: null,
            juegos : {
                jugador1: 0,
                jugador2: 0
            }
        };
    };
    
    function ganarJuego (tanteo, jugador){
        tanteo.jugador1 = 0;
        tanteo.jugador2 = 0;
        tanteo.juegos[jugador]++;
    }
    
    public.incrementarPuntuacion = function (tanteo, jugador) {
        
        if (tanteo[jugador] <= 30)
            tanteo[jugador] = valor[tanteo[jugador]];
        else {
            if(tanteo.jugador1 === 40 && tanteo.jugador2 === 40 ){
                if(tanteo.ventaja == null)
                    tanteo.ventaja = jugador;
                else if (tanteo.ventaja != jugador)
                    tanteo.ventaja = null;
                else
                    ganarJuego(tanteo,jugador);
            }
            else
                ganarJuego(tanteo,jugador);
        }
        
        return tanteo;
    };
    
    return public;
});