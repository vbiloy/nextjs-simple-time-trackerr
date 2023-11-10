import Link from 'next/link';
import { User } from "@prisma/client";
import DeleteButton from '@/app/users/components/DeleteButton';
import { FaBook, FaPencilAlt } from 'react-icons/fa'

const UserItem = ({ id, name, email, role, title, status }: User) => {
	return (
		<tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
				<Link href={`/transactions/create/${id}`}>
					<p className="text-blue-600">{name}</p>
				</Link>
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{email}</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{role}</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{title}</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
				{status == 'CHECK-IN' ?
					(<span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">{status}</span>) :
					status == 'BREAK' ?
						(<span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">{status}</span>) : 
						(<span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">{status}</span>)
				}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">


				<button
					className="text-blue-500 mr-2">
					<Link href={`/transactions/user/${id}`}>
						<FaBook />
					</Link>
				</button>
				<button
					className="text-teal-500 mr-2">
					<Link href={`/users/update/${id}`}>
						<FaPencilAlt />
					</Link>
				</button>
				<DeleteButton
					id={id} />


			</td>
		</tr>
	)
}

export default UserItem