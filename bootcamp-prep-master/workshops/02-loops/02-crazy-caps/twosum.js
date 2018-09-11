function arraySum(array, S){
  let sums = [];
  let hashTable = {};
  for (let i = 0; i < array.length; i++){
  let element = array[i];
  let difference = S - element;
  
  if (hashTable[difference] !== undefined){
      sums.push([difference, element]);
  }
  hashTable[element] = element; 
  }
  return sums; 
}
let array = [1,2,3,4,5];
arraySum(array, 3); 