import { Link, Outlet } from "react-router-dom";

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
                        <div className="navbar bg-primary text-primary-content">
                            <button className="btn btn-ghost text-xl">daisyUI</button>
                        </div>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-primary text-white min-h-full w-64 p-4">
                        {/* Sidebar content here */}
                        <li>
                            <Link to={"/profile"}>Profile</Link>
                        </li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;