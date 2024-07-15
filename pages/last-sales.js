import { useEffect, useState } from "react";
import dbspp from './firebaseconfig';
import useSWR from "swr";
import firebase from "firebase/app";
import { Firestore } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';

function LastSalesPage(props) {
    //https://reactproj-f9640-default-rtdb.firebaseio.com/sales.json
    const [sales, setSales] = useState(props.sales);
    // const [isLoading, setIsLoading] = useState(false);

    const fetcher = async (url) => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        const res = await fetch("https://reactproj-f9640-default-rtdb.firebaseio.com/sales.json", requestOptions)
        const rawData = await res.json();
        const formattedSalesData = [];
        for (const key in rawData) {
            formattedSalesData.push({
                id: key,
                username: rawData[key].name,
                volume: rawData[key].Volume
            })
            setSales(formattedSalesData);
        }


    }

    const { data, error } = useSWR('https://reactproj-f9640-default-rtdb.firebaseio.com/sales.json', fetcher);

    if (!sales) {
        return (<p>
            Loading....

        </p>);
    }
    if (error !== undefined) {
        return (<p>
            failed to load
        </p>);

    }
    return (
        <ul>
            {sales.map((sale) => {
                return <li key={sale.username}>{sale.username} - {sale.volume} </li>
            })}
        </ul>

    );
}

export async function getStaticProps(context) {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    const res = await fetch("https://reactproj-f9640-default-rtdb.firebaseio.com/sales.json", requestOptions)
    const rawData = await res.json();
    const formattedSalesData = [];
    for (const key in rawData) {
        formattedSalesData.push({
            id: key,
            username: rawData[key].name,
            volume: rawData[key].Volume
        })
    }
    return {
        props: { sales: formattedSalesData },

    };


}
export default LastSalesPage;