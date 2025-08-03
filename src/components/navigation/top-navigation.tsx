import Link from "next/link";

function TopNavigation() {
  return (
    <div className="navbar bg-primary shadow-0 2xl:px-[30rem]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-transparent rounded-box z-1 mt-3 w-52 p-2 shadow-0 text-secondary"
          >
            <li className="text-[#114243] hover:text-secondary">
              <Link href="" className="text-[#114243] hover:text-secondary">Features</Link>
            </li>
            <li>
            <Link href="" className="text-[#114243] hover:text-secondary">Pricing</Link>
            </li>
            <li>
            <Link href="" className="text-[#114243] hover:text-secondary">Developers</Link>
            </li>
            <li>
            <Link href="" className="text-[#114243] hover:text-secondary">Support</Link>
            </li>
           
           
          </ul>
        </div>
        <a className="cursor-pointer text-xl">
          <img
            src="/logos/logo-text.png"
            alt="Logo"
            className="h-12 inline-block mr-2"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Developers</a>
            </li>
            <li>
              <a>Support</a>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="" className="btn bg-secondary text-primary border-0 hover:transition-all hover:scale-105 rounded-lg px-6 font-bold">Get Started</Link>
      </div>
    </div>
  );
}

export default TopNavigation;
