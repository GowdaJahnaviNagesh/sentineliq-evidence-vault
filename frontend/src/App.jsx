import { useState } from "react";
import ListPage from "./pages/ListPage";
import CreatePage from "./pages/CreatePage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  const [page, setPage] = useState("list");
  const [selectedItem, setSelectedItem] = useState(null);
const token = localStorage.getItem("token");
  const refreshList = () => {
    setPage("list");
  };

  return (
    <div className="min-h-screen bg-gray-100">
<div className="bg-slate-800 text-white px-6 py-4 shadow flex items-center justify-between">

  {/* LEFT: TITLE */}
  <h1 className="text-2xl font-bold tracking-wide text-white">
    Evidence Vault
  </h1>

  {/* CENTER: NAVIGATION */}
  <div className="flex gap-4">
      <button onClick={() => setPage("login")}>Login</button>
      <button onClick={() => setPage("register")}>Register</button>
<button
  onClick={() => setPage("dashboard")}
  className="bg-slate-600 hover:bg-slate-500 px-4 py-2 rounded"
>
  Dashboard
</button>

    <button
      onClick={() => {
        setSelectedItem(null);
        setPage("list");
      }}
      className={`px-4 py-2 rounded text-sm font-medium transition
        ${page === "list"
          ? "bg-white text-slate-800"
          : "bg-slate-600 hover:bg-slate-500"
        }`}
    >
      List
    </button>

    <button
      onClick={() => {
        setSelectedItem(null);
        setPage("create");
      }}
      className={`px-4 py-2 rounded text-sm font-medium transition
        ${page === "create"
          ? "bg-white text-slate-800"
          : "bg-slate-600 hover:bg-slate-500"
        }`}
    >
      Create
    </button>

  </div>

</div>

      {/* 🔥 CONTENT */}
      <div className="p-6 max-w-5xl mx-auto">
          {page === "dashboard" && <Dashboard />}
          {page === "login" && <Login setPage={setPage} />}
          {page === "register" && <Register setPage={setPage} />}
        {page === "list" && (
          <ListPage setPage={setPage} setSelectedItem={setSelectedItem} />
        )}

        {(page === "create" || page === "edit") && (
          <CreatePage
            selectedItem={selectedItem}
            refreshList={refreshList}
            goToList={() => setPage("list")}
          />
        )}
      </div>
    </div>
  );
}

export default App;