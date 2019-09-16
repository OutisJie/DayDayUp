import * as React from 'react'
import { useState } from 'react'
import TodoItem from '../item'

import Wrapper from './list.css'

interface listProps{
  type: string
  action: string
  action1?: string | undefined
  title?: string
  icon: string
}

type Props = {
  category: listProps
}

const List:React.FC<Props> = ({category}) => {
  const { type, action, action1, title, icon } = category
  const [count, setCount] = useState(0)
  const [todoList, setTodoList] = useState([{name: 'ss', action: '取消'}])

  return (
    <Wrapper>
      <h5 className="title">
        {title}
        <span>{count}</span>
      </h5>
      {
        todoList.map((todo, index) => <TodoItem todo={todo} key={index}/>)
      }
    </Wrapper>
  )
}

export default List

