import type {NextPage} from 'next'
import React from "react";
import Order from "../components/order/Order"
import Comments from "../components/comments/Comments";
import Media from "../components/Media";
import Schema from "../components/Schema";

const sections = [
    <Order key={1}/>,
    <Media key={2}/>,
    <Comments key={3}/>
]
const Home: NextPage = () => {
    return (
        <>
            <div className="index">
                <div className="container">
                    {sections.map((section, index) => {
                        return (
                            <div key={index} className="section">
                                {section}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Home



