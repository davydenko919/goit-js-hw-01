function makeTransaction(quantity, pricePerDroid){
    const message = `You ordered ${quantity} droids worth ${quantity*pricePerDroid} credits!`;
    return message;
}