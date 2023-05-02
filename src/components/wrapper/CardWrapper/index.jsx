import Card from "../../Card"


const CardWrapper = ({ data }) => {
    // console.log(data);
    return (
        <div className="px-12 md:px-0 md:grid md:grid-cols-4 gap-20">
            {data?.map((item, i) => (
                <Card key={i} item={item} />
            ))}
        </div>
    )
}

export default CardWrapper