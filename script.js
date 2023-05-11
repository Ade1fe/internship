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