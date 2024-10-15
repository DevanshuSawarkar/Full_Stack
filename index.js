let api = "https://gorest.co.in/public/v2/users";

// fetch(api)
// .then((res)=>{ //callback
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

const fetchUserDetails = async()=>{
    let response = await fetch(api);
    let data = await response.json();
    console.log(data);
}

fetchUserDetails();