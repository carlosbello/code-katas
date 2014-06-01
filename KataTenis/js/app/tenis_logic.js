define(function() {
    var public = {
        JUGADOR1: 'jugador1',
        JUGADOR2: 'jugador2',
        CANT_MAX_JUEGOS: 6,
        CANT_MAX_PUNTOS: 40
    };
    
    var valor = {
        0: 15,
        15: 30,
        30: 40
    };
    
    public.iniciarConteo = function () {
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
    
    function ganarJuego(conteo, jugador){
        conteo.jugador1 = 0;
        conteo.jugador2 = 0;
        conteo.ventaja = null;
        conteo.juegos[jugador]++;        
    }
    
    function hayEmpate(conteo) {
        return conteo.jugador1 === public.CANT_MAX_PUNTOS && 
               conteo.jugador2 === public.CANT_MAX_PUNTOS;
    }
    
    public.incrementarPuntuacion = function (conteo, jugador) {        
        if (conteo[jugador] < public.CANT_MAX_PUNTOS)
            conteo[jugador] = valor[conteo[jugador]];
        else if(hayEmpate(conteo)) {
            if (conteo.ventaja === jugador)
                ganarJuego(conteo, jugador);
            else 
                conteo.ventaja = conteo.ventaja === null
                    ? jugador
                    : null;
        } else
            ganarJuego(conteo, jugador);    
        return conteo;
    };
    
    public.ganador = function(conteo) {
        return conteo.juegos.jugador1 === public.CANT_MAX_JUEGOS
            ? public.JUGADOR1
            :  conteo.juegos.jugador2 === public.CANT_MAX_JUEGOS
                ? public.JUGADOR2
                : null;
    };
    
    return public;
});