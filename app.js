function processData(call) {
    console.log("Processing data...")
    call()
}
function done() {
    console.log("Data processed")
}

processData(done);