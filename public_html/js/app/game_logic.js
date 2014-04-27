define(['jquery'], function($) {
    var that = this;
    var tries = 0;
    var code = '';
    var MAX_TRIES = 15;
    
    that.validateUserCode = function (generatedCode, userCode) {
        var GOOD_CHAR_AND_POSITION = 'X';
        var GOOD_CHAR_BAD_POSITION = '*';
        var CHAR_NOT_FOUND = '';
        var matches = '';
        for(var i in generatedCode) {
            matches += generatedCode[i] === userCode[i] 
                ? GOOD_CHAR_AND_POSITION
                : userCode.indexOf(generatedCode[i]) >= 0
                    ? GOOD_CHAR_BAD_POSITION
                    : CHAR_NOT_FOUND;
        }
        return matches;
    };    
    
    that.tryUserCode = function (generatedCode, userCode) {
        if (tries >= MAX_TRIES) return null;
        
        tries++;         
        return that.validateUserCode(generatedCode, userCode);
    };

    
    that.generateSecurityCode = function () {
        var CODE_LEN = 4;
        var VALID_CHARS = 'RMAVNI';
        var VALID_CHARS_COUNT = VALID_CHARS.length;
        var code = '';

        for (var i = 1; i <= CODE_LEN; i++)
            code += VALID_CHARS[Math.floor(Math.random() * VALID_CHARS_COUNT)];
        return code;
    };
    
    that.getTries = function () {
        return tries;
    };
    
    that.play = function (userCode) {
        var matches = that.tryUserCode(code, userCode);
        return matches === 'XXXX'
            ? 'Puerta abierta'
            : (tries < 15)
                ? 'Pista: ' + matches
                : 'Lo siento, no has acertado. El código era: ' + code;
    };
    
    that.startGame = function () {
        tries = 0;
        code = that.generateSecurityCode();
    };
    
    return that;
});