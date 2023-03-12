import React from 'react'
import { Calendar } from './Calendar'
import { Navbar } from './Navbar'
import { NewWatch } from './NewWatch'
import {BrowserRouter,Route, Routes} from "react-router-dom"
export const Home = () => {
  return (
    <div  className='max-w-[1000px] m-auto ' >
            <BrowserRouter>
                <Navbar></Navbar>
                <Calendar></Calendar>
                <h1 className='text-[#fff] pt-[20px] md:pt-[50px] px-[10px] text-[20px] text-end md:text-[30px]'>
                  New Episode Releases
                </h1>
                <Routes>
                  <Route path="/:type" element={<NewWatch/>} />
                </Routes>
            </BrowserRouter>
    </div>
  )
}