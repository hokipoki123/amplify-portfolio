import React from 'react';
import DataFetching from './DataFetching';


function APIpage() {
    return (
    <div>
    <h2>API's</h2>
    <p>This page is just to show some API usage.</p>
    <p></p>
    <h3>Type in the number of the post you want to see below.</h3>
    <DataFetching />
    </div>
    )
}

export default APIpage