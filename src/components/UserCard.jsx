import {Card, Button} from 'react-bootstrap'

function UserCard() {
  return (
		<Card className='mx-auto mt-5' style={{ width: '18rem' }}>
			<Card.Img
				variant='top'
				src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
			/>
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</Card.Text>
				<Button variant='primary'>View Profile</Button>
			</Card.Body>
		</Card>
  )
}
export default UserCard