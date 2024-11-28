import { HiBanknotes } from "react-icons/hi2";
import { SlGraph } from "react-icons/sl";


const WalletCard = (params) => {
    const { wallets, walletName } = params;

    const items = wallets.filter(item => item.name === walletName);
    const balanceArr = [...new Set(items.map(w => w.balance))];
    // const currency = [...new Set(items.map(w => w.currency))];

    const balance = balanceArr.reduce((acc, num) => {
        const result = (acc + num)
        return parseInt(result)
    })

    const latestWallet = items.reduce((latest, current) => {
        return new Date(current.createdAt) > new Date(latest.createdAt) ? current : latest;
    });

    // console.log(params)
    // console.log(balance, currency, latestWallet.createdAt)
    return (
        <div className="md:w-8/12 mx-auto border-2 mt-2 rounded-lg bg-slate-100 p-2">
            <div>
                <h1 className="bg-primary text-white font-semibold text-xl flex items-center gap-2 rounded-lg p-4"><HiBanknotes /> {walletName.toUpperCase()}</h1>
            </div>
            <div className="h-40 md:h-32 mt-2 flex flex-row w-full gap-4">
                <div>
                    <h1 className="font-semibold text-2xl">Total Balance is $<span className="text-red-600">{balance}</span></h1>
                    <h1 className="text-8xl ms-3 text-primary"> <SlGraph /> </h1>
                </div>
                <div className="divider divider-horizontal divider-primary" ></div>
                <div>
                    <h1 className="font-semibold text-2xl">The last Transaction</h1>
                    <p className="ms-2">Date: {latestWallet.createdAt.slice(0, 10)}</p>
                    <p className="ms-2">Balance: ${latestWallet.balance}</p>
                    <p className="ms-2">TrxID: {latestWallet.id.slice(0, 10)}</p>
                    <p className="ms-2">Time: {latestWallet.createdAt.slice(11, 16)}</p>
                </div>
            </div>


        </div>
    );
};

export default WalletCard;