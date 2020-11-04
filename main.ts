basic.forever(function () {
    // 白線上
    if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 0) {
        bitbot.rotatems(BBRobotDirection.Right, 60, 50)
        while (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
            bitbot.rotate(BBRobotDirection.Left, 60)
        }
    }
    // 右白
    if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
        bitbot.rotate(BBRobotDirection.Left, 10)
    }
    // 左白
    if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.rotate(BBRobotDirection.Right, 10)
    }
    // 黑上
    if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.go(BBDirection.Forward, 100)
    }
})
