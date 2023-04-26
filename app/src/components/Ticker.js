import React from "react";

export default function Ticker({ contents }) {
    return (
        <aside className="ticker">
            <div className="ticker-items">
                {
                    contents.map(
                        (message, index) => <span key={index}>{message}</span>
                    )
                }
            </div>
        </aside>
    );
}