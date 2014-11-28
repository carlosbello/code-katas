/* global: assert  */
define(['qunit', 'app/math'], function (q, math) {

    function testEsEntero() {
        test('testEsEntero()', function (assert) {
            var entero = 4;
            var cadena = "4";
            var decimal = 4.2;
            var nulo = null;
            var cadenaVacia = "";
            var objeto = {a: 1};
            var arreglo = [1, 3];
            assert.ok(math.esEntero(entero), 'El número es entero');
            assert.equal(math.esEntero(cadena), false, 'La cadena no es un entero');
            assert.equal(math.esEntero(decimal), false, 'El decimal no es entero');
            assert.equal(math.esEntero(nulo), false, 'Nulo no es entero');
            assert.equal(math.esEntero(cadenaVacia), false, 'La cadena vacía no es entero');
            assert.equal(math.esEntero(objeto), false, 'Un objeto no es entero');
            assert.equal(math.esEntero(arreglo), false, 'Un arreglo no es entero');
            assert.equal(math.esEntero(undefined), false, 'Undefined no es un eneto');
        });
    }

    function testEsMayorZero() {
        test('testEsMayorZero()', function (assert) {
            var entero = 4;
            var negativo = -2;
            var zero = 0;
                        
            assert.ok(math.esMayorZero(entero), 'El número es mayor que zero');
            assert.equal(math.esMayorZero(negativo), false, "Un negativo no es entero");
            assert.equal(math.esMayorZero(zero), false, "Un zero no es entero");
            
            
        });
    }

    function run () {
        testEsEntero();
        testEsMayorZero();
    }
    
    return { 
        run : run
    };
});