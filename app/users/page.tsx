import { getUsers } from '@/app/models/user'
import UserList from '@/app/users/components/UserList'

export default async function Users() {
	const users = await getUsers();

	return (
		<UserList 
			users={users}
		/>
	)
}
