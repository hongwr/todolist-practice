const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img") //html Element 만들기
bgImage.src = `img/${chosenImage}`

document.body.append(bgImage)
// document.body.prepend(bgImage)


//append 가장 뒤에
//prepend 가장 위에