const messageText = document.getElementById('message-text');
const sendMessage = document.getElementById('send-message');
const messageSent = document.getElementById('message-sent');

var today = new Date();

sendMessage.addEventListener("click", ()=>{
    showMessage();
})


const showMessage = () =>{
    messageSent.classList.remove('hide');
    messageSent.innerHTML =`
    <p>${messageText.value}</p>
    <small> ${today.toLocaleString()} </small>
    `;    
    messageText.value = " ";
    
}