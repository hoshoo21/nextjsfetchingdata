import { getServerSideProps } from "next/dist/build/templates/pages";

function UserProfile(props) {

    return (
        <h1>{props.username}</h1>
    );
};

export async function getServerSideProps(context) {
    return {

        props: {
            username: 'max'
        }
    };

}

export default UserProfile; 