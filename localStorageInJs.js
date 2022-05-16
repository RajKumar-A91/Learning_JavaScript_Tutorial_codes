//Local storage in JavaScript helps in storing data in Users computer.
localStorage.setItem('name','raj');
//we add items in local storage.
console.log(localStorage);
//every domain has its own local storages.
//we can append so many keyvalue pairs in local storages.

//we can also retrive data using getItem.
console.log(localStorage.getItem('name'));


//we can remove an item from local storage.
localStorage.removeItem('name');
//if we want to clean entire local storage.
localStorage.clear();


