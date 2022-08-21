/*Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/
//PseudoCode/plan:
// write out a regex to search for valid domains with http, https, www.
// then check the url to see if it matches one of those domains starting conditions.
// if it doesn't it has no protocol declared, so we'll split the url at the next dot and return the first element
// else there is a protocol, we'll take the second item return from the regex match expression and split it at the dot.
// if the first element is www, return the second element, else return the first.
// This code works for the situation given in this challenge, but is admittedly a hack for the problems presented.
// There are many edge cases that could case issues, e.g. sub-domains which would complicate matters farther.
// I've not built code here to be robust enough to manage all possible edge cases, as to do so would be more demanding in terms of time. For the challenge at hand this code works and so it is written for that purpose.

function domainName(url){
    let reg = (/^(?:http:\/\/|www\.|https:\/\/)([^\/]+)/)
    let urlCheck = url.match(reg)
    if(urlCheck == null) {
        return url.split('.')[0]
    }
    else{
        let urlArray = urlCheck[1].split('.')
        return urlArray[0] == 'www'? urlArray[1] : urlArray[0]
    }
}

console.log(domainName("6h9nz6j7tl1ygihfjq1d9mp2.de/img/"))