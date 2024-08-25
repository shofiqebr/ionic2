import React from 'react';
import { Link } from 'react-router-dom';

const ProductCardErp = ({item}) => {
    return (
        <div>
             <section className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  items-center ">
            {
                item?.map((product, index)=>{
                return    <div key={index} className="flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 text-center bg-white cards z-10">

                        <img className="w-14 pb-5 grayscale" src={product.imgSrc} />
                        <h4 className="font-bold">{product.title}</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]">টোটাল সলুয়েশন</p>
                        {/* */}
                        {/* {
                            product. linkType === 'external' ? (
                                <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href={product.link}>বিস্তারিত</a> 
                            ) : (
                                <Link to={product.link}>
                                <div className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" >বিস্তারিত</div> 
                                </Link>
                            )
                        } */}
                          <Link to={product.link}>
                        <div className="font-semibold hover:bg-black hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" >বিস্তারিত</div>
                        </Link>
                    </div>
})
            }

         </section>
            
        </div>
    );
};

export default ProductCardErp;