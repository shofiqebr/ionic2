import { Link } from "react-router-dom";
import { productDetailsDataErp } from './productDetailsDataErp'



const ProductDetails = () => {
  return (
    <div className='pb-5 detailsWidth'>
       <section className='flex flex-col justify-center items-center gap-2 mt-10'>
                <h1 className=' text-[#898989] font-semibold '>আমাদের পণ্যের বিস্তারিত জানুন</h1>
                <div className='w-10 h-[3px] bg-[#b3b2b2]'></div>
            </section>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5    pt-10 cardGrid'>
        {productDetailsDataErp.map((product, index) => (
               <div className='pb-10 bg-white pt-3  px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
               <img className='p-5 w-28 h-28 grayscale' src={product.img} alt={product.title} />
               <h2 className='font-bold text-[17.5px] text-center'>{product.title}</h2>
               <p className='text-[14.5px] text-center   text-[#5e5d5d] flex-grow'>{product.description}</p>
              
          
           {/* {
            product.linkType === 'external' ? (
              <a className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9' href={product.link}>বিস্তারিত</a> 
          ) : (
              <Link to={product.link}>
              <div className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9' >বিস্তারিত</div> 
              </Link>
          )
           } */}
             <a href="https://ionicerp.xyz/"className='bg-black text-white p-3 rounded text-[14.5px] font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a>
       
         
           </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
