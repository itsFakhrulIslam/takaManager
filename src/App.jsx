import Navbar from "./components/navigation/Navbar";
import Form from "./components/transactionForm/Form";
import Balance from "./components/upCards/Balance";
import Expense from "./components/upCards/Expense";
import Income from "./components/upCards/Income";

function App() {
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
        <Form />
      </div>
    </>
  );
}

export default App;
