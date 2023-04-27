import React from "react";
import { useEffect, useState } from "react";

export default function Contacts() {
    const [contactInfo, setContactInfo] = useState({
        email: "Loading...",
        addresses: {
            base: "Loading...",
            office: "Loading...",
        },
        phone: {
            cas: "Loading...",
            cob: "Loading...",
            colgis: "Loading...",
        },
    });

    useEffect(() => {
        let mounted = true;

        console.log("fetched");

        fetchData().then(
            items => {
                if (mounted) {
                    setContactInfo(items);
                }
            }
        );

        return () => mounted = false;
    }, []);

    return (
        <>
            <section>
                <h1 className="page-title">Contact Info.</h1>
                <section>
                    <h2>Practicum Unit</h2>
                    <p><b>Email: </b><a id="email" href={"mailto:" + contactInfo.email }>{ contactInfo.email }</a></p>
                    <p><b>Address: </b><span id="address">{ contactInfo.addresses.base }</span></p>
                    <p><b>Office Location: </b><span id="office">{ contactInfo.addresses.office }</span></p>
                </section>
                <section>
                    <h2>College of Arts and Science (CAS)</h2>
                    <p><b>Contact No.: </b><a id="cas" href={ "tel:" + contactInfo.phone.cas }>{ contactInfo.phone.cas }</a></p>
                </section>
                <section>
                    <h2>College of Law, Government, and International Studies (COLGIS)</h2>
                    <p><b>Contact No.: </b><a id="colgis" href={ "tel:" + contactInfo.phone.colgis }>{ contactInfo.phone.colgis }</a></p>
                </section>
                <section>
                    <h2>College of Business (COB)</h2>
                    <p><b>Contact No.: </b><a id="cob" href={ "tel:" + contactInfo.phone.cob }>{ contactInfo.phone.cob }</a></p>
                </section>
            </section>
        </>
    );
}

function fetchData() {
    return fetch("./mock-data/contacts.json", {mode: "cors"}).then(
        data => data.json()
    );
}