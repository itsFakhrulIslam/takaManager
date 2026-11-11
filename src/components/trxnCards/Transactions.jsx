const Transactions = ({ transactions, setTransactions }) => {
  console.log(transactions.getTrxnAmount);

  const handleDelete = (id) => {
    const afterDeleteTrxn = transactions.filter(
      (singleItem) => singleItem.id != id,
    );

    window.localStorage.setItem("money_track", JSON.stringify(afterDeleteTrxn));
    setTransactions(afterDeleteTrxn);
  };

  return (
    <div className="space-y-2">
      {transactions.map((item, index) => (
        <div
          key={index}
          className="card bg-base-200 card-md shadow-sm  border-t-2 border-yellow-500 "
        >
          <div className="card-body">
            <div className="flex justify-between">
              <div className="flex gap-4 items-center">
                <div className="">
                  <h1 className="text-lg capitalize">{item.getTrxnName}</h1>
                  <h1 className="italic">{item.getCategory}</h1>
                </div>

                <div className="">
                  <h1 className="text-sm font-thin">{item.getDate}</h1>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <p className="text-xl">{item.getTrxnAmount}</p>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="btn btn-error text-lg font-normal text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
