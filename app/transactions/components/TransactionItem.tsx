import Link from 'next/link';
import DeleteButton from '@/app/transactions/components/DeleteButton';
import { format } from 'date-fns'
import { FaPencilAlt } from 'react-icons/fa'

const TransactionItem = ({ id, remarks, transactionType, transactionDateTime, user }: any) => {
	return (
		<tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
			<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{user.name}</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{format(transactionDateTime, 'yyyy-MM-dd H:i:s')}</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{remarks}</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{transactionType}</td>
			<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
				<button
					className="text-teal-500 mr-2">
					<Link href={`/transactions/update/${id}`}>
						<FaPencilAlt />
					</Link>
				</button>
				<DeleteButton
					id={id} />
			</td>
		</tr>
	)
}

export default TransactionItem