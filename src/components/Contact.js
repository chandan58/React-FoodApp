const Contact = () =>{
    return (
        <div>
        <div className="flex justify-center p-4 m-4 bg-amber-200 text-2xl font-bold">Contact Us</div>
        <form className="flex justify-center p-4 m-4 bg-amber-200 text-2xl font-bold">
            <input type="text" placeholder="Name" className="p-2 m-2 border-gray-300 border-b-2" />
            <input type="email" placeholder="Email" className="p-2 m-2 border-gray-300 border-b-2" />
            <input type="number" placeholder="Phone" className="p-2 m-2 border-gray-300 border-b-2" />
            <button className="p-2 m-2 border-gray-300 border-b-2 bg-black text-white">Submit</button>
        </form>
        </div>
    )
}
export default Contact