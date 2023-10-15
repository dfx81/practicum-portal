import React from "react";

export default function OfferCard({ title, date, location, courses, url }) {
    return (
        <>
            <a className="single" href={url}>
                <div className="card">
                    <span className="single-title"><b>{title}</b></span>
                    <div className="info">
                        <small className="tag">{createList(location)}</small><br/>
                        <small className="tag">{createList(courses)}</small><br/>
                    </div>
                </div>
            </a>
            <hr className="gap" />
        </>
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