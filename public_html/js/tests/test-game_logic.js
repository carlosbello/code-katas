define(['qunit', 'app/game_logic'], function (q, logic) {

    function run () {
        
        test('generateSecurityCode()', function () {
           var code =  logic.generateSecurityCode();
           var code2 =  logic.generateSecurityCode();
           
           equal(typeof code, 'string', 'El código es una cadena de caracteres');
           equal(code.length, 4, 'Código de 4 caracteres');
           notEqual(code.match('^[R|M|A|V|N|I]+$'), null, 'La cadena solo contiene RMAVNI');
           notEqual(code, code2, 'Los códigos generados son distintos');
        });
        
        test('validateUserCode()', function (){
            var genCode = logic.generateSecurityCode();
            var emptyUserCode = '';
            var emptyUserCodeValidation = logic.validateUserCode(genCode, emptyUserCode);
            
            equal(typeof emptyUserCodeValidation, 'string',
                'El resultado de la validación es una cadena');
            equal(emptyUserCodeValidation, '',
                'No hay coincidencia en color ni posición');
            equal(logic.validateUserCode('RMAV', 'ANNN'), '*', 
                'Coincidencia en color');
            equal(logic.validateUserCode('RMAV', 'NNAN'), 'X', 
                'Coincidencia en color y posición');
        });
        
        test('tryUserCode()', function () {
            logic.tryUserCode('RMAV', '');
            equal(logic.getTries(), 1, 'La cantidad de intentos se incrementa');
            for (var i = 1; i < 16; i++)
                logic.tryUserCode('RMAV', '');
            equal(logic.getTries(), 15, 'La cantidad de intentos no pasa de 15');
        });
    }
    
    return { 
        run : run
    };
});