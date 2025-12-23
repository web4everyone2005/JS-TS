console.log("video 61")

const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2")
            resolve("Siuuuuu")
        }, 2000);
    })
}

console.log("1")
myPromise().then((value) => {
    console.log(value)
    console.log("3")
})
