import React from "react";
import TableRow from "../components/TableRow";
import { useState, useEffect } from "react";
import API_URL from "../api";

export default function Resources() {
    const [generalRes, setGeneralRes] = useState(
        []);

    const [casRes, setCasRes] = useState(
        []);

    const [cobRes, setCobRes] = useState(
        []);

    const [colgisRes, setColgisRes] = useState(
        []);

    useEffect(() => {
        let mounted = true;

        console.log("fetched");

        fetchData().then(
            items => {
                if (mounted) {
                    let gen = [];
                    let cas = [];
                    let cob = [];
                    let colgis = [];

                    items.data.forEach(
                        item => {
                            if (item.attributes.type === "General")
                                gen.push(item);
                            else if (item.attributes.type === "CAS")
                                cas.push(item);
                            else if (item.attributes.type === "COB")
                                cob.push(item);
                            else if (item.attributes.type === "COLGIS")
                                colgis.push(item);
                        }
                    )

                    console.log(gen);
                    console.log(cas);
                    console.log(cob);
                    console.log(colgis);

                    setGeneralRes(gen);
                    setCasRes(cas);
                    setCobRes(cob);
                    setColgisRes(colgis);
                }
            }
        );

        return () => mounted = false;
    }, []);

    if (generalRes.length !== 0 || casRes.length !== 0 || cobRes.length !== 0 || colgisRes.length !== 0)
        return (
            <>
                <section>
                    <h1 className="page-title">Resources.</h1>
                    <h2>General</h2>
                    {
                        (generalRes.length !== 0) ?
                            <table>
                                <tbody>
                                    {
                                        generalRes.map(
                                            (item) => {
                                                console.log(item.attributes.filename)
                                                return <TableRow key={item.id} title={`${item.attributes.filename}`} url={item.attributes.file.data[0].attributes.url} />
                                            }
                                        )
                                    }
                                </tbody>
                            </table>
                            :
                            <p>No resources found.</p>
                    }

                    <hr />

                    <h2>CAS</h2>
                    {
                        (casRes.length !== 0) ?
                            <table>
                                <tbody>
                                    {
                                        casRes.map(
                                            (item) => {
                                                console.log(item.attributes.filename)
                                                return <TableRow key={item.id} title={`${item.attributes.filename}`} url={item.attributes.file.data[0].attributes.url} />
                                            }
                                        )
                                    }
                                </tbody>
                            </table>
                            :
                            <p>No resources found.</p>
                    }

                    <hr />

                    <h2>COB</h2>
                    {
                        (cobRes.length !== 0) ?
                            <table>
                                <tbody>
                                    {
                                        cobRes.map(
                                            (item) => {
                                                console.log(item.attributes.filename)
                                                return <TableRow key={item.id} title={`${item.attributes.filename}`} url={item.attributes.file.data[0].attributes.url} />
                                            }
                                        )
                                    }
                                </tbody>
                            </table>
                            :
                            <p>No resources found.</p>
                    }

                    <hr />

                    <h2>COLGIS</h2>
                    {
                        (colgisRes.length !== 0) ?
                            <table>
                                <tbody>
                                    {
                                        colgisRes.map(
                                            (item) => {
                                                console.log(item.attributes.filename)
                                                return <TableRow key={item.id} title={`${item.attributes.filename}`} url={item.attributes.file.data[0].attributes.url} />
                                            }
                                        )
                                    }
                                </tbody>
                            </table>
                            :
                            <p>No resources found.</p>
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
    return fetch(`${API_URL}/api/resources?&populate=*`, { mode: "cors" }).then(
        data => data.json()
    );
}