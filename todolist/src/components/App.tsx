import * as React from 'react'
import { useState } from 'react'
import Add from './add'
import {todoListData} from '../meta'
import List from './list/index'
// import * as api from '../util/api'

import styled from 'styled-components'
import './app.css'

const Wrapper = styled.div`
  .main {
      width: 100%;
      padding: 0 10px;
      max-width: 800px;
      margin: auto;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
  }

  .title {
    background: #f39894;
    color: #fff;
    padding: 11px 10px;
    text-align: center;
  }
`
// @css(styles)
const App: React.FC = () => {
  // const add = fetch(api.fetchAdd, { method: 'POST'})
  // const onSearch = fetch(api.fetchList, { method: 'GET' })
  return (<Wrapper>
    <h1 className="title">TodoList</h1>

    <div className="main">
        <Add onAdd={(name:string) => {console.log(name)}}/>
        {todoListData.map((item, _index) => (
          <List category={item} key={_index}/>
        ))}
      </div>
    {/* <List/> */}
  </Wrapper>)
}

export default App