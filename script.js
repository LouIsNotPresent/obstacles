let character= document.querySelector(".character");
let obstacle= document.querySelector(".obstacle");

function jump(){
    if(character.classList!=="animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500)
}

let checkifdead = setInterval(function(){
    let charpos= parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let obspos= parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if(obspos<20 && obspos>0 && charpos>=170){
        obstacle.style.animation= "none";
        alert("You Died");
    }
},10 )

function RefreshPage(){
    if(confirm("Are you sure you want to refresh the page?")){
        location.reload();
    }
}

if(screen.width<500){
    setInterval(function(){
        let charposi= parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        let obsposi= parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
        if(obsposi<20 && obsposi>0 && charposi>=90){
            obstacle.style.animation= "none";
            alert("You Died");
        }
    },10)
}