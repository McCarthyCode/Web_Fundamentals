function printRange(start, end, skip) {
    if(!end && !skip) {
        end = start;
        start = 0;
    }
    skip = skip || 1;

    for (var i = start; i < end; i += skip) {
        console.log(i);
    }
}

printRange(4);