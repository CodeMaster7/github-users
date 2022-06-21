import { Card } from 'react-bootstrap'

function UserCard({ user }) {
	return (
		<Card className='mx-auto mt-5' style={{ width: '18rem' }}>
			<Card.Img
				variant='top'
				src={user ? `${user.avatar_url}`: 'https://react.semantic-ui.com/images/avatar/large/matthew.png'}
			/>
			<Card.Body>
				<Card.Title>{user.login}</Card.Title>
				<Card.Text>
					{user.bio}
				</Card.Text>
			</Card.Body>
		</Card>
	)
}
export default UserCard
