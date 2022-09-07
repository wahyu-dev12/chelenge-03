function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];
 
  // Tulis code-mu disini


  for(let i=0;i<result.length;i++){
    let flag = result.length-i-1
    console.log(flag)
    for(let j=0;j<flag;j++){
        const x = result[j]
        const y = result[j+1]
        if(x.year > y.year){
            result[j] = y
            result[j+1] = x
        }
        console.log(result)
    }
}

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
