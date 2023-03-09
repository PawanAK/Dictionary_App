'use strict'


const request=async function(word){
    const search = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await search.json();
    render(data[0])
}


const render= function(data){
    console.log(data);
    render_name(data.word)
    render_phonetics(data.phonetic)
    render_audio(data.phonetics[0])
    console.log(data.meanings[0].definitions[0]);
}

const render_name =function(name)
{
    document.querySelector('.word__english').innerHTML=name;
}

const render_phonetics = function(phone)
{
    document.querySelector('.word__phone').innerHTML=phone;
}

const render_audio = function(data)
{
    const audio = new Audio(data.audio)
    const butt=document.querySelector('.play__audio');
    butt.addEventListener("click",()=>audio.play())
}









const word = document.querySelector(".search-field").value;
console.log(word);

request(word);

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttons = document.querySelectorAll("button");

