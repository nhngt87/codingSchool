function fibSeq(sequence) {
    var fibArray = [];
    for (var i = 0; i < sequence; i++) {
        if (i < 1) {
            fibArray.push(0);
        } else if (i < 2) {
            fibArray.push(1);
        } else {
            fibArray.push((fibArray[fibArray.length - 1]) + (fibArray[fibArray.length - 2]));
        }
    }
    return fibArray
}


var result = fibSeq(10);
for (var i = 0; i < result.length; i++) {
    console.log(result[i]);
}
