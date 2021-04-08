import React from 'react'
import { FormControl, FormLabel, ListGroup } from 'react-bootstrap'

export const FormFields = () => {
    return (
        <ListGroup.Item className='border-bottom-0 pb-1'>
            <FormLabel className=' color-secondary h6'>Name<span style={{ color:'red' }}>*</span></FormLabel>
            <FormControl type='text' className='py-0' placeholder='Enter full name' value={name} onChange={e => setName(e.target.value)}></FormControl>
        </ListGroup.Item>
    )
}
