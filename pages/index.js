function HomePage(props) {
    const { products } = props;
    return (
        <>

            <ul>
                {
                    products && products.map((prop) => {
                        return <li key={prop.id} > {prop.description} </li>
                    })
                }
            </ul>
        </>

    );
}
export async function getStaticProps(props) {
    return {
        props:
        {
            'products': [
                { "id": "1", "description": "Option 1" },
                { "id": "2", "description": "Option 2" },
                { "id": "3", "description": "Option 3" },
            ]
        }
    };
}
export default HomePage;