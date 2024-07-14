import Link from 'next/link';
function HomePage(props) {
    const { products } = props;

    return (
        <>

            <ul>
                {
                    products && products.map((prop) => {
                        return <li key={prop.id}><Link href={`/${prop.id}`}> {prop.title}</Link>  </li>
                    })
                }
            </ul >
        </>

    );
}
const fs = require('fs/promises');
const path = require('path');
export async function getStaticProps(context) {
    console.log('regerating ..... ')
    const filepath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filepath)
    const data = JSON.parse(jsonData);
    return {
        props:
        {
            'products': data.products
        },
        revalidate: 10
    };
}
export default HomePage;