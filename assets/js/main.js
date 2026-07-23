const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const words = document.querySelectorAll(".word");

function scramble(word){

    const original = word.dataset.text;

    let iteration = 0;

    word.style.opacity = 1;

    const interval = setInterval(()=>{

        word.innerText = original
        .split("")
        .map((letter,index)=>{

            if(index < iteration){

                return original[index];

            }

            return letters[Math.floor(Math.random()*letters.length)];

        })
        .join("");

        if(iteration >= original.length){

            clearInterval(interval);

            word.innerText = original;

            scatter(word);

        }

        iteration += 0.2;

    },40);

}

function scatter(word){

    const x = (Math.random()-0.5)*1200;

    const y = (Math.random()-0.5)*700;

    const r = Math.random()*360;

    const size = 2 + Math.random()*3;

    word.style.setProperty("--x",`${x}px`);
    word.style.setProperty("--y",`${y}px`);
    word.style.setProperty("--r",`${r}deg`);

    word.style.fontSize = size + "rem";

    word.style.transform =
        `translate(${x}px,${y}px) rotate(${r}deg)`;

    word.style.animation =
        "drift 8s ease-in-out infinite";

}

words.forEach((word,index)=>{

    setTimeout(()=>{

        scramble(word);

    },index*700);

});