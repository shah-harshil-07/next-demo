import Image from "next/image";
import { useRouter } from "next/router";

const Table = (props: any) => {
    const router = useRouter();

    const moveToProductDetail = (index: number) => {
        router.push(`/products/${index}`);
    }

    return (
        <>
            <div>
                <table className='table table-striped mt-5 table-bordered'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Allowed discount</th>
                            <th>Rating</th>
                            <th>Stock</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Thumbnail</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody style={{ border: '1px solid black' }}>
                        {
                            props?.products.map((product: any, index: number) => {
                                return (
                                    <tr key={index} style={{ border: '1px solid black' }}>
                                        <td>{product.title}</td>
                                        <td>{product.price}</td>
                                        <td>{product.discountPercentage}</td>
                                        <td>{product.rating}</td>
                                        <td>{product.stock}</td>
                                        <td>{product.brand}</td>
                                        <td>{product.category}</td>
                                        <td>
                                            <Image
                                                src={product.thumbnail}
                                                alt={product.title}
                                                width={20}
                                                height={20}
                                            />
                                        </td>
                                        <td onClick={() => moveToProductDetail(index)}>
                                            <a style={{ cursor: 'pointer' }}>
                                                Edit
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            <div>
                <span style={{ float: 'right' }}>
                    <label
                        id={props?.productStyle['left-arrow']}
                        className={`border border-success ${props?.productStyle['label']}`}
                        onClick={() => props?.updatePage('decrement')}
                    >
                        {'<<'}
                    </label>

                    <label className={`border border-success ${props?.productStyle['label']}`}>
                        {props?.currentPage}
                    </label>

                    <label
                        id={props?.productStyle['right-arrow']}
                        className={`border border-success ${props?.productStyle['label']}`}
                        onClick={() => props?.updatePage('increment')}
                    >
                        {'>>'}
                    </label>
                </span>
            </div>
        </>
    )
}

export default Table;