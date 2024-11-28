import { useEffect, useState } from "react";
import SmallCard from "../common/SmallCard";
import CategoryCard from "../common/CategoryCard";

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [wallets, setWallets] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [categories, setCategories] = useState([]);
    const [income, setIncome] = useState(0)
    const [expenseAmt, setExpenseAmt] = useState(0)

    //income balance fetching
    useEffect(() => {

        const fetchData = async () => {
            setLoading(true)
            const res1 = await fetch("http://localhost:8080/wallets");
            const res2 = await fetch("http://localhost:8080/expenses");
            const res3 = await fetch("http://localhost:8080/categories");
            const data1 = await res1.json();
            const data2 = await res2.json();
            const data3 = await res3.json();
            setWallets(data1);
            setExpenses(data2);
            setCategories(data3);
            setLoading(false)
        }
        fetchData();
    }, []);


    const numberArray = async (items, setIt) => {
        const numbers = await items.map(item => item.amount || item.balance)
        // console.log(numbers)

        const result = numbers.reduce((acc, num) => {
            const result = (acc + num)
            return parseInt(result)
        })
        await setIt(result)
    }
    if (loading == false) {
        numberArray(expenses, setExpenseAmt);
        numberArray(wallets, setIncome);
    }

    // console.log(categories)
    // console.log(expenses)
    // console.log(wallets)

    const avg = (income / wallets.length).toFixed(3)
    const avgExpense = (expenseAmt / expenses.length).toFixed(3)
    const balance = income - expenseAmt

    if (loading === true) {
        return (
            <>Loading.......</>
        )
    }
    return (
        <div className="mx-auto max-w-screen-lg mt-16 md:mt-8">
            <div>
                <h1 className="text-xl font-semibold">Dashboard</h1>
                <p className="text-gray-700 italic">Welcome to expense manage web portal</p>
            </div>
            <div>
                <div className="flex flex-col md:flex-row mt-8 justify-around gap-4">
                    <SmallCard
                        value={income}
                        avg={avg}
                        key={wallets.length}
                        title={"income"} />
                    <SmallCard
                        value={expenseAmt}
                        title={"Expense"}
                        avg={avgExpense}
                    />
                    <SmallCard
                        title={"main Balance"}
                        value={balance}
                        avg={"not countable"}
                    />
                    <SmallCard />
                </div>
            </div>
            <h1 className="text-center mt-8 text-2xl mb-2 font-semibold">Expense By Category</h1>
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto justify-items-center">
                {
                    categories.map(c => (
                        <CategoryCard
                            key={c.id}
                            info={c}
                            expenses={expenses}
                            category={c.name}
                        />
                    ))
                }
            </div>


        </div>
    );
};

export default Home;