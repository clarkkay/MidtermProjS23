fetch('./data.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendDataDisplay(data);
})
.catch(function (err) {
    console.log('error:' + err);
})
function appendDataDisplay(data) {
    let i = 0;
    for (let element of data["Data Display"]) {
        if (i == 0) {
            let containerA = document.getElementById("text-a");
            let divA = document.createElement("div");
            divA.innerHTML = `<br> <h2 class="fw-light">${element["name"]}</h2> <p class="lead text-muted">${element["type"]}</p> <br> <p class="lead">${element["data"]}</p> <br>`;
            containerA.appendChild(divA);
        } else if (i == 1) {
            let containerB = document.getElementById("text-b");
            let divB = document.createElement("div");
            divB.innerHTML = `<br> <h2 class="fw-light">${element["name"]}</h2> <p class="lead text-muted">${element["type"]}</p> <br> <p class="lead">${element["data"]}</p> <br>`;
            containerB.appendChild(divB);
        } else if (i == 2) {
            let containerC = document.getElementById("text-c");
            let divC = document.createElement("div");
            divC.innerHTML = `<br> <h2 class="fw-light">${element["name"]}</h2> <p class="lead text-muted">${element["type"]}</p> <br> <p class="lead">${element["data"]}</p> <br>`;
            containerC.appendChild(divC);
        } else {
            let containerD = document.getElementById("text-d");
            let divD = document.createElement("div");
            divD.innerHTML = `<br> <h2 class="fw-light">${element["name"]}</h2> <p class="lead text-muted">${element["type"]}</p> <br> <p class="lead">${element["data"]}</p> <br>`;
            containerD.appendChild(divD);
        }
        i++;
    }
}

fetch('./data.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendIndex(data);
})
.catch(function (err) {
    console.log('error:' + err);
})
function appendIndex(data) {
    let i = 0;
    for (let info of data["Index Info"]) { 
        if (i == 0) {
            let container1 = document.getElementById("rsp3");
            let div1 = document.createElement("div");
            div1.innerHTML = `<br> <p class="card-desc">${info["description"]}</p><p class="card-title fw-light" style="text-align: center;">${info["device"]} - ${info["selling-price"]}</p>`;
            container1.appendChild(div1);
        } else if (i == 1) {
            let container2 = document.getElementById("rsp4");
            let div2 = document.createElement("div");
            div2.innerHTML = `<br> <p class="card-desc">${info["description"]}</p><p class="card-title fw-light" style="text-align: center;">${info["device"]} - ${info["selling-price"]}</p>`;
            container2.appendChild(div2);
        } else if (i == 2) {
            let container3 = document.getElementById("dht");
            let div3 = document.createElement("div");
            div3.innerHTML = `<br> <p class="card-desc">${info["description"]}</p><p class="card-title fw-light" style="text-align: center;">${info["device"]} - ${info["selling-price"]}</p>`;
            container3.appendChild(div3);
        } else if (i == 3) {
            let container4 = document.getElementById("micro-usb");
            let div4 = document.createElement("div");
            div4.innerHTML = `<br> <p class="card-desc">${info["description"]}</p><p class="card-title fw-light" style="text-align: center;">${info["device"]} - ${info["selling-price"]}</p>`;
            container4.appendChild(div4);
        } else {
            let container5 = document.getElementById("micro-sd");
            let div5 = document.createElement("div");
            div5.innerHTML = `<br> <h2 class="card-desc">${info["description"]}</h2><p class="card-title fw-light" style="text-align: center;">${info["device"]} - ${info["selling-price"]}</p>`;
            container5.appendChild(div5);
        }
        i++;
    }
}
