"use strict";
document.addEventListener("DOMContentLoaded", (event) =>
{
    let language = document.querySelector("#language");
    let name = document.querySelector("#name");
    let programmer = document.querySelector("#programmer");
    let aboutMe = document.querySelector("#aboutMe");
    let aboutMeTxt = document.querySelector("#aboutMeTxt");
    let education = document.querySelector("#ed");

    language.addEventListener("click", (e) =>
    {
        if(language.innerText === "French")
        {
            language.innerText = "Anglais";
            name.innerText = "Je suis Graciella Toulassi";
            programmer.innerText = "et je suis programmeuse";
            aboutMe.innerText = "À propos de moi";
            aboutMeTxt.innerText = "Je suis une élève de deuxième année dans une technique en Sciences Informatiques au college Dawson. Je suis présentement à la recherche d'un stage plein de défis et dans lequel je pourrais apprendre énormément.";
            education.innerText = "Éducation";

        }else
            {
                language.innerText = "French";
                name.innerText = "I'm Graciella Toulassi";
                programmer.innerText = "and I'm a programmer";
                aboutMe.innerText = "A little about me";
                aboutMeTxt.innerText = "I am a second-year Computer Science student studying in a 3 year program at Dawson College and I am currently looking for an internship where I can  learn new valuable skills.";
                education.innerText = "Education";
            }
    })
});
