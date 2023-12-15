const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

// const { Product, User, Category } = rquire('../models');
// import p1_img from './product_1.png'
// import p2_img from './product_2.png'
// import p3_img from './product_3.png'
// import p4_img from './product_4.png'


db.once('open', async () => {
	await cleanDB('Category', 'categories');
	await cleanDB('Product', 'products');
	await cleanDB('User', 'users');



	const categories = await Category.insertMany([
		{ name: 'Shirts' },
		{ name: 'Jeans' },
		{ name: 'Jackets' },
	])

	const products = await Product.insertMany([
		{
			id: 1,
			name: 'Navy Jacket',
			image: './product_1.png',
			category: categories[0]._id,
			new_price: 129.99,
			old_price: 199.99,
		},
		{
			id: 2,
			name: 'White Full Set',
			image: './product_2.png',
			category: categories[0]._id,
			new_price: 99.99,
			old_price: 149.99,
		},
		{
			id: 3,
			name: 'Nike Tank Top',
			image: './product_3.png',
			category: categories[0]._id,
			new_price: 64.99,
			old_price: 99.99,
		},
		{
			id: 4,
			name: 'Gray Full Set',
			image: './product_4.png',
			category: categories[0]._id,
			new_price: 99.99,
			old_price: 149.99,
		},
	]);

	console.log('products seeded')

	await User.create({
		firstName: 'Pamela',
		lastName: 'Washington',
		email: 'pamela@testmail.com',
		password: 'password12345',
		orders: [
			{
				products: [products[0]._id, products[0]._id, products[1]._id]
			}
		]
	})

	await User.create({
		firstName: 'Elijah',
		lastName: 'Holt',
		email: 'eholt@testmail.com',
		password: 'password12345',
	})

	console.log('users seeded')

	process.exit()
});




