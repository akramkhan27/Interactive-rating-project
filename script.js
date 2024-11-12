document.addEventListener('DOMContentLoaded',()=>{
    const ratingCircles= document.querySelectorAll(".rating-circle");
    const submitButton=document.getElementById("submit-btn");
    let selectedRatingValue=null;

    // selecting rating through event
    ratingCircles.forEach(circle=>{
        circle.addEventListener("click",()=>{
            ratingCircles.forEach(c=> c.classList.remove("selected"));
            circle.classList.add("selected");
            selectedRatingValue=circle.getAttribute("value");
        });
    });

    // submitting the review and passing the value

    submitButton.addEventListener("click",()=>{
        if(selectedRatingValue){
            document.querySelector(".rating-outof-container").innerHTML=`<span>You selected ${selectedRatingValue} out of 5</span`
            document.querySelector(".page1").style.display="none";
            document.querySelector(".page2").style.display="flex";
        }
        else{
            alert("Please select a rating!");
        }
    })
});