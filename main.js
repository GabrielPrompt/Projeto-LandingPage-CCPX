const ingressos = []

function Selector(selector) {
    let element = document.querySelector(selector)
    element.classList.toggle("card-highlight")
}

function checkKeyboardCode(){
    document.addEventListener('keydown', (event) => {
        var name = event.key
        var code = event.code
        //Alert the key name and key code  on keydown
        alert(`Tecla Pressionada ${name} \r\n Key code: ${code}`)
    }, false)
}

function AddKeyboardEventListeners(){
    document.addEventListener('keydown', (event) => {
        
        let ingresso1 = document.getElementById("quinta")
        let ingresso2 = document.getElementById("sexta")
        let ingresso3 = document.getElementById("sabado")
        let ingresso4 = document.getElementById("domingo")

        let code = event.code
        if(code == 'Digit1') {
            ingresso1.classList.toggle("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.remove("card-highlight")
        }

        if(code == 'Digit2') {
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.toggle("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.remove("card-highlight")
        }

        if(code == 'Digit3') {
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.toggle("card-highlight")
            ingresso4.classList.remove("card-highlight")
        }

        if(code == 'Digit4') {
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.toggle("card-highlight")
        }
    }, false)
}

selectCard = (selector) => {
    var element = document.querySelector(selector)
    element.classList.toggle("card-selected")
    if(ingressos.includes(selector)) ingressos.pop(selector)
    else ingressos.push(selector)
}

showSelectedCards = () => {
    if(ingressos.length > 0) alert("Ingressos Selecionados:" + ingressos)
}

AddKeyboardEventListeners();