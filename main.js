
const response = await fetch("http://localhost:8080/apod");

const { date, explanation, hdurl, title, copyright } = await response.json();


const dateHeader = document.querySelector('#date-header');
const result = document.querySelector('#result-div');
const explanationDiv = document.querySelector('#explanation-div');

dateHeader.innerHTML = `${date}`;

let labelText = title;
if (copyright) {
    labelText = `${labelText} - ${copyright}`;
}

result.innerHTML = `<img src="${hdurl}" width="512"/>\n<label>${labelText}</label>`;

explanationDiv.innerHTML = `<p>${explanation}</p>`;
