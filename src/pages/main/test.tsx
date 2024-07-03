import { useState, useEffect } from 'react'

function Test() {
    const [count, setButton] = useState(0)
    const handleSubmit = setButton(count + 1)
    return (
        <div>
            {count}
            <button>count</button>
        </div>
    )
}

export default Test
