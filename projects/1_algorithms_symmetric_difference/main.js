function retrieve_workable_arguments(argument_collection){
  // Get arguments situated where its easier to deal with dynamic passing.
  var arguments_passed = [];
  Object.keys(argument_collection).forEach((passed_array)=>{
    arguments_passed.push(argument_collection[passed_array]);
  })
  return arguments_passed
}

function remove_any_duplicate(argument_collection){
  var all_arrays = [];

  for (var set_argument of argument_collection){
    var new_set = [];
    for (var value of set_argument){
      if (!new_set.includes(value)){
        new_set.push(parseInt(value));
      }
    }
    all_arrays.push(new_set);
  }

  return all_arrays;
}

function count_number_of_occurances(argument_collection){
  var value_reference_count = {};
  // Count the number of occurances
  for (var passed_array of argument_collection){
    for (var value of passed_array){
      value_reference_count[value] = value_reference_count[value] + 1 || 1;
    }
  }
  return value_reference_count;
}

function build_symmetric_set(value_reference_count){
  var symmetric_set = [];
  // Go back through, and find values with only count as 1. 
  Object.keys(value_reference_count).forEach((key)=>{
    // Add in if count is an odd number
    if (value_reference_count[key] % 2 === 1){
      symmetric_set.push(parseInt(key));
    }
  }); 

  return symmetric_set;
}

function sym() {
  
  var arguments_passed = retrieve_workable_arguments(arguments);
  arguments_passed = remove_any_duplicate(arguments_passed);
  var value_reference_count = count_number_of_occurances(arguments_passed);
  
  return build_symmetric_set(value_reference_count);
}

console.log('---');
console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log([3, 4, 5]);
console.log('---');
console.log('---');
console.log(sym([1, 2, 3], [5, 2, 1, 4, 5]));
console.log([3, 4, 5]);
console.log('---');
console.log('---');
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
console.log([1, 4, 5]);
console.log('---');
console.log('---');
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));
console.log([1, 2, 4, 5, 6, 7, 8, 9]);
console.log('---');