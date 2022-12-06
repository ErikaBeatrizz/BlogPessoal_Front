import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeClicks } from "../../store/clicks/actions";
import { clicksState } from "../../store/clicks/clicksReducer";
import './Home.css';

function Home () {
     // const [num, setNum]  = useState(0); // HOOK - criar hook de estado
    const num = useSelector<clicksState, clicksState['clicks']>(
        (state) =>  state.clicks
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = `Clicou ${num} vezes`;

        return () => {

        }
    }, [num]);

    return (
    <>
        <h1> Você clicou {num} vezes </h1>
        <Button variant="contained" onClick={() => dispatch(changeClicks(num - 1))}>
           -
        </Button>
        <Button variant="contained" onClick={() => dispatch(changeClicks(num + 1))}>
           +
        </Button>
        
    </>
    );
}

export { Home };