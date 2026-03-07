const container = document.getElementById("rating");

function createStarRating(totalStars) {
    let rating = 0;
    function render(activeIndex = rating) {
        container.innerHTML = ""
        for (let i = 1; i <= totalStars; i++) {
            let childEle = document.createElement("span");
            childEle.innerText = "☆";
            childEle.style.color = i <= activeIndex ? 'gold' : 'gray'
            childEle.style.fontSize = '24px'
            childEle.dataset.index = i;
            container.appendChild(childEle)
        }
    }
    render(rating)

    container.addEventListener("click", function (e) {
        let tagEle = e.target.dataset.index
        rating = Number(tagEle)
        render(rating)
    })
    container.addEventListener("mouseover", function (e) {
        let tagEle = e.target.dataset.index
        container.querySelectorAll('span').forEach((star, i) => {
            star.style.color = i <tagEle ? 'gold' : 'gray';
        })  
    })
    container.addEventListener("mouseleave", function (e) {
        let tagEle = e.target.dataset.index
        container.querySelectorAll('span').forEach((star, i) => {
           star.style.color = i < rating ? "gold" : "gray";
        })  
    })
}

createStarRating(5);