const accordionData = [
    { id: 1, title: "What is JavaScript?", content: "JavaScript is a programming language used to build interactive web applications." },
    { id: 2, title: "What is Closure?", content: "A closure is a function that remembers variables from its lexical scope." },
    { id: 3, title: "What is the Event Loop?", content: "The event loop allows Node.js and browsers to handle asynchronous operations." },
    { id: 4, title: "What is a Promise?", content: "A Promise represents a value that may be available now, later, or never." }
];

const container = document.getElementById("accordion");
let isMultiOpen = true;


function renderUI() {
    container.innerHTML = "";
    accordionData.forEach((item) => {
        let Wrapper = document.createElement('div')
        Wrapper.className = "wrapper"
        let TitleBtn = document.createElement('button')
        TitleBtn.className = "item"
        TitleBtn.innerHTML = `${item.title} <span class="arrow">▼</span>`
        let body = document.createElement('div')
        body.innerHTML = item.content
        body.className = "content"
        container.appendChild(Wrapper)
        Wrapper.appendChild(TitleBtn)
        Wrapper.appendChild(body)
    })
}

renderUI()

container.addEventListener('click', function (e) {

    let ele = e.target.closest('.item')
    if (!ele) return
    let body = ele.nextElementSibling;
    let isOpen = body.classList.contains('open')
    if (!isMultiOpen) {
        container.querySelectorAll('.content').forEach((element) => {
            element.classList.remove('open')
        })
    }
    if (isOpen) {
        body.classList.remove("open");
        e.target.firstElementChild.className = 'arrow'
    } else {
        body.classList.add("open");
        e.target.firstElementChild.className = 'arrowSpin'
    }
})