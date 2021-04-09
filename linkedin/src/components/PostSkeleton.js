import Skeleton from '@material-ui/lab/Skeleton'
import React from 'react'

export const PostSkeleton = () => {
    return (
        <div className='pb-4 pl-2'>
            <div className='mb-0 pb-0' style={{ display: 'flex', flexDirection:'row', alignItems: 'center'}}>
                <Skeleton animation='wave' width={40} height={40} variant='circle'/>
                <Skeleton animation='wave' height={80} style={{ width:'88%', marginLeft:'2%' }}/>
            </div>
            <Skeleton className='pt-0 mt-0' animation='wave' style={{ width:'97.9%', marginTop:'1%'}}/>
            <Skeleton animation='wave' className='pt-0 mt-0' variant='rect' height={100} style={{ width:'98%', marginTop:'1%'}}/>
        </div>
    )
}
