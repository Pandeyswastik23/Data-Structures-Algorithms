
const sortArr = () => {

    let arr = [0,1,2,0,1,2,1,2,0,0,0,1];
    let low = 0;
    let mid = 0;
    let high = arr.length-1;

    while(mid <= high){
        if(arr[mid] === 0){

            const temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
            low++;
            mid++;

        }
        else if(arr[mid] === 1){
            mid++;
        }
        else{
            const temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;
            high--;
        }
    }
    console.log("Sorted array is: ", arr);
}
sortArr();