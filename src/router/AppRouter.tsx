import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "../pages/Home"

const AppRouter = () => {
  return (
    <Routes>
        
        <Route path="/" element={<Home />} />

        <Route path="/*" element={<Navigate to={"/"}/>} />

    </Routes>
  )
}

export  {AppRouter}