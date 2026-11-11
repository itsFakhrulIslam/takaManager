const Balance = ({ transactions }) => {
  // console.log(transactions);

  const totol_income = transactions
    .filter((transaction) => transaction.getType == "income")
    .reduce((sum, trxAmoutn) => sum + parseFloat(trxAmoutn.getTrxnAmount), 0);

  const total_expense = transactions
    .filter((transaction) => transaction.getType == "expense")
    .reduce((sum, trxAmoutn) => sum + parseFloat(trxAmoutn.getTrxnAmount), 0);

  const total_balance = totol_income - total_expense;

  return (
    <div className="card bg-base-200 card-md shadow-sm border-t-4 border-blue-500">
      <div className="card-body">
        <h2 className="text-2xl font-bold">Balance</h2>
        <h2 className="text-2xl font-semibold text-blue-600">
          <span className="font-thin">BDT</span> {total_balance}
        </h2>
      </div>
    </div>
  );
};

export default Balance;
