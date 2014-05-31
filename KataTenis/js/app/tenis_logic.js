define(['jquery'], function($) {
    var public = this;
    
    public.iniciarTanteo = function () {
        return {
            jugador1: 0,
            jugador2: 0
        };
    };
    
    return public;
});