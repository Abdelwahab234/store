
import "./../../public/styles/navbar.css"
import logo from "./../../public/—Pngtree—11 glowing blue orb mystic_23101868.png"
export default function NavBar(){ 

    let section :any = document.querySelector(".section");
    let  products:any = document.querySelector(".products-page");
    console.log(section, products)

    return(
       
            <nav>
            <img className="logo" src={logo} alt="" />


            <ul>
           
                <li> <span  onClick={() => window.scrollTo({
  top: 0,

  behavior: "smooth",
})}> Home </span></li>
                <li> <span  onClick={() => window.scrollTo({
  top: 619.20001220703125,

  behavior: "smooth",
})}> Products </span></li>
                <li> <span  onClick={() => window.scrollTo({
  top: 2951.199951171875,

  behavior: "smooth",
})}> About </span></li>
          
             
            </ul>








            </nav>
        
        
        
        
        
        
        
        
        
        
        
        


    )

}