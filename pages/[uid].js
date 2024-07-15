

function UserId(props) {
    return (
        <h1> {props.username}</h1>
    );

};

export async function getServerSideProps(context) {
    const { params } = context;

    const userid = params.uid;

    return {
        props: {
            username: 'userid-' + userid
        }
    }

}

export default UserId;