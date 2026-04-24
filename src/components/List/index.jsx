import "./style.css"

function List({
    tittle, subtittlesSecondList = "Minhas listas de compra"
}) {
    return (
        <section>
            <h2 id="exemplo-h2" >{ tittle }</h2>

            <h3>{subtittlesSecondList}</h3>
            <ul id="ul" >
                <li>Batata</li>
                <li>Pão</li>
                <li>Arroz</li>
            </ul>
            <h3>Lista Ordenada</h3>
            <ol>
                <li>Monster High</li>
                <li>Musga</li>
                <li>Ioutube</li>
            </ol>

        </section>
    )

}
export default List 