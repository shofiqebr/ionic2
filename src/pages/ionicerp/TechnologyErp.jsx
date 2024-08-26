import technologyImg from '../../assets/erp/erpnext-integration-final.png'

const TechnologyErp = ({heading, subheading}) => {
    return (
        <div className='technology'>

            <section className='flex flex-col justify-center items-center gap-2 mt-10'>
                <h1 className=' text-[#898989] text-xl font-semibold '>{heading}</h1>
                <div className='w-[80%] h-[3px] bg-[#b3b2b2]'></div>
                <p className='text-center text-[#898989] font-semibold '>{subheading}</p>
            </section>


            <section className='flex justify-center items-center '>
                <img src={technologyImg} alt="" />
            </section>
         
        </div>
    );
};

export default TechnologyErp;