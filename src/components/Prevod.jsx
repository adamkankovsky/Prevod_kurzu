import { useState, useEffect } from 'react'

export const Prevod = () => {
    const [cislo, setCislo] = useState(0);
    const [kurzy, setKurzy] = useState([]);

    const getKurzy = async () => {
        try {
            const response = await fetch("https://api.frankfurter.dev/v1/latest?base=EUR");
            const data = await response.json();
            setKurzy(data);
        }
    };
    
    useEffect(() => {
        
    }, []);

    return(
        <div>
            <h1>
                Převod EUR do jiné měny
            </h1>
            <div>
                <input 
                    type="number"
                    value={cislo}
                    onChange={(e) => setCislo(e.target.value)}
                    style={{ padding: '5px' }}
                />
                <select></select>
                <button>Převeď</button>
            </div>
        </div>
    )
}