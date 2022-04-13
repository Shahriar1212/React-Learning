import React from 'react'
import Card from './components/Card'
import Data from './data.json'
import Data1 from './data1.json'
import Card1 from './components/Card1'
import Card2 from './components/Card2'


function App(){

    return (
      <div>
        <Card1 name="Card1" desc="This is Card1"/>
        <Card2 name="Card2" desc="Hello from Card2"/>
      </div>
      
    )
}

export default App;