import React from "react";
import ReactMarkdown from "react-markdown"
import API_URL from "../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

let params;

export default function Guide() {
    params = useParams();

    const [article, setArticle] = useState(
        {
            attributes: {
                title: "...",
                date: "...",
                content: "...",
                cover: {
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
                    setArticle(items.data[0]);
                }
            }
        );

        return () => mounted = false;
    }, []);

    if (article.id)
        return (
            <section>
                <h1 className="page-title">{article.attributes.title}</h1>
                <small>{article.attributes.date}</small>
                {
                    article.attributes.cover.data != null ?
                        article.attributes.cover.data.attributes.mime === "video/mp4" ?
                            <video controls>
                                <source src={API_URL + article.attributes.cover.data.attributes.url} type="video/mp4" />
                            </video>
                            :
                            <img src={API_URL + article.attributes.cover.data.attributes.url} alt={article.attributes.cover.data.attributes.alternativeText} />
                        :
                        <></>
                }
                <div className="article-cont">
                    <ReactMarkdown children={article.attributes.content} />
                </div>
            </section>
        );
    else
        return (
            <></>
        );
}

function fetchData() {
    return fetch(`${API_URL}/api/guides?filters[slug][$eq]=${params.slug}&populate=*`, { mode: "cors" }).then(
        data => data.json()
    );
}