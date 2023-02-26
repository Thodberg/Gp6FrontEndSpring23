
import './App.css'

  function ProductRow({ product }) {

    return (
      <tr>
        <td>{product.name}</td>
        <td>{product.amount}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
  
  function ProductTable({ products}) {
    const rows = [];
    products.forEach((product) => {
      rows.push(
        <ProductRow
          product={product}/>
      );
         });
  
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
    
  }
  


  
  const PRODUCTS = [
    {price: "40 kr", amount:"2 Stk", name: "Rose"},
    {price: "35 kr", amount:"1 Stk", name: "Scheffler"},
    {price: "120 kr", amount:"4 Stk", name: "Pions"},
  ];


  export default function App() {
    return < ProductTable products={PRODUCTS} />;
  }


  
   
  
        
