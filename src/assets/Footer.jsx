import Container from './Container';
import { X } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Mail } from 'lucide-react';
const Footer = () => {
  return (
    <div className="bg-black">
      <Container>
        <div className="grid lg:grid-cols-5 grid-cols-1 lg:gap-6 gap-4 lg:pt-6 pt-6 px-4 lg:px-0 pb-4">
          <div className="lg:mr-10">
            <h1 className="text-lg lg:text-xl text-white font-semibold">
              CS-Ticket System
            </h1>
            <p className="text-gray-400 py-2  max-w-full lg:max-w-md break-wordsa">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div>
            <h1 className="text-lg text-white">Company</h1>
            <ul className="list-none text-gray-400">
              <li className="py-2">About Us</li>
              <li className="py-2">Our Mission</li>
              <li className="py-2">Contact Saled</li>
            </ul>
          </div>

          <div>
            <h1 className="text-lg text-white">Services</h1>
            <ul className="list-none text-gray-400">
              <li className="py-2">Products & Services</li>
              <li className="py-2">Customer Stories</li>
              <li className="py-2">Download Apps</li>
            </ul>
          </div>

          <div>
            <h1 className="text-lg text-white">Information</h1>
            <ul className="list-none text-gray-400">
              <li className="py-2">Privacy Policy</li>
              <li className="py-2">Terms & Conditions</li>
              <li className="py-2">Join Us</li>
            </ul>
          </div>

          <div>
            <h1 className="text-lg text-white py-2">Social Links</h1>
            <ul className="list-none space-y-4 text-sm lg:text-base">
              <li className=" flex">
                <X size={20} className="bg-white rounded text-black" />
                <p className="px-2 text-gray-400"> @CS — Ticket System</p>
              </li>

              <li className="  flex ">
                <Linkedin size={20} className="bg-white rounded text-black" />
                <p className="px-2 text-gray-400"> @CS — Ticket System</p>
              </li>
              <li className="  flex">
                <Facebook size={20} className="bg-white rounded text-black" />
                <p className="px-2 text-gray-400"> @CS — Ticket System</p>
              </li>
              <li className="  flex">
                <Mail size={20} className="bg-white rounded text-black" />
                <p className="px-2 text-gray-400"> support@cst.com </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-t-gray-500">
          <p className="text-white text-center p-2 ">
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
