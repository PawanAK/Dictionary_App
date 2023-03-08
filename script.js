'use strict'

const word=document.querySelector('.search-field').value;
console.log(word);
const search = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
console.log(search.json());