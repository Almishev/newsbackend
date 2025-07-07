import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaArrowLeft } from 'react-icons/fa'

const NotFound = () => {
  return (
    <div className='min-h-screen bg-slate-100 flex items-center justify-center'>
      <div className='text-center'>
        <div className='mb-8'>
          <h1 className='text-9xl font-bold text-purple-600'>404</h1>
          <h2 className='text-3xl font-semibold text-slate-700 mb-4'>Страницата не е намерена</h2>
          <p className='text-slate-600 mb-8 max-w-md mx-auto'>
            Страницата, която търсите, не съществува или е преместена.
          </p>
        </div>
        
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Link 
            to='/dashboard' 
            className='flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors'
          >
            <FaHome />
            <span>Към Dashboard</span>
          </Link>
          
          <button 
            onClick={() => window.history.back()} 
            className='flex items-center gap-2 px-6 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors'
          >
            <FaArrowLeft />
            <span>Назад</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound 