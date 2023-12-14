import './App.css';
import Navbar from './Components/Navbar/navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Footer from './Components/Footer/footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';


function App() {
  return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Shop />} />
					<Route
						path='/men'
						element={<ShopCategory banner={men_banner} category='men' />}
					/>
					<Route
						path='/women'
						element={<ShopCategory banner={women_banner} category='women' />}
					/>
					<Route
						path='/kids'
						element={<ShopCategory banner={kids_banner} category='kids' />}
					/>
					<Route path='/product' element={<Product />}>
						<Route path=':productId' element={<Product />} />
					</Route>
					<Route path='/cart' element={<Cart />} />
					<Route path='login' element={<Login />} />
					<Route path='signup' element={<SignUp />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	)
}

export default App;
