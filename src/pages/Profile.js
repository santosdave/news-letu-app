import React from 'react';
import {Divider} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from "../components/Button";
import Input from "../components/Input";
function Profile() {
    return (
        <div className="space-y-10 w-full">
           <div className="text-center z-50 top-20  lg:m-0 ">
                <h1 className="text-4xl">Profile</h1>
            </div>
            <main className="lg:flex lg:space-x-10 space-y-5 justify-between lg:space-y-0">
            <section className="max-w-md bg-gray-200  rounded-xl">
                        <div className="p-6 space-y-5">
                            <h2 className="text-3xl text-primary shadow-sm">My Profile</h2>
                            <Card className="flex flex-col justify-between  items-center border-b-2 p-1">
                                <CardActionArea className="">
                                <CardMedia className="h-40 w-full" title={'santosdave'} image={'https://media-exp3.licdn.com/dms/image/C4D03AQFaYwtIZ5k53g/profile-displayphoto-shrink_800_800/0/1622195469007?e=1632355200&v=beta&t=24cvGNubyys3-JrSg5kB9FYqbRV4dOeGOH5T5MmdD-0'}/>
                                <CardContent >
                                <div className="flex flex-col  ml-2">
                                    <div className="flex flex-col  ml-2 items-center justify-between">
                                        <h2>Santos Dave</h2>
                                        <h4>Software Engineer intern</h4>
                                    </div>
                                    
                                    <Divider/>
                                    <div className="flex justify-between items-center p-2 lg:p-4  space-x-10">
                                        <h2>Email:</h2>
                                        <h4>santosdave@gmail.com</h4>
                                    </div>
                                    <Divider/>
                                    <div className="flex justify-between items-center p-2 lg:p-4  space-x-10">
                                        <h2>Phone:</h2>
                                        <h4>0787654321</h4>
                                    </div>
                                    <Divider/>
                                    <div className="flex justify-between items-center p-2 lg:p-4  space-x-10">
                                        <h2>Country:</h2>
                                        <h4>Kenya</h4>
                                    </div>
                                    <Divider/>
                                    <div className="flex justify-between items-center p-2 lg:p-4  space-x-10">
                                        <h2>Address:</h2>
                                        <h4>Kenya</h4>
                                    </div>
                                            
                                            
                                        </div>
                                </CardContent>
                                </CardActionArea>

            
                            </Card>
                        </div>
                        
            </section>
            <section className="max-w-md bg-gray-200  rounded-xl">
                        <div className="p-6 space-y-5">
                            <h2 className="text-3xl text-primary shadow-sm">Edit Profile</h2>
                            
                        </div>
                        <main className="flex flex-col">
                            <section className="bg-white text-primary p-10 rounded-xl space-y-4">
                                <form className="w-full max-w-lg space-y-4">
                                <Input
                                    name="email"
                                    type="email"
                                    label="Email"
                                    placeholder={'santosdave@gmail.com'}
                                   
                                /> 
                                 <Input
                                    name="Phone"
                                    type="text"
                                    label="Phone"
                                    placeholder={'0787654321'}
                                   
                                /> 
                                <Input
                                    name="Address"
                                    type="text"
                                    label="Address"
                                    placeholder={'Kenya'}
                                   
                                /> 
                                <Button
                                    value="Save"
                                    type="submit"
                                    fullWidth
                                    variant="primary"
                                />
                                </form>
                            </section>
                        </main>
                        
            </section>
            </main>
        </div>
    )
}

export default Profile
