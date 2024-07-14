import { Fragment } from 'react';

function ProductDetailPage(props) {
    const { loadedProduct } = props;
    console.log(loadedProduct);
    if (loadedProduct !== undefined) {
        return (
            <>
                <h1>{loadedProduct.title}</h1>
                <h2>{loadedProduct.description}</h2>
            </>
        );
    }
    else {
        <Fragment>
            <p>  No product found </p>
        </Fragment >
    }


}


const fsPromises = require('fs/promises');
const path = require('path');

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fsPromises.readFile(filePath);
    const data = JSON.parse(jsonData);
    return data;
}

export async function getStaticProps(context) {
    const { params } = context;
    const productId = params.pid;
    const data = await getData();
    const product = data.products.find((product) => product.id === productId);

    if (!product) {
        return { notFound: true };
    }

    return {
        props: {
            loadedProduct: product,
        },
    };



}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { pid: 'p1' } },
            { params: { pid: 'p2' } },
            { params: { pid: 'p3' } },


        ],
        fallback: false,
    };


}
export default ProductDetailPage;
