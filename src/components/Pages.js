import React from 'react';

const Pages = ({ pokemonData, setOffset }) => {

    return (
        <div className = "PagesBtns">
            <button onClick = {() => pokemonData.previous ? setOffset(pokemonData.previous.slice(pokemonData.previous.indexOf("?"))) : null}>&#129052;</button>{" "}
            <button onClick = {() => pokemonData.next ? setOffset(pokemonData.next.slice(pokemonData.next.indexOf("?"))) : null}>&#129054;</button>{" "}
        </div>
    );
};

export default Pages;