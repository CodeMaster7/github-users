import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './containers/Home'

function App() {
	const [users, setUsers] = useState([])

	const url = 'https://api.github.com/users?per_page=6'

	const getUsers = async () => {
		const response = await fetch(url)
		const FinalData = await response.json()
		setUsers(FinalData)
	}

	useEffect(() => {
		getUsers()
	}, [])

	return (
		<>
			<Routes>
				<Route path='/' element={<Home users={users}/>} />
			</Routes>
		</>
	)
}

export default App
