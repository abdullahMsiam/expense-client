import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dImg from '../../assets/user.png'

const Profile = () => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const res = await fetch("http://localhost:8080/users");
            const data = await res.json();
            setUser(...data)
            setLoading(false)
        }
        fetchData()
    }, [])
    if (user) {
        console.log(user.name);
    }
    if (loading) {
        return (
            <>loading....</>
        )
    }
    return (
        <div className="mx-auto max-w-screen-lg mt-16 md:mt-8">
            {/* profile information */}
            <div className="bg-slate-100 py-4">
                <div className="flex justify-between mx-4">
                    <h1 className="text-lg font-bold">Profile Info</h1>
                    <button className="btn btn-primary btn-sm btn-outline"><Link>Edit</Link></button>
                </div>
                <div className="flex flex-col items-center">
                    <img className="rounded-full w-16" src={user?.img || dImg} alt="" />
                    <p className="text-lg font-semibold">Welcome, {user?.name}  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 justify-items-start bg-slate-50 mt-3 mx-8 p-3 rounded-md gap-2">
                    <div>
                        <h1 className="text-gray-700">User Id:</h1>
                        <h1 className=" font-semibold ms-1">{user?.id.slice(-6)}</h1>
                    </div>
                    <div>
                        <h1 className="text-gray-700">Email Address:</h1>
                        <h1 className=" font-semibold ms-1">{user?.email}</h1>
                    </div>
                    <div>
                        <h1 className="text-gray-700">Country:</h1>
                        <h1 className=" font-semibold ms-1">{user?.country}</h1>
                    </div>
                    <div>
                        <h1 className="text-gray-700">Joined At:</h1>
                        <h1 className=" font-semibold ms-1">{user?.createdAt.slice(0, 10)}</h1>
                    </div>
                    <div>
                        <h1 className="text-gray-700">Account Type:</h1>
                        <h1 className=" font-semibold ms-1">Only personal</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;