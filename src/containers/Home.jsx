import { Form, InputGroup, Button } from 'react-bootstrap'
import { useState } from 'react'
import UserCard from '../components/UserCard'

function Home() {
	const [userInput, setUserInput] = useState('')
	const [user, setUser] = useState('[]')
	const [error, setError] = useState('')

	const handleSearch = (e) => {
		e.preventDefault()
		setUserInput(e.target.value)
	}

	const handleSubmit = () => {
		fetch(`https://api.github.com/users/${userInput}`)
			.then((res) => res.json())
			.then((data) => {
				setUser(data)
			})
	}

	return (
		<>
			<h1 className='text-center mt-5'>Github Users</h1>
			{user.login ? (
				<>
					<Form className='w-50 mx-auto mt-2 d-flex'>
						<InputGroup size='lg'>
							<Form.Control
								placeholder='Search Github User'
								aria-label='Large'
								aria-describedby='inputGroup-sizing-sm'
								onChange={handleSearch}
							/>
						</InputGroup>
						<Button
							className='ms-3'
							variant='primary'
							onClick={handleSubmit}>
							Search
						</Button>
					</Form>
					<UserCard user={user} />
				</>
			) : (
				<Form className='w-50 mx-auto mt-2 d-flex'>
					<InputGroup size='lg'>
						<Form.Control
							placeholder='Search Github User'
							aria-label='Large'
							aria-describedby='inputGroup-sizing-sm'
							onChange={handleSearch}
						/>
					</InputGroup>
					<Button
						className='ms-3'
						variant='primary'
						onClick={handleSubmit}>
						Search
					</Button>
				</Form>
			)}
		</>
	)
}
export default Home
