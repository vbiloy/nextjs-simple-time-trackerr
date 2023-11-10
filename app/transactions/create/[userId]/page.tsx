'use client'

import { createLog } from '@/app/transactions/actions'
import Link from 'next/link'

const CreatePage = async ({ params }: { params: { userId: string } }) => {
	const types = ["CHECK-IN", "CHECK-OUT", "BREAK"]


	return (
		<>
			<form
				action={createLog}>
				<div
					className="mb-6">
					<label
						htmlFor="remarks"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Remarks
					</label>
					<input
						type="text"
						id="remarks"
						name="remarks"
						className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
						required />
				</div>
				<div
					className="mb-6">
					<label
						htmlFor="type"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Type
					</label>
					<select
						id="type"
						name="type"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
						{types.map(type => (
							<option
								defaultValue={type}>
								{type}
							</option>
						))}
					</select>
				</div>
				<input
					type="hidden"
					id="userId"
					name="userId"
					value={params.userId}
				/>
				<button
					className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mr-2"
					type="button"
				>
					<Link href={`/users`}>
						Back
					</Link>
				</button>
				<button
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>Submit
				</button>
			</form>
		</>
	);
}

export default CreatePage

