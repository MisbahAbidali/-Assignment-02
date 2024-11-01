

import Link from "next/link";

export default function Home() {
    return (
      <div className="bg-black">
      
         <div>
           <ul className="flex gap-10 bg-pink-500 p-[15px]">
            <li><Link href="/">Home</Link></li>
               <li><Link href="/about">About</Link></li>
            <li><Link href="/contact-us">Contact us</Link></li>
           </ul>
      </div>
      <h1 className="pt-[40px] pl-[400px] pb-[40px]">Hello my name is Misbah!</h1>
        <div className="padding: 50px pl-[50px] pr-[50px]">
         <p className="text-color-white">An About Us page is a section on a website that provides information about a company, organization, or individual. It’s an opportunity to tell your brand’s story, share your vision or mission, introduce team members, and outline your history and achievements. This is where you build trust and credibility with customers.</p>
        </div>
         <div className="pl-[250px]">
        <img src="https://img.freepik.com/premium-photo/colorful-animal-with-black-background-word-leopard-front_901003-22240.jpg" alt="image" height="400" width="500" />
        <Link href="/contact-us">Go to contact us</Link>
        </div>
        <ul className="flex gap-10 bg-pink-500 p-[15px]">
   <li><Link href="/">Footer</Link></li>
   
   </ul>
      </div>
    );
  }
  