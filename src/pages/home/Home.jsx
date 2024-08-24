


import Banner from "./Banner";
import BannerCard from "./BannerCard";
import BrandProducts from "./BrandProducts";
import ProductDetails from "./ProductDetails";
import Technologies from "./Technologies";

const Home = () => {
  return (
    <div className=' 2xl:mx-[215px] lg:mx-[160px] mainHome'>
  
      <Banner />
      <BannerCard />
      <BrandProducts />
      <ProductDetails />
      <Technologies />
    </div>
  );
};

export default Home;