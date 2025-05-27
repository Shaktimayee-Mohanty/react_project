import React from 'react'
import vg from "../assests/pic4.jpg";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"
const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>TechyStar</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problems you face everyday.
                        We are leading tech company whose aim is to increase the problem solving ability in children.
                    </p>
                </div>
            </div>
            <div className="home3" id="about">
                <div>
                    <h1>who we are?</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit libero non ipsum doloremque, minus in adipisci voluptates itaque quidem consequuntur quos, alias voluptatum dolorum consequatur incidunt necessitatibus distinctio nemo eius!
                        Vitae natus cumque quam earum, nisi harum. Quidem illum excepturi sit distinctio ab odio eveniet, aperiam praesentium modi error itaque asperiores maiores tenetur necessitatibus ea totam, saepe temporibus possimus doloremque.
                        Nihil similique adipisci quisquam et animi esse ea nam totam recusandae reiciendis aspernatur deserunt officia rerum odit ratione, quas ipsam sed quam quia id eum, quos tempore? Rerum, odio laboriosam?
                        Omnis totam molestiae ratione tempora vero natus enim tempore repellat aut rerum delectus illum corporis cumque dolores rem sit veniam, provident maiores saepe. Iste, ut vitae sequi similique ad placeat?
                        Delectus natus ipsum officia perspiciatis possimus iure est libero quo, culpa, excepturi aut error explicabo aliquid dicta. In doloremque corrupti totam quasi. Rem, quibusdam voluptate eum quos pariatur quasi harum.

                    </p>
                </div>
            </div>
            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay: "0.3s",
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{
                            animationDelay: "0.5s",
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        
                        <div style={{
                            animationDelay: "0.7s",
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        
                        <div style={{
                            animationDelay: "1s",
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
};

export default Home