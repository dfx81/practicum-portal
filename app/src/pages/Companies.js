import React from "react";
import { useEffect, useState } from "react";
import API_URL from "../api";
import OfferCard from "../components/OfferCard";

let queryLoc = "";
let queryCrs = "";

export default function Companies() {
    const [offers, setOffers] = useState({
        "data": []
    });

    const [locations, setLocations] = useState(
        {
            data: []
        });

    const [courses, setCourses] = useState({
        data: []
    });

    useEffect(() => {
        let mounted = true;

        console.log("fetched");

        fetchData().then(
            items => {
                if (mounted) {
                    setOffers(items);
                }
            }
        );

        fetch(API_URL + "/api/locations", { mode: "cors" }).then(
            data => data.json()
        ).then(
            items => setLocations(items)
        );

        fetch(API_URL + "/api/courses", { mode: "cors" }).then(
            data => data.json()
        ).then(
            items => setCourses(items)
        );

        return () => mounted = false;
    }, []);

    if (offers.data.length !== 0)
        return (
            <>
                <section>
                    <h1 className="page-title">Offers.</h1>

                    <div className="filters">
                        <div>
                            <label htmlFor="loc">Location: </label>
                            <select name="loc" id="select-loc" className="loc">
                                <option key={0} value="None">Select state</option>
                                {
                                    locations.data.map(
                                        item =>
                                            <option key={item.id} value={item.attributes.name}>{item.attributes.name}</option>
                                    )
                                }
                            </select>
                        </div>

                        <div>
                            <label htmlFor="crs">Course: </label>
                            <select name="crs" id="select-crs" className="crs">
                                <option key={-1} value="None">Select course</option>
                                {
                                    courses.data.map(
                                        item =>
                                            <option key={item.id} value={item.attributes.name}>{item.attributes.name}</option>
                                    )
                                }
                            </select>
                        </div>

                        <a href="." className="button thin" onClick={
                            (evt) => {
                                evt.preventDefault();

                                let selectedLoc = document.querySelector("#select-loc").value;
                                let selectedCrs = document.querySelector("#select-crs").value;

                                queryLoc = (selectedLoc === "None") ? "" : "&filters[locations][name][$eq]=" + selectedLoc;
                                queryCrs = (selectedCrs === "None") ? "" : "&filters[courses][name][$eq]=" + selectedCrs;

                                fetchData().then(
                                    items => {
                                        setOffers(items);
                                    }
                                );
                            }
                        }>Filter</a>
                    </div>

                    {
                        offers.data.map(
                            (item) =>
                                <OfferCard key={item.id} title={item.attributes.company} date={item.attributes.date} location={
                                    item.attributes.locations
                                } courses={item.attributes.courses} url={"/offer/" + item.attributes.slug} />
                        )
                    }
                </section>
            </>
        );
    else
    return (
        <>
            <section>
                <h1 className="page-title">Offers.</h1>

                <div className="filters">
                    <div>
                        <label htmlFor="loc">Location: </label>
                        <select name="loc" id="select-loc" className="loc">
                            <option key={0} value="None">Select state</option>
                            {
                                locations.data.map(
                                    item =>
                                        <option key={item.id} value={item.attributes.name}>{item.attributes.name}</option>
                                )
                            }
                        </select>
                    </div>

                    <div>
                        <label htmlFor="crs">Course: </label>
                        <select name="crs" id="select-crs" className="crs">
                            <option key={-1} value="None">Select course</option>
                            {
                                courses.data.map(
                                    item =>
                                        <option key={item.id} value={item.attributes.name}>{item.attributes.name}</option>
                                )
                            }
                        </select>
                    </div>

                    <a href="." className="button thin" onClick={
                        (evt) => {
                            evt.preventDefault();

                            let selectedLoc = document.querySelector("#select-loc").value;
                            let selectedCrs = document.querySelector("#select-crs").value;

                            queryLoc = (selectedLoc === "None") ? "" : "&filters[locations][name][$eq]=" + selectedLoc;
                            queryCrs = (selectedCrs === "None") ? "" : "&filters[courses][name][$eq]=" + selectedCrs;

                            fetchData().then(
                                items => {
                                    setOffers(items);
                                }
                            );
                        }
                    }>Filter</a>
                </div>

                <p>No offers available.</p>
            </section>
        </>
    );
}

function fetchData() {
    return fetch(API_URL + "/api/offers?sort[0]=id:desc&populate=*" + queryLoc + queryCrs, { mode: "cors" }).then(
        data => data.json()
    );
}