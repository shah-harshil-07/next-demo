import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import ProductDetailComponent from "../../components/product-detail";

interface IProductDetails {
    data: {
        title: string;
        brand: string;
        category: string;
        description: string;
        rating: number
    }
}

const ProductDetail = ({ ...productProps }: IProductDetails) => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <ProductDetailComponent { ...productProps.data } id={id} />
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {
    try {
        let editId: any = 0;
        if (params && params.id) {
            editId = (params.id as any)
            editId++;
        }

        const response = await fetch(`https://dummyjson.com/products/${editId}`);
        const data: any = await response.json();

        return { props: { data } };
    } catch (err) {
        res.statusCode = 404;
        return { props: {} };
    }

}

export default ProductDetail;
