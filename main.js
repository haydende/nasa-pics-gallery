
const response = await fetch("http://localhost:8080/apod");

const { url } = await response.json();
console.log(url)
const result = document.querySelector('#result')

result.innerHTML = `<img src="${url}" width="512"/>`
