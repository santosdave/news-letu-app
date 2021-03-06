import React, { useEffect, useState } from 'react';
import Input from '../components/Input'
import TopArticle from '../components/Home/TopArticle';
import MostPopular from '../components/Home/MostPopular';
import axios from 'axios';

function Home() {
    /* const [loading, setLoading] = useState(false); */
    const [articles, setArticles] = useState([]);
    const [mostPopular, setMostPopular]= useState([]);
    useEffect(() => {
        const getArticles = async () => {
            /* setLoading(true); */
            const res = await axios.get(` https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
            setArticles(res.data.response.docs);

           /*  setLoading(false); */
        };
        getArticles();
        

    }, []);
    useEffect(() => {
        const getMostPopular = async (section) => {
            setLoading(true);
            const res = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
            setMostPopular(res.data.results);
            /* setLoading(false); */
          };
          getMostPopular();
        

    }, []);
    

   
    return (
        <div className="space-y-10 w-full">
            <div className="flex z-50 top-20  lg:justify-between items-center">
                <h1 className="text-4xl">Home</h1>
               <div className="hidden lg:flex">
                    <Input
                        placeholder="Search ..."
                        type="text"
                        
                        /* value={values.email}
                        handleChange={handleChange} */
                    /> 
               </div>
            </div>
           
           
            <main className="lg:flex lg:space-x-10 space-y-5 lg:space-y-0">
                <section className="max-w-md bg-gray-200  rounded-xl">
                        <div className="p-6 space-y-5">
                            <h2 className="text-3xl text-primary shadow-sm">Top Articles</h2>
                            <div className="space-y-4 h-screen overflow-y-scroll overflow-hidden">
                              {articles.map(article =>(
                                <TopArticle 
                                key={article._id} 
                                src={article.multimedia?.[0]?.url ?
                                    `https://nytimes.com/${article.multimedia[0].url}` : 
                                    'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                                }
                                title={article.headline.main}
                                author={article.byline.original}
                                date={article.pub_date}
                                story={article.snippet}
                                subTitle={article.subsection_name}
                                />
                              ))}
                                    
                              
                               
                               
                            </div>
                        </div>
                        
                </section>
                <section className="max-w-md bg-gray-200  rounded-xl">
                        <div className="p-6 space-y-5">
                            <h2 className="text-3xl text-primary shadow-sm">Most Popular</h2>
                            <div className="p-2 space-y-5 h-screen overflow-y-scroll overflow-hidden">
                                {mostPopular.map(article =>(
                                    <MostPopular 
                                    key={article.asset_id}
                                    src={article.media[0]["media-metadata"][0].url }
                                    story={article.abstract}
                                    author={article.byline}
                                    date={article.updated}
                                    title={article.title}
                                    
                                    />
                                ))}
                               
                            </div>
                        </div>
                        
                </section>

            </main>
        </div>
    )
}

export default Home
