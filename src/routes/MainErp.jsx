import { Outlet } from "react-router-dom";
import NavbarErp from "../pages/ionicerp/shared/NavbarErp";
import Footer from "../shared/Footer";


const MainErp = () => {
    return (
        <div>
            <NavbarErp/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default MainErp;