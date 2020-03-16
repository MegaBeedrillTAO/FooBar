function getNums() {
    let numArea = document.getElementById("content")
    let myRequest = new Request('http://localhost:3003/api/nums', {method: "GET"})
    fetch(myRequest).then(response => response.json()).then(result => numArea.innerHTML = '<ul>' + result.map(data => {return '<li>'+ data + '</li>'}).join('') +'</ul>')
}


function clearNums(){
    let numArea = document.getElementById("content")
    numArea.innerHTML = '';
}