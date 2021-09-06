import React from 'react';
import Input from '../components/Input'
import { Link } from "react-router-dom";
import Button from '../components/Button';
import TopArticle from '../components/Home/TopArticle';
import MostPopular from '../components/Home/MostPopular';
function Home() {
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
                <section className="max-w-md bg-white  rounded-xl">
                        <div className="p-6 space-y-5">
                            <h2 className="text-3xl text-primary shadow-sm">Top Articles</h2>
                            <div className="space-y-4 h-screen overflow-y-scroll overflow-hidden">
                                <TopArticle/>
                                <TopArticle/>
                                <TopArticle/>
                                <TopArticle/>
                                <TopArticle/>
                                <TopArticle/>
                                <TopArticle/>
                                <TopArticle/>
                                <TopArticle/>
                            </div>
                        </div>
                        
                </section>
                <section className="max-w-md bg-white  rounded-xl">
                        <div className="p-6 space-y-5">
                            <h2 className="text-3xl text-primary shadow-sm">Most Popular</h2>
                            <div className="p-2 space-y-5 h-screen overflow-y-scroll overflow-hidden">
                                <MostPopular/>
                                <MostPopular/>
                                <MostPopular/>
                                <MostPopular/>
                                <MostPopular/>
                                <MostPopular/>
                            </div>
                        </div>
                        
                </section>

            </main>
        </div>
    )
}

export default Home
