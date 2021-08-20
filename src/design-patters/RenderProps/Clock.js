import React, {useEffect, useState} from 'react';
import Presenter from "./Presenter";

const formatTwoDigits = (value) => {
    return value < 10 ? "0" + value : value;
}

const format12Hours = (value) => {
    return value > 12 ? value - 12 : value;
}

const Clock = ({render}) => {
    const [count, setCount] = useState("");

    const getCurrentTime = () => {
        const currentDate = new Date();
        const currentHours = currentDate.getHours();

        return formatTwoDigits(format12Hours(currentHours)) + " : "
            + formatTwoDigits(currentDate.getMinutes()) + " : "
            + formatTwoDigits(currentDate.getSeconds()) + " "
            + (currentHours > 12 ? "p.m." : "a.m");
    }

    useEffect(() => {
        const id = window.setInterval(() => {
            setCount(getCurrentTime());
        }, 1000)

        return () => {
            window.clearInterval(id);
        }
    }, [])

    return <Presenter value={render(count)}/>
};

export default Clock;
