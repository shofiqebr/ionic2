

import Fixed from "../../shared/Fixed";
import Banner from "./Banner";
import BannerCard from "./BannerCard";
import BrandProducts from "./BrandProducts";
import ProductDetails from "./ProductDetails";
import Technologies from "./Technologies";

const Home = () => {
  return (
    <div className='relative mx-[400px]'>
      <div className="absolute right-0">
        <Fixed />
      </div>
      <Banner />
      <BannerCard/>
      <BrandProducts/>
      <ProductDetails/>
      <Technologies/>
    </div>
  );
};

export default Home;