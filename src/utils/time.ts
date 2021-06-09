export function formatTime(t: Date): string {

    let month = `${t.getMonth() + 1}`;
    if (t.getMonth() < 9)
        month = `0${month}`;
    let day = `${t.getDate()}`;
    if (t.getMonth() < 10)
        day = `0${day}`;
    return `${t.getFullYear()}-${month}-${day}`
}