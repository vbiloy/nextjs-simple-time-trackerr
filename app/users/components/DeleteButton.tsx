'use client'

import { deleteUserById } from '@/app/users/actions'
import { useTransition } from 'react'
import { FaSpinner, FaTrash } from 'react-icons/fa'

const DeleteButton = ({ id }: { id: number }) => {
    const [isPending, startTransition] = useTransition()
	console.log(id);
    const onDelete = () => {
        if (confirm('Are you sure want to delete this?')) {
            startTransition(() => {
                deleteUserById(id)
            })
        }
    }

    return (
		<button 
			className="text-red-400"
			onClick={onDelete} 
			disabled={isPending}>
				{!isPending ? 
				(<FaTrash />) : 
				(<div className="animate-spin"><FaSpinner /></div>)}
		</button>
    )
}

export default DeleteButton