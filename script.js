const burgerFunction = () =>{
    const burgerLines = document.getElementById('burger-lines');
    const menuItems = document.getElementById('menu-items');
    
    burgerLines.addEventListener('click', ()=> {
        burgerLines.classList.toggle('active');
        menuItems.classList.toggle('hide');
    });
}
burgerFunction();

var currentPage = 0;
const pages = document.querySelectorAll('.form-page');
const backButtons = document.querySelectorAll('.back-button');
const nextButtons = document.querySelectorAll('.next-button');
console.log(pages)
var showPage = (action) =>{
    currentPage += action;
    console.log("currentPage",currentPage)
    if(currentPage < 0){
        currentPage = 0;
    } if(currentPage >= pages.length){
        currentPage = pages.length - 1;
    }

    pages.forEach( (page, index) => {
        if(index == currentPage){
            page.classList.add('active');
        } else{
            page.classList.remove('active');
        }
    })
}
const backfunction = () =>{

    backButtons.forEach((backBtn) => {
        backBtn.addEventListener('click', () =>{showPage(-1)});
    })
}
backfunction();

const nextFunction = () =>{
    nextButtons.forEach((nextBtn) =>{
        nextBtn.addEventListener('click',() =>{showPage(1)});
    })
}
nextFunction();

