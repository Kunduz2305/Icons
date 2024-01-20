let body = document.body


// 1 блок
let div1 = document.createElement('div')
div1.classList='a'

let span1 = document.createElement("span")
span1.innerHTML = '7:25 AM'
span1.classList = 'span'

let img = document.createElement("span")
img.innerHTML = '✈'
img.classList='img1'

let text = document.createElement("span")
text.innerHTML = 'Boston'
text.classList='text'

div1.append(span1)
div1.append(img)
div1.append(text)

body.append(div1)



// 2 блок
let div2 = document.createElement('div')
div2.classList='b'

let span2 = document.createElement("span")
span2.innerHTML = 'Bike'
span2.classList = 'span2'

let img2 = document.createElement("span")
img2.innerHTML = '🏍'
img2.classList = 'img2'

let text2 = document.createElement("span")
text2.innerHTML = '80 Miles'
text2.classList='text2'

div2.append(span2)
div2.append(img2)
div2.append(text2)

body.append(div2)



// 3 блок
let div3 = document.createElement('div')
div3.classList='c'

let span3 = document.createElement("span")
span3.innerHTML = 'Mornong'
span3.classList = 'span3'

let img3 = document.createElement("span")
img3.innerHTML = '⛾'
img3.classList='img3'

let text3 = document.createElement("span")
text3.innerHTML = 'Coffee'
text3.classList='text3'

div3.append(span3)
div3.append(img3)
div3.append(text3)

body.append(div3)



// 4 блок
let div4 = document.createElement('div')
div4.classList='d'

let span4 = document.createElement("span")
span4.innerHTML = '8:15 PM'
span4.classList = 'span'

let img4 = document.createElement("span")
img4.innerHTML = '✈'
img4.classList='img4'

let text4 = document.createElement("span")
text4.innerHTML = 'Madrid'
text4.classList='text'

div4.append(span4)
div4.append(img4)
div4.append(text4)

body.append(div4)


// 5 блок
let div5 = document.createElement('div')
div5.classList='e'

let span5 = document.createElement("span")
span5.innerHTML = 'Boat'
span5.classList = 'span2'

let img5 = document.createElement("span")
img5.innerHTML = '🛥'
img5.classList='img2'

let text5 = document.createElement("span")
text5.innerHTML = '90 Minutes'
text5.classList='text2'

div5.append(span5)
div5.append(img5)
div5.append(text5)

body.append(div5)


// 6 блок
let div6 = document.createElement('div')
div6.classList='f'

let span6 = document.createElement("span")
span6.innerHTML = 'Afternoon'
span6.classList = 'span3'

let img6 = document.createElement("span")
img6.innerHTML = '⛷'
img6.classList='img3'

let text6 = document.createElement("span")
text6.innerHTML = 'Sky race'
text6.classList='text3'

div6.append(span6)
div6.append(img6)
div6.append(text6)

body.append(div6)




// 7 блок
let div7 = document.createElement('div')
div7.classList='g'

let span7 = document.createElement("span")
span7.innerHTML = ' February'
span7.classList='span'

let img7 = document.createElement("span")
img7.innerHTML = '🌨'
img7.classList='img'

let text7 = document.createElement("span")
text7.innerHTML = 'Snow'
text7.classList='text'

div7.append(span7)
div7.append(img7)
div7.append(text7)

body.append(div7)



// 8 блок
let div8 = document.createElement('div')
div8.classList='h'

let span8 = document.createElement("span")
span8.innerHTML = 'Drive'
span8.classList='span2'

let img8 = document.createElement("span")
img8.innerHTML = '⛟'
img8.classList='img2'

let text8 = document.createElement("span")
text8.innerHTML = '48 Miles'
text8.classList='text2'

div8.append(span8)
div8.append(img8)
div8.append(text8)

body.append(div8)


// 9 блок
let div9 = document.createElement('div')
div9.classList='i'

let span9 = document.createElement("span")
span9.innerHTML = '20:30 PM'
span9.classList= 'span3'

let img9 = document.createElement("span")
img9.innerHTML = '📽'
img9.classList='img3'

let text9 = document.createElement("span")
text9.innerHTML = 'Movie'
text9.classList='text3'

div9.append(span9)
div9.append(img9)
div9.append(text9)

body.append(div9)


let div = document.createElement('div')
div.classList = 'container1'

div.append(div1)
div.append(div2)
div.append(div3)

body.append(div)


let divcons = document.createElement('div')
divcons.classList = 'container1'


divcons.append(div4)
divcons.append(div5)
divcons.append(div6)

body.append(divcons)



let divcont = document.createElement('div')
divcont.classList='container1'


divcont.append(div7)
divcont.append(div8)
divcont.append(div9)

body.append(divcont)