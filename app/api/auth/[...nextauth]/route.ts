import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
		}),
	],
	callbacks: {
		async redirect({ url, baseUrl }) {
			const retUrl = baseUrl + '/';

			console.log('url', url);
			console.log('baseUrl', baseUrl);
			console.log('retUrl', retUrl);

			return retUrl;
		}
	}
});

export { handler as GET, handler as POST };