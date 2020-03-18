function getLimits(){
    let start = document.getElementById("start").value
    let finish = document.getElementById("finish").value
    let words = document.getElementById('words').value.split(',')
    let numbers = document.getElementById('numbers').value.split(',')
    return {start, finish, words, numbers}
}

function getNums() {
    let {start, finish, words, numbers} = getLimits();
    let numArea = document.getElementById("content")
    let myRequest = new Request('http://localhost:3003/api/nums', {method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify({start, finish, words, numbers})})
    fetch(myRequest).then(response => response.json()).then(result => numArea.innerHTML = '<ul>' + result.map(data => {return '<li>'+ data + '</li>'}).join('') +'</ul>')
}


function clearNums(){
    let numArea = document.getElementById("content")
    numArea.innerHTML = '';
}