import React from 'react';

import { 
    SidebarContainer, 
    CloseIcon, 
    Icon,
    SidebarWrapper,
    SidebarLink,
    SidebarBtnWrapper,
    SidebarRoute,
    SidebarMenu
} from './SidebarElements';

const Sidebar = ({ toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='discover' onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to='reports' onClick={toggle}>
                        Reports
                    </SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrapper>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SidebarBtnWrapper>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
    

export default Sidebar;