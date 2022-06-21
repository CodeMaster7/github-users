import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

function TopNavbar() {
	return (
		<Navbar bg='light' variant='light'>
			<Container>
				<Navbar.Brand as={Link} to='/'>Github</Navbar.Brand>
				<Nav className='me-auto'>
					<Nav.Link as={Link} to='/'>Home</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	)
}
export default TopNavbar
