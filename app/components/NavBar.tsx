'use client'

import { usePathname } from 'next/navigation'
import { signOut, useSession } from "next-auth/react";
import nextSvg from "@/public/next.svg";
import { redirect } from "next/navigation";


const NavBar = () => {
	const { data: session } = useSession();
	const pathName = usePathname();
	const pathNames = pathName.split("/");
	const route = pathNames[1];

	const handleLogout = () => {
        signOut()
    }

	return (
	

		<div className="navbar bg-neutral-300">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">TimeTracker</a>
			</div>

			<div className="flex-none gap-2">
				{route != 'login' && session?.user?.name ? 
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								{session?.user?.image ? (
									<img src={session?.user?.image} alt="User Image" />
								): 
								(
									<img src={nextSvg} alt="User Image" />
								)}
							</div>
						</label>
						<ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
							<li className="disabled"><a>{session?.user?.name}</a></li>
							<li><a onClick={handleLogout}>Logout</a></li>
						</ul>
					</div> 
					: <></> 
					
				}
			</div>
		</div>
	)
}

export default NavBar