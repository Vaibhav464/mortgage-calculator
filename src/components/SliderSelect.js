import React from 'react'
import SliderComponent from './common/SliderComponent'

const bank_limit = 1000000
const SliderSelect = ({ data, setData }) => {
  console.log(data)
  return (
    <>
      <SliderComponent unit='₹' amount={data.homeValue} label='Home Value' min={50000} max={bank_limit} defaultValue={data.homeValue} value={data.homeValue} step={10000} onChange={(e, value) => setData({
        ...data, //spread operator
        downPayment: value * 0.2,
        loanAmount: value * 0.8,
        homeValue: value,
      })} />
      <SliderComponent unit='₹' amount={data.downPayment} label='Down Payment' min={0} max={data.homeValue} defaultValue={data.downPayment} value={data.downPayment} step={5000} onChange={(e, value) => setData({
        ...data,
        loanAmount: (data.homeValue - value),
        downPayment: value,
      })} />
      <SliderComponent unit='₹' amount={data.loanAmount} label='Loan Amount' min={0} max={data.homeValue} defaultValue={data.loanAmount} value={data.loanAmount} step={5000} onChange={(e, value) => setData({
        ...data,
        downPayment: (data.homeValue - value),
        loanAmount: value,
      })} />
      <SliderComponent unit='%' amount={data.interestRate} label='Interest Rate' min={2} max={18} defaultValue={data.interestRate} value={data.interestRate} step={0.5} onChange={(e, value) => setData({
        ...data,
        interestRate: value,
      })} />
    </>
  )
}

export default SliderSelect