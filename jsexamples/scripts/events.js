const displayTips = (event) => {
    document.getElementById('lblTips1').innerHTML = "Enter Your first name"
}
const hideTips = (event) => {
   document.getElementById('lblTips1').innerHTML = ""
   tbElement1.style.backgroundColor="white"
   tbElement1.style.color="black"
}

const changeColor = (event) => {
   let red = Math.floor(Math.random() * 256)
   let green = Math.floor(Math.random() * 256)
   let blue = Math.floor(Math.random() * 256)
   document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
}
const controller = new AbortController()
const btnElement = document.getElementById('btn')
const tbElement1 = document.getElementById('txtFirst')
const tbElement2 = document.getElementById('txtLast')

btnElement.addEventListener('click', (event) => {
   event.preventDefault()
   changeColor(event);
}, {signal : controller.signal})

tbElement1.addEventListener('focus', (event) => {
   displayTips(event);
} )

tbElement1.addEventListener('blur', (event) => {
   hideTips(event);
} )
tbElement1.addEventListener('keydown', (event) => {
   tbElement1.style.backgroundColor = "blue"
   tbElement1.style.color = "white"
} )

const removeEvents = (event) => {
   controller.abort()
       // tbElement1.removeEventListener('focus', displayTips, true)
       // tbElement1.removeEventListener('blur', hideTips, true)
       // btnElement.removeEventListener('click', changeColor, true)
       // tbElement1.removeEventListener('keydown', )
}

document.getElementById('btn1').addEventListener('click',
   (event) => {
       event.preventDefault()
       removeEvents(event)
   }
)