import * as React from 'react'
import { useState } from 'react'

import Wrapper from './add.css'

type Props = {
  onAdd: (name: string) => void
}

const Add: React.FC<Props> = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("")

  return (
    <Wrapper>
      <form
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault()
          if (!newTodo.trim()) {
            return
          }
          onAdd(newTodo)
          setNewTodo('')
        }}
      >
        <input
          className="input"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          type="text"
          placeholder="What needs to be done?"
        />
        <button
          type='submit'
          className="addButton"
        >添加
        </button>
      </form>
    </Wrapper>
  )
}

export default Add
