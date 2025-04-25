import Button from "./Button";

export default function ProductNotFound() {
  return (
    <>
      <div className="w-full h-full rounded-md overflow-hidden">
        <div className="bg-dark-green w-full h-12 flex justify-center items-center gap-4">
          <h2 className="text-white font-bold text-center text-2xl flex justify-center items-center">
            Product Not Found
          </h2>
          <Button 
            className="px-4 rounded-md bg-teal py-2" 
            name="Go Back"
            onClick={() => {window.location.reload()}}    
        />
        </div>
      </div>
    </>
  );
}
