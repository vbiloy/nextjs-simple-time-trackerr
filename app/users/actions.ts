'use server'

import { prisma } from "@/utils/db"
import { revalidatePath } from 'next/cache'
import { redirect } from "next/navigation";

export const createUser = async (data: FormData) => {
	const email = data.get("email");
	const password = data.get("password");
	const name = data.get("name");
	const title = data.get("title");
	
  
	if (typeof email !== "string") {
	  	throw new Error("Invalid email");
	}
	if (typeof password !== "string") {
		throw new Error("Invalid password");
	}
	if (typeof name !== "string") {
		throw new Error("Invalid name");
	}
	if (typeof title !== "string") {
		throw new Error("Invalid title");
	}
  
  
	await prisma.user.create({
		data: {
			email: email as string,
			password: password as string,
			name: name as string,
			title: title as string,
			status: 'CHECK-IN',
			role: 'STAFF',
		},
	});
	
	redirect("/users");
}

export const updateUser = async (data: FormData) => {
	const userId = parseInt(data.get('userId') as string);
	const email = data.get("email");
	const password = data.get("password");
	const name = data.get("name");
	const title = data.get("title");
	
  
	if (typeof email !== "string") {
	  	throw new Error("Invalid email");
	}
	if (typeof password !== "string") {
		throw new Error("Invalid password");
	}
	if (typeof name !== "string") {
		throw new Error("Invalid name");
	}
	if (typeof title !== "string") {
		throw new Error("Invalid title");
	}
  
  
	await prisma.user.update({
		where: { id: userId },
		data: {
			email: email as string,
			password: password as string,
			name: name as string,
			title: title as string,
		},
	});
	
	redirect("/users");
}

export const deleteUserById = async(id: number) => {
    await prisma.user.delete({ where: { id: id } })

	revalidatePath("/users");
}

export const getUserById = async(id: number) => {
    await prisma.user.delete({ where: { id: id } })


}