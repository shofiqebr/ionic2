import { Outlet } from "react-router-dom";
import NavbarKarmochary from "../pages/karmochary/shared/NavbarKarmochary";
import Footer from "../shared/Footer";


const MainKarmochary = () => {
    return (
        <div>
            <NavbarKarmochary/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default MainKarmochary;