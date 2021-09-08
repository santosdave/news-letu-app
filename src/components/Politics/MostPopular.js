import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Link } from "react-router-dom";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
function MostPopular() {
    return (
        <Card className="flex  items-center border-b-2 p-1">
            <CardActionArea className="flex  items-center">
              <CardMedia className="w-20 h-20" title={'wycliffe'} image={'https://media-exp3.licdn.com/dms/image/C4D03AQFaYwtIZ5k53g/profile-displayphoto-shrink_800_800/0/1622195469007?e=1632355200&v=beta&t=24cvGNubyys3-JrSg5kB9FYqbRV4dOeGOH5T5MmdD-0'}/>
              <CardContent >
                <Link to="/articleDetail">
                    <div className="flex flex-col  ml-2">
                        <h3 className=" text-xl font-light  truncate ">From Cradle to Grave, Democrats Move to Expand Social Safety Net</h3>
                        <h5 className=" text-sm font-light">The $3.5 trillion social policy bill that lawmakers begin drafting this week would touch virtually every American, at every point in life, from conception to old age.</h5>
                        <h5 className=" text-sm font-light">2017-1-18</h5>
                    </div>
                </Link>  
              </CardContent>
            </CardActionArea>

            
        </Card>
    )
}

export default MostPopular
