const buyAndStock = ()=> {
    let arr = [7,2,5,4,8,4];

    let minimum = arr[0];
    let profit = 0;
    let cost = 0;

    for(let i = 1; i<arr.length; i++){
        cost = arr[i] - minimum;
        profit = Math.max(profit, cost);
        minimum = Math.min(minimum, arr[i]);
    }

    console.log("Profit is: ", profit);
}

buyAndStock();