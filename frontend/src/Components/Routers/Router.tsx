import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Dashboard from '../Dashboard/Dashboard'

type Props = {}

export default function Router({}: Props) {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
    </div>
  )
}