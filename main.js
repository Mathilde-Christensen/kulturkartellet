let hamburgermenuens = [document.getElementById("minHamburgermenu")]; 
let hamburgers = [document.querySelector(".hamburger")];

function openNav(index) { 
    // Hvis menuens bredde IKKE er 0, så luk i stedet
    if (hamburgermenuens[index].style.width === "200px") {
        closeNav(index);
    } else {
        hamburgermenuens[index].style.width = "200px";      
        document.addEventListener("click", closeNavOutside); 
    }
}

function closeNav(index) {
    hamburgermenuens[index].style.width = "0"; // ''usynlig''
    document.removeEventListener("click", closeNavOutside);
}

function closeNavOutside(event) {
    hamburgermenuens.forEach((hamburgermenuen, index) => { 
        if (!hamburgermenuen.contains(event.target) && !hamburgers[index].contains(event.target)) {
            closeNav(index);
        }
    });
}