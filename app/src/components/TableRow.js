import React from "react";
import API_URL from "../api";

export default function TableRow({title, url}) {
    return (
        <tr>
            <td>{title}</td>
            <td><a href={API_URL + url}><img alt="Download this file" src="/assets/download.svg" /></a></td>
        </tr>
    );
}