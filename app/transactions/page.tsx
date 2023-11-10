import { getTransations } from '@/app/models/loginTransaction'
import TransactionList from '@/app/transactions/components/TransactionList'

export default async function Transactions() {
	const transactions = await getTransations();

	return (
		<TransactionList 
			transactions={transactions}
		/>
	)
}
