import PriceRange from "../components/FilterUi/PriceRange";
import SortList from "../components/FilterUi/SortList";

export default function FilterSidenav() {
  return (
    <>
      <div className="w-full bg-secondary h-full z-20 flex-wrap p-6 shadow-2xl">
        <SortList />
        <hr className="my-6  w-full" />
        <PriceRange />
      </div>
    </>
  );
}
