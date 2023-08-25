import React from 'react'
import CounterApp from './hook1/CounterApp'
import AsyncLoaderApp from './hook2/AsyncLoaderApp'

function CustomHook() {
  return (
    <div>
        {/* <CounterApp /> */}
        <AsyncLoaderApp />
    </div>
  )
}

export default CustomHook