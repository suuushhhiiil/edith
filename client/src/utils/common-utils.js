


export const formatDate =(date) => {
    let hours = new Date(date).getHours();
    let minutes = new Date(date).getMinutes();
    const period = hours < 12 ? "AM" : "PM";
    hours=hours % 12 || 12;
    hours=hours <10 ? "0" + hours : hours;
    minutes=minutes <10 ? "0" + minutes : minutes;
    return `${hours}:${minutes} ${period}`;
}