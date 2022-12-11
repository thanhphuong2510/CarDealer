import React, {useState} from 'react';
import {
    CDBBtn,
    CDBCollapse , CDBDropDown, CDBDropDownMenu, CDBDropDownToggle, CDBIcon,
    CDBNavbar,
    CDBNavbarNav,
    CDBNavItem,
    CDBNavToggle
} from "cdbreact";
import './Navbar.style.scss'

const Navbar = () => {
    const [collapse, setCollapse] = useState(false);

    const bgBlack = { backgroundColor: '#000000', color: '#f4f4f4' };

    return (
            <CDBNavbar style={bgBlack } dark expand="md" scrolling>
                <CDBNavToggle
                    onClick={() => {
                        setCollapse(!collapse);
                    }}
                />
                <CDBCollapse id="navbarCollapse1" isOpen={collapse} navbar>
                    <CDBNavbarNav right className="align-items-center col-10">
                        <CDBNavItem active>
                            <CDBBtn circle color="dark" style={{ padding: 0 }}>
                                <CDBIcon className="mr-2" icon="home" /> Home
                            </CDBBtn>
                        </CDBNavItem>
                        <CDBNavItem>
                            <CDBBtn circle color="dark" style={{ padding: 0 }}>
                                <CDBIcon className="mr-2" icon="feather" /> Features
                            </CDBBtn>
                        </CDBNavItem>
                        <CDBNavItem>
                            <CDBBtn circle color="dark" style={{ padding: 0 }}>
                                <CDBIcon className="mr-2" icon="dollar-sign" /> Pricing
                            </CDBBtn>
                        </CDBNavItem>
                        <CDBNavItem>
                            <CDBDropDown>
                                <CDBDropDownToggle caret style={{ padding: 0 }} color="dark" circle>
                                    <CDBIcon className="mr-2" icon="cogs" /> Options
                                </CDBDropDownToggle>
                                <CDBDropDownMenu>Coming soon #pleaseStayUpdated.</CDBDropDownMenu>
                            </CDBDropDown>
                        </CDBNavItem>
                    </CDBNavbarNav>
                </CDBCollapse>
            </CDBNavbar>

    );
};
export default Navbar;