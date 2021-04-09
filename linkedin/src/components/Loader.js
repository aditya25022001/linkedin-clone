import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../Loader.css'

export const Loader = () => {
    return (
        <div id='loader'>
           <div className='mb-3' style={{display: 'flex', flexDirection: 'row', color:'rgb(2,110,199)', alignItems: 'center'}}>
               <div style={{ fontWeight:600, fontSize:45 }}>Linked</div>
               <LinkedInIcon style={{ fontSize:60, color: 'rgb(2,110,199)' }} /></div>
            <div id='external'>
                <div id='internal'></div>
            </div> 
        </div>
    )
}
