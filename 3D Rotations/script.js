const words = "This Took Longer Than Expected";


const ANIMATION_DURATION = 4000; //ms 

//separate each character into it's own div
const characters = words.split("").forEach((char, i) => {
    function createElement(offset) {
        const div = document.createElement("div");
        div.innerText = char;
        div.classList.add("character");
        //Negative animation delay prevents waiting to start the animaation
        div.style.animationDelay = `-${i * (ANIMATION_DURATION / 20) - offset}ms`;

        // Apply different color to the characters in the word "Took"
        if (char.toLowerCase() === 't' || char.toLowerCase() === 'o' || char.toLowerCase() === 'k') {
            div.classList.add("red");
        }

        return div;
    }

    document.getElementById("spiral").append(createElement(0));
    document
        .getElementById("spiral2")
        .append(createElement(-1 * (ANIMATION_DURATION / 2)));
});