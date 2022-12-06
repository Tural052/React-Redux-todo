import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'reactstrap'
import { reactionAdded } from './postSlice'


const reactionEmoji = {
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀'
  }


const Reactionbuttons = ({post}) => {
    const dispatch = useDispatch()
    const reactionButtons = Object.entries(reactionEmoji).map(([name,emoji]) => {
        return(
            <Button key={name} type='button' className='m-2'
            onClick={() => {
                dispatch(reactionAdded({id:post.id,reaction:name}))
            }}>
                {emoji}{post.reactions[name]}
            </Button>
        )
    })


  return (
    <div>
      {reactionButtons}
    </div>
  )
}

export default Reactionbuttons
