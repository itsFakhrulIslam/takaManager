import Navbar from "./components/navigation/Navbar";
import Form from "./components/transactionForm/Form";
import Balance from "./components/upCards/Balance";
import Expense from "./components/upCards/Expense";
import Income from "./components/upCards/Income";

function App() {
  const addNewTransaction = (getFormData) => {

    const isMoneyTrackerExist = window.localStorage.getItem("money_track");
    if (isMoneyTrackerExist) {
      const convertDataObj = JSON.parse(isMoneyTrackerExist);
      const newArry = [getFormData, ...convertDataObj];
      window.localStorage.setItem("money_track", JSON.stringify(newArry));
    } else {
      const convertDataStr = JSON.stringify([getFormData]);
      window.localStorage.setItem("money_track", convertDataStr);
    }
  };

  return (
    <>
      <Navbar />

      {/* cards area */}
      <div className="max-w-7xl mx-auto mt-5 grid grid-cols-3 gap-4 justify-evenly p-2">
        <Income />
        <Expense />
        <Balance />
      </div>

      {/* form area */}
      <div className="max-w-7xl mx-auto p-2">
        <Form addNewTransaction={addNewTransaction} />
      </div>
    </>
  );
}

export default App;
