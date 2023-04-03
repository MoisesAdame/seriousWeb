export function Product({productName, productPrice, onStock}){
    var description = onStock ? 'stocked' : 'notstocked'
    return (
        <>
            <div className={'product-' + description}>
                <span className="product-name">{productName}</span>
                <span className="product-price">{productPrice}</span>
            </div>
        </>
    );
}