import moment from "moment";

export const getDateValidatetext = (date: any) => {
    const today: any = moment();
    const registerDate: any = moment(date);
    const differneceInDate = today.diff(registerDate, 'days');
    if (differneceInDate < 1) {
        return `Today ${moment(registerDate).format('h:mm a')}`
    }
    if (differneceInDate === 1) {
        return `Yesterday ${moment(registerDate).format('h:mm a')}`
    }
    if (differneceInDate < 5) {
        return `${differneceInDate} days ago`
    }
    if (differneceInDate >= 5) {
        return moment(registerDate).format('MMM D, YYYY');
    }
    return moment(registerDate).format('YYYY');
}