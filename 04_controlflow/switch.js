// Basic syntax of switch
// switch (key) {
//         case value:
//          
//         break;
//
//     default;
//         break;
// }
const month = 3

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;     //agar break nhi hota he to match bone ke baad uske aage ka sab kuch hi match kar deta he par default print nhi karta
    case 4:
        console.log("apr");
        break;

    default: 
    console.log("default case match");
        break;
}
