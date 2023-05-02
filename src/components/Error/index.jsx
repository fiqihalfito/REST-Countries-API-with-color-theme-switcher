const ErrorCard = ({ message }) => {
    return (
        <div className="flex justify-center">
            <p className="text-red-500 font-extrabold">{message}</p>
        </div>
    )
}

export default ErrorCard