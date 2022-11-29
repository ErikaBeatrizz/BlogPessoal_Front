import { Button } from "@material-ui/core";
import React, { useState } from "react";
import './Home.css';

function Home () {
    const [num, setNum]  = useState(0); // HOOK - criar hook de estado

    return (
    <>
        <h1> Você clicou {num} vezes </h1>
        <Button variant="contained" onClick={() => setNum(num - 1)}>
           -
        </Button>
        <Button variant="contained" onClick={() => setNum(num + 1)}>
           +
        </Button>
        
    </>
    );
}

export { Home };