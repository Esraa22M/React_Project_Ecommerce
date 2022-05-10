checkProductIsAlreadyExistInCart = (product) => {
    let isFound = false;
    let products = [...this.state.itemsAddedToCart];
    let attributes = product.attributes;
    for (let i = 0; i < products.length; i++) {
      let objAttributes = products[i];
      isFound=true;

      for (let j = 0; j < objAttributes.length; j++) {
        if (objAttributes[j].Itemid !== attributes[j].Itemid) {
          isFound = false;
          break;
        }
      }
      if(isFound){
        isFound = products[i];
      }
    }
    // if (!obj) {
    //   isFound = false;
    // } else {
    //   isFound = obj;
    //   let objAttributes = obj.attributes;
    //   console.log(objAttributes);
    //   let productAttributes = product.attributes;
    //   console.log(productAttributes);
    //   for (let i = 0; i < productAttributes.length; i++) {
    //     console.log(productAttributes[i].Itemid, objAttributes[i].Itemid);
    //     if (objAttributes[i].Itemid !== productAttributes[i].Itemid) {
    //       isFound = false;
    //       break;
    //     }
    //   }
    // }
    return isFound;
  };