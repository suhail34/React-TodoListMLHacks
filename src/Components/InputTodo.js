import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import TodoItem from './TodoItem';
import AddIcon from '@material-ui/icons/Add';

export default function InputTodo() {

    let [item, setItem] = useState(' ');
    let [print, setPrint] = useState(false);
    let [newItem, setNewItem] = useState([]);


    let handleChange = function (event) {
        setItem(event.target.value);
        setPrint(true);
        console.log(event.target.value);
    }

    let listItems = function () {
        setNewItem((oldItems) => {
            return [...oldItems, item];
        });
        setItem(' ');
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <input value={item} type="text" placeholder="Add a todo" onChange={handleChange} style={{ height: '70px', width: '500px', maxWidth : '100vw', borderRadius: '5px' }} />
                <Button style={{ height: '74px' }} onClick={listItems}><AddIcon /></Button><br />
                {
                    print ?
                        (<>
                            <br />
                            {newItem.map((val, index) => {
                                
                                return <TodoItem key={index} text={val} />
                            })}

                        </>
                        )
                        : null
                }

            </form>
        </div>
    )
}
