import React from 'react'
import vg from "../assests/2.webp"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>
                TechJod
            </h1>
<p>Become a Techy Guy</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
            <p>
                We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problem solving ability among students.
            </p>
        </div>
    </div>

<div className='home3' id="about">
    <div>
    <h1>Who are we?</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, velit eos ipsam repellendus quo vero asperiores minus at placeat rem voluptas suscipit voluptates necessitatibus voluptatem, dolorem ipsa. Cum quisquam sed, ab iure minima porro, reiciendis modi dolor quis atque possimus quod optio, a reprehenderit consequatur officia libero quasi ducimus consequuntur dicta? Dolore molestias ullam dignissimos, dicta doloremque quidem nihil deleniti eligendi quam magnam eius neque explicabo ducimus tempore repellendus modi ratione deserunt aliquid impedit adipisci perferendis illo maxime. Maxime eveniet velit at animi voluptates a reprehenderit culpa ab enim provident! Nesciunt saepe itaque doloribus, voluptas, nam quod deleniti fugiat, earum animi facere enim pariatur provident aut harum modi ducimus voluptatum voluptatem aliquam. Consequuntur distinctio reprehenderit necessitatibus voluptates illo ipsum velit quis accusamus et optio eum officiis, quia at rem qui adipisci! Sit, ex? Est, iure vitae natus quaerat quisquam adipisci explicabo, quae quidem vero nesciunt, facilis neque magni voluptate officiis.
    </p>
    </div>
</div>

<div className='home4' id="brands">
<div>
    <h1>Brands</h1>
    <article>
        <div style={{
            animationDelay:"0.3s",
        }}>
<AiFillGoogleCircle />
<p>Google</p>
        </div>

        <div style={{
            animationDelay:"0.5s",
        }}>
<AiFillAmazonCircle />
<p>Amazon</p>
        </div>
        <div style={{
            animationDelay:"0.7s",
        }}>
<AiFillInstagram />
<p>Instagram</p>
        </div>

        <div style={{
            animationDelay:"1s",
        }}>
<AiFillYoutube />
<p>Youtube</p>
        </div>

    </article>
</div>
</div>
    </>
  )
}

export default Home