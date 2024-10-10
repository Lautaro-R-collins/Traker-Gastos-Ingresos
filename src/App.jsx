import { GlobalProvider } from "./context/GlobalState.jsx";

import  Header  from "./components/Header.jsx";
import Balance from "./components/Balance.jsx";
import FormTransaction from "./components/transactions/FormTransaction.jsx";
import TransactionsList  from "./components/transactions/TransactionsList.jsx";
import IncomeExpenses from "./components/IncomeExpenses.jsx"
import { ExpenseChat } from "./components/ExpenseChart.jsx";

function App() {
  return (
<GlobalProvider>
  <div className="bg-zinc-900 text-white h-screen flex flex-col justify-center items-center gap-4">
 
    <div className="bg-zinc-800 p-4 rounded-lg w-full max-w-4xl text-center">
      <Header />
    </div>

    <div className="flex gap-6 w-full max-w-4xl">
  
      <div className="bg-zinc-800 p-10  rounded-lg flex-1">
        <ExpenseChat />
      </div>
      
      <div className="flex flex-col gap-6 flex-1">
        <div className="bg-zinc-800 p-6 rounded-lg">
          <IncomeExpenses />
          <Balance />
          <FormTransaction />
        </div>

        <div className="bg-zinc-800 p-6 rounded-lg h-[210px]">
          <TransactionsList />
        </div>
      </div>
    </div>
  </div>
</GlobalProvider>

  )
}

export default App