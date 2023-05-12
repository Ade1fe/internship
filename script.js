    let themeButton = document.querySelector("#theme");
    themeButton.onclick = () => {
        if (themeButton.classList.contains('bx-moon')) {
            themeButton.classList.replace('bx-moon', 'bx-sun');
            document.body.classList.add('active');
        } else {
            themeButton.classList.replace('bx-sun', 'bx-moon');
            document.body.classList.remove('active');
        }
    }


    // image slider
     var img1 = document.getElementById("image1");
  
    var imageSources = [
        "/imgs/img1.jpg",
        "/imgs/img2.jpg",
        "/imgs/img3.jpg" 
    ];

    var currentIndex = 0;

    function changeImages() {
        img1.src = imageSources[currentIndex];
        currentIndex = (currentIndex + 1) % imageSources.length;
        img1.src = imageSources[currentIndex];
    }

    setInterval(changeImages, 5000);