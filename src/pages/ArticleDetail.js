import React from 'react';
import {useLocation} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { parseISO, differenceInCalendarDays, format, formatDistanceToNow } from 'date-fns';
function ArticleDetail() {
    let location = useLocation();
    const formatDate = (date) => {
		return differenceInCalendarDays(new Date(), date) > 2
			? format(date, 'EEE MMM d h:m b')
			: formatDistanceToNow(date, { addSuffix: true });
	};
    return (
        <Card className="flex flex-col justify-between  items-center border-b-2 p-1">
            <h2 className="text-3xl text-primary shadow-sm">{location.state.subTitle}</h2>
            <CardActionArea className="">
              <CardMedia className="h-screen w-full" title={'wycliffe'} image={location.state.src}/>
              <CardContent >
                    <div className="flex flex-col  ml-2">
                        <h3 className=" text-xl font-light  truncate ">{location.state.title}</h3>
                        <h5 className=" text-sm font-thin text-black">{location.state.author}</h5>
                        <h5 className=" text-sm font-light text-gray-400">{formatDate(parseISO(location.state.date))}</h5>
                        <h5 className=" text-sm font-light">{location.state.story}</h5>
                        
                    </div>
              </CardContent>
            </CardActionArea>

            
        </Card>
    )
}

export default ArticleDetail
