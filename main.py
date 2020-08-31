def on_button_pressed_a():
    basic.show_number(game.score())
    basic.pause(2000)
input.on_button_pressed(Button.A, on_button_pressed_a)

pins.set_pull(DigitalPin.P1, PinPullMode.PULL_UP)
music.set_volume(255)

def on_forever():
    pins.servo_write_pin(AnalogPin.P1, game.score())
    if pins.digital_read_pin(DigitalPin.P1) == 0:
        game.add_score(1)
    if game.score() == 50:
        music.play_tone(262, music.beat(BeatFraction.WHOLE))
    led.plot_bar_graph(game.score(), 50)
    if pins.analog_read_pin(AnalogPin.P1) < 10:
        game.set_score(game.score() - 1)
basic.forever(on_forever)
