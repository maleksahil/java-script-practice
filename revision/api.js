const URL = "https://cat-fact.herokuapp.com/facts";

const factPara = document.getElementById('fact');

const btn = document.getElementById('btn');



let Promise = fetch(URL);
// console.log(Promise);

const getFacts = async () =>{
    console.log("getting data ....");
    let response = await fetch(URL);
    console.log(response); //JSON format
    let data = await response.json();
    factPara.innerText = data[1].text;
}

btn.addEventListener('click',getFacts);