import ProductCard from "./ProductCard";
import { products } from "./productsData";

const BannerCard = () => {
 const product1 = products?.filter(item => item.lineNo==1)
 const product2 = products?.filter(item => item.lineNo==2)
 const product3 = products?.filter(item => item.lineNo==3)
 const product4 = products?.filter(item => item.lineNo==4)
 const product5 = products?.filter(item => item.lineNo==5)


    return (
        <div className="">
          <ProductCard item={product1}/>
          <ProductCard item={product2}/>
          <ProductCard item={product3}/>
          <ProductCard item={product4}/>
          <ProductCard item={product5}/>
        </div>
    );
};

export default BannerCard;