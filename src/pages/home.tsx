import { Link } from "react-router-dom";

function Home(){
    return(
        <>
            <div className="w-screen h-screen text-xl text-white bg-cyan-200 flex flex-col justify-center items-center">
                <div>
                    <h1 className="mt-20 text-4xl text-black font-bold">Estruturas de Dados</h1>
                </div>

                <div className="w-screen h-screen flex justify-center items-center gap-10">
                    <Link to="linked-list" className="w-1/10 h-1/8 flex  justify-center items-center rounded-lg bg-blue-700 cursor-pointer hover:bg-blue-500">
                        <span>Linked List</span>
                    </Link>
                    <Link to="tree" className="w-1/10 h-1/8 flex  justify-center items-center rounded-lg bg-blue-700 cursor-pointer hover:bg-blue-500">
                        <span>Árvore</span>
                    </Link>
                    <Link to="stack" className="w-1/10 h-1/8 flex  justify-center items-center rounded-lg bg-blue-700 cursor-pointer hover:bg-blue-500">
                        <span>Pilha</span>
                    </Link>
                    <div className="w-1/10 h-1/8 flex  justify-center items-center rounded-lg bg-blue-700 cursor-pointer hover:bg-blue-500">
                        <span>Fila</span>
                    </div>
                    <div className="w-1/10 h-1/8 flex  justify-center items-center rounded-lg bg-blue-700 cursor-pointer hover:bg-blue-500">
                        <span>Hash</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home