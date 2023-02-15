import React from 'react'
import vg from "../assets/vg2.png"
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>Tech Solution</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="graphics" />

                <div>
                    <p>We are your one and only solution to the tech problems you face everyday. We are leading tech company whose aim is to increase the problem solving ability in children</p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>As a reputed website development agency we are providing solutions that empower your business globally and help to reach your business goals. we provide experienced consultants, designers and developers to take your online presence to the next level.</p>
                </div>
            </div>
            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{ animationDelay: "0.3s" }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>

                        </div>
                        <div style={{ animationDelay: "0.5s" }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>

                        </div>
                        <div style={{ animationDelay: "0.7s" }}>
                            <AiFillYoutube />
                            <p>Youtube</p>

                        </div>
                        <div style={{ animationDelay: "0.9s" }}>
                            <AiFillInstagram />
                            <p>Instagram</p>

                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home