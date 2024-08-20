import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";


const Root = () => {
    return (
        <>

            <Navbar />
            <Outlet />
            {/* <Footer /> */}
        </>
    );
};

export default Root;