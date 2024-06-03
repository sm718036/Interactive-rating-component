const ratingContainer = document.querySelector(".rating-container");
const thanksContainer = document.querySelector(".greetings-container");
const ratingNumbers = document.querySelectorAll(".rating-number");
const submitBtn = document.querySelector(".submit-button");
const ratingObtained = document.querySelector(".rating-obtained");

window.addEventListener("DOMContentLoaded", ()=>{
    ratingContainer.style.display = "block";
    ratingResult();
})

const ratingResult = ()=>{
    ratingNumbers.forEach(number=>{
        number.addEventListener("click", (e)=>{
            const rating = e.currentTarget.textContent;
            ratingNumbers.forEach(item=>{
                if(item.classList.contains("active-rating")){
                    item.classList.remove("active-rating");
                }
            })
            e.currentTarget.classList.add("active-rating");
            submitBtn.addEventListener("click", ()=>{
                ratingObtained.textContent = rating;
                thanksContainer.style.display = "block";
                ratingContainer.style.display = "none";
            })
        })
    })
}