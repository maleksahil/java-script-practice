let myJson = `
{
    "name" : "harry",
    "score" : 11.75,
    "isAdmin" : false,
    "licence" : null,
    "shopitem" : ["food", "clothes", "oil"],
        "myobj" : {
        "color" : "red",
        "number" : 47
    }
}`;

let res = JSON.parse(myJson);

console.log(res)

let response = JSON.stringify(res);

console.log(response)