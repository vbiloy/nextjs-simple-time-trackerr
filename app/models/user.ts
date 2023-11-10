import { prisma } from "@/utils/db"

export const getUser = (id: string) => {
	const response = prisma.user.findFirst({ where: { id: parseInt(id) } });

	return response;
}

export const getUsers = () => {
	const response = prisma.user.findMany();

	return response
}