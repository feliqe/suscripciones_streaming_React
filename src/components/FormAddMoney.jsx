import { useState } from "react";

const FormAddMoney = ({ setCount, setIsValid }) => {
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);

    const handleForm = e => {
        e.preventDefault();
        if (input === "" || Number(input) < 1000) {
            setError(true);
            return;
        }
        setError(false);
        setCount(Number(input));
        setIsValid(true);
    }

    return (
        <div className="form-add-money">
            <form onSubmit={ handleForm }>
                <p>Ingresar monto presupuesto</p>
                {/* ejecuta una evento setInput */}
                <input type="number" placeholder="$ 1000"  onChange={e => setInput(e.target.value)} required />
                <input type="submit" value="Ingresar" />
            </form>
            {/* validar si es negativo o vacion */}
            { error ? <p className="error">Monto minimo a ingresar es de $1000</p> : null }
        </div>
    );
}

export default FormAddMoney;