// NAVIGATOR OBJECT
console.log(navigator);

// Navigator properties
console.log(navigator.clipboard);


function copy(mytext){
    navigator.clipboard.writeText(mytext);
    let text = navigator.clipboard.readText();
    text.then((res)=>{
        console.log(res);
    })
}

console.log(navigator.userAgent);
console.log(navigator.appCodeName);
console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.product);
console.log(navigator.productSub);
console.log(navigator.platform);
console.log(navigator.vendor);
console.log(navigator.vendorSub);
console.log(navigator.language);
console.log(navigator.mimeTypes); // data types that can be accepted 
console.log(navigator.cookieEnabled);  
console.log(navigator.onLine); 

// Navigator Connection info
// console.log(navigator.connection);  
// console.log(navigator.connection.downlink);  
// console.log(navigator.connection.effectiveType);  
// console.log(navigator.connection.saveData);  
// console.log(navigator.connection.onchange);  
// console.log(navigator.connection.rtt);  

// Navigator Bluetooth Info
console.log(navigator.bluetooth);
// navigator.bluetooth.requestedDevice()
let bluetooth = navigator.bluetooth.getAvailability();
bluetooth.then((res)=>{
    console.log(res)
});

// Navigator Keyboard API
// console.log(navigator.keyboard);
// let kblock = navigator.keyboard.getLayoutMap();
// kblock.then((res)=>{
//     // console.log(res);
//     // res.forEach(key => {
//     //     console.log(key)
//     // });
// });
// kblock.then((k)=>{
//     let val = k.keys();
//     console.log(val.next());
//     let lock = navigator.keyboard.lock(val);
// })

// Navigator MediaDEvices
media = navigator.mediaDevices;
console.log(media);

// let video = media.getUserMedia({video:true});
// video.then((vid)=>{
//     let tracks = vid.getVideoTracks();
//     console.log(tracks);
//     let vidtag = document.createElement("video");
//     vidtag.srcObject = vid;
//     vidtag.play();
//     document.body.appendChild(vidtag);
// })

// let audio = media.getUserMedia({ video:true, audio:true})
// audio.then((vid)=>{
//     let vidtag = document.createElement("video");
//     vidtag.srcObject = vid;
//     vidtag.play();
//     document.body.appendChild(vidtag);
// })


// const my_screen = media.getDisplayMedia();
// console.log(screen);
// my_screen.then((scr)=>{
//     console.log(scr);
//     let vidtag = document.createElement("video");
//     vidtag.srcObject = scr;
//     vidtag.play();
//     document.body.appendChild(vidtag);
//})

const devices = media.enumerateDevices();
devices.then(device => console.log(device));

// Navigator mimeTypes
const mime = navigator.mimeTypes;
console.log(mime);



