import React from "react";
import { useEffect, useState } from "react";
import API_URL from "../api";
import Card from "../components/Card";

export default function Announcements() {
    const [articles, setArticles] = useState(
        {
            "data": []
        });

    useEffect(() => {
        let mounted = true;

        console.log("fetched");

        fetchData().then(
            items => {
                if (mounted) {
                    setArticles(items);
                }
            }
        );

        return () => mounted = false;
    }, []);

    if (articles.data.length !== 0)
        return (
            <>
                <section>
                    <h1 className="page-title">Announcements.</h1>
                    {
                        articles.data.map(
                            (item) => <Card key={item.id} title={item.attributes.title} date={item.attributes.date} url={"/article/" + item.attributes.slug} />
                        )
                    }
                </section>
            </>
        );
    else
        return (
            <></>
        );
}

function fetchData() {
    return fetch(API_URL + "/api/pages?sort[0]=id:desc", { mode: "cors" }).then(
        data => data.json()
    );
}