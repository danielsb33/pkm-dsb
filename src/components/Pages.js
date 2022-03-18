import React from 'react';

const Pages = ({ pokemonData, setOffset }) => {

    return (
        <div className = "PagesBtns">
            <button onClick = {() => pokemonData.previous ? setOffset(pokemonData.previous.slice(pokemonData.previous.indexOf("?"))) : null}>🠜</button>{" "}
            <button onClick = {() => pokemonData.next ? setOffset(pokemonData.next.slice(pokemonData.next.indexOf("?"))) : null}>🠞</button>{" "}
        </div>
    );
};

export default Pages;