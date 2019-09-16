import * as React from 'react'

import Wrapper from './item.css'

type Props = {
  todo: {
    name: string,
    action: string,
    action1?: string
  }
}

const TodoItem: React.FC<Props> = ({todo}) => {
  return (
    <Wrapper>
      {todo.name}
    </Wrapper>
  )
}

export default TodoItem