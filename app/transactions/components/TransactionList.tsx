import TransactionItem from '@/app/transactions/components/TransactionItem'
import { LoginTransaction } from '@prisma/client'

const TransactionList = ({ transactions }: { transactions: LoginTransaction[] }) => {
	return (
		<div className="flex flex-col">
			<div className="-m-1.5 overflow-x-auto">
				<div className="p-1.5 min-w-full inline-block align-middle">
					<div className="overflow-hidden">
						<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
							<thead>
								<tr>
									<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User ID</th>
									<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Datetime</th>
									<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Remarks</th>
									<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
									<th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
								{transactions.map(transaction => (
									<TransactionItem 
										key={transaction.id}
										{...transaction} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TransactionList