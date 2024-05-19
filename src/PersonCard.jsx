export function PersonCard(props){
    const {nombre, apellido, edad, hair}= props;
    return(
        <>
        <h2>{apellido}, {nombre}</h2>
        <ul className="lista">
            <li>Age: {edad} </li>
            <li>Hair Color:{hair}</li>
        </ul>
        </>
    )
}