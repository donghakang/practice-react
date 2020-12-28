import productsData from "./vschoolProducts";
import Products from "./Products";

function App() {
    const productComponents = productsData.map(item => <Products key={item.id} product={item}/>)
    return (
      <div>
        {productComponents}
      </div>
    );
}

export default App;
