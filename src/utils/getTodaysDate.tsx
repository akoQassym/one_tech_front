const getTodaysDate = (): string => {
    let todayString: string;
    let today: Date = new Date();
    let dd: string = String(today.getDate()).padStart(2, '0');
    let mm: string = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy: string = String(today.getFullYear());
    
    todayString = dd + '.' + mm + '.' + yyyy;
    return todayString;
}

export {getTodaysDate}