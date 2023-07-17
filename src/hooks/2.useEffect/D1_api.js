// const url = "https://cdn3.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-coronavirus.png"
const url = "http://soundcloud.com/oembed?url=http%3A//soundcloud.com/forss/flickermood&format=json"

export const myRequest = new Request(url)

export const myRequest1 = new Promise((resolve,reject)=>{
    resolve(url)
})