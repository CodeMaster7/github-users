import UserCard from '../components/UserCard'
import TopNavbar from '../components/TopNavbar'
import Search from '../components/Search'

function Home({ users }) {
	return (
		<>
			<TopNavbar />
            <Search />
			<UserCard />
		</>
	)
}
export default Home
