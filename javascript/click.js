(function () {
    let value_idx = 0;
    window.onclick = function (event) {
        let value = new Array("❤富强❤", "❤民主❤", "❤文明❤", "❤和谐❤", "❤自由❤", "❤平等❤", "❤公正❤", "❤法治❤", "❤爱国❤","❤敬业❤", "❤诚信❤", "❤友善❤");
        let heart = document.createElement("p");
        heart.classList.add("heart");
        document.body.appendChild(heart).innerHTML = value[value_idx];
        value_idx = (value_idx + 1) % value.length;
        heart.onselectstart = new Function('event.returnValue=false');
        heart.style.cssText = "position: fixed;left:-100%;";
        let size = 16;
        let x = event.clientX - size / 2;
        let y = event.clientY - size;
        let color = randomColor();
        let opacity = 1;
        let s = 1.2;
        let timer = setInterval(function () { 
            if (opacity <= 0) {
                document.body.removeChild(heart);
                clearInterval(timer);
            }
            else {
                heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" + color + ";left:" + x + "px;top:" + y + "px;opacity:" + opacity + ";transform:scale(" + s + ");";
                y --;
                opacity -= 0.016;
                s += 0.002;
            }
        }, 15)
    }
    function randomColor() {
        return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";
    }
}());