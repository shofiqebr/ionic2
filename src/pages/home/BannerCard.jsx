import ProductCard from "./ProductCard";
import { products } from "./productsData";
import pharma from '../../assets/corporation/ionic-pharma-logo.png'

const BannerCard = () => {
  const product1 = products?.filter(item => item.lineNo == 1)
  const product2 = products?.filter(item => item.lineNo == 2)
  const product3 = products?.filter(item => item.lineNo == 3)
  const product4 = products?.filter(item => item.lineNo == 4)
  const product5 = products?.filter(item => item.lineNo == 5)


  return (
    <div className="relative ">
      <ProductCard item={product1} />
      {/* Custom handling for product2 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center">
        {product2?.map((product, index) => {
          const isLastItem = index === product2.length - 1;
          return (
            <div
              key={index}
              className={`flex flex-col justify-center items-center border-r border-b py-5 px-3 text-center bg-white cards 
                                        ${isLastItem ? 'block md:hidden lg:flex' : 'lg:hover:scale-105'}`}
            >
              <img className="w-32 lg:w-24 xl:w-32 pb-5" src={product.imgSrc} />
              <h4 className="font-bold cardHeading lg:text-[11px] xl:text-[15px]">{product.title}</h4>
              <p className="text-[#718095] cardType text-center lg:text-[8px] xl:text-[12px]">{product.subtitle}</p>
              <a
                className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px] pt-2"
                href="https://ionicerp.xyz/"
              >
                বিস্তারিত
              </a>
            </div>
          );
        })}
      </div>
      <ProductCard item={product3} />

      <ProductCard item={product4} />
      <div className="text-center border-r border-b   py-5 px-3 lg:hover:scale-105 bg-white w-[187px] md:w-[255px] h-[186px] absolute bottom-[186px] md:bottom-0 right-0 pharmaCard lg:hidden">
        <div className="flex justify-center items-center">

        <img className="w-32 pb-5" src={pharma} />
        </div>
        <h4 className="font-bold cardHeading text-[15px]">আইওনিক ফার্মা</h4>
        <p className="text-[#718095] cardType text-center   text-[13px]">ফার্মা ম্যানেজমেন্ট সফটওয়্যার</p>
        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href="https://ionicrepair.com/lander">বিস্তারিত</a>
      </div>
      <div className="lg:block hidden">

          <ProductCard  item={product5}/>
          </div>

    </div>
  );
};

export default BannerCard;