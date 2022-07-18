import React from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom'
import useLocalStorage from "../../Hooks/useLocalStorage";
import './SneakerForm.css'

const SneakerForm = ({setPurchase, modalSneakers, setSneakerAddStorage, setPriceSneaker, purchase}) => {

    
    const {register, formState: {errors, isValid, isValidating}, handleSubmit, reset} = useForm({
        mode: 'onSubmit'
    })
    const navigate = useNavigate()
    const onSubmit = (data) => {
        setPurchase([...purchase, ...modalSneakers])
        reset()
        setSneakerAddStorage([])
        setPriceSneaker(0)
        navigate('/thanks', {replace: true})
    }

    return (
        <div className="form__wrapper">
            <div className="form">

                <form onSubmit={handleSubmit(onSubmit)} className="sneaker__form" action="">
                    <div>{errors?.number && <p>{errors?.number?.message || 'Error'}</p>}</div>
                    <input {...register('number', {
                        required: 'Поле обязательно к заполнению',
                        pattern: {
                            value: /(?<=^|[^0-9])[0-9]{16}(?=[^0-9]|$)|[0-9]{4}[-| |_][0-9]{4}[-| |_][0-9]{4}[-| |_][0-9]{4}/,
                            message: 'Не корректные введённые данные'
                        }
                    })} placeholder="Номер карты" className="form__number"/>
                    <div className="form__errors">
                        <div className="form__error">{errors?.date && <p>{errors?.date?.message}</p>}</div>
                        <div className="form__error">{errors?.cvv && <p>{errors?.cvv?.message}</p>}</div>
                    </div>
                    <div className="form__inputs">
                        <input  {...register('date', {
                            required: 'Обязательно к заполнению',
                            minLength: {
                                value: 4,
                                message: 'Минимум 4 цифры'
                            }
                        })} className='form__date' placeholder="ММ/ГГ" type="number" />
                        <input {...register('cvv', {
                            required: 'Обязательно к заполнению',
                            minLength: {
                                value: 3,
                                message: 'Минимум 3 цифры'
                            }
                        })} className="form__cvv" placeholder="CVV" type="number" />
                    </div>
                    <div className="form__buttons_submit">
                        <button type='submit' className="form__button_submit">КУПИТЬ</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}


export default SneakerForm