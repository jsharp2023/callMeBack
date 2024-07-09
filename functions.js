const identity = function (value) {
  return value;
};

const first = function (array, n) {
  if (n === undefined) {
    return array[0];
  }
  return array.slice(0, n);
};
  
const last = function (array, n) {
  if (n === undefined) {
    return array[array.length - 1]
  }
  if (n === 0){
    return []
  }
  return array.slice(-n);
};

const each = function (collection, iterator) {
  if (Array.isArray(collection)){
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection)
    }
  }else{
    for (let key in collection) {
      if (collection.hasOwnProperty(key)){
        iterator(collection[key], key, collection)
      }
    }
  }
};

const indexOf = function (array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1
};

const map = function (array, iterator) {
  const results = []
  for (let i = 0; i < array.length; i++) {
    results.push(iterator(array[i], i, array));
  }
  return results;
}

const filter = (array, predicate) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      result.push(array[i])
    }
  }
  return result;
}

const reject = (array, predicate) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (!predicate(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

const uniq = (array) => {
  const seen = new Set();//stores unique values.
  const uniqueArray = [];//final array unique value
  for (let element of array) {
    if (!seen.has(element)) {
      seen.add(element);//adds to if its not
      uniqueArray.push(element);//adds to unique array
    }
  }
  return uniqueArray;//return the unique values
}

const reduce = (collection, reducer, initialValue) => {
  let accumulator = initialValue;//initial value provided

  if (Array.isArray(collection)) {
    //handles where the collection is an array
    for (let i = 0; i < collection.length; i++) {
      accumulator = reducer(accumulator, collection[i], i, collection);//pass current item to index
    }
  }else{
    //handle case where collection is an obj.
    for(let key in collection) {
      if (collection.hasOwnProperty(key)) {
        accumulator = reducer(accumulator, collection[key], key, collection);
      }
    }
  }
  return accumulator;
}

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
  filter, 
  reject, 
  uniq, 
  reduce
};