import global from '../../assets/corporation/global.webp'
import ionicErp from '../../assets/corporation/ionic-erp-logo.png';
import shakti from '../../assets/corporation/bikroy-shakti-logo.png';
import go from '../../assets/corporation/go-account-logo.png';
import ionic from '../../assets/corporation/ionic-corporation-logo.png';
import health from '../../assets/corporation/ionic-health-logo.png';
import logo from '../../assets/corporation/ionic-logo.png';
import ocean from '../../assets/corporation/ionic-ocean-logo.png';
import pharma from '../../assets/corporation/ionic-pharma-logo.png';
import shopImg from '../../assets/corporation/ionic-shop-logo.png';
import transport from '../../assets/corporation/ionic-transport-logo.png';
import travel from '../../assets/corporation/ionic-travel-logo.png';
import kormochary from '../../assets/corporation/karmochary-logo.png';
import myBhara from '../../assets/corporation/my-bhara-logo.png';
import myRewstura from '../../assets/corporation/my-restura-logo.png';
import tailor from '../../assets/corporation/my-tailor-logo.png';
import shikkha from '../../assets/corporation/Shikkha-chart-logo.png';


import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';

const BrandProducts = () => {
    return (
        <div className='pt-10'>
            <section>
            <img className="rounded-xl hidden md:block digitalImg lg:h-auto" src={global} alt="" />
            </section>


            {/* ---------carousel--------- */}


            <div className='bg-[#F3F3F3] brandWidth mx-auto pb-5'>
            <section className='flex flex-col justify-center items-center gap-2 mt-5 '>
                <h1 className='text-[#898989] font-semibold text-center'>আমাদের বিভিন্ন ব্র্যান্ডের পণ্য সমূহ</h1>
                <div className='w-10 h-[3px] bg-[#b3b2b2]'></div>
            </section>
            <div className='flex mt-5 flex-col  md:gap-10 gap-20 px-20  md:flex-row max-w-[1920px] mx-auto '>
                <section>
                    <Carousel 
                        autoPlay
                        infiniteLoop
                        showArrows={false}
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        stopOnHover={false}
                    >
                        <div>
                            <img className='carousel-img' src={shakti} alt="Restora" />
                        </div>
                        <div>
                            <img className='carousel-img' src={go} alt="Health" />
                        </div>
                        <div>
                            <img className='carousel-img' src={ionicErp} alt="Shop" />
                        </div>
                        <div>
                            <img className='carousel-img' src={ocean} alt="Shop" />
                        </div>
                    </Carousel>
                </section>
                <section>
                    <Carousel 
                        autoPlay
                        infiniteLoop
                        showArrows={false}
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        stopOnHover={false}
                    >
                        <div>
                            <img className='carousel-img' src={kormochary} alt="Restora" />
                        </div>
                        <div>
                            <img className='carousel-img' src={shopImg} alt="Health" />
                        </div>
                        <div>
                            <img className='carousel-img' src={health} alt="Shop" />
                        </div>
                        <div>
                            <img className='carousel-img' src={shikkha} alt="Shop" />
                        </div>
                    </Carousel>
                </section>
                <section>
                    <Carousel 
                        autoPlay
                        infiniteLoop
                        showArrows={false}
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        stopOnHover={false}
                    >
                        <div>
                            <img className='carousel-img' src={myBhara} alt="Restora" />
                        </div>
                        <div>
                            <img className='carousel-img' src={tailor} alt="Health" />
                        </div>
                        <div>
                            <img className='carousel-img' src={myRewstura} alt="Shop" />
                        </div>
                        <div>
                            <img className='carousel-img' src={logo} alt="Shop" />
                        </div>
                    </Carousel>
                </section>
               
                <section>
                    <Carousel 
                        autoPlay
                        infiniteLoop
                        showArrows={false}
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                        stopOnHover={false}
                    >
                        <div>
                            <img className='carousel-img' src={transport} alt="Kormochary" />
                        </div>
                        <div>
                            <img className='carousel-img' src={travel} alt="Ionic ERP" />
                        </div>
                        <div>
                            <img className='carousel-img' src={pharma} alt="Ionic ERP" />
                        </div>
                        <div>
                            <img className='carousel-img' src={ionic} alt="Ionic ERP" />
                        </div>
                    </Carousel>
                </section>
            </div>
        </div>
        </div>
    );
};

export default BrandProducts;