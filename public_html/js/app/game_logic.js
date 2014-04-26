define([], function() {
    var that = this;
    that.tries = 0;
    that.code = '';
    that.MAX_TRIES = 15;
    
    
    that.validateUserCode = function (generatedCode, userCode) {
        var resultado = "";
        for(var i in generatedCode) {
            resultado += generatedCode[i] === userCode[i] 
                ? 'X'
                : userCode.indexOf(generatedCode[i]) >= 0
                    ? '*'
                    : '';
        }
        return resultado;
    };    
    
    that.tryUserCode = function (generatedCode, userCode) {
        if (tries >= MAX_TRIES)
            return 'TE HA PILLADO EL DOCTOR MALIGNO';

        tries++;            
        return that.validateUserCode(generatedCode, userCode);            
    };

    
    that.generateSecurityCode = function () {
        var carValidos = 'RMAVNI';
        var codigo = "";

        for (var i = 1; i <= 4; i++)
            codigo += carValidos[Math.floor(Math.random() * carValidos.length)];
        return codigo;
    };
    
    that.getTries = function () {
        return that.tries;
    };
    
    that.btnAbrir_click = function () {
        var resultado = that.tryUserCode(that.code, $('#tbxUserCode').val());
        if (resultado === 'XXXX')
            alert('Puerta abierta');
        else
            alert(resultado);
    };
    
    that.startGame = function () {
        that.tries = 0;
        that.code = that.generateSecurityCode();
    };
    
    return that;
});