


export const formatDate =(date) => {
    let hours = new Date(date).getHours();
    let minutes = new Date(date).getMinutes();
    const period = hours < 12 ? "AM" : "PM";
    hours=hours % 12 || 12;
    hours=hours <10 ? "0" + hours : hours;
    minutes=minutes <10 ? "0" + minutes : minutes;
    return `${hours}:${minutes} ${period}`;
}

export const downloadMedia = (event, originalImage) => {
    event.preventDefault();

    try {
        fetch(originalImage)
        .then(resp => resp.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a')
            a.style.display = "none";
            a.href = url;

            const nameSplit = originalImage.split("/");
            const duplicateName = nameSplit.pop();

            a.download = "" + duplicateName + "";
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        }).catch( error => console.log("Error in downloading the file", error.message));
    } catch (error) {
        console.log("Error in downloading the file", error.message);
    }
}