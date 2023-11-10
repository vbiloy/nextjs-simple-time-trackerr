import { updateLog } from '@/app/transactions/actions'
import { getTransation } from '@/app/models/loginTransaction'
import { prisma } from "@/utils/db"
import Link from 'next/link'

const UpdatePage = async ({ params }: { params: { id: string } }) => {
	const transaction = await getTransation(params.id);
	const { id, remarks, transactionType, userId } = {...transaction};
	const types = ["CHECK-IN","CHECK-OUT","BREAK"]

	return (
		<>
			<form
				action={updateLog}>
				<div
					className="mb-6">
					<label
						htmlFor="remarks"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Remarks
					</label>
					<input
						className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
						type="text"
						id="remarks"
						name="remarks"
						defaultValue={remarks ?? ''}
						required />
				</div>
				<div
					className="mb-6">
					<label
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						htmlFor="type">
						Type
					</label>
					<select
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						id="type"
						name="type">
						{types.map(type => (
							<option
								defaultValue={type}
								selected={type == transactionType}>
								{type}
							</option>
						))}
					</select>
				</div>
				<input
					type="hidden"
					id="logId"
					name="logId"
					defaultValue={id}
				/>
				<input
					type="hidden"
					id="userId"
					name="userId"
					defaultValue={userId}
				/>
				<button
					className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mr-2"
					type="button"
				>
					<Link href={`/transactions`}>
						Back
					</Link>
				</button>
				<button
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					type="submit"
				>Save
				</button>
			</form>
		</>
	);
}

export default UpdatePage

