import Link from "next/link";
import { GiBookshelf } from "react-icons/gi";

export default function Navbar() {
  return (
    <navbar className="navbar bg-base-100">
      <div className="navbar-start ">
        <div className="text-2xl btn btn-ghost btn-md rounded-btn">
          <div className="flex flex-row space-x-4">
            <GiBookshelf />
            <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-black">Dim's UI</h1>
          </div>
        </div>
      </div>
      <div className="navbar-end  font-extrabold">
        <Link href="/" className="btn btn-ghost btn-md rounded-btn">
          Home
        </Link>
        <Link href="/about" className="btn btn-ghost btn-md rounded-btn">
          About
        </Link>
        <Link href="/contact" className="btn btn-ghost btn-md rounded-btn">
          Contact
        </Link>
      </div>
    </navbar>
  );
}
