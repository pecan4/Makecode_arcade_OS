namespace SpriteKind {
    export const non_interactable = SpriteKind.create()
}
function array_to_string (list: any[]) {
    temp_string = ""
    for (let value of keyboard_string_array) {
        temp_string = "" + temp_string + value
    }
    return temp_string
}
function letter_check (x: number, y: number) {
    if (x == 0 && y == 0) {
        return "a"
    } else if (x == 1 && y == 0) {
        return "b"
    } else if (x == 2 && y == 0) {
        return "c"
    } else if (x == 3 && y == 0) {
        return "d"
    } else if (x == 4 && y == 0) {
        return "e"
    } else if (x == 5 && y == 0) {
        return "f"
    } else if (x == 6 && y == 0) {
        return "g"
    } else if (x == 7 && y == 0) {
        return "h"
    } else if (x == 8 && y == 0) {
        return "i"
    } else if (x == 0 && y == 1) {
        return "j"
    } else if (x == 1 && y == 1) {
        return "k"
    } else if (x == 2 && y == 1) {
        return "l"
    } else if (x == 3 && y == 1) {
        return "m"
    } else if (x == 4 && y == 1) {
        return "n"
    } else if (x == 5 && y == 1) {
        return "o"
    } else if (x == 6 && y == 1) {
        return "p"
    } else if (x == 7 && y == 1) {
        return "q"
    } else if (x == 8 && y == 1) {
        return "r"
    } else if (x == 0 && y == 2) {
        return "s"
    } else if (x == 1 && y == 2) {
        return "t"
    } else if (x == 2 && y == 2) {
        return "u"
    } else if (x == 3 && y == 2) {
        return "v"
    } else if (x == 4 && y == 2) {
        return "w"
    } else if (x == 5 && y == 2) {
        return "x"
    } else if (x == 6 && y == 2) {
        return "y"
    } else if (x == 7 && y == 2) {
        return "z"
    } else if (x == 8 && y == 2) {
        return " "
    } else if (x == 0 && y == 3) {
        return "1"
    } else if (x == 1 && y == 3) {
        return "2"
    } else if (x == 2 && y == 3) {
        return "3"
    } else if (x == 3 && y == 3) {
        return "4"
    } else if (x == 4 && y == 3) {
        return "5"
    } else if (x == 5 && y == 3) {
        return "6"
    } else if (x == 6 && y == 3) {
        return "7"
    } else if (x == 7 && y == 3) {
        return "8"
    } else if (x == 8 && y == 3) {
        return "9"
    } else if (x == 0 && y == 4) {
        return "0"
    } else if (x == 1 && y == 4) {
        return "."
    } else if (x == 2 && y == 4) {
        return ","
    } else if (x == 3 && y == 4) {
        return "\\"
    } else {
        return ""
    }
}
function square (x: number, y: number, Image2: Image) {
    Image2.drawRect(x * 9 + 2 * x + 1, y * 9 + 2 * y + 1, 10, 10, 5)
}
function web_page (The_web_page_text: string, background_color: number, web_page_images: Image[], images_xs: number[], images_ys: number[], return_image: Image, text_color: number) {
    return_image.fill(background_color)
    web_page_temp_array = The_web_page_text.split("|")
    tempy = 3
    temp = 0
    for (let index = 0; index < web_page_temp_array.length; index++) {
        images.print(return_image, web_page_temp_array[temp], 0, tempy, text_color)
        tempy += 8
        temp += 1
    }
    for (let value of web_page_images) {
        spriteutils.drawTransparentImage(value, return_image, images_xs[web_page_images.indexOf(value)], images_ys[web_page_images.indexOf(value)])
    }
    return return_image
}
let keyboard_y = 0
let keyboard_x = 0
let temp = 0
let tempy = 0
let web_page_temp_array: string[] = []
let keyboard_string_array: string[] = []
let temp_string = ""
let mySprite = sprites.create(assets.image`keyboard`, SpriteKind.Player)
let keyboard_up = true
scene.setBackgroundColor(9)
let myTextSprite = fancyText.create("ffg", 0, 10)
myTextSprite.setPosition(15, 10)
forever(function () {
    if (keyboard_up) {
        if (controller.left.isPressed()) {
            keyboard_x += -1
            if (0 > keyboard_x) {
                keyboard_x = 8
            }
            mySprite.setImage(assets.image`keyboard`)
            square(keyboard_x, keyboard_y, mySprite.image)
        } else if (controller.up.isPressed()) {
            keyboard_y += -1
            if (0 > keyboard_y) {
                keyboard_y = 4
            }
            mySprite.setImage(assets.image`keyboard`)
            square(keyboard_x, keyboard_y, mySprite.image)
        } else if (controller.right.isPressed()) {
            keyboard_x += 1
            if (8 < keyboard_x) {
                keyboard_x = 0
            }
            mySprite.setImage(assets.image`keyboard`)
            square(keyboard_x, keyboard_y, mySprite.image)
        } else if (controller.down.isPressed()) {
            keyboard_y += 1
            if (4 < keyboard_y) {
                keyboard_y = 0
            }
            mySprite.setImage(assets.image`keyboard`)
            square(keyboard_x, keyboard_y, mySprite.image)
        }
        if (controller.A.isPressed()) {
            if (letter_check(keyboard_x, keyboard_y) == "\\") {
                keyboard_string_array.pop()
            } else {
                keyboard_string_array.push(letter_check(keyboard_x, keyboard_y))
            }
            pause(50)
        }
        pause(50)
    }
    fancyText.setText(myTextSprite, array_to_string(keyboard_string_array))
})
