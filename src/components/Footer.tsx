import Button from "../UI/Button";

const Footer = () => {
  return (
    <section className="bg-primary flex justify-center items-center flex-col pb-3">
      <section className="w-full md:h-60 flex flex-col md:flex-row gap-5 p-6 md:px-20 text-white">
        {/* address */}
        <div className="md:w-1/3 w-full h-full border-b-[0.5px] p-3 md:border-none">
          <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>
          <p className="mt-2 font-light">
            B-405, Navratna Corporate Park,
            <br />
            Ambli Road, Ahmedabad, 380058
          </p>
          <p className="font-light mt-2">
            <i className="fas fa-envelope"></i> &nbsp;sales@seaflux.tech
          </p>
          <p className="font-light mt-2">
            <i className="fas fa-phone-alt"></i> &nbsp;+1(737)260-0151
          </p>
        </div>
        <div className="w-full md:w-1/3 h-full border-b-[0.5px] p-3 md:border-none">
          <h2 className="text-2xl md:text-3xl font-bold">Follow Us</h2>
          <div className="text-3xl flex gap-2 mt-2">
            <i className="fab fa-linkedin"></i>
            <i className="fa-brands fa-square-x-twitter"></i>
            <i className="fab fa-instagram-square"></i>
          </div>
        </div>
        <div className="w-full md:w-1/3 h-full border-b-[0.5px] p-3 md:border-none">
          <h2 className="text-2xl md:text-3xl font-bold">News Letter</h2>
          <p>Subscribe to get the latest updates.</p>
          <div className="mt-2 w-full">
            <input
              type="text"
              name="subscribe"
              className=" w-2/3 px-4 py-2 bg-white text-black font-medium rounded-l-md"
              placeholder="You Email"
            />
            <Button
              type="button"
              name="subscribe"
              className="btn-secondary px-4 py-2 text-black rounded-l-none"
            />
          </div>
        </div>
      </section>
        <h1 className="text-center w-full text-white">© 2025 Seaflux Technologies Private Limited. All Rights Reserved.</h1>
    </section>
  );
};

export default Footer;
