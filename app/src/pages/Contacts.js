import React from "react";
import { useEffect, useState } from "react";
import API_URL from "../api";

export default function Contacts() {
    const [contactInfo, setContactInfo] = useState(
        {
            "data": null
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

    if (contactInfo.data !== null)
        return (
            <>
                <section>
                    <h1 className="page-title">Contact Info.</h1>
                    <section>
                        <h2>Practicum Unit</h2>
                        <p><b>Email: </b><a id="email" href={"mailto:" + contactInfo.data.attributes.email}>{contactInfo.data.attributes.email}</a></p>
                        <p><b>Address: </b><span id="address">{contactInfo.data.attributes.address}</span></p>
                        <p><b>Facebook: </b><a id="fb" href={contactInfo.data.attributes.facebook}>Link</a></p>
                        <p><b>Instagram: </b><a id="ig" href={contactInfo.data.attributes.instagram}>Link</a></p>
                        <p><b>Threads: </b><a id="thr" href={contactInfo.data.attributes.threads}>Link</a></p>
                    </section>
                    <section>
                        <h2>College of Arts and Science (CAS)</h2>
                        <p><b>Person In Charge: </b>{contactInfo.data.attributes.cas_pic_name}</p>
                        <p><b>Contact No.: </b><a id="cas" href={"tel:" + contactInfo.data.attributes.cas_pic_phone}>{contactInfo.data.attributes.cas_pic_phone}</a></p>
                        <p><b>CAS Telegram: </b><a href={contactInfo.data.attributes.cas_telegram}>Link</a></p>
                    </section>
                    <section>
                        <h2>College of Law, Government, and International Studies (COLGIS)</h2>
                        <p><b>Person In Charge: </b>{contactInfo.data.attributes.colgis_pic_name}</p>
                        <p><b>Contact No.: </b><a id="colgis" href={"tel:" + contactInfo.data.attributes.colgis_pic_phone}>{contactInfo.data.attributes.colgis_pic_phone}</a></p>
                        <p><b>COLGIS Telegram: </b><a href={contactInfo.data.attributes.colgis_telegram}>Link</a></p>
                    </section>
                    <section>
                        <h2>College of Business (COB)</h2>
                        <p><b>Person In Charge: </b>{contactInfo.data.attributes.cob_pic_name}</p>
                        <p><b>Contact No.: </b><a id="cob" href={"tel:" + contactInfo.data.attributes.cob_pic_phone}>{contactInfo.data.attributes.cob_pic_phone}</a></p>
                        <p><b>COB Telegram: </b><a href={contactInfo.data.attributes.cob_telegram}>Link</a></p>
                    </section>
                    <section>
                        <h2>Data & System</h2>
                        <p><b>Person In Charge: </b>{contactInfo.data.attributes.system_pic_name}</p>
                        <p><b>Contact No.: </b><a id="system" href={"tel:" + contactInfo.data.attributes.system_pic_phone}>{contactInfo.data.attributes.system_pic_phone}</a></p>
                    </section>
                    <section>
                        <h2>Supervision</h2>
                        <p><b>Person In Charge: </b>{contactInfo.data.attributes.supervisor_pic_name}</p>
                        <p><b>Contact No.: </b><a id="sv" href={"tel:" + contactInfo.data.attributes.supervisor_pic_phone}>{contactInfo.data.attributes.supervisor_pic_phone}</a></p>
                    </section>
                    <section>
                        <h2>Miscellaneous (International, Placement Change, etc)</h2>
                        <p><b>Person In Charge: </b>{contactInfo.data.attributes.misc_pic_name}</p>
                        <p><b>Contact No.: </b><a id="misc" href={"tel:" + contactInfo.data.attributes.misc_pic_phone}>{contactInfo.data.attributes.misc_pic_phone}</a></p>
                    </section>
                </section>
            </>
        );
    else
        return (
            <></>
        );
}

function fetchData() {
    return fetch(API_URL + "/api/contact", { mode: "cors" }).then(
        data => data.json()
    );
}