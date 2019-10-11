import React from 'react'
class Card extends React.Component {
    render() {
        return (
        <div className='Card'>
            <button type='button'>
                delete
            </button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
        )
    }
}
export default Card