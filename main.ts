pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, game.score())
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        game.addScore(1)
    }
    led.plotBarGraph(
    game.score(),
    50
    )
    if (pins.analogReadPin(AnalogPin.P2) < 10) {
        game.setScore(game.score() - 1)
    }
})
