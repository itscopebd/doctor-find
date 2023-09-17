import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="container mx-auto grid grid-cols-4 gap-5 mb-20">
      <div>
        <img src={logo} alt="footer logo" />
        <p className="mt-2">Copyright &copy; 2023 developed by rofiqul islam all right reserved.</p>
      </div>
      <div>
        <h3 className="text-lg font-bold">Quick Links</h3>
        <ul className=" mt-2 flex gap-2 flex-col">
            <li> <Link className="hover:text-black hover:font-semibold" to="/">Home</Link> </li>
            <li> <Link className="hover:text-black hover:font-semibold"  to="/about">About Us</Link> </li>
            <li> <Link className="hover:text-black hover:font-semibold"  to="/services">Services</Link> </li>
            <li> <Link className="hover:text-black hover:font-semibold"  to="/blog">Blog</Link> </li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold">I want to:</h3>
        <ul className=" mt-2 flex gap-2 flex-col">
            <li> <Link className="hover:text-black hover:font-semibold" to="/">Find Doctor</Link> </li>
            <li> <Link className="hover:text-black hover:font-semibold"  to="/about">Request an Appointment</Link> </li>
            <li> <Link className="hover:text-black hover:font-semibold"  to="/services">Find a Location</Link> </li>
            <li> <Link className="hover:text-black hover:font-semibold"  to="/blog">Get a Opinion</Link> </li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold">Support</h3>
        <ul className=" mt-2 flex gap-2 flex-col">
            <li> <Link className="hover:text-black hover:font-semibold" to="/">Donate</Link> </li>
            <li> <Link className="hover:text-black hover:font-semibold"  to="/about">Contact us</Link> </li>
           
        </ul>
      </div>
    </footer>
  );
};

export default Footer; 
