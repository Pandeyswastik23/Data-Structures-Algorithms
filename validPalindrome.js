const palindromeCheck = () => {

    const x = 'aba';

    const arr = x.split('');

    let tempStr = '';
    for (i = arr.length - 1; i >= 0; i--) {
        tempStr += arr[i];
        arr.pop();

    }

    if (x === tempStr) {
        console.log(true);
    }
    else {
        console.log(false);
    }

}

palindromeCheck();