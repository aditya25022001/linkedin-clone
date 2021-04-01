import React from 'react'
import { Nav } from 'react-bootstrap'
import '../App.css'

export const NavLinkComponent = ({ last, icon, label, href, more, moreIcon, avatar }) => {
    return (
        <Nav className={last ? `mr-0 border-right pr-3` : 'mr-2'} id='header_icons'>
            <Nav.Link href={href} style={{ display:'flex', flexDirection:'column', alignItems: 'center' }} id='header_icons' >
                {icon}
                {!more 
                    ? <div id='hide_label_header' style={{ fontSize:13 }}>{label}</div>
                    : <div id='hide_label_header' style={{ fontSize:13 }}>{label}{moreIcon}</div>
                }
            </Nav.Link>
        </Nav>
    )
}
