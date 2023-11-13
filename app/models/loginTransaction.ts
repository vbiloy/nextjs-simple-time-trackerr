import { prisma } from "@/utils/db"

export const getTransation = (id: string) => {
	const response = prisma.loginTransaction.findFirst({ where: { id: parseInt(id) } });

	return response;
}

export const getTransations = () => {
	const response = prisma.loginTransaction.findMany({
		include: {
			user: true,
		},
	});

	return response
}

export const getTransationsByUserId = (userId: string) => {
	const response = prisma.loginTransaction.findMany({ where: { userId: parseInt(userId) } });

	return response
}