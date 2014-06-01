/**
 * Pruebas unitarias de la lógica del juego
 * @param {object} q - Framework de pruebas
 * @param {object} logic - Lógica del juego
 * @returns {function} Función que ejecuta todos los conjuntos de pruebas
 * @author Joaquin Fernández, Carlos Bello, Carlos Ivan Martín
 */
define(['qunit', 'app/tenis_logic'], function (q, logic) {
   
    /**
     * Inicialización del juego
     * @author Joaquin Fernández, Carlos Bello, Carlos Ivan Martín
     */
    function testIniciarConteo() {
        test('iniciarConteo()', function () {
            var conteoEsperado = {
                jugador1: 0,
                jugador2: 0,
                ventaja: null,
                juegos : {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            
            deepEqual(logic.iniciarConteo(), conteoEsperado,
                'El conteo inicial debe ser 0 para ambos jugadores');
        });
    }

    /**
     * Control del conteo
     * @author Joaquin Fernández, Carlos Bello, Carlos Ivan Martín
     */
    function testIncrementarPuntuacion() {
        test('incrementarPuntuacion()', function () {
            var conteo = logic.iniciarConteo();
            var conteoEsperado1 = {
                jugador1: 15,
                jugador2: 0,
                ventaja: null,
                juegos : {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            var conteoEsperado2 = {
                jugador1: 15,
                jugador2: 15,
                ventaja: null,
                juegos : {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            var conteoEsperado3 = {
                jugador1: 15,
                jugador2: 30,
                ventaja: null,
                juegos : {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            var conteoEsperado4 = {
                jugador1: 15,
                jugador2: 40,
                ventaja: null,
                juegos : {
                    jugador1: 0,
                    jugador2: 0
                }
            };
                        
            deepEqual(logic.incrementarPuntuacion(conteo, logic.JUGADOR1), conteoEsperado1,
                'El conteo debe ser 15 0');
            deepEqual(logic.incrementarPuntuacion(conteo, logic.JUGADOR2), conteoEsperado2,
                'El conteo debe ser 15 15');
            deepEqual(logic.incrementarPuntuacion(conteo, logic.JUGADOR2), conteoEsperado3,
                'El conteo debe ser 15 30');
            deepEqual(logic.incrementarPuntuacion(conteo, logic.JUGADOR2), conteoEsperado4,
                'El conteo debe ser 15 40');
        });
    }
    
    /**
     * Prueba para ganar el juego
     * @author Carlos Ivan Martín, Carlos Bello 
     */
    function testGanarJuego() {
        test('incrementarPuntuacion() y ganar juego', function (){
            var conteo = {
                jugador1: 15,
                jugador2: 40,
                ventaja: null,
                juegos : {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            var conteoEsperado1 = {
                jugador1: 0,
                jugador2: 0,
                ventaja: null,
                juegos: {
                    jugador1: 0,
                    jugador2: 1
                }
            };
            
            var conteo2 = {
                jugador1: 40,
                jugador2: 40,
                ventaja: logic.JUGADOR1,
                juegos : {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            var conteoEsperado2 = {
                jugador1: 0,
                jugador2: 0,
                ventaja: null,
                juegos: {
                    jugador1: 1,
                    jugador2: 0
                }
            };
            deepEqual(logic.incrementarPuntuacion(conteo, logic.JUGADOR2), conteoEsperado1,
                'El conteo debe ser 0 0 y juegos 0 1');                
            deepEqual(logic.incrementarPuntuacion(conteo2, logic.JUGADOR1), conteoEsperado2,
                'El conteo debe ser 0 0 y juegos 1 0');                
        });
    }
    
    /**
    * Prueba para veririficar la igualdad de puntos
    * @author Carlos Ivan Martín, Carlos Bello 
    */
    function testIguales() {
        test('incrementarPuntuacion() y se queda iguales', function (){
            var conteo = {
                jugador1: 30,
                jugador2: 40,
                ventaja: null,
                juegos : {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            var conteoEsperado1 = {
                jugador1: 40,
                jugador2: 40,
                ventaja: null,
                juegos: {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            
            deepEqual(logic.incrementarPuntuacion(conteo, logic.JUGADOR1), conteoEsperado1,
                'El conteo debe ser 40 40 y juegos 0 0');                
        });
    }
    
    /**
    * Prueba para ganar el juego
    * @author Carlos Ivan Martín, Carlos Bello 
    */
    function testVentaja() {
        test('incrementarPuntuacion() y obtiene o pierde ventaja', function (){
            var conteo = {
                jugador1: 40,
                jugador2: 40,
                ventaja: null,
                juegos : {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            var conteoEsperado1 = {
                jugador1: 40,
                jugador2: 40,
                ventaja: logic.JUGADOR1,
                juegos: {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            var conteo2 = {
                jugador1: 40,
                jugador2: 40,
                ventaja: logic.JUGADOR1,
                juegos : {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            var conteoEsperado2 = {
                jugador1: 40,
                jugador2: 40,
                ventaja: null,
                juegos: {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            
            deepEqual(logic.incrementarPuntuacion(conteo, logic.JUGADOR1), conteoEsperado1,
                'El conteo debe ser 40 40 y ventaja JUGADOR1');                
            deepEqual(logic.incrementarPuntuacion(conteo2, logic.JUGADOR2), conteoEsperado2,
                'El conteo debe ser 40 40 y ventaja NULL');                
        });
    }
    
    /**
     * Verifica la identificación del ganador de un set
     * @author Carlos Bello
     */
    function testGanador() {
        test('ganador()', function () {
            var conteo = {
                jugador1: 15,
                jugador2: 40,
                ventaja: null,
                juegos : {
                    jugador1: 0,
                    jugador2: 6
                }
            };
            equal(logic.ganador(conteo), logic.JUGADOR2,
                'El ganador debe ser JUGADOR2');
        });
    }
    
    function run() {
        testIniciarConteo();
        testIncrementarPuntuacion();
        testGanarJuego();
        testIguales();
        testVentaja();
        testGanador();
    }
    
    return {
        run: run
    };
});