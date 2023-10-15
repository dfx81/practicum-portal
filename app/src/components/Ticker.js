import React from "react";
import { useEffect, useState } from "react";
import API_URL from "../api";

export default function Ticker() {
    const [messages, setMessages] = useState(
        {
            "data":[]
        }
    );

    useEffect(() => {
        let mounted = true;

        fetchData().then(
            items => {
                if (mounted) {
                    setMessages(items);
                }
            }
        );

        return () => mounted = false;
      }, []
    );
  

    return (
        <aside className="ticker">
            <div className="ticker-items">
                {
                    /*messages.headlines.data(
                        (message, index) => <span key={index}>{message}</span>
                    )*/

                    messages.data.map(
                        (item) => <span key={item.id}>{item.attributes.message}</span>
                    )
                }
            </div>
        </aside>
    );
}

function fetchData() {
    return fetch(`${API_URL}/api/tickers`, {mode: "cors"}).then(
        data => (data.ok) ? data.json() : { data: [] }
    );
}