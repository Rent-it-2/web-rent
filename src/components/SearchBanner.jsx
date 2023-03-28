import './SearchBanner.css'

function Buscar() {
    return (
        <>
            <section className='w-full flex items-center'>
                <h1>Encontre o que precisa a um valor acessível</h1>
                <div className='w-full flex items-center'>
                        <img className='search-icon' src="/imagens/search.png" alt="Lupa" />
                        <input className='search-input' type="text" placeholder="O que está procurando?"/>
                        <img className='submit-icon' src="/imagens/next-circle.png" alt="Avançar" />
                </div>
                <Categorias />
            </section>
        </>
    )
}
function Categorias(){
    return(
        <>
        <div className='categorias'>
                <p>Utensílios domésticos</p>
                <p>Ferramentas</p>
                <p>Eletrônicos</p>
                <p>Vestuário</p>
                <p>Entretenimento</p>
            </div>
        </>
    )
}


export default Buscar;