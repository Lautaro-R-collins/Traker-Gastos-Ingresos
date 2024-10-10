import { useGlobalState } from "../../context/GlobalState"



export function TransactionsItem({transaction}) {
    const { deleteTransaction } = useGlobalState()

  return (
    <>
    <li className="bg-zinc-600 text-withe px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center gap-2">
        <p className="text-sm ">{transaction.description}</p>
        <div>
        <span>${transaction.amount}</span>
        <button onClick={() => {
            deleteTransaction(transaction.id)
        }} >
        <div style={{ transform: 'translateY(3px)'}} className="hover:text-red-500 text-green-600 ml-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
            </svg> 
        </div>
        </button>
        </div>

    </li>
    </>
  )
}

export default TransactionsItem