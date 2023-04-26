import React from "react";

export default function Contacts() {
    return (
        <>
            <section>
                <h1 className="page-title">Contact Info.</h1>
                <section>
                    <h2>Practicum Unit</h2>
                    <p><b>Email: </b><a id="email" href=".">#</a></p>
                    <p><b>Address: </b><span id="address">#</span></p>
                    <p><b>Office Location: </b><span id="office">#</span></p>
                </section>
                <section>
                    <h2>College of Arts and Science (CAS)</h2>
                    <p><b>Contact No.: </b><a id="cas" href=".">#</a></p>
                </section>
                <section>
                    <h2>College of Law, Government, and International Studies (COLGIS)</h2>
                    <p><b>Contact No.: </b><a id="colgis" href=".">#</a></p>
                </section>
                <section>
                    <h2>College of Business (COB)</h2>
                    <p><b>Contact No.: </b><a id="cob" href=".">#</a></p>
                </section>
            </section>
        </>
    );
}