import React from "react";
import Article from "./Article";


export default function Articles({articles}) {
    const art = articles.map((article) => <li key={article.id}><Article article={article}/> </li>)
    return (<ul>
        {art}
    </ul>)
}