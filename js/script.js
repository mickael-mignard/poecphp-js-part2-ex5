
function changerImage() {
    let racineNom = "images/image";
    let container = document.getElementsByClassName("container")[0];
    container.addEventListener("mouseover", function () {
        let images = container.getElementsByTagName("img"); 
        for (let i = 1; i < images.length+1; i++) {
            let image = document.getElementById("image" + i);
            image.addEventListener("mouseover", function () {
                image.setAttribute("src", racineNom + i + "_2" + ".jpg");
            })
        }  
    })
}



