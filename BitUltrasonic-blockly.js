+(function (window, webduino) {

  'use strict';

  window.getUltrasonic = function (board, trig, echo) {
    return new webduino.module.Ultrasonic(board, board.getDigitalPin(trig), board.getDigitalPin(echo));
  };

}(window, window.webduino));
