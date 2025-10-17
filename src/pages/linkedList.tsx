import {useState} from 'react'

interface Node {
    value: number;
    next: Node | null;
}

function LinkedList() {
    const [head, setHead] = useState<Node | null>(null);
    const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

    const addElement = async (value: number) => {
        const newNode: Node = { value, next: null };
        if (!head) {
            setHead(newNode);
            setHighlightedIndex(0);
            return
        }

        const nodes: Node[] = []
        let cur = head
        while (cur !== null) {
            nodes.push(cur)
            cur = cur.next
        }

        // traverse and highlight each existing node
        for (let i = 0; i < nodes.length; i++) {
            setHighlightedIndex(i)
            // wait 300ms while showing current node highlighted
            await sleep(300)
        }

        // now append the new node to a cloned linked list and set it as head
        const newHead = { ...head }
        let last = newHead
        while (last.next !== null) {
            last = last.next
        }
        last.next = newNode
        setHead(newHead)

        // highlight the newly added node (it will be the last index)
        setHighlightedIndex(nodes.length)
    }

    const elements: Node[] = [];
    let current = head;
    while (current !== null) {
        elements.push(current);
        current = current.next;
    }

    return (
        <div className="w-screen h-screen text-xl text-black bg-cyan-200 flex flex-col justify-center items-center gap-6">
            <div className="w-4/5 h-1/6 flex flex-col gap-5 justify-center items-center">
                <div className="flex gap-10 flex-1 flex-top min-w-60">
                    <input type="text" id="elementInput" className="w-full text-right p-2 border-2 bg-transparent outline-none m-0 font-inherit text-inherit" />
                </div>
                <div className="flex gap-10 flex-top min-w-60">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer flex-1 text-center min-w-0" onClick={() => {
                        const input = document.getElementById("elementInput") as HTMLInputElement;
                        const value = parseInt(input.value);
                        if (!isNaN(value)) {
                            addElement(value);
                            console.log(head?.next?.next?.value);
                            input.value = "";
                        }
                    }}>Add</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer flex-1 text-center min-w-0" onClick={() => {
                        const input = document.getElementById("elementInput") as HTMLInputElement;
                        const value = parseInt(input.value);
                        if (!isNaN(value)) {
                            {/*removeElement(value);
                            console.log(head?.next?.next?.value);
                            input.value = "";
                            */}
                        }
                    }}>Remove</button>
                </div>
            </div>
            <div className='w-4/5 h-1/6 flex gap-5'>
                {elements.map((item, idx) => (
                    <div key={item.value} className="w-25 h-15 border-2 border-black flex flex-row overflow-hidden">
                        <div className={`w-15 h-15 border-r-2 border-black flex justify-center items-center transition-colors duration-300 ${highlightedIndex === idx ? 'bg-orange-400 text-white' : ''}`}>
                            {item.value}
                        </div>
                        {/*{item.next !== null && (
                            <div className="w-5 h-2 border-l-2 border-black flex justify-center items-center">
                                
                            </div>
                        )}*/}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LinkedList;