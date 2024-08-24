import { useEffect, useState } from "react";
import { moneyFormat } from "../helpers";

const Balance = ({ count, subs, spent, setSpent }) => {

    //actulizamos el total de cada balance
    const upadateBalance = () => {
        const spent = subs.reduce((total, item) => Number(item.price) + total, 0);
        setSpent(spent);
    }

    useEffect(() => {
        upadateBalance();
    }, [subs]);

    return (
        <div className="balance">
            <h3>Presupuesto: {moneyFormat(count)}</h3>
            <h3>Disponible: {moneyFormat(count - spent)}</h3>
            <h3>Gastado: {moneyFormat(spent)}</h3>
        </div>
    );
}

export default Balance;