// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {

    const [amount, setAmount] = useState(1)
    const [fromCurrency, setFromCurrency] = useState("USD")
    const [toCurrency, setToCurrency] = useState("INR")
    const [converted, setConverted] = useState("")
    const [isLoading, setIsLoading] = useState(false)


    useEffect(function () {
        async function convert() {
            setIsLoading(true)
            const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
            const data = await res.json()
            console.log(data.rates[toCurrency])
            setConverted(data.rates[toCurrency])
            setIsLoading(false)

        }
        if (fromCurrency === toCurrency) return setConverted(amount)
        convert()
    }, [amount, fromCurrency, toCurrency])

    return (
        <div>
            <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                disabled={isLoading}
            />
            <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency((e.target.value))}
                disabled={isLoading}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <select
                value={toCurrency}
                onChange={(e) => setToCurrency((e.target.value))}
                disabled={isLoading}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <p>OUTPUT</p>
            <p>{converted} {toCurrency}</p>
        </div >
    );
}
