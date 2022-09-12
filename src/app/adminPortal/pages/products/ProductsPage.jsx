import { useSelector } from 'react-redux';
import { MainProducts } from './components/MainProducts';


export const ProductsPage = () => {

  // const dispatch = useDispatch()
   const productList = useSelector((state) => state.adminProductList);
   const { products, error, loading } = productList;

  
  return (
    <div>
      <main className="main-wrap">
        <MainProducts products={products} error={error} loading={loading} />
      </main>
    </div>
  );
}
