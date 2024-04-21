import {FaInstagram,FaDribbble,FaTwitter,FaLinkedin,FaFacebook} from "react-icons/fa"
function Footer() {
  return (
    <div className="bg-black text-[white] grid md:grid-cols-5 md:ml-20 mt-4 mb-4 pl-10 md:pl-0 pr-10 md:pr-0">
        <div className="">
            <h2 className="text-[green] font-bold text-2xl">Yark.</h2>
            <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
               Debitis, tenetur? Illum nulla quidem est dolor at rem iure 
               reiciendis, voluptatibus dicta maxime voluptatem odio.</p>
               <div className="flex md:grid-cols-5 mt-4 gap-6 ml-0">
                 <FaInstagram/>
                 <FaFacebook/>
                 <FaTwitter/>
                 <FaDribbble/>
                </div>
        </div>  
          <div className="md:ml-40 mt-4 md:block hidden">
            <span>Solutions</span>
            <ul>
                <li>Analytics</li>
                <li>Marketing</li>
                <li>Commerce</li>
                <li>Insights</li>
            </ul>
        </div>
        <div className="md:block ml-40 mt-4 hidden">
            <span>Support</span>
            <ul>
                <li>Pricing</li>
                <li>Documentation</li>
                <li>API Status</li>
                <li>Guides</li>
            </ul>
        </div>
        <div className="ml-40 mt-4 hidden md:block">
            <span>Support</span>
            <ul>
                <li>Pricing</li>
                <li>Documentation</li>
                <li>API Status</li>
                <li>Guides</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer