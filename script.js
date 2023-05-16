const K = 365;

function easyPercent(P, I, t){
    return (P*I*t/K)/100
}

function hardPercent(){return null;}



let money = 100000
money += easyPercent(money, 10, 365)


console.log(money)



