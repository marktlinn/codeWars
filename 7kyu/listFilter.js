function filter_list(list) {
    return list.filter(elem=> typeof elem == 'number')
  }



console.log(filter_list([1,2,'a','b']))