function loadScript(src,callback) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = function () {
        console.log("Loaded script with SRC:" + src);
        callback(null,"Function Ran Successfully !!");
    }
    script.onerror = function (){
        console.log("Error loading script with SRC: ", src)
        callback(new Error("SRC Got some error" + src))
    }
    document.body.appendChild(script);
}

function hello(error, string){
    if (error){
        console.log("Error");
        return
    }
    alert("Hello World :: " + string);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",hello)