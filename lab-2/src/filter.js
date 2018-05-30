export let filter = (list, val = "noname") => {
    let sortedList = [],
        lowVal = val.toLowerCase();


    if (val.includes(':')) {
        const splitted = lowVal.split(':');
        list.forEach(el => {
            let lowEl = el[splitted[0]].toLowerCase();
            if (lowEl.includes(splitted[1])) {
                sortedList.push(el);
            }
        })
        return sortedList;
    }
    ;

    list.forEach(el => {
        if (el.name.toLowerCase().includes(lowVal)) {
            sortedList.push(el);
        }
    })
    return sortedList;


};