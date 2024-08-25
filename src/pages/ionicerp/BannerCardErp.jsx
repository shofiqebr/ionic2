
// import ProductCard from "../home/ProductCard";
import { Link } from "react-router-dom";
import { erpProductData } from "./erpProductData";
import ProductCardErp from "./ProductCardErp";
// import pharma from '../../assets/corporation/ionic-pharma-logo.png'

const BannerCardErp = () => {
  const product1 = erpProductData?.filter(item => item.lineNo == 1)
  const product2 = erpProductData?.filter(item => item.lineNo == 2)
  const product3 = erpProductData?.filter(item => item.lineNo == 3)
  const product4 = erpProductData?.filter(item => item.lineNo == 4)
  const product5 = erpProductData?.filter(item => item.lineNo == 5)


  return (
    <div className="relative ">
      <ProductCardErp item={product1} />
      {/* Custom handling for product2 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center">
        {product2?.map((product, index) => {
          const isLastItem = index === product2.length - 1;
          return (
            <div
              key={index}
              className={`flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 text-center bg-white  cards z-10
                                        ${isLastItem ? 'block md:hidden lg:flex' : 'lg:hover:scale-105'}`}
            >
              <img className="w-14 pb-5 grayscale" src={product.imgSrc} />
              <h4 className="font-bold">{product.title}</h4>
              <p className="text-[#718095] cardType text-center   text-[13px]">টোটাল সলুয়েশন</p>
              <Link to={product.link}>
                        <div className="font-semibold hover:bg-black hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" >বিস্তারিত</div>
                        </Link>
            </div>
          );
        })}
      </div>
      <ProductCardErp item={product3} />

      <ProductCardErp item={product4} />
      <div className="text-center border-r border-b   py-5 px-3 lg:hover:scale-105 bg-white w-[187px] md:w-[255px] h-[184px] md:h-[182px] absolute bottom-[181.5px] md:bottom-0 right-0 pharmaCard lg:hidden">
        <div className="flex justify-center items-center">

        {/* <img className="w-32 pb-5" src={pharma} /> */}
        </div>
        <h4 className="font-bold cardHeading text-[15px]">আইওনিক ফার্মা</h4>
        <p className="text-[#718095] cardType text-center   text-[13px]">ফার্মা ম্যানেজমেন্ট সফটওয়্যার</p>
        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href="https://ionicrepair.com/lander">বিস্তারিত</a>
      </div>
      <div className="lg:block hidden">

          <ProductCardErp  item={product5}/>
          </div>

    </div>
  );
};

export default BannerCardErp;