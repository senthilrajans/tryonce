import React, { Component } from "react";
import Spinner from "./loader";

export default class Main extends React.Component{
    constructor(){
        super()
    }

    render(){
        return  (
            <section className="main layout--center">
            <div className="main__content layout--wrapped">

         
            <Spinner />

                <div className="post-list">
                    
                  <article className="post">
                        <div className="post__inner">
                            <div className="score">
                                <div className="score__up layout--center">++</div>
                                <div className="score__board layout--center">100</div>
                                <div className="score__down layout--center">--</div>
                            </div>
                            <div className="post__body">
                                Hello World... </div>
                        </div>
                        <div className="post__footer">
                            <div className="post__time">2m ago</div>
                            <div className="post__comments">
                                <svg className="icon" viewBox="0 0 31 32">
                                    <path d="M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781 
                                    0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657 
                                    8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0 
                                    3.922-2.61 7.23-6.186 8.294z"></path>
                                </svg>
                                23
                            </div>
                        </div>
                    </article>
                    
                    <div className="rant__add" title="Add Rant">+</div>        

                </div>

                

                <div className="rant-details layout--center">

                    <section className="post-hero">
                        <div className="post-hero__inner">
                            <div className="score">
                                <div className="score__up layout--center">++</div>
                                <div className="score__board layout--center">100</div>
                                <div className="score__down layout--center">--</div>
                            </div>
                            <div className="post-hero__body">
                                <div className="profile">
                                    <div className="profile__picture">
                                        <svg height="36" width="36">
                                            <circle cx="18" cy="18" r="18" fill="#5c5f6f" />
                                        </svg>
                                    </div>
                                    <div className="profile__name">
                                        Elon
                                    </div>
                                </div>
                                <div className="post__details">
                                    Lorem ipsum                                    
                                </div>
                            </div>
                        </div>
                        <div className="post-hero__footer">
							<div className="post-hero__delete">DELETE</div>
                            <div className="post-hero__time">2m ago</div>
                        </div>
                    </section>

                    <section className="comments layout--center">

                        <h1 className="comments__title"><span>#</span>Comments</h1>

                        <section className="comment">
                            <div className="comment__inner">
                                <div className="comment__body">
                                    <div className="profile">
                                        <div className="profile__picture">
                                            <svg height="36" width="36">
                                                <circle cx="18" cy="18" r="18" fill="#5c5f6f" />
                                            </svg>
                                        </div>
                                        <div className="profile__name">
                                            Elon
                                        </div>
                                    </div>
                                    <div className="post__details">
                                        Lorem ipsum 
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div className="comment__footer">
								<div className="comment__delete">DELETE</div>
                                <div className="comment__time">2m ago</div>
                            </div>
                        </section>

                    </section>

                    <div className="rant__comment layout--center" title="Comment">
                        <svg className="icon" viewBox="0 0 31 32" width="100%" height="100%">
                            <path d="M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781 
                            0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657 
                            8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0 
                            3.922-2.61 7.23-6.186 8.294z"></path>
                        </svg>
                    </div>

                </div> 

               

            </div>
        </section>
		


        )
    }
}


