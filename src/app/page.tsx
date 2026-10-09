import AllProducts from "@/components/Home/AllProducts";
import Banner from "@/components/Home/Banner";
import DecreasedProducts from "@/components/Home/DecreasedProducts";
import IncreasedProducts from "@/components/Home/IncreasedProducts";

export default function Home() {
  return (
    <div className="lg:container mx-1 md:mx-auto py-5">
      <Banner />
      <IncreasedProducts />
      <DecreasedProducts />
      <AllProducts />
    </div>
  );
}
