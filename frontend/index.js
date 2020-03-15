import axios from 'axios';



function getNums() {
    let numArea = document.getElementById("content")
    let nums = [1, 2, 3]
     axios.get('/api/nums').then(response => {
        nums = [...response]
    })
    numArea.innerText = nums.join(' ');
    console.log(nums);
}
