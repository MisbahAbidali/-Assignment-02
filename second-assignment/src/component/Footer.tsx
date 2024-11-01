import Link from "next/link";

export default function Footer (){
    return(
        <div>
    
   <img src="https://t4.ftcdn.net/jpg/02/60/53/37/360_F_260533729_Ge1gNy5vnRm1ftRPXGLUNAb41UlTVTxb.jpg" alt="image"/>

  
   <h1 className="pl-[400px] pb-[0px]">Welcome To Home Page</h1>
  

   <p className="m-[10%]">A home page is the main web page that a visitor will view when they navigate to a website via a search engine, and it may also function as a landing page to attract visitors.[3] In some cases, the home page is a site directory, particularly when a website has multiple home pages.</p>
   <section className="padding: 12px 35px border-radius: 40px pl-[430px] pt-[1px] my-[2%]">

   <a href="/about" className="btn-box">Go to About</a>
   </section>
   <ul className="flex gap-10 bg-pink-500 p-[15px]">
   <li><Link href="/" >Footer</Link></li>
   
   </ul>
   </div>
    )
}