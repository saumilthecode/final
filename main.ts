input.onButtonPressed(Button.A, function () {
    basic.showNumber(game.score())
    basic.pause(2000)
})
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
music.setVolume(255)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P1, game.score())
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        game.addScore(1)
    }
    if (game.score() == 50) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    led.plotBarGraph(
    game.score(),
    50
    )
    if (pins.analogReadPin(AnalogPin.P1) < 10) {
        game.setScore(game.score() - 1)
    }
})
