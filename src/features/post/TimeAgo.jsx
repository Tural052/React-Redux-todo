import React from 'react'
import { parseISO , formatDistanceToNow } from 'date-fns'
const TimeAgo = ({timestamp}) => {
    let timeAgo = ''
    if(timestamp){
        const data = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(data);
        timeAgo = ` ${timePeriod}ago`
    }
  return (
    <span title={timestamp} >
       <i style={{marginLeft:'10px'}}> {timeAgo} </i>
    </span>
  )
}

export default TimeAgo
