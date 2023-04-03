import { Product } from './Product';

export function Category({name, products}){    
    function listItem(product, id){
        return <Product key={product.name + id} productName={product.name} productPrice={product.price} onStock={product.stocked}/>;
    }

    const listProducts = products.map((product, id) => {
        return listItem(product, id);
    })

    return (
        <div className='category'>
            <div className='category-name'>
                <h3>{name}</h3>
            </div>
            <div className='category-list'>
                {listProducts}
            </div>
        </div>
    );
}
