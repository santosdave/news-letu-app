import React from 'react';
import TopNews from '../components/Home/TopNews';
const data=[
    {
        'id':1,
        'title':'today',
        'author':'John',
    },
    {
        'id':2,
        'title':'today',
        'author':'John',
    },
    {
        'id':3,
        'title':'today',
        'author':'John',
    },
]
function Science() {
    return (
        <div>
            {data.map((item)=>(
                <h1 key={item.id}>{item.title}</h1>
            ))}
           
            {data.map((item)=>{
                <TopNews key={item.id} title={item.title} author={item.author}/>
            })}
        </div>
    )
}

export default Science
