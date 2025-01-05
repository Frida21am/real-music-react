import Products from "@/components/ui/catalog/Products";
import MainFullScreen from "@/components/ui/fullscreens/MainFullScreen";

function Page() {
  return (
    <div className="catalog">
      <MainFullScreen />
      <div className="container">
        <Products />
      </div>
    </div>
  );
}

export default Page;
