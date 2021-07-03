import React from 'react'
import InputTodo from './InputTodo'

export default function Todos(props) {
    return (
        <div>
            <div style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                left: '-65px',
                top: '100px',
                fontFamily: 'Times New Roman',
                fontSize: '28px',
                fontWeight: 'bolder',
                color: 'white',
            }}>
                {props.title}
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                top: '100px',
                borderRadius : '10px'
            }}>
                <InputTodo/>
            </div>
        </div>
    )
}
