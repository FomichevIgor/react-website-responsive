import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';

function Nav(props) {
    console.log(classes)
    return ( 
        <div className={classes.navbar}>
           <div className={classes.container}>
            <NavLink>TRVL <i>&#10084;</i> </NavLink>
            <div className={classes.burger}>
                <span></span>
            </div>
            <div className={classes.navbar_wrap}>

                <ul className={classes.navbar_menu}>
                    <li><NavLink>Home</NavLink></li>
                    <li><NavLink>Services</NavLink></li>
                    <li><NavLink>Products</NavLink></li>
                    
                </ul>
                <NavLink className={classes.singup}>Sing Up</NavLink>
            </div>



           </div>
        </div>
        
    )
}

export default Nav;