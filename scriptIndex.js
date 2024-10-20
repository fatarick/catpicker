var accepted = 0;
var skipped = 0;
var rejected = 0;

function reload(){
    var images = document.getElementsByTagName("catimg");
    for (var i = 0; i < images.length; i++) {
        images[i].src = "https://cataas.com/cat";
    }
}

function accept(){
    accepted++;
    console.log("Accepted: " + accepted);
    reload();
    document.getElementById("accepted").innerHTML = "Accepted: " + accepted;
}

function skip(){
    skipped++;
    console.log("Skipped: " + skipped);
    reload();
    document.getElementById("skipped").innerHTML = "Skipped: " + skipped;
}

function reject(){
    rejected++;
    console.log("Rejected: " + rejected);
    reload();
    document.getElementById("rejected").innerHTML = "Rejected: " + rejected;
}

function redirectToAbout(){
    location.href = "about.html";
}
