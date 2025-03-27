import Button from "../UI/Button";
import Input from "../UI/Input";
import TextArea from "../UI/TextArea";

export default function ContactUs() {
    return (
        <div className="md:h-[calc(100vh-21rem)] flex justify-center items-start md:items-center p-5">
            <div className="w-full max-w-2xl border-2 bg-white rounded-xl overflow-hidden shadow-lg">
                <header className="bg-secondary text-center shadow-md text-primary py-4">
                    <h1 className="font-bold text-3xl">Contact Us</h1>
                </header>
                <main className="p-6">
                    <form className="space-y-4">
                        <Input placeHolder="Enter Your Name" type="text" label="Name" className="w-full" />
                        <Input placeHolder="Enter Your Email" type="email" label="Email" className="w-full" />
                        <Input placeHolder="Enter Your Phone Number" type="tel" label="Phone Number" className="w-full" />
                        <TextArea placeHolder="Enter Your Message" label="Message" className="w-full" />
                        <Button type="button" className="btn-primary mt-3 px-3 py-2" name="Send Message" />
                    </form>
                </main>
            </div>
        </div>
    );
}
