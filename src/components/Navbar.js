import {SignInButton, currentUser} from "@clerk/nextjs"
import { SignedIn, UserButton, SignedOut} from "@clerk/nextjs/app-beta";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
async function Navbar() {
const user = await currentUser();

  return (
    <div className="z-10 w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex">
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        {user ? (
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="/dashboard">Siswa</Link></li>
            </ul>
          ) : null}
      </div>
      <Link href="/" className="btn btn-ghost normal-case text-xl">SI - <span className="text-primary">Siswa</span></Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      {user ? (<ul className="menu menu-horizontal px-1">
        <li><Link href="/dashboard">Siswa</Link></li>
      </ul>
      ) : null}
    </div>
    <div className="navbar-end">
    <SignedIn><UserButton afterSignOutUrl="/"/></SignedIn>
        <SignedOut>
          <SignInButton 
            afterSignIn="/"
            afterSignUp="/"
            mode='modal'
          />
        </SignedOut>
    </div>
    <ThemeToggle /> 
  </div>
  </div>
  );
};
export default Navbar;