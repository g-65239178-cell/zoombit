rekabit.setAllRgbPixelsColor(0xff0000)
zoombit.setHeadlight(HeadlightChannel.All, zoombit.digitalStatePicker(DigitalIoState.On))
basic.forever(function () {
    if (zoombit.readUltrasonic() < 30) {
        zoombit.move(MotorDirection.Forward, 128)
    } else {
        zoombit.brake()
    }
})
