import React from "react";
import { useEffect, useState } from "react";

export default function Ticker() {
    const [messages, setMessages] = useState(
        {
            headlines: []
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
                    messages.headlines.map(
                        (message, index) => <span key={index}>{message}</span>
                    )
                }
            </div>
        </aside>
    );
}

function fetchData() {
    return fetch("./mock-data/motd.json", {mode: "cors"}).then(
        data => data.json()
    );
}