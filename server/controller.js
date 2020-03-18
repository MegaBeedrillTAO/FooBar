function getNums(req, res){
  
    const {start, finish, words, numbers} = req.body
    
    let holder = [];
    for (i = parseInt(start); i <= parseInt(finish); i++){
        let holder_string = ''
        for(let j = 0; j < numbers.length; j++){
          if (i % parseInt(numbers[j]) === 0){
            holder_string += words[j]
          }
        }
        if (holder_string !== ''){
          holder.push(holder_string);
        }
        else {
          holder.push(i);
        }
      }
      
    res.status(200).json(holder)  
}

module.exports = {
    getNums
}