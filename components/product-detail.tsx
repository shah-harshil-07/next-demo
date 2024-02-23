const ProductDetailComponent = ({ ...props }) => {
    return (
        <div>
            <h2>Product Detail page of id: {props?.id}</h2>
            <p><b>Title:</b> {props?.title}</p>
            <p><b>Brand:</b> {props?.brand}</p>
            <p><b>Category:</b> {props?.category}</p>
            <p><b>Description:</b> {props?.description}</p>
            <p><b>Rating:</b> {props?.rating}</p>
        </div>
    )
}

export default ProductDetailComponent;
