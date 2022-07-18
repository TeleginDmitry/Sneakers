import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './ThanksForPurchase.css'

export default function ThanksForPurchase() {
  const [countNumber, setCountNumber] = useState(3)
    const navigate = useNavigate()
    
    useEffect(() => {
        setTimeout(() => navigate('/purchases'), 3000)
    }, [])

    useEffect(() => {
      const intelval = setInterval(() => {
        setCountNumber((el) => el -= 1)
      }, 1000)
      return () => {
        clearInterval(intelval)
      }
    }, [countNumber])

  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Спасибо за покупку :{')'}</h1>
        <span style={{textAlign: 'center', display: 'block'}}>{countNumber}</span>
    </div>
  )
}
