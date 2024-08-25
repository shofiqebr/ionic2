import logo from '../assets/corporation/ionic-corporation-logo.png'
import basis from '../assets/corporation/basis.svg'
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import Fixed from './Fixed';


const Navbar = () => {

  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)

    return (
        <div className='fixed    max-w-[1920px] mx-auto w-full bg-white z-20 '>

         {/* gray section */}


            <section className="lg:flex justify-center items-center bg-[#001B41] hidden">
                <p className="text-[12px] text-white py-1">
                    We Are A Trusted Digital IT Solution In Bangladesh. Business Solution Software ERP, Website, Mobile Apps, Hosting, Domain, SMS Etc.
                </p>
            </section>




            {/* main navbar */}




            <section className=" bg-white lg:pb-2 pb-5 lg:mx-[160px] 2xl:mx-[215px] mx-2 mainHome">
            <div className="drawer navWidth mx-auto ">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
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




      <Link to='/'>
      <div className=" flex-1">
        <img className='w-44' src={logo} alt="" />
      </div>
      </Link>

      <div className='lg:block hidden'>
            <ul className='flex justify-center items-center gap-2'>
              <Link to='/'>
                <li className='xl:text-lg text-[11px] font-bold'>হোম <span className='opacity-30'>|</span> </li>
              </Link>
               
                <li className='flex justify-center items-center xl:text-lg text-[11px] font-bold group relative'>সেবা ও পণ্য সমূহ<span className='flex justify-center items-center gap-1 opacity-30'><FaAngleDown /> |</span>
                        <ul className='group-hover:block hidden absolute xl:top-6 lg:top-4 left-0 bg-white w-56 p-5 font-normal text-base z-50'>
                          <Link to='ionicerp'>
                            <li className='py-1'>আওনিক ইআরপি</li>
                          </Link>
                          
                          <Link to='karmochary'>
                            <li className='py-1'>কর্মচারি</li>
                          </Link>
                      
                          <Link to='ionicshop'>
                            <li className='py-1'>আইওনিক সপ</li>
                          </Link>
                          <Link to='ionicpharma'>
                            <li className='py-1'>আইওনিক ফার্মা</li>
                          </Link>
                        </ul>
                
                </li>
                <li className='flex justify-center items-center xl:text-lg text-[11px] font-bold group relative'>ডোমেইন<span className='flex justify-center items-center gap-1 opacity-30'><FaAngleDown /> |</span>
                        <ul className='group-hover:block hidden absolute xl:top-6 lg:top-4 left-0 bg-white w-56 p-5 font-normal text-base z-50'>
                          <a href="https://ionic.supersite2.myorderbox.com/">
                            <li className='py-1'>আন্তর্জাতিক ডোমেইন</li>
                          </a>
                          <a href="https://bdia.btcl.com.bd/">
                            <li className='py-1'>বিডি ডোমেইন</li>
                          </a>
                        </ul>
                
                </li>
                <li className='flex justify-center items-center xl:text-lg text-[11px] font-bold group relative'>হোস্টিং<span className='flex justify-center items-center gap-1 opacity-30'><FaAngleDown /> |</span>
                        <ul className='group-hover:block hidden absolute xl:top-6 lg:top-4 left-0 bg-white w-56 p-3 text-base  font-normal z-50'>
                           <Link to='/webHosting'>
                           <li className='py-2'> Plesk প্রিমিয়াম ওয়েব হোস্টিং</li>
                           </Link> 
                           <Link to='/dedicatedServer'>
                            <li className='py-2'>Plesk ডেডিকেটেড সার্ভার</li>
                           </Link>
                            <Link to='/resellerServer'>
                            <li className='py-2'>Plesk রিসেলার সার্ভার</li>
                            </Link>
                        </ul>
                    
                </li>
                <Link to='/contact'>
                <li className='xl:text-lg text-[11px] font-bold'>যোগাযোগ <span className='opacity-30'>|</span></li>
                </Link>
            
                <li className='flex justify-center items-center xl:text-lg text-[11px] font-bold group relative'>লগইন<span className='flex justify-center items-center gap-1 opacity-30'><FaAngleDown /> </span>
                        <ul className='group-hover:block hidden absolute text-base font-normal xl:top-6 lg:top-4 left-0 bg-white w-44 p-5 z-50'>
                          <a href="https://ionic.supersite2.myorderbox.com/login.php">
                            <li className='py-2'>ডোমেইন লগইন</li>
                          </a>
                          <a href="https://vmi699873.contaboserver.net:8443/login_up.php?success_redirect_url=%2F">
                            <li className='py-2'>হোস্টিং লগইন</li>
                          </a>
                          <a href="https://sms.mimsms.com/Identity/Account/Login?ReturnUrl=%2F">
                            <li className='py-2'>এসএমএস লগইন</li>
                          </a>
                          <a href="https://erp.ioniccorporation.com/">
                            <li className='py-2'>স্টাফ লগইন</li>
                          </a>
                          <a href="https://erp.ioniccorporation.com/">
                            <li className='py-2'>এজেন্ট হেল্প</li>
                          </a>
                        </ul>
                
                </li>
            </ul>
        </div>
    
      <div className="hidden flex-none md:block">
        
          {/* Navbar menu content here */}
          <a href="https://basis.org.bd/company-profile/23-01-033">
        
          <img className='w-32 ' src={basis} alt="" />
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
    
      <li><a className='flex justify-between h-14 font-semibold pr-0 hover:bg-white'> <p className=' w-full'>সেবা ও পণ্য সমূহ </p><p onClick={()=>setOpen1(!open1)}>{open1?<FaAngleDown  className='bg-[#FF0000] text-white h-full text-[57px] p-4 font-light border ' />:<FaAngleRight className='text-[56px]  font-light border p-4 '/>}</p>  </a>
      <hr className='p-0' />

      {open1 && <>
        <Link to='ionicerp'>
        <li className='h-14 flex justify-center font-medium w-full'>আওনিক ইআরপি</li>
        </Link>
        <hr className='p-0'/>
        <Link to='karmochary'>
        <li className='h-14 flex justify-center font-medium w-full'>কর্মচারি</li>
        </Link>
        <hr className='p-0'/>
        <Link to='ionicshop'>
        <li className='h-14 flex justify-center font-medium w-full'>আইওনিক সপ</li>
        </Link>
        <hr className='p-0'/>
        <Link to='ionicpharma'>
        <li className='h-14 flex justify-center font-medium w-full'>আইওনিক ফার্মা</li>
        </Link>
        <hr className='p-0'/>
      </>}
      
      </li>
      <li><a className='flex justify-between h-14 font-semibold pr-0 hover:bg-white'> <p className=' w-full'>ডোমেইন </p><p onClick={()=>setOpen1(!open1)}>{open1?<FaAngleDown  className='bg-[#FF0000] text-white h-full text-[57px] p-4 font-light border ' />:<FaAngleRight className='text-[56px]  font-light border p-4 '/>}</p>  </a>
      <hr className='p-0' />

      {open1 && <>
        <a href="https://ionic.supersite2.myorderbox.com/">
        <li className='h-14 flex justify-center font-medium w-full'>আন্তর্জাতিক ডোমেইন</li>
        </a>
        <hr className='p-0'/>
        <a href="https://bdia.btcl.com.bd/">
        <li className='h-14 flex justify-center font-medium w-full'> বিডি ডোমেইন</li>
        </a>
        <hr className='p-0'/>
      </>}
      
      </li>
      <hr className='p-0'/>
      <li><a className='flex justify-between h-14 font-semibold pr-0 hover:bg-white'> <p className=' w-full'>হোস্টিং</p><p onClick={()=>setOpen2(!open2)}>{open2?<FaAngleDown  className='bg-[#FF0000] text-white h-full text-[57px] p-4 font-light border ' />:<FaAngleRight className='text-[56px]  font-light border p-4 '/>}</p>  </a>
      <hr className='p-0' />
     


      {open2 && <>
        <Link to='/webHosting'>
        <li className='h-14 flex justify-center font-medium w-full' >Plesk প্রিমিয়াম ওয়েব হোস্টিং </li>
        </Link>
        <hr className='p-0'/>
        <Link to='/dedicatedServer'>
        <li className='h-14 flex justify-center font-medium w-full'>Plesk ডেডিকেটেড সার্ভার </li>
        </Link>
        <hr className='p-0'/>
        <Link to='/resellerServer'>
        <li className='h-14 flex justify-center font-medium w-full'>Plesk রিসেলার সার্ভার</li>
        </Link>
        <hr className='p-0'/>
      </>}
      
      </li>
      <hr className='p-0'/>
      
  
      
  


    
      <Link to='/contact'>
      <li><a className='flex justify-between h-14 font-semibold pr-0 hover:bg-white '> যোগাযোগ  </a></li>
      </Link>
      <hr />


      <li><a className='flex justify-between h-14 font-semibold pr-0 hover:bg-white'> <p className=' w-full'>লগইন</p><p onClick={()=>setOpen3(!open3)}>{open3?<FaAngleDown  className='bg-[#FF0000] text-white h-full text-[57px] p-4 font-light border ' />:<FaAngleRight className='text-[56px]  font-light border p-4 '/>}</p>  </a>
      <hr className='p-0' />

   

      {open3 && <>
        <a href="https://ionic.supersite2.myorderbox.com/login.php">
        <li className='h-14 flex justify-center font-medium w-full'>ডোমেইন লগইন </li>
        </a>
        <hr className='p-0' />
        <a href="https://vmi699873.contaboserver.net:8443/login_up.php?success_redirect_url=%2F">
          <li className='h-14 flex justify-center font-medium w-full'>হোস্টিং লগইন </li>
        </a>
          <hr className='p-0' />
          <a href="https://sms.mimsms.com/Identity/Account/Login?ReturnUrl=%2F">
          <li className='h-14 flex justify-center font-medium w-full'>এসএমএস লগইন </li>
          </a>
          <hr className='p-0' />
          <a href="https://erp.ioniccorporation.com/">
          
          <li className='h-14 flex justify-center font-medium w-full'>স্টাফ লগইন </li>
          </a>
          <hr className='p-0' />
          <a href="https://erp.ioniccorporation.com/">
          <li className='h-14 flex justify-center font-medium w-full'>এজেন্ট হেল্প</li>
          </a>
          <hr className='p-0' />
      </>}
      
      </li>
      
      <hr />
    </ul>
  </div>
</div>
            </section>



            {/* black part */}


            <section className="bg-[#001B41] h-1    shadowCustom  ">   </section>
             <Fixed backgroundColor='bg-[#001B41]'  gradientBackground="bg-gradient-to-b from-[#1574C4] to-[#001B42]"/>
        </div>
    );
};

export default Navbar;