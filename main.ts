let 開始時間 = 0
let 結束時間 = 0
input.onButtonPressed(Button.A, function () {
    開始時間 = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(0)
})
basic.forever(function () {
    // 白線上
    if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 0) {
        basic.showNumber(0)
        bitbot.stop(BBStopMode.Brake)
        bitbot.rotate(BBRobotDirection.Right, 60)
        開始時間 = input.runningTime()
        while (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1 && input.runningTime() - 開始時間 <= 350 || input.runningTime() - 開始時間 > 350) {
            bitbot.rotate(BBRobotDirection.Right, 60)
        }
        結束時間 = input.runningTime() - 開始時間
    }
    // 右白
    if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
        basic.showNumber(1)
        bitbot.rotate(BBRobotDirection.Left, 10)
    }
    // 左白
    if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 1) {
        basic.showNumber(2)
        bitbot.rotate(BBRobotDirection.Right, 10)
    }
    // 黑上
    if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1) {
        basic.showNumber(3)
        bitbot.go(BBDirection.Forward, 100)
    }
})
