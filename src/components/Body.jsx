import Counter from './Counter.jsx'
import ReportForm from './ReportForm.jsx'
import React from 'react'

export default function Body() {
    const [total, setTotal] = React.useState(0)
    let submits = React.useRef(1)

    const totalAddHandlerFunction = (count) => {
        setTotal((oldValue) => oldValue + count)
    }

    const submitAndResetTotalHandlerFunction = () => {
        submits.current = submits.current + 1
        setTotal(0)
    }

    return (
        <div className="body_container">
            <Counter total={total} addToTotal={totalAddHandlerFunction} />
            <ReportForm
                total={total}
                submits={submits.current}
                submitTotal={submitAndResetTotalHandlerFunction}
            />
        </div>
    )
}
