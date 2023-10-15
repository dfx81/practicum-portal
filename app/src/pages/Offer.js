import React from "react";
import ReactMarkdown from "react-markdown"
import API_URL from "../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

let params;

export default function Offer() {
    params = useParams();

    const [offer, setOffer] = useState(
        {
            attributes: {
                company: "...",
                date: "...",
                description: "...",
                image: {
                    data: null
                },
                link: "...",
                locations: {
                    data: null
                },
                courses: {
                    data: null
                }
            }
        });

    useEffect(() => {
        let mounted = true;

        console.log("fetched");

        fetchData().then(
            items => {
                if (mounted) {
                    setOffer(items.data[0]);
                }
            }
        );

        return () => mounted = false;
    }, []);

    if (offer.id)
        return (
            <section>
                <h1 className="page-title">{offer.attributes.company}</h1>
                <small>{offer.attributes.date}</small>
                {
                    offer.attributes.image.data != null ?
                        <img src={API_URL + offer.attributes.image.data.attributes.url} alt={offer.attributes.image.data.attributes.alternativeText} />
                        :
                        <></>
                }
                <div className="article-cont">
                    <ReactMarkdown children={offer.attributes.description} />
                </div>
                <a className="button" href={offer.attributes.link}>Contact Link</a>
                <hr/>
                <div className="info">
                    <small className="tag">{createList(offer.attributes.locations)}</small><br />
                    <small className="tag">{createList(offer.attributes.courses)}</small><br />
                </div>
            </section>
        );
    else
        return (
            <></>
        );
}

function fetchData() {
    return fetch(`${API_URL}/api/offers?filters[slug][$eq]=${params.slug}&populate=*`, { mode: "cors" }).then(
        data => data.json()
    );
}

function createList(list) {
    let arr = "";

    console.log(list);

    list.data.map(
        item => arr += "#" + item.attributes.name + " "
    )

    return arr;
}