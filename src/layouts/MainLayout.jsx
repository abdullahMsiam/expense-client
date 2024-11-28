import { Link, Outlet } from "react-router-dom";
import { CiTextAlignLeft } from "react-icons/ci";
import { BsBarChartFill, BsFillWalletFill, BsPersonSquare } from "react-icons/bs";
import { SlGraph } from "react-icons/sl";

const MainLayout = () => {

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Main content */}
                    <div className="">
                        <Outlet />
                    </div>
                    <label htmlFor="my-drawer-2" className=" lg:hidden top-0 fixed w-full">
                        <div className="navbar bg-primary text-primary-content h-12">
                            <details className="dropdown">
                                <summary className="btn btn-primary text-xl m-1"> <CiTextAlignLeft /> </summary>
                                <ul className="menu dropdown-content bg-primary rounded-box z-[1] w-52 p-2 shadow">
                                    <li className="w-full">
                                        <Link to={"/"}>Dashboard</Link>
                                    </li>
                                    <li className="w-full">
                                        <Link to={"/profile"}>Profile</Link>
                                    </li>
                                </ul>
                            </details>
                            <h1 className="ms-16 font-mono font-bold"><Link to={"/"}>Expense Manage</Link></h1>
                        </div>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-primary text-white min-h-full w-64 p-4">
                        {/* Sidebar content here */}

                        <li className=" font-mono font-bold text-xl my-2 "><Link className="flex gap-3 justify-center" to={"/"}>Expense Manage <SlGraph /> </Link></li>
                        <li className="w-full">
                            <Link className="flex justify-between" to={"/"}>Dashboard <BsBarChartFill /></Link>
                        </li>
                        <li className="w-full ">
                            <Link className="flex justify-between" to={"/profile"}>Profile <BsPersonSquare /> </Link>
                        </li>
                        <li className="w-full ">
                            <Link className="flex justify-between" to={"/wallets"}>Wallets <BsFillWalletFill /> </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;