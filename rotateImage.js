const rotateMatrix = () => {
    let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];

    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr[i].length; j++){
            const temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }
    
    for(let i = 0; i<arr.length; i++){

        let start = 0;
        let end = arr.length-1;

        while(start < end){
            const temp = arr[i][start];
            arr[i][start] = arr[i][end];
            arr[i][end] = temp;
            start++;
            end--;
        }
    }
    console.log("Rotated matrix is: ", arr);
}

rotateMatrix();