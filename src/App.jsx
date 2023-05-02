import Header from "./components/Header"
import { RouterProvider } from "react-router-dom"
import { router } from "./router"

function App() {

    return (
        <div className="font-nunitoSans min-h-screen bg-slate-100 dark:bg-gray-800 ">
            <Header />
            <div className="px-4 md:px-20">
                <RouterProvider router={router} />
            </div>
        </div>
    )
}

export default App
