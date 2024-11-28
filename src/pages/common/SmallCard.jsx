/* eslint-disable react/prop-types */

const SmallCard = (props) => {
    const { value, avg, title } = props
    // console.log(props)
    return (
        <div className="w-96 md:w-60 h-32 mx-auto p-3 bg-slate-200">
            <p className="text-lg">Total {title}</p>
            <p className="text-2xl font-semibold text-primary">$ {value} </p>
            <hr className="border border-black" />
            <p className="mt-2">The avg is $ {avg}</p>
        </div>
    );
};

export default SmallCard;