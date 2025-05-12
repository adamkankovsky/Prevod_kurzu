import { useState, useEffect } from 'react'

export const Prevod = () => {
    const [cislo, setCislo] = useState(0);
    const [kurzy, setKurzy] = useState(undefined);
    const [vysledek, setVysledek] = useState(0);
    const [vybrany, setVybrany] = useState(0);

    const getKurzy = async () => {
        try {
            const response = await fetch("https://api.frankfurter.dev/v1/latest?base=EUR");
            const data = await response.json();
            setKurzy(data.rates);
            console.log(kurzy);
        } catch(error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        getKurzy();
    }, []);

    const vypocitej = () => {
        setVysledek(vybrany * cislo);
    }

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
                <select onChange={(e) => setVybrany(e.target.value)}>
                    {kurzy &&
                        Object.entries(kurzy).map(([key, value]) => (
                            <option value={value} key={key}>{key}</option>
                        ))
                    }
                </select>
                <button onClick={() => vypocitej()}>Převeď</button>
            </div>
            <h3>{vysledek}</h3>
        </div>
    )
}