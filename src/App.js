import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/contact/Contact';
import ProfileCard from './pages/ProfileCard/ProfileCard';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<ProfileCard />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
