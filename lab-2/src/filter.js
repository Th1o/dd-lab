export let filter = function f(list,val="noname") {
    let sortedList = [];
    let lowVal = val.toLowerCase();
    let index = lowVal.indexOf(':');
    let subVal = lowVal.substr(index + 1);


if (val.includes(':')) {
    list.forEach(el => {
        if (val.startsWith('name:')) {
            let lowName = el.name.toLowerCase();
            if (lowName.includes(subVal)) {
                sortedList.push(el);    
            }
        }
        if (val.startsWith('email:')) {
            let lowEmail = el.email.toLowerCase();
            if (lowEmail.includes(subVal)) {
                sortedList.push(el);
            }

        }
        if (val.startsWith('phone:')) {
            if (el.phone.includes(subVal)) {
                sortedList.push(el);
            }
        }  
    })
    return sortedList;
};

    list.forEach(el=> {
        if (el.name.toLowerCase().includes(lowVal)) {
            sortedList.push(el);
        }
    })
    return sortedList;

    
};