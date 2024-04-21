function NewsLetter() {
  return (
    <div className="text-white flex sm:px-20 pt-10 justify-between items-center">
      <div className="md:flex">
        <p><span className="bold text-2xl flex md:text-1xl px-0">Want tips & Tricks to optimize your flow</span>Sign up to your newsletter and stay up-to-date</p>
        <div className="flex-col px-15 mt-2 mx-10">
            <input type="text" className="bg-white w-30 text-black opacity-0.5 border-r rounded-md" name="email" required placeholder="email" value="Enter your email here"/>
            <button type="submit" className="text-black bg-green-300 rounded-md mx-3 px-5 mt-4 hover:text-[green] hover:border hover:bg-black">Notify Me</button>
            <p className="mt-10 my-5"><span className="flex">We care about the protection of the policy</span><a href="#" className="text-[limegreen] underline">Privacy Policy</a></p>
          </div>
      </div>
    </div>
  )
}

export default NewsLetter