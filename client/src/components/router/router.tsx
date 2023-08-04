import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/layout';
import Home from '../home/home';
import LoginForm from '../login/loginForm';
import Mealplanner from '../mealplanner/mealplanner';
import NotFound from '../not_found/not_found';

export const Router: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='login' element={<LoginForm />} />
				<Route path='mealplanner' element={<Mealplanner />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
};

export default Router;
