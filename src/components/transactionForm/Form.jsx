import { useState } from "react";

const income_categories = [
  "Salary",
  "Freelance",
  "Business Profit",
  "Investment",
  "Gift",
  "Othes",
];
// console.log(income_categories);

const expense_categories = [
  "Foods",
  "House Rent",
  "Utilities",
  "Shopping",
  "Transportation",
  "Health care",
  "Tour",
  "Personal",
  "othes",
];
// console.log(expense_categories);

const Form = () => {
  const [getType, setGetType] = useState("income");
  console.log(getType);

  const currentCategory =
    getType == "income" ? income_categories : expense_categories;

  const [getCategory, setGetCategory] = useState();
  console.log(getCategory);

  return (
    <div>
      <div className="hero bg-base-200 p-10">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Transaction Name</label>
              <input
                type="text"
                className="input"
                placeholder="Write transaction name."
              />

              <label className="label">Transaction Amount</label>
              <input
                type="number"
                className="input"
                placeholder="Write transaction amount. eg: 100tk"
              />

              <label className="label">Choose the type</label>
              <select
                value={getType}
                onChange={(e) => {
                  setGetType(e.target.value);
                  e.target.value == "income"
                    ? setGetCategory(income_categories[0])
                    : setGetCategory(expense_categories[0]);
                }}
                className="select select-primary"
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>

              <label className="label">Choose the category</label>
              <select
                defaultValue={income_categories[0]}
                value={getCategory}
                onChange={(e) => setGetCategory(e.target.value)}
                className="select select-primary"
              >
                {currentCategory.map((category, i) => (
                  <option key={i} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <label className="label">Date</label>
              <input type="date" className="input" />

              <button className="btn btn-neutral mt-4">Add</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
