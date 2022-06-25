import React from 'react'
import Link from '../Link/Link'

export default function About() {
    return (
        <section id="about" className="container d-flex flex-column justify-content-center">
            <h2 className="heading"> About Me</h2>
            <div className="row mt-4">
                <div className="col-lg-8">
                    <div className="text-about">
                        <div>
                            <p>Hello! My name is Dhyey, a developer focused on crafting great web experiences. Developing software that empowers 
                                people to make a difference is my passion. I love to create web apps that would make life easy, accessible and enjoyable for people.</p>
                            <p>I have recently completed my Bachelor's Degree in Computer Engineering from <Link url="https://www.ljku.edu.in/" name='L.J Institute of Engineering
                                and Technology'/>. My main focus these days is building exquisite web experiences at <Link url='https://www.tatvasoft.com/' name='TatvaSoft'/>.</p>
                            <p>I am always looking for opportunities enabling me to learn exciting technologies to boost my passion for programming.</p>
                            <p>Here are a few technologies I’ve been working with recently:</p>
                        </div>
                        <ul className="custom-li colm-2">
                            <li>.NET Core</li>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>React.js</li>
                            <li>Next.js</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="wrapper cover mx-auto mt-4 mt-md-0">
                        <img src='/assets/upload/about-02.jpg' alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
