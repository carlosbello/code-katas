/**
 * Pruebas unitarias de la lógica del juego
 * @param {object} q - Framework de pruebas
 * @param {object} logic - Lógioca del juego
 * @returns {function} Función que ejecuta todos los conjuntos de pruebas
 * @author Joaquin Fernández, Carlos Bello, Carlos Ivan Martín
 */
define(['qunit', 'app/tenis_logic'], function (q, logic) {
    var JUGADOR1 = 'jugador1';
    var JUGADOR2 = 'jugador2';
    
    /**
     * Inicialización del juego
     * @author Joaquin Fernández, Carlos Bello, Carlos Ivan Martín
     */
    function testIniciarTanteo() {
        test('iniciarTanteo()', function () {
            var tanteoEsperado = {
                jugador1: 0,
                jugador2: 0,
                ventaja: null,
                juegos : {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            
            deepEqual(logic.iniciarTanteo(), tanteoEsperado,
                'El tanteo inicial debe ser 0 para ambos jugadores');
        });
    }

    /**
     * Control del conteo
     * @author Joaquin Fernández, Carlos Bello, Carlos Ivan Martín
     */
    function testIncrementarPuntuacion() {
        test('incrementarPuntuacion()', function () {
            var tanteo = logic.iniciarTanteo();
            var tanteoEsperado1 = {
                jugador1: 15,
                jugador2: 0,
                ventaja: null,
                juegos : {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            var tanteoEsperado2 = {
                jugador1: 15,
                jugador2: 15,
                ventaja: null,
                juegos : {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            var tanteoEsperado3 = {
                jugador1: 15,
                jugador2: 30,
                ventaja: null,
                juegos : {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            var tanteoEsperado4 = {
                jugador1: 15,
                jugador2: 40,
                ventaja: null,
                juegos : {
                    jugador1: 0,
                    jugador2: 0
                }
            };
                        
            deepEqual(incrementarPuntuacion(tanteo, JUGADOR1), tanteoEsperado1,
                'El tanteo debe ser 15 0');
            deepEqual(incrementarPuntuacion(tanteo, JUGADOR2), tanteoEsperado2,
                'El tanteo debe ser 15 15');
            deepEqual(incrementarPuntuacion(tanteo, JUGADOR2), tanteoEsperado3,
                'El tanteo debe ser 15 30');
            deepEqual(incrementarPuntuacion(tanteo, JUGADOR2), tanteoEsperado4,
                'El tanteo debe ser 15 40');
        });
    }
    
    /**
     * Prueba para ganar el juego
     * @author Carlos Ivan Martín, Carlos Bello 
     */
    function testGanarJuego() {
        test('incrementarPuntuacion() y ganar juego', function (){
            var tanteo = {
                jugador1: 15,
                jugador2: 40,
                ventaja: null,
                juegos : {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            var tanteoEsperado1 = {
                jugador1: 0,
                jugador2: 0,
                ventaja: null,
                juegos: {
                    jugador1: 0,
                    jugador2: 1
                }
            };
            
            var tanteo2 = {
                jugador1: 40,
                jugador2: 40,
                ventaja: JUGADOR1,
                juegos : {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            var tanteoEsperado2 = {
                jugador1: 0,
                jugador2: 0,
                ventaja: null,
                juegos: {
                    jugador1: 1,
                    jugador2: 0
                }
            };
            deepEqual(incrementarPuntuacion(tanteo, JUGADOR2), tanteoEsperado1,
                'El tanteo debe ser 0 0 y juegos 0 1');                
            deepEqual(incrementarPuntuacion(tanteo2, JUGADOR1), tanteoEsperado2,
                'El tanteo debe ser 0 0 y juegos 1 0');                
        });
    }
    
     /**
     * Prueba para veririficar la igualdad de puntos
     * @author Carlos Ivan Martín, Carlos Bello 
     */
    function testIguales() {
        test('incrementarPuntuacion() y se queda iguales', function (){
            var tanteo = {
                jugador1: 30,
                jugador2: 40,
                ventaja: null,
                juegos : {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            var tanteoEsperado1 = {
                jugador1: 40,
                jugador2: 40,
                ventaja: null,
                juegos: {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            
            deepEqual(incrementarPuntuacion(tanteo, JUGADOR1), tanteoEsperado1,
                'El tanteo debe ser 40 40 y juegos 0 0');                
        });
    }
    
     /**
     * Prueba para ganar el juego
     * @author Carlos Ivan Martín, Carlos Bello 
     */
    function testVentaja() {
        test('incrementarPuntuacion() y obtiene ventaja', function (){
            var tanteo = {
                jugador1: 40,
                jugador2: 40,
                ventaja: null,
                juegos : {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            var tanteoEsperado1 = {
                jugador1: 40,
                jugador2: 40,
                ventaja: JUGADOR1,
                juegos: {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            var tanteo2 = {
                jugador1: 40,
                jugador2: 40,
                ventaja: JUGADOR1,
                juegos : {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            var tanteoEsperado2 = {
                jugador1: 40,
                jugador2: 40,
                ventaja: null,
                juegos: {
                    jugador1: 0,
                    jugador2: 0
                }
            };
            
            deepEqual(incrementarPuntuacion(tanteo, JUGADOR1), tanteoEsperado1,
                'El tanteo debe ser 40 40 y ventaja JUGADOR1');                
            deepEqual(incrementarPuntuacion(tanteo2, JUGADOR2), tanteoEsperado2,
                'El tanteo debe ser 40 40 y ventaja NULL');                
        });
    }
    
    function run() {
        var JUGADOR1 = 'jugador1';
        var JUGADOR2 = 'jugador2';
        
        testIniciarTanteo();
        testIncrementarPuntuacion();
        testGanarJuego();
        testIguales();
        testVentaja();
    }
    
    return {
        run: run
    };
});