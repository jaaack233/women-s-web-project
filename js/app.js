function expand() {
    let lis = document.querySelector("ul").querySelectorAll("li")
    console.log(lis) 
    for (let i = 0; i < lis.length; i++) {
        if (lis[i].classList.contains("show")) {
            lis[i].classList.remove("show")
        } else {
            lis[i].classList.add("show")
        }
    }
    
}