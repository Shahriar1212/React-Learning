import React from 'react'
import Card from './components/Card'
import Data from './data.json'
import Data1 from './data1.json'


function App(){

    let items = [];
    // for(let x=0;x<Data.length;x++)
    // {
    //   items.push(<Card titleText = {Data[x].title} descText={Data[x].desc}/>)
    // }

    // items = Data.map((item) => <Card titleText = {item.title} descText={item.desc}/>)

    return <div>
        <h1 className='headingStyle'>Todo App</h1>

        {Data.map((item,index) => <Card key={index} titleText = {item.title} descText={item.desc}/>)}
        {Data1.map((item,index) => <div key={index} className="card">
            <h1>{item.name}</h1>
            <h3>{item.age}</h3>
            {
              item.phone.map((phone,index) => <div>
                <p>{phone.home}</p>
                <p>{phone.office}</p>
              </div>)
            }
        </div>)}
        {/* <Card titleText = {Data[0].title} descText={Data[0].desc}/>
        <Card titleText = {Data[1].title} descText={Data[1].desc}/>
        <Card titleText = {Data[2].title} descText={Data[2].desc}/> 
        <Card titleText = {Data[3].title} descText={Data[3].desc}/> */}
      </div> ;
}

export default App;