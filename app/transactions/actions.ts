'use server'

import { prisma } from "@/utils/db"
import { revalidatePath } from 'next/cache'
import { redirect } from "next/navigation";

enum Type {
	CHECK_IN = 'CHECK_IN',
	CHECK_OUT = 'CHECK_OUT',
	BREAK = 'BREAK',
}

export const createLog = async (data: FormData) => {
	const userId = parseInt(data.get('userId') as string);
	const remarks = data.get("remarks");
	const type = data.get("type");
	
	
  
	if (typeof remarks !== "string") {
	  throw new Error("Invalid remarks");
	}
  
  
	await prisma.loginTransaction.create({
	  data: {
		remarks: remarks as string,
		userId: userId,
		transactionType: type as Type,
	  },
	});

	await prisma.user.update({
		where: { id: userId },
		data: {
			status: type as Type
		},
	});
	
	redirect("/transactions");
}

export const updateLog = async (data: FormData) => {
	const logId = parseInt(data.get('logId') as string);
	const userId = parseInt(data.get('userId') as string);
	const remarks = data.get("remarks");
	const type = data.get("type");
	
  
	if (typeof remarks !== "string") {
	  throw new Error("Invalid remarks");
	}
  
  
	await prisma.loginTransaction.update({
		where: { id: logId },
		data: {
			remarks: remarks as string,
			userId: userId,
			transactionType: type as Type,
		},
	});
	
	redirect("/transactions");
}

export const deleteLogById = async(id: number) => {
    await prisma.loginTransaction.delete({ where: { id: id } })

	revalidatePath("/transactions");
}