// async & await
// clear style of using promise

// 1. async
async function fetchUser() {
    // do network request in 10 secs.....
    return 'ellie';
    // return new Promise((resolve, reject) => {
    //     resolve('ellie');
    // })
}

// const user = fetchUser();
fetchUser().then((result) => {
    console.log(result)
})
console.log(fetchUser())

