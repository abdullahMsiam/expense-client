

const CategoryCard = (info) => {
    const { info: { name }, expenses, category } = info;
    const items = expenses.filter(item => item.category === category);
    // console.log(items)

    return (
        <div className="w-48 md:w-64 bg-slate-100 p-4 h-80 rounded-md">
            <h1 className="text-lg font-bold text-primary">{name}</h1>
            <hr className="border border-black" />
            <div className="overflow-y-auto h-64">

                {
                    items.map((item, index) => (
                        <ol className="list-[square] px-4" key={index}>
                            <li >${item.amount} <span className="ms-10">{item.date.slice(0, 10)}</span></li>
                        </ol>
                    ))
                }

            </div>
        </div>
    );
};

export default CategoryCard;