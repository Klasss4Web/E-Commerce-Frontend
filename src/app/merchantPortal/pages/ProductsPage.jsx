import { useSelector } from 'react-redux';
import { MainProducts } from '../components/products/MainProducts';
// import SideBar from "../components/sidebar/index";
// import { Sidebar } from '../components/Sidebar';

export const ProductsPage = () => {

   const productList = useSelector((state) => state.merchantProductList);
   const { products, error, loading } = productList;

  
  return (
    <div>
      {/* <Header />
      <SideBar /> */}
      <main className="main-wrap">
        <MainProducts products={products} error={error} loading={loading} />
      </main>
    </div>
  );
}
