const Income = ({ transactions }) => {
  const total_income = transactions
    .filter((transaction) => transaction.getType == "income")
    .reduce((sum, trxAmoutn) => sum + parseFloat(trxAmoutn.getTrxnAmount), 0);
  console.log("income", total_income);

  return (
    <div className="card bg-base-200 card-md shadow-sm border-t-4 border-green-500">
      <div className="card-body">
        <h2 className="text-2xl font-bold">Income</h2>
        <h2 className="text-2xl font-semibold text-green-600">
          <span className="font-thin">BDT</span> {total_income}
        </h2>
      </div>
    </div>
  );
};

export default Income;
