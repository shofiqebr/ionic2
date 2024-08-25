import BannerCardErp from "./BannerCardErp";
import BannerErp from "./BannerErp";
import ProductDetailsErp from './ProductDetailsErp'


const HomeErp = () => {
    return (
        <div className="2xl:mx-[215px] lg:mx-[160px] mainHome">
            <BannerErp/>
            <BannerCardErp/>
            <ProductDetailsErp/>
            
        </div>
    );
};

export default HomeErp;