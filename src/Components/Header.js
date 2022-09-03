import React,{useState,useEffect,useRef} from "react";
import {Link} from 'react-router-dom';
import "../Components/Header.css";
import {items} from "./BurgerMenuItems"
import { useLocation } from "react-router-dom";
import OutsideClick from "./OutSideClick";

function Header({setChildWrapperClass,childWrapperClass}){
      const boxRef = useRef(null);
// boxOutsideClick will be true on outside click
const boxOutsideClick = OutsideClick(boxRef); 
      const location = useLocation();

      useEffect(() => {
            if(location.pathname=='/'){
                 
                  setChildWrapperClass("child_wrapper");
            }
            else{
                  setChildWrapperClass("child_wrapper color");
            }
       
      }, [location]);
    
      const [closeMenu,setCloseMenu]=("true");
      const [menu_box,setMenuClass]=useState("menu_box1 hidden_menu");
      const [isMenuClicked,setIsMenuClicked]=useState("true");
      const [ham,setHam]=useState("ham hamRotate ham1");
      const [isHamClicked,setIsHamClicked]=useState("true");
      
      const updateMenu=()=>{
           
            if(isMenuClicked){
           
                  setMenuClass("menu_box1 visible_menu");
                  
            }
            else{
          setMenuClass("menu_box1 hidden_menu");
       
            }
            setIsMenuClicked(!isMenuClicked)
      }
      const updateHam=()=>{
            if(isHamClicked){
               
                  setHam("ham hamRotate ham1 active")
                
            }
            else{
                  setHam("ham hamRotate ham1")
            }
            setIsHamClicked(!isHamClicked)
      }
         const close_Menu=()=>{
            if(closeMenu){
                  setMenuClass("menu_box1 hidden_menu");
                  setHam("ham hamRotate ham1")
                  
                  
                 
      
            }
            else{
                 
                  setMenuClass("menu_box1 visible_menu")
                  setHam("ham hamRotate ham1 active")
                
                 
            }
            
         }
         useEffect(()=>{
            console.log(boxOutsideClick)
            
            if(boxOutsideClick){
                  console.log(boxRef.current)
                  console.log("outside")
                  setMenuClass("menu_box1 hidden_menu");
                  setHam("ham hamRotate ham1")
                  
            }
           
           
         },[boxOutsideClick]);
         
        return(
            <>
            <div className="header_wrapper">
            <Link onClick={close_Menu} className="header_logo_block" to="/"></Link>
        
          <div className="content_menu_wrapper">
            
            <div className="header_content_block">
              <Link  className="header_content_block_a_first_second "   to="/portfolio">portfolio<span className="line1"></span></Link>
              <Link  className="header_content_block_a_first_second" to="/about">about<span className="line1"></span></Link>
              <Link  className="header_content_block_a_first_second"  to="/contact">contact<span className="line1"></span></Link>
            </div>
           <div ref={boxRef}  className="overlay">
           <div   onClick={() => { updateHam();updateMenu();}}  className="header_menu_block"><p className="menu">menu</p>
            
            <svg   className={ham} viewBox="0 0 100 100" width="80">
      <path
         
            className="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
      <path
            className="line middle"
            d="m 30,50 h 40" />
      <path
            className="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
      </svg>
           
      
      
            </div>
            <div   className={menu_box}>
                 
                  <div className="menu_box_wrapper">
                  <div className="menu-items">
         
         {items.map((item,index)=><div className="menu-content">
               <div className="menu-img"></div>
                <div className="menu-text"><Link onClick={() => { close_Menu();}} className="header_content_block_a"  to={item.itemLink} key={index}>{item.itemText}</Link>
                </div>
                </div>)}
      </div>
                  </div>
           
          
              </div>
           </div>
           
        
    
          </div>
        </div>
        
     
        {/* {boxOutsideClick ?   {close_Menu} : "inside click"}
     */}
        
            </>
      );
    
}
export default Header;