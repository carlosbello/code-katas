define(['jquery'], function($) {
    var public = {};
    
    public.esEntero = function (valor) {
        return !isNaN(valor) && typeof valor === 'number' &&
                Math.round(valor) === valor;
    };
    
    return public;
});