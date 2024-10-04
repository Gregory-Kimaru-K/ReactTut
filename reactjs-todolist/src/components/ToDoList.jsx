import React from 'react'
import ToDoCard from './ToDoCard'

export default function ToDoList() {
    let todos = [
        'Go to the gym',
        'Eat more fruits and vegs',
        'Pick up kids from school'
    ]
  return (
    <ul className='main'>
        {todos.map((todo, todoIndex)=>{
            return(
                <ToDoCard key={todoIndex}>
                    <p>{todo}</p>
                </ToDoCard>
            )
        })}
    </ul>
  )
}