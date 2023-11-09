import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import Home from "./Home/Home.jsx";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <RouterProvider router={router}>
        <Home></Home>
      </RouterProvider>
    </div>
  );
}

export default App;
