import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();
    console.log(params.productId);

    return (
        <section>
            <h1>Product Detail</h1>
            <p>Product id: {params.productId}</p>
        </section>
    )
};

export default ProductDetail;