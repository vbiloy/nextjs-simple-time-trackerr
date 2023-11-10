import { getTransationsByUserId } from '@/app/models/loginTransaction'
import TransactionList from '@/app/transactions/components/TransactionList'
import Link from 'next/link';

const TransactionsPage = async ({ params }: { params: { userId: string } }) => {
	const transactions = await getTransationsByUserId(params.userId);

	return (
		<>
			<TransactionList 
				transactions={transactions}
			/>
		</>
	)
}

export default TransactionsPage
