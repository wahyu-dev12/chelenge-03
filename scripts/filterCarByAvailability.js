function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log("asd");

  // Tempat penampungan hasil 
  const result = [];

  // Tulis code-mu disini
  for (let i = 0; i < cars.length; i++) {
    // console.log(cars[i]);
    if (cars[i].available) {
      result.push(cars[i]);
    }
  }
  // return cars;

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
