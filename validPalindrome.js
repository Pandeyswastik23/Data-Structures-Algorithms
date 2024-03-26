const palindromeCheck = () => {

    const genericExpression = (changedStr) => {
        return changedStr.replace(/[^0-9a-zA-Z]/g, '');
    }

    let originalStr = "0P"

    originalStr = genericExpression(originalStr);

    originalStr = originalStr.toLowerCase();

    let rev = originalStr.split('');
    rev = rev.reverse();
    rev = rev.join('');


    if (rev === originalStr) {
        console.log(true);
    }
    else {
        console.log(false);
    }

}

palindromeCheck();
