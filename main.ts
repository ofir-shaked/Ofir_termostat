let temp = 0
let ledpower = 0
pins.analogWritePin(AnalogPin.P5, ledpower)
OLED.clear()
OLED.init(128, 64)
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P0,
    true,
    false,
    true
    )
    temp = dht11_dht22.readData(dataType.temperature)
    if (temp >= 30) {
        pins.analogWritePin(AnalogPin.P5, 1023)
    } else {
        pins.analogWritePin(AnalogPin.P5, 0)
    }
    OLED.drawLoading(temp)
})
