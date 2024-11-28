import { useEffect, useState } from "react";
import WalletCard from "../common/WalletCard";

const Wallets = () => {
    const [wallets, setWallets] = useState();
    const [walletData, setWalletData] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await fetch("http://localhost:8080/wallets");
            const data = await res.json();
            const wN = [...new Set(data.map(w => w.name))];
            setWalletData(wN)
            setWallets(data);
            setLoading(false)
        }

        fetchData()
    }, []);


    console.log(walletData && walletData.length)

    if (loading) {
        return (
            <>loading...</>
        )
    }
    return (
        <div className="mx-auto max-w-screen-lg mt-16 md:mt-8">
            <h1 className="text-center text-xl font-bold">All My Wallets</h1>
            <div className="grid grid-cols-1 gap-8">
                {walletData && walletData.map((wallet, index) => (<WalletCard key={index} walletName={wallet} wallets={wallets} />))}
            </div>
        </div>
    );
};

export default Wallets;