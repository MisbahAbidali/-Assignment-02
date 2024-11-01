




import Link from "next/link";

export default function Home() {
    return (
    <div>
    <main className="flex flex-col items-center justify-between">
      <div className="w-full">
        <div className="absolute -z-10 w-full">
          <img src="/paint.colors.avif" alt="background image" width={1500} height={1000}></img>
        </div>
      </div>
    </main>
      
      <div>
    <ul className="flex gap-10 bg-pink-500 p-[15px]">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact-us">Contact us</Link></li>
    </ul>
      <h1>This is my contact us page!</h1>
   <div>
       <section className="padding: 12px 35px border-radius: 40px pl-[430px] pt-[500px] my-[2%]">
         <a href="/" className="btn-box">Go to Home</a>
       </section>
   </div>
   
   </div>
   
   <ul className="flex gap-10 bg-pink-500 p-[15px]">
   <li><Link href="/">Footer</Link></li>
   
   </ul>

      </div>
    );
  }
  