import { Form, InputGroup, Button } from 'react-bootstrap'

function Search() {
  return (
		<Form className='w-50 mx-auto mt-5 d-flex'>
			<InputGroup size='lg'>
				<Form.Control
					aria-label='Large'
					aria-describedby='inputGroup-sizing-sm'
				/>
			</InputGroup>
				<Button className='ms-3' variant='primary'>Search</Button>
		</Form>
  )
}
export default Search