import Dashboard_data_analytics from "./datanalytics.jpg";
function Dashboard() {
  return (
    <div className="bg-white justify-between mt-[-50px] md:px-20 pt-2 pb-3">
      <div className="w-full h-full pt-10 md:flex">
        <img src={Dashboard_data_analytics} alt="dashboard-data-analaytics" width={300} height={300} className="pl-20"/>
        <div className="pl-10">
          <span className="text-[green]">Data Analytics</span> 
          <h2 className="text-4xl md:text-2xl sm:text-1xl">Manage your Data Analytics</h2> 
          <p className="justify-between mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing 
             elit. Soluta explicabo tempore accusamus debitis 
             omnis blanditiis provident mollitia reprehenderit 
             assumenda eius maiores repellendus excepturi porro, 
             dolorem nam pariatur? Quod nemo cumque recusandae in 
             quos veritatis natus explicabo commodi nulla, minima 
             quae nisi culpa modi ad quis rerum. Facere natus quae quas?</p>
          <button type="submit" className="border border-r-green-400 rounded-md bg-red-600 px-3 hover:border hover:text-[red] hover:bg-black">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard