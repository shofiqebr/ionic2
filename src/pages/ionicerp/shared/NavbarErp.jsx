// import logo from '../../../../assets/logo.png'
import basis from '../../../assets/corporation/basis.svg'
import logo from '../../../assets/corporation/ionic-corporation-logo.png'
import ionicErpLogo from '../../../assets/corporation/ionic-erp-logo.png'

import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import fixedImg from '../../../assets/corporation/care-call-4.png'; 
import Fixed from '../../../shared/Fixed';


const NavbarErp = () => {

  const [open1, setOpen1] = useState(false)
 

    return (
        <div className='fixed    max-w-[1920px] mx-auto w-full bg-white z-20 '>

         {/* gray section */}


            <section className="lg:flex justify-center items-center bg-black hidden">
                <p className="text-[12px] text-white py-1">
                    We Are A Trusted Digital IT Solution In Bangladesh. Business Solution Software ERP, Website, Mobile Apps, Hosting, Domain, SMS Etc.
                </p>
            </section>




            {/* main navbarErp */}




            <section className=" bg-white  lg:pb-2 pb-5 lg:mx-[160px] 2xl:mx-[215px]  mainHome ">
            <div className="drawer navWidth mx-auto ">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
    {/* NavbarErp */}
    <div className="navbar px-0 w-full flex justify-evenly md:justify-between items-center max-w-[1920] mx-auto ">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>




      <Link to='/ionicerp'>
      <div className=" flex-1 ">
        <img className='w-[140px] pl-0' src={ionicErpLogo} alt="" />
      </div>
      </Link>

        <div className='lg:block hidden'>
            <ul className='flex justify-center items-center gap-2'>
              <Link to='/ionicerp'>
                <li className='xl:text-lg text-[14px] font-bold'>হোম <span className='opacity-30'>|</span> </li>
              </Link>
              <Link to='/'>
              <li className='xl:text-lg text-[14px] font-bold'>কোম্পানি <span className='opacity-30'>|</span> </li>
              </Link>
                <li className='flex justify-center items-center xl:text-lg text-[14px] font-bold group relative'>শিল্প খাত সমূহ<span className='flex justify-center items-center gap-1 opacity-30'><FaAngleDown /> |</span>
                        <ul className='group-hover:block hidden absolute xl:top-6 lg:top-5 left-0 bg-white w-56 p-5 font-normal text-base z-50'>
                          <Link to='manufacturing-industry-ionic-erp-software'>
                            <li className='py-1'>ম্যানুফ্যাকচারিং ইন্ডাস্ট্রিজ</li>
                          </Link>
                          <Link to='healthCare'>
                            <li className='py-1'>স্বাস্থ্যসেবা</li>
                          </Link>
                          <Link to='trading-ionic-erp'>
                            <li className='py-1'>ট্রেডিং ব্যবসা</li>
                          </Link>
                          <Link to='chemical-industry-ionic-erp'>
                            <li className='py-1'>রাসায়নিক শিল্প</li>
                          </Link>
                          <Link to='healthcare-ionic-erp'>
                            <li className='py-1'>স্বাস্থ্যেসবা ব্যবস্থাপনা</li>
                          </Link>
                          <Link to='lone-management-ionic-erp'>
                            <li className='py-1'>ঋণ ব্যবস্থাপনা</li>
                          </Link>
                          <Link to='agriculture-ionic-erp'>
                            <li className='py-1'>কৃষি ব্যবস্থাপনা</li>
                          </Link>
                        </ul>
                
                </li>
               
                <Link to='all-services-ionic-erp'>
                <li className='xl:text-lg text-[14px] font-bold'>সেবা সমূহ <span className='opacity-30'>|</span></li>
                </Link>
                <Link to='all-products-ionic-erp'>
                <li className='xl:text-lg text-[14px] font-bold'>পণ্য সমূহ <span className='opacity-30'>|</span></li>
                </Link>
                <Link to=''>
                <li className='xl:text-lg text-[14px] font-bold'>মূল্য <span className='opacity-30'>|</span></li>
                </Link>
                <Link to=''>
                <li className='xl:text-lg text-[14px] font-bold'>টিউটোরিয়াল</li>
                </Link>
            
               
            </ul>
        </div>
    
      <div className="hidden md:flex justify-center items-center">
        
          {/* NavbarErp menu content here */}

          <Link to='/'>
          <img className='w-36 pb-1' src={logo} alt="" />
          </Link>
          <a href="https://basis.org.bd/company-profile/23-01-033">
        
          <img className='w-32 ml-5 mr-1' src={basis} alt="" />
          </a>
        
      </div>

    
     
    </div>
    {/* Page content here */}
    {/* Content */}
  </div>
 
 
                      {/* -------------------------side bar----------------------- */}
 
 
 
 
 
  <div className="drawer-side  z-50">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay "></label>
    <ul className="menu bg-white min-h-full w-80 p-0 text-black text-lg  ">
      {/* Sidebar content here */}
    
  
      <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay flex justify-end items-center text-xl font-semibold p-3"><RxCross1 />close</label>
      <hr />


     




      <p className='text-xl font-semibold bg-[#F5F5F5] py-4 text-center border-b-[#FF0020]'>MENU</p>

      <Link to='/'>
      <li className='py-3  font-semibold text-[#FF0020]'><a>হোম </a></li>
      </Link>
      <hr />
      <Link to='/'>
      <li className='py-3  font-semibold text-[#FF0020]'><a>কোম্পানি </a></li>
      </Link>
      <hr />
    
      <li><a className='flex justify-between h-14 font-semibold pr-0 hover:bg-white'> <p className=' w-full'>শিল্প খাত সমূহ
      </p><p onClick={()=>setOpen1(!open1)}>{open1?<FaAngleDown  className='bg-[#FF0000] text-white h-full text-[57px] p-4 font-light border ' />:<FaAngleRight className='text-[56px]  font-light border p-4 '/>}</p>  </a>
      <hr className='p-0' />

      {open1 && <>
        <Link to='manufacturing-industry-ionic-erp-software'>
        <a href="https://ionic.supersite2.myorderbox.com/">
        <li className='h-14 flex justify-center font-medium w-full'>ম্যানুফ্যাকচারিং ইন্ডাস্ট্রিজ</li>
        </a>
        </Link>
        <hr className='p-0'/>
        <Link to='healthcare'>
        <li className='h-14 flex justify-center font-medium w-full'>  স্বাস্থ্যসেবা</li>
        </Link>
        <hr className='p-0'/>
        <hr className='p-0'/>
        <Link to='trading-ionic-erp'>
        <li className='h-14 flex justify-center font-medium w-full'>ট্রেডিং ব্যবসা</li>
        </Link>
        <hr className='p-0'/>
        <hr className='p-0'/>
        <Link to='chemical-industry-ionic-erp'>
        <li className='h-14 flex justify-center font-medium w-full'>রাসায়নিক শিল্প</li>
        </Link>
        <hr className='p-0'/>
        <hr className='p-0'/>
        <Link to='healthcare-ionic-erp'>
        <li className='h-14 flex justify-center font-medium w-full'> স্বাস্থ্যেসবা ব্যবস্থাপনা</li>
        </Link>
        <hr className='p-0'/>
        <hr className='p-0'/>
        <Link to='lone-management-ionic-erp'>
        <li className='h-14 flex justify-center font-medium w-full'> ঋণ ব্যবস্থাপনা</li>
        </Link>
        <hr className='p-0'/>
        <hr className='p-0'/>
        <Link to='agriculture-ionic-erp'>
        <li className='h-14 flex justify-center font-medium w-full'> কৃষি ব্যবস্থাপনা</li>
        </Link>
        <hr className='p-0'/>
      </>}
      
      </li>
      <hr className='p-0'/>
   
      
  
      
  


    
      <Link to='/contact'>
      <li><a className='flex justify-between h-14 font-semibold pr-0 hover:bg-white '> টিউটোরিয়াল </a></li>
      </Link>
      <hr />


    
      
      <hr />
    </ul>
  </div>
</div>
            </section>



            {/* black part */}


            <section className="bg-black h-1    shadowCustom  ">   </section>
           <Fixed backgroundColor={'bg-black'} gradientBackground="bg-gradient-to-b from-[#767070] to-[#000000]"
           />   
        </div>
    );
};

export default NavbarErp;