import React from "react";

export default function Card({ title, date, url }) {
    return (
        <>
            <a className="single" href={url}>
                <div className="card">
                    <span className="single-title"><b>{title}</b></span>
                    <span className="text-muted date">{date}</span>
                </div>
            </a>
            <hr className="gap" />
        </>
    );
}