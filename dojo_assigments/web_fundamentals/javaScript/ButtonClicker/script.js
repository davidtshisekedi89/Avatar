// function log (element){
//     element.innerText = "logoff"
// }


function log (element) {
    if(element.innerText == "login") {
        element.innerText = 'logout';
        
    } else {
        element.innerText = 'login';
    }



}


function hideBtn(element){
    element.remove();

}


function message() {
    alert('Ninja was liked!');
}