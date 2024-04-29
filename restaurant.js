const menu = {
    _meal: 999,
    _price: 'chorrocientos',
  
  
  set changeMeal(mealToCheck){
    if (typeof mealToCheck === 'string'){
      menu._meal = mealToCheck;
    }
    else {
      console.log('Not a String!!');
    }
  }
  
  set changePrice(priceToCheck){
    if (typeof priceToCheck === 'number'){
      menu._price = priceToCheck;
    }
    else {
      console.log('Not a Number!!');
    }
  }
  
  get todaySpecial {
    if (_meal =! null && _price =! null ){
    return `Today's Special is ${this._meal} for ${this._price}!`;
    }
    else {
      console.log('Meal or price was not set correctly!.')
    }
  }
            };

  menu.changeMeal = 'chicharron';
  menu.changePrice= 9999;
  
  console.log(menu);