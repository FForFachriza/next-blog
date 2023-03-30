import Link from "next/link";
import { GiBookshelf } from "react-icons/gi";

async function getCategories() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/categories?populate=*", {
    cache: "no-store",
    next: {
      revalidate: 0,
    },
  });
  return response.json();
}

export default async function Navbar() {
  const categories = await getCategories();
  return (
    <navbar className="navbar sticky top-0 z-[9999] backdrop-blur-sm">
      <div className="navbar-start ">
        <div className="text-2xl btn btn-ghost btn-md rounded-btn">
          <div className="flex flex-row space-x-4">
            <GiBookshelf />
            <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-black">Dim's UI</h1>
          </div>
        </div>
      </div>
      <div className="navbar-end ">
        <Link href="/" className="btn btn-ghost btn-md rounded-btn">
          Home
        </Link>
        <Link href="/about" className="btn btn-ghost btn-md rounded-btn">
          About
        </Link>
        <Link href="/contact" className="btn btn-ghost btn-md rounded-btn">
          Contact
        </Link>
        <Dropdown categories={categories} />
      </div>
    </navbar>
  );
}

const Dropdown = ({ categories }) => {
  return (
    <ul className="menu menu-horizontal btn btn-ghost btn-md rounded-btn px-1">
      <li tabIndex={0}>
        <a>
          Categories
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </a>
        <ul className="p-2 shadow-lg">
          {categories.data?.map((data, index) => {
            return (
              <li key={index}>
                <Link legacyBehavior href={`/category/${data.attributes.slug}`}>
                  <a>{data.attributes.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    </ul>
  );
};
