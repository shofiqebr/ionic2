import technologyImg from '../../assets/erp/erpnext-integration-final.png'

const TechnologyErp = ({heading, subheading}) => {
    return (
        <div className='technology'>

            <section className='flex flex-col justify-center items-center gap-2 mt-5 py-5'>
                <h1 className='text-[#898989] font-semibold text-center text-[17.5px]'>{heading}</h1>
                <div className='w-10 h-[3px] bg-[#b3b2b2]'></div>
                <p className='text-center text-[#898989] font-semibold  text-[14.5px]'>{subheading}</p>
            </section>


            <section className='flex justify-center items-center '>
                <img src={technologyImg} alt="" />
            </section>
         
        </div>
    );
};

export default TechnologyErp;