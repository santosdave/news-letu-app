import React from 'react';
function TopNews({title, author}) {
    return (
        <div className="flex h-40 w-38 items-center border-b-2 p-1">
            <div>
                <image width={100} height={100} src="https://media-exp3.licdn.com/dms/image/C4D03AQFaYwtIZ5k53g/profile-displayphoto-shrink_800_800/0/1622195469007?e=1632355200&v=beta&t=24cvGNubyys3-JrSg5kB9FYqbRV4dOeGOH5T5MmdD-0"/>
            </div>
            <div className="flex flex-col items-center">
                <h1>{title}</h1>
                <h3>{author}</h3>
            </div>
        </div>
    )
}

export default TopNews
