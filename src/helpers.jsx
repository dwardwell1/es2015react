import React from 'react';

const choice = (items) => {
    const idx = Math.floor(Math.random()* items.length);
    return items[idx]
}

const remove = (items,item) => {
    let idx = items.indexOf(item);
    if(idx === -1){return undefined}
    return items.splice(idx,1)
}

export {choice, remove}