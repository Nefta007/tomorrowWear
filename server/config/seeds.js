import { Product,User,Category } from '../models'
import p1_img from './product_1.png'
import p2_img from './product_2.png'
import p3_img from './product_3.png'
import p4_img from './product_4.png'

const categories = await Category.insertMany([
	{ name: 'Shirts' },
	{ name: 'Jeans' },
	{ name: 'Jackets' },
])

const products = await Product.insertMany([
	{
		id: 1,
		name: 'Navy Jacket',
		image: p1_img,
		new_price: 129.99,
		old_price: 199.99,
	},
	{
		id: 2,
		name: 'White Full Set',
		image: p2_img,
		new_price: 99.99,
		old_price: 149.99,
	},
	{
		id: 3,
		name: 'Nike Tank Top',
		image: p3_img,
		new_price: 64.99,
		old_price: 99.99,
	},
	{
		id: 4,
		name: 'Gray Full Set',
		image: p4_img,
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
})

await User.create({
	firstName: 'Elijah',
	lastName: 'Holt',
	email: 'eholt@testmail.com',
	password: 'password12345',
})

console.log('users seeded')

process.exit()


