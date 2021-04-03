import React from 'react'
import { ListGroup } from 'react-bootstrap'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

export const SidebarActivity = () => {
    
    const setListHeading = (heading, link, canAdd) => {
        return <>
            {!link && !canAdd && <div style={{ fontSize:'1.5vh' }} className='mb-1 px-3 pt-3'>{heading}</div>}
            {!canAdd && link && <div id='sidebar_link_heading' className='px-3 mt-3' style={{ fontSize:'1.5vh', fontWeight:600 }}><a href='/'>{heading}</a></div>}
            {canAdd && link && <div id='sidebar_link_heading' className='px-3' style={{ fontSize:'1.5vh', fontWeight:600 }}><a href='/'>{heading}</a></div>}
            </>
    }

    const setListItems = (topic, see, event) => {
        return (
            <div className='mb-1 px-3 py-1' id='list_items_sidebar' style={{ alignItems:'center', display:'flex', flexDirection: 'row', justifyContent: 'flex-start', fontWeight:600, color:'rgb(117,117,117)', fontSize:'1.5vh'}}>
                {!see && !event && <div>#</div>}
                {!see && event && <div><CalendarTodayIcon className='mr-1' style={{ fontSize:'1.6vh' }} /></div>}
                <div>{topic.slice(0,20)}</div>
            </div>
        )
    }
    
    return (
        <ListGroup style={{ width:'27vh' }}>
            <ListGroup.Item className='border-bottom-0 p-0'>
                {setListHeading('Recent')}
                {setListItems('web developer')}
                {setListItems('the international collegiate programming contest')}
                {setListItems('indorejobs')}
                {setListItems('internship')}
                {setListItems('lookingforjob')}
            </ListGroup.Item>
            <ListGroup.Item className='px-0 border-bottom-0'>
                {setListHeading('Groups', true, false)}
                {setListItems('the international collegiate programming contest')}
                {setListItems('indorejobs')}
                {setListItems('See all', true)}
            </ListGroup.Item>
            <ListGroup.Item className='px-0 border-bottom-0'>
                {setListHeading('Events', true, true)}
                {setListItems('JuliaCon 2021(free and virtual)', false, true)}
                {setListItems('Road To Competetive Programming', false,true)}
                {setListItems('See all', true, false)}
            </ListGroup.Item>
            <ListGroup.Item className='px-0'>
                {setListHeading('Followed Hashtags', true, true)}
                {setListItems('webdeveloper', false, false)}
                {setListItems('internship', false,false)}
                {setListItems('lookingforjob', false,false)}
                {setListItems('Show more', true, false)}
            </ListGroup.Item>
            <ListGroup.Item className='px-0 py-1 mt-0'>
                {setListItems('Discover more', true, false)}
            </ListGroup.Item>
        </ListGroup>
    )
}
