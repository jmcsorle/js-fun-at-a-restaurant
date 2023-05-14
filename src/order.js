////////The following code works through test 20 - I am keeping this in this file for reference to show how I tried to complicate things:

/* function takeOrder(delOrder, deliveryOrders, toOrder, takeOutOrders) {
  if(delOrder === delOrder && deliveryOrders === deliveryOrders) {
    return deliveryOrders.push(delOrder)
  }
  else if(toOrder === toOrder && takeOutOrders === takeOutOrders) {
    return takeOutOrders.push(toOrder);
  }
  } */
  /////////////////////////////////////////////////

function takeOrder(delOrder, deliveryOrders) {
  if(deliveryOrders.length < 3) {
    deliveryOrders.push(delOrder);
  }
  }

function refundOrder(orderNumber, deliveryOrders) {
  for(var i = 0; i < deliveryOrders.length; i++) {
    if (orderNumber === deliveryOrders[i].orderNumber){
      deliveryOrders.splice(i, 1);
  } 
  }  
  }

  function listItems(deliveryOrders) {
    var items = [];
    for (var i = 0; i < deliveryOrders.length; i++){
      items.push(deliveryOrders[i].item)
      // console.log(allItems);
    }
    return items.join(', ');
  }

function searchOrder(deliveryOrders, item) {
  var items = [];
  for (var i = 0; i < deliveryOrders.length; i++){
    items.push(deliveryOrders[i].item)
}
  if (items.includes(item)){
    return true;
  }
  else {
    return false;
  }
  
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}