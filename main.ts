let 방향 = 0
basic.forever(function () {
    방향 = input.acceleration(Dimension.X)
    if (방향 > 100) {
        basic.showArrow(ArrowNames.East)
    } else if (방향 < -100) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showNumber(방향)
    }
})
