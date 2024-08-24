import { useState } from "react";

const FormAddSubs = ({ setType,
    setPrice,
    type,
    price,
    setSubs,
    subs,
    editId,
    setEditId,
    spent,
    count }) => {
    const [error, setError] = useState(false);
    const [errorMoney, setErrorMoney] = useState(false);

    const handleSubs = e => {
        e.preventDefault();
        // validar precio
        if (price === "" || Number(price) < 100 || type === "") {
            setError(true);
            return;
        }
        if (count - spent < Number(price)) {
            setErrorMoney(true);
            return;
        }
        setError(false);
        setErrorMoney(false);
        if (editId != "") {
            setEditId("");
            const newSubs = subs.map(item => {
                if (item.id === editId) {
                    item.type = type;
                    item.price = price;
                }
                return item;
            })
            setSubs(newSubs);
        } else{
            const data = {
                type: type,
                price: price,
                id: Date.now()
            }
            // agregar los datos nuevos
            setSubs([...subs, data]);
        }

        // despuest de cragar la informacion se borra los datos ingresados en los campos del fomrulario
        setType("");
        setPrice("");
    }

    return (
        <div className="add-subscription">
            <h3>Agregar suscripciones</h3>
            <form onSubmit={ handleSubs }>
                <p>Servicio</p>
                <select onChange={e => setType(e.target.value)} value={type} required>
                    <option value="">-- seleccionar --</option>
                    <option value="Netflix">Netflix</option>
                    <option value="Disney Plus">Disney Plus</option>
                    <option value="HBO Max">HBO Max</option>
                    <option value="Star Plus">Star Plus</option>
                    <option value="Primer Video">Prime Video</option>
                    <option value="Spotify">Spotify</option>
                    <option value="Apple Tv">Apple tv</option>
                </select>
                <p>Monto</p>
                <input type="number" placeholder="$ 100" onChange={e => setPrice(e.target.value)} value={price} required/>
                { editId != "" ? <input type="submit" value="Actualizar" />
                               : <input type="submit" value="Calcular" />}

            </form>
            { error ? <p className="error">Monto minimo es de $ 100</p> : null }
            { errorMoney ? <p className="error">No tienes presupuesto</p> : null }

        </div>
    );
}

export default FormAddSubs;