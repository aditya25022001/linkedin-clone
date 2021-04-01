import React from 'react'
import { Nav } from 'react-bootstrap'

export const NavLinkComponent = ({ last, icon, label, href, more, moreIcon }) => {
    return (
        <Nav className={last ? `mr-0 border-right pr-3` : 'mr-2'}>
            <Nav.Link href={href} style={{ display:'flex', flexDirection:'column', alignItems: 'center' }} >
                {icon}
                {!more 
                    ? <div id='hide_label_header' style={{ fontSize:13 }}>{label}</div>
                    : <div id='hide_label_header' style={{ fontSize:13 }}>{moreIcon}{label}</div>
                }
            </Nav.Link>
        </Nav>
    )
}
