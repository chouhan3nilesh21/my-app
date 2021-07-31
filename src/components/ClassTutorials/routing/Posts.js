import React from 'react';
import queryString from 'query-string';

export default function Posts(props) {
    const {params}=props.match;
    const {search} =props.location;
    const result=queryString.parse(search);
    console.log(result);
    
    return (
        <div>
            <h1>Posts</h1>
            <p>Year : {params.year} </p>
            <p>Month : {params.month} </p>

        </div>
    )
}
