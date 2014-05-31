requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        jquery: 'jquery-1.11.0'
    }
});


require(['app/tenis_logic', 'jquery'], function (logic, $) {
    var conteo = null;
    
    function iniciarJuego() {
        conteo = logic.iniciarTanteo();
    }
    
    function actualizarEstado() {
        $('#puntosJugador1').text(conteo.jugador1);
        $('#puntosJugador2').text(conteo.jugador2);
        $('#ventajaJugador1').text(conteo.ventaja === 'jugador1' ? 'X' : '');
        $('#ventajaJugador2').text(conteo.ventaja === 'jugador2' ? 'X' : '');
        $('#juegosJugador1').text(conteo.juegos.jugador1);
        $('#juegosJugador2').text(conteo.juegos.jugador2);
    }    

    function ganaJugada(jugador) {
        logic.incrementarPuntuacion(conteo, jugador);
        actualizarEstado();
        var ganador = logic.ganador(conteo);
        if (ganador) {
            alert('Ha ganado ' + ganador);
            iniciarJuego();
            actualizarEstado();
        }
    }
    
    iniciarJuego();
    actualizarEstado();

    $('#btnGanaJugadaJugador1').click(function () {
        ganaJugada('jugador1');
    });
    $('#btnGanaJugadaJugador2').click(function () {
        ganaJugada('jugador2');
    });
});
