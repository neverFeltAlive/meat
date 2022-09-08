import type {NextPage} from 'next'
import React from "react";
import Order from "../components/order/Order"
import Comments from "../components/comments/Comments";
import Media from "../components/Media";
import Schema from "../components/Schema";
import useCatalog from "../hooks/useCatalog";

const sections = [
    <Order key={1}/>,
    <Media key={2}/>,
    // <Comments key={3}/>
]


const Home: NextPage = () => {
    const catalog = useCatalog();

    return (
        <>
            <div className="index">
                <Schema/>
                {sections.map((section, index) => {
                    return section
                })}
            </div>
        </>
    );
}

export default Home



