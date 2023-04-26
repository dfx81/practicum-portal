import React from "react";

export default function Resources() {
    return (
        <>
            <section>
                <h1 className="page-title">Resources.</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>Document A</td>
                            <td><a href="."><img alt="Download this file" src="assets/download.svg" /></a></td>
                        </tr>
                        <tr>
                            <td>Document B</td>
                            <td><a href="."><img alt="Download this file" src="assets/download.svg" /></a></td>
                        </tr>
                        <tr>
                            <td>Document C</td>
                            <td><a href="."><img alt="Download this file" src="assets/download.svg" /></a></td>
                        </tr>
                        <tr>
                            <td>Document D</td>
                            <td><a href="."><img alt="Download this file" src="assets/download.svg" /></a></td>
                        </tr>
                        <tr>
                            <td>Document E</td>
                            <td><a href="."><img alt="Download this file" src="assets/download.svg" /></a></td>
                        </tr>
                        <tr>
                            <td>Form Placeholder With A Really Long and Pointless Name</td>
                            <td><a href="."><img alt="Download this file" src="assets/download.svg" /></a></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
}