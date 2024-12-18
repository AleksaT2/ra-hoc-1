import DateTime from './DateTime';

const DateTimePretty = ({ date }) => {
    const now = new Date();
    const timeDiff = now.getTime() - new Date(date).getTime();

    let relativeTime = '';

    if (timeDiff < 60 * 60 * 1000) { // Менее часа
        const minutes = Math.floor(timeDiff / (60 * 1000));
        relativeTime = `${minutes} минут${minutes === 1 ? 'у' : minutes < 5 ? 'ы' : ' назад'}`;
    } else if (timeDiff < 24 * 60 * 60 * 1000) { // Менее суток
        const hours = Math.floor(timeDiff / (60 * 60 * 1000));
        relativeTime = `${hours} час${hours === 1 ? 'а' : hours < 5 ? 'а' : 'ов'} назад`;
    } else { // Более суток
        const days = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
        relativeTime = `${days} день${days === 1 ? ' назад' : ' назад'}`;
    }

    return <DateTime date={relativeTime} />;
};

export default DateTimePretty;