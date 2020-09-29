let grade = 0
input.onButtonPressed(Button.A, function () {
    grade = randint(80, 100)
    basic.showNumber(grade)
    if (grade >= 80 && grade <= 84) {
        basic.showString("A-")
    }
    if (grade >= 85 && grade <= 89) {
        basic.showString("A")
    }
    if (grade >= 90 && grade <= 100) {
        basic.showString("A+")
    }
})
basic.forever(function () {
	
})
