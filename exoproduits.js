//let prices = { banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6 };
//let products = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ];

function myWonderfulFunction(prices, products) {
	if(!products || !products.length) {
		return {
			price : 0,
			countArticles : 0,
			countProducts:0
		};
	} else if(products.length === 1) {
		let product = products[0];
		let price = prices[product];
		return {
			price: price, 
			countArticles:1 ,
			countProducts:1
		};
	} else {
		return 'TO BE CONTINUED';
	}


	}


//myWonderfulFunction(prices, products);
// should return { price: 25, countArticles: 10, countProducts: 4 }





module.exports = { 
	myWonderfulFunction : myWonderfulFunction
}