


function toggleMenu() {

    let x = document.getElementById("burger-menus");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

document.getElementById("burger").addEventListener("click",(e) => {
    toggleMenu();
})


// window.addEventListener("resize", checkWidth);

// function checkWidth() {
//   console.log(document.body.clientWidth);
// }