import { Route, Routes } from 'react-router-dom'
import TopNavbar from './components/TopNavbar'
import Home from './containers/Home'

function App() {
	return (
		<>
        <TopNavbar />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</>
	)
}

export default App
