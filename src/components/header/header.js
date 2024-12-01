import React from "react";
import '../header/header.css';
// import Logo from '../../assets/images/logo.jpg' useful
import SearchIcon from '@mui/icons-material/Search';
import Select from "../selectDrop/select"


const Header =()=>{
    return(
        <div>
            <header>
                <div className="container-fluid">
                    <div className="row">
                       <div className="col-sm-2">
                        {/* <img src={Logo}/> */}
                       </div>
                       {/*headerSearch begins here*/}
                      <div className="col-sm-5">
                      <div className="headerSearch d-flex align-items-center">
                      <Select/>
                          

                          <div className="search">
                            <input type="text" placeholder="Search Here"/>
                            <img src={require("../../assets/images/searchicon.svg")} className="searchIcon"/>
                          </div>
                      </div>
                      </div>
                      {/*headerSearch ends here*/}

                      <div className="col-sm-5">
                      <Select/>
                      </div>



                    </div>

                </div>
            </header>
        </div>
    )
}

export default Header;