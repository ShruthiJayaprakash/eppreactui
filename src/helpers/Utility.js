export function getLocalStorage(item){
    console.log("data param"+item)
    console.log("data in getlocalstorage"+localStorage.getItem(item))
    return localStorage.getItem(item)
}

export function setLocalStorage(itemName, item){
    localStorage.setItem(itemName,item)
}

export function clearLocalStorage(){
    window.localStorage.clear()
}