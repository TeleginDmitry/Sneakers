import React from 'react'
import './Select.css'

export default function Select({onChange, value, options}) {
  return (
    <select className='select' value={value} onChange={(el) => onChange(el.target.value)}>
        <option className='option' disabled  value=''>Сортировать по</option>
        {options.map((el) => {
            return <option className='option' value={el.value} key={el.value}>{el.name}</option>
        })}
    </select>
  )
}
