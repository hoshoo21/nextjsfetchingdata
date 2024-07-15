

function UserId(props) {
    return (
        <h1> {props.params}</h1>
    );

};

export async function getServerSideProps(context) {
    const { params } = context;

    const userid = params.uid;

    return {
        params: 'userid-' + udi
    }

}