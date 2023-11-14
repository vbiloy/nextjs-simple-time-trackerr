'use client'

import { useFormStatus } from "react-dom";
import { FaSpinner, FaSave } from "react-icons/fa"

const SubmitButton = () => {
	const { pending } = useFormStatus();

	return (
		<button
			className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			type="submit"
			aria-disabled={pending}
			disabled={pending}
		>{pending ? (<div className="animate-spin"><FaSpinner size={20} /></div>) : <FaSave size={20} />}
		</button>
	)
	 
}

export default SubmitButton