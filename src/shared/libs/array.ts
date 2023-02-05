const splice = (index:number, arr:any[]) => {
    arr.splice(index, 1);
}

const push = (value:any, arr:any[]) => {
    arr.push(value);
}

export {
    splice,
    push
}