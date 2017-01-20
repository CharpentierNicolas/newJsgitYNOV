var expect = require('chai').expect;
var myWonderfulFunction = require('./exoproduits').myWonderfulFunction;

let prices = { banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6 };
let products = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ];



describe('myWonderfulFunction', function() {
	it('Empty basket should return 0 for each value', function(){
		var result = myWonderfulFunction({},[]);
		expect(result.price).to.be.equal(0);
		expect(result.price).to.be.equal(0);
		expect(result.price).to.be.equal(0);
	});

	it('basket witn only one product should return price of the product', function(){
		var result = myWonderfulFunction(prices,['cucumber']);
		expect(result.price).to.be.equal(4);
		expect(result.countArticles).to.be.equal(1);
		expect(result.countProducts).to.be.equal(1);
	});

	it('basket witn 2 differents products should return price of the price', function(){
		var result = myWonderfulFunction(prices,['potato', 'apple']);
		expect(result.price).to.be.equal(8);
		expect(result.countArticles).to.be.equal(2);
		expect(result.countProducts).to.be.equal(2);
	});
});