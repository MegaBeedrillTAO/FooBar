




function getNums() {
    let numArea = document.getElementById("content")
    let nums = []
    let myRequest = new Request('https://localhost:3003/api/nums', {method: "GET"})
    fetch(myRequest).then(response => {
        console.log(response)
    })
    numArea.innerText = nums.join(' ');
    console.log(nums);
}
