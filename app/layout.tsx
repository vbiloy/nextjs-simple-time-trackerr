import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/app/components/NavBar'
import SideBar from '@/app/components/SideBar'
import AuthProvider from '@/app/components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'TimeTracker',
	description: 'TimeTracker',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>
					<NavBar />
					<main className="container mx-auto">
						<div className="flex flex-row">
							<div className="basis-1/4 pr-5">
								<SideBar />
							</div>
							<div className="basis-3/4 p-5">{children}</div>
						</div>
					</main>
				</AuthProvider>
			</body>
		</html>
	)
}
