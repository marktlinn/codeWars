/*You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.*/

let names = ['Alex', 'John', 'Mark', 'Steve']

function likes(names) {
    const nameList = [];
    if(names.length <1) {
        return 'no one likes this'
    } else if (names.length ===1){
        return `${names[0]} likes this`;
    } else if (names.length >1 && names.length < 4) {
        for(let i =0; i< names.length-1; i++) {
            nameList.push(names[i]);
        }
        return nameList.join(', ') +` and ${names[names.length-1]} like this`;
    } else {
        for (let i = 0; i< 2; i++) {
            nameList.push(names[i]);
        }
        return nameList.join(', ') + ` and ${names.length-2} others like this`
    }
}

console.log(likes(names));