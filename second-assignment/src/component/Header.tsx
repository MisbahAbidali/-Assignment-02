
import Link from "next/link";

export default function Header (){
    return(
        <div>
           <nav>
            <div>
                <ul>
                 <li><Link href="/">Home</Link></li>
                 <li><Link href="/about">About</Link></li>
                 <li><Link href="/contact-us">Contact us</Link></li>
                </ul>        
            </div>
            </nav>
        </div>
    )
}
















