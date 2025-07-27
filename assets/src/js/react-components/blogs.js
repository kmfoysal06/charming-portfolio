import { __ } from "@wordpress/i18n";
import Blog from "./partials/blog.js";
import { Swiper, SwiperSlide } from "swiper/react";
import Prev from "./icons/prev.js";
import Next from "./icons/next.js";
//import 'swiper/swiper.css';
//import 'swiper/swiper-bundle.css';

const Blogs = ({blogs}) => (
    <div className="charming-portfolio-blogs-container">
        <div className="blogs-header">
			<h3>Blogs</h3>
			<div className="sw-nav">
                <p className="swiper___prev" id="__sprev" aria-label={__('Previous', 'charming-portfolio')}>
                    <Prev />
                </p>

                <p className="swiper___next" id="__snext" aria-label={__('Previous', 'charming-portfolio')}>
                    <Next />
                </p>
			</div>
		</div>
            <Swiper 
            spaceBetween={10} 
            slidesPerView={1}
            direction="horizontal"
            loop={true} 
            speed={600}
            navigation={{
                nextEl: '.swiper___prev',
                prevEl: '.swiper___next',
                enabled: true
            }}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 4,
                },
            }}

            >
            {
                blogs.map(blog => (

                    <SwiperSlide key={blog.id}>
                        <Blog key={blog.id} blog={blog} />
                    </SwiperSlide>
                ))
            }

            </Swiper> 
    </div>
);

export default Blogs;
