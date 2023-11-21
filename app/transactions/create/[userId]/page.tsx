import { createLog } from '@/app/transactions/actions'
import { getUser } from '@/app/models/user'
import SubmitButton from '@/app/components/SubmitButton'
import Link from 'next/link'
import { FaArrowLeft } from "react-icons/fa"

const CreatePage = async ({ params }: { params: { userId: string } }) => {
	const user = await getUser(params.userId);
	const types = ["CHECK_IN", "CHECK_OUT", "BREAK"]
	const { id, name } = {...user};

	return (
		<>
			<form
				action={createLog}>
				<div
					className="mb-6">
					<label
						htmlFor="name"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
						defaultValue={name??''}
						readOnly
						required />
				</div>
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
								key={type}
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
					defaultValue={id}
				/>
				<button
					className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mr-2"
					type="button"
				>
					<Link href={`/users`}>
						<FaArrowLeft size={20} /> 
					</Link>
				</button>
				<SubmitButton />
			</form>
		</>
	);
}

export default CreatePage

