'use client'

import Image from 'next/image'
import googleSvg from "@/public/google.svg";
import { signIn } from "next-auth/react"
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Login() {
	return (

		<div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
			<div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
				<div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
					<div className="rounded-xl bg-white shadow-xl">
						<div className="p-6 sm:p-16">
							<div className="space-y-4">
								<h2 className="mb-8 text-2xl text-cyan-900 font-bold text-center">Sign in to unlock the TimeTracker</h2>
							</div>
							<div className="mt-16 grid space-y-4">
								<button onClick={() => signIn('google')} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
									<div className="relative flex items-center space-x-4 justify-center">
										<Image src={googleSvg} className="absolute left-0 w-5" alt="google logo" />
										<span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
									</div>
								</button>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>

	)
}
