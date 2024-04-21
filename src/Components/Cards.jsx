import Cardsimg from "./datanalytics.jpg";
function Cards() {
  return (
    <div className="w-full bg-white px-10 py-20">
    <div className="w-full grid md:grid-cols-3 gap-8">
        <div className="w-full my-10 border rounded-lg shadow-xl hover:scale-105 duration-500 hover:cursor-pointer">
            <img src={Cardsimg} alt="cards-img" className="pl-30 w-20 mt-[-3rem] mx-auto"/>
            <h1 className="text-bold text-center text-3xl">Single User</h1>
            <p className="text-3xl font-bold text-center border-b py-2">$145</p>
            <div className="text-center py-2">
                <p className="py-2 border-b">Data Storage</p>
                <p className="py-2 border-b">1 Granted User</p>
                <p className="py-2 border-b">Sent upto 2 GB</p>
                <button className="px-2 my-4 rounded-md bg-green-300 text-black font-bold text-2xl hover:text-[green] hover:bg-black">Start Trail</button>
            </div>
        </div>
        <div className="w-full my-10 border rounded-lg shadow-xl hover:scale-105 duration-500 hover:cursor-pointer">
            <img src={Cardsimg} alt="cards-img" className="pl-30 w-20 mt-[-3rem] mx-auto"/>
            <h1 className="text-bold text-center text-3xl">Single User</h1>
            <p className="text-3xl font-bold text-center border-b mt-2">$145</p>
            <div className="text-center py-2">
                <p className="py-2 border-b">Data Storage</p>
                <p className="py-2 border-b">1 Granted User</p>
                <p className="py-3 border-b">Sent upto 2 GB</p>
                <button className="px-2 my-4 rounded-md bg-green-300 text-black font-bold text-2xl hover:text-[green] hover:bg-black">Start Trail</button>
            </div>
        </div>
        <div className="w-full my-10 border rounded-lg shadow-xl hover:scale-105 duration-500 hover:cursor-pointer">
            <img src={Cardsimg} alt="cards-img" className="pl-30 w-20 mt-[-3rem] mx-auto"/>
            <h1 className="text-bold text-center text-3xl">Single User</h1>
            <p className="font-bold text-center text-3xl py-2 border-b">$145</p>
            <div className="text-center">
                <p className="py-2 border-b">Data Storage</p>
                <p className="py-2 border-b">1 Granted User</p>
                <p className="py-2 border-b">Sent upto 2 GB</p>
                <button className="bg-green-300 text-2xl font-bold rounded-md px-2 my-4 text-black hover:bg-black hover:text-[green]">Start Trail</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Cards