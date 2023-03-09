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
    render__answer(data.meanings)
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
    console.log(data.audio);
    const audio = new Audio(data.audio)
    const butt=document.querySelector('.play__audio');
    butt.addEventListener("click",()=>audio.play())
}

const render__answer = function(data)
{
    let html='';
    console.log(data);

    data.forEach(data => {
        const pof=data.partOfSpeech;
        const def=data.definitions[0].definition;
        html += `<div class="ans">
    <div class="part">${pof}</div>
    <div class="meaning">Meaning
        <ul class="define">
            <li class="defination">${def}</li>
        </ul>
    </div>
</div> <br>`;

document.querySelector('.answer').insertAdjacentHTML("afterend",html);
    });
}



const word = document.querySelector(".search-field").value;
console.log(word);

request(word);

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttons = document.querySelectorAll("button");

`<div class="ans">
    <div class="part">${data.partofSpeech}</div>
    <div class="meaning">Meaning
        <ul class="define">
            <li class="defination">${data.definations[0].defination}</li>
            <li class="defination">${data.definations[1].defination}</li>
        </ul>
    </div>
</div>`