import React from 'react';

const ProductCard = ({item}) => {
    return (
        <div>
             <section className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  items-center ">
            {
                item?.map((product, index)=>{
                return    <div key={index} className="flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 text-center bg-white lg:w-44 2xl:w-[183.5px] cards z-10">

                        <img className="w-32 pb-5" src={product.imgSrc} />
                        <h4 className="font-bold cardHeading text-">{product.title}</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> {product.subtitle}</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href="https://ionicerp.xyz/">বিস্তারিত</a>
                    </div>
})
            }

         </section>
            
        </div>
    );
};

export default ProductCard;