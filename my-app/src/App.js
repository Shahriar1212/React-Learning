import React from 'react'
import Card from './components/Card'


function App(){
    return <div>
        <h1 className='headingStyle'>Todo App</h1>
        <Card titleText = "Call Mother" descText="this is a short description"/>
        <Card titleText = "Call Father" descText="this is a short description"/>
        <Card titleText = "Call Brother" descText="this is a short description"/>
    </div> ;
}

export default App;