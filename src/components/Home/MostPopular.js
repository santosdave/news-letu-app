import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Link } from "react-router-dom";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { parseISO, differenceInCalendarDays, format, formatDistanceToNow } from 'date-fns';
function MostPopular({src,title,author,date,story}) {
    const formatDate = (date) => {
		return differenceInCalendarDays(new Date(), date) > 2
			? format(date, 'EEE MMM d h:m b')
			: formatDistanceToNow(date, { addSuffix: true });
	};
    return (
        <Card className="flex  items-center border-b-2 p-1">
            <CardActionArea className="flex  items-center">
              <CardMedia className="w-20 h-20" title={'wycliffe'} image={src}/>
              <CardContent >
              <Link to={
                    {
                        pathname: '/articleDetail',
                        state:{
                            title: title,
                            src: src,
                            author: author,
                            date:date,
                            story:story,
                            
                        }
                    }
                } >
                    <div className="flex flex-col  ml-2">
                        <h3 className=" text-xl font-light  truncate ">{title}</h3>
                        <h5 className=" text-sm font-thin text-black">{author}</h5>
                        <h5 className=" text-sm font-light text-gray-400">{formatDate(parseISO(date))}</h5>
                    </div>
                </Link>  
              </CardContent>
            </CardActionArea>

            
        </Card>
    )
}

export default MostPopular
