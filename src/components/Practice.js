import React, { Component, useState, setState, useEffect } from 'react'

const Practice = () => {
    const [ count, setCount ] = setState(0);

    return (
        <>
        <h>You clicked {count} times.</h>
        <button onClick={()=> setCount(count +1) }>
            Click
        </button>

        </>
    );

}

export default Practice;