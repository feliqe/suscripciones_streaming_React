import SimgleItem from "./SimgleItem";

const DisplayItems = ({ subs, eliminarItem, editItem }) => {

    var mostrar = '';

    if (subs.length) {
       mostrar = 'Listado de suscripciones';
    }

    return (
        <>
           <h2>{mostrar}</h2>
            {
                subs.map(item => (
                    <SimgleItem
                    key={item.id}
                    id={item.id}
                    price={item.price}
                    type={item.type}
                    eliminarItem={eliminarItem}
                    editItem={editItem}
                    />
                ))

            }
        </>
    );
}

export default DisplayItems;