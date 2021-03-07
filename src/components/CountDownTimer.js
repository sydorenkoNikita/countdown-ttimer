import React, {useEffect, useRef, useState} from 'react'
import './Timer.css'

const CountDownTimer = () => {
    const [timerDays, setSetDays] = useState('00')
    const [timerHours, setSetHours] = useState('00')
    const [timerMinutes, setSetMinutes] = useState('00')
    const [timerSeconds, setSetSeconds] = useState('00')
    const [data, setData] = useState("")



    let interval = useRef()
    const startTimer = () => {
        const countDownDate = new Date('March 20, 2021 00:00:00').getTime()
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            const seconds = Math.floor(distance % (1000 * 60) / 1000);

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setSetDays(days);
                setSetHours(hours);
                setSetMinutes(minutes);
                setSetSeconds(seconds);
            }
        }, 1000)
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    })

    console.log(data)
    return (

        <section className="container">
            <section>
                {/*<form onSubmit={}>*/}
                {/*    <input type="text" value={data} onChange={}/>*/}
                {/*    <input type="submit" value="set timer"/>*/}
                {/*</form>*/}
            </section>
            <section className="timer">
                <div>
                    <h2>CountDown Timer</h2>
                </div>
                <div>
                    <section>
                        <p>{timerDays}</p>
                        <p><small>Days</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerHours}</p>
                        <p><small>Hours</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerMinutes}</p>
                        <p><small>Minutes</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerSeconds}</p>
                        <p><small>Seconds</small></p>
                    </section>
                </div>
            </section>
        </section>
    )
}
export default CountDownTimer;