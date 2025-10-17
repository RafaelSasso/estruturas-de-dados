import { Link } from "react-router-dom";

function Home(){
    return(
        <>
            <div className="w-screen h-screen text-xl text-white bg-cyan-200 flex flex-col justify-center items-center">
                <div>
                    <h1 className="mt-20 text-4xl text-black font-bold">Estruturas de Dados</h1>
                </div>

                <div className="w-4/5 h-screen flex justify-center items-center gap-6">
                    <Link to="linked-list" className="flex p-2 flex-1 h-1/8 justify-center items-center rounded-lg bg-blue-700 cursor-pointer hover:bg-blue-500">
                        <span>Linked List</span>
                    </Link>
                    <Link to="tree" className="flex flex-1 p-2 h-1/8 justify-center items-center rounded-lg bg-blue-700 cursor-pointer hover:bg-blue-500">
                        <span>Árvore</span>
                    </Link>
                    <Link to="stack" className="p-2 flex flex-1 h-1/8 justify-center items-center rounded-lg bg-blue-700 cursor-pointer hover:bg-blue-500">
                        <span>Pilha</span>
                    </Link>
                    <div className="p-2 flex flex-1 h-1/8 justify-center items-center rounded-lg bg-blue-700 cursor-pointer hover:bg-blue-500">
                        <span>Fila</span>
                    </div>
                    <div className="p-2 flex flex-1 h-1/8 justify-center items-center rounded-lg bg-blue-700 cursor-pointer hover:bg-blue-500">
                        <span>Hash</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home