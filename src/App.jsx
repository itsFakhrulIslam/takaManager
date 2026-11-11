import { useEffect, useState } from "react";
import Navbar from "./components/navigation/Navbar";
import Form from "./components/transactionForm/Form";
import Balance from "./components/counterCards/Balance";
import Expense from "./components/counterCards/Expense";
import Income from "./components/counterCards/Income";
import Transactions from "./components/trxnCards/Transactions";

function App() {
  const [transactions, setTransactions] = useState(
    JSON.parse(window.localStorage.getItem("money_track")) || [],
  );

  const addNewTransaction = (getFormData) => {
    const isMoneyTrackerExist = window.localStorage.getItem("money_track");
    if (isMoneyTrackerExist) {
      const convertDataObj = JSON.parse(isMoneyTrackerExist);
      const newArry = [getFormData, ...convertDataObj];
      window.localStorage.setItem("money_track", JSON.stringify(newArry));
      setTransactions(newArry);
    } else {
      const convertDataStr = JSON.stringify([getFormData]);
      window.localStorage.setItem("money_track", convertDataStr);
    }
  };

  useEffect(() => {
    const isMoneyTrackerExist = window.localStorage.getItem("money_track");
    if (!isMoneyTrackerExist) {
      return;
    }
    setTransactions(JSON.parse(isMoneyTrackerExist));
  }, []);

  console.log("all transactions here", transactions);
  return (
    <>
      <Navbar />

      {/* all cards area */}
      <div className="max-w-7xl mx-auto mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 justify-evenly p-2">
        {/* counters card here */}
        <Income transactions={transactions} />
        <Expense transactions={transactions} />
        <Balance transactions={transactions} />

        {/* forms card here */}
        <Form addNewTransaction={addNewTransaction} />

        {/* transactions card here */}
        <div className="sm:col-span-2 max-h-135 overflow-y-auto pr-2">
          <Transactions
            transactions={transactions}
            setTransactions={setTransactions}
          />
        </div>
      </div>
    </>
  );
}

export default App;
