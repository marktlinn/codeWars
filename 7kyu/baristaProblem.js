/*So you are the only barista today, and you only have one coffee machine that can brew one coffee at a time.
People start giving you their orders.
Let's not think about the time you need to write down their orders, but you need 2 additional minutes to clean the coffee machine after each coffee you make.
Now you have a list coffees of the orders and you write down next to each of the orders the time you need to brew each one of those cups of coffee.
Task:
Given a list of the times you need to brew each coffee, return the minimum total waiting time.
If you get it right, you will get that raise your boss promised you!
E.G
If you have three customers with times [4,3,2], the first customer is going to wait 4 minutes for his coffee, the second customer is going to wait 4 minutes (the time needed for the first customer to get his coffee), another 2 minutes (the time needed to clean the machine) and 3 more minutes (the time you need to brew his coffee), so in total 9 minutes. The third customer, by the same logic, is about to wait 9 minutes (for the first two customers) + 2 more minutes(cleaning) + 2 minutes (his coffee brewing time). This order of brewing the coffee will end up in a total waiting time of 26 minutes, but note that this may not be the minimum time needed. This time depends on the order you choose to brew the cups of coffee.*/

//Pseudocode/plan:
// if the coffees array is empty return falsy.
// create a variable to store a count as an array
// sort the coffees array in ascending order to reduce the amount of waiting time to the minimum
// loop through the array of coffees ordered, if count.length is 0, push the number to count
// else take the last index of the count array and add it to the current number + 2, then push that number to the array.
// loop through the count array to return the sum



function barista(coffees){
    if(coffees == false) return 0
    const count = [];
    coffees = coffees.sort((a,b)=> a-b)
    coffees.forEach(order=> {
        if(count.length<1){
            count.push(order)
        }
        else {
            let prevOrder = count[count.length-1] +2;
            count.push(prevOrder+order)
        }
    })
    console.log(count)
    return count.reduce((prev,curr)=> prev+curr)
}

const coffees = [4,3,2];
console.log(barista(coffees))