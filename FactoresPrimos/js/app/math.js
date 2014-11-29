define(['jquery'], function($) {
    var public = {};
    
    public.esEntero = function (valor) {
        return !isNaN(valor) && typeof valor === 'number' &&
                Math.round(valor) === valor;
    };
    
    public.esMayorZero = function (valor) {
        return valor > 0;
    };
    
    public.generarFactoresPrimos = function (numero) {
        return [numero];
    };
    
    return public;
});