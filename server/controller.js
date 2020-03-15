function getNums(req, res){
    let holder = [];
    for (i = 1; i < 100; i++){
        if (i % 3 === 0 && i % 5 === 0){
          holder.push('FooBar');
        }
        else if (i % 3 === 0 && i % 5 !== 0){
          holder.push('Foo');
        }
        else if (i % 3 !== 0 && i % 5 === 0){
          holder.push('Bar');
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