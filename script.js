//Target the adviceId on the title using the DOM
const adviceId = document.querySelector('#adviceId');

//Target the advice--text (quoted) using the DOM
const  adviceText = document.querySelector('#advice--text');

//Target the button on the card
const btn = document.querySelector("#btn");

//A function to help modularize getting an advice via Advice Slip API
function fetchAdvice(){
    
    //Get the API and its content using API promises 
fetch('https://api.adviceslip.com/advice').then(response =>{
    return response.json();//This returns a JSON object (slip)
    
}).then(adviceContent =>{
    
    const adviceNo = adviceContent.slip.id;  //Initialize the advice number to the slip object's id
    const advice = adviceContent.slip.advice; //Assign the slip's advice property value to advice

    //Display the fetched advice number and advice content to the heading span tag and to the quoted text respectively
    adviceId.innerHTML = `<span>${adviceNo}</span>`;
    adviceText.innerHTML =`<p>${advice}</p>`
}).catch(error =>{
    //In case of an error while fetching the advice content via API the error message will be displayed on the console
    console.log(error);
})
}

//When the window loads or browser is refreshed it should display some advice by using the code below
window.onload =() =>{
    
}
//Add an eventlistener to the button on the card which "fires" the fetchAdvice() function when clicked
btn.addEventListener('click',function(){
    fetchAdvice();
})
