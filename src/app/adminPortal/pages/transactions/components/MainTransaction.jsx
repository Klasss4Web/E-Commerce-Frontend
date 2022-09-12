import React, { useEffect, useState } from "react";

import { TransactionTable, Orders } from "./TransactionTable";
import { useFetch } from "./useFetch";

export const MainTransaction = ({ orderId }) => {

  const [state, setState] = useState("InitialState")

  const handleClick = () => {
    setState(() => "Final State")
    console.log("Clicked Inside", state)
    
    window.print()
  }

  const {fetchedData, loading} = useFetch("https://jsonplaceholder.typicode.com/todos");

  console.log("fetchedData", fetchedData, "loading", loading)

  //  window.addEventListener("beforeprint", (e) => {
  //   e.preventDefault()
  //    alert("Printing in progress");
  //  });

  // window.addEventListener("afterprint", e => {
  //   e.preventDefault()
  //   alert("Printed")
  // })

  console.log("Clicked Outside", state);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Transactions</h2>
      </div>
      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type={"text"}
                placeholder="Search..."
                className="form-control p-2"
              />
              <button onClick={handleClick}>Click Me</button>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Status</option>
                <option>Latest</option>
                <option>Archive</option>
                <option>Show all</option>
              </select>
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="table-responsive">
           
              <TransactionTable />

          </div>
        </div>
      </div>
    </section>
  );
};
