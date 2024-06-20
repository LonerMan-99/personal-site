export const getCurrentTime = (): string => {
    let currentTime: Date = new Date();

    let hours: number = currentTime.getHours();
    let minutes: number = currentTime.getMinutes();
    let ampm: string = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    let minutesString: string = minutes < 10 ? "0" + minutes : minutes.toString();

    let timeString: string = hours + ":" + minutesString + " " + ampm;

    return timeString;
};
