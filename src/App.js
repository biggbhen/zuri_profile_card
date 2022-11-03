import ProfileCard from './pages/ProfileCard/ProfileCard';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route path='/' element={<ProfileCard />} />
		</Routes>
	);
}

export default App;
