import { useEffect, useState } from "react";

export default function Timer() {
    const [time, setTime] = useState(0);
    

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(currentValue => currentValue + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);
    
    return (
        <div>
        <h1>{time}</h1>
        </div>
    );
    }
