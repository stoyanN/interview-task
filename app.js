window.addEventListener("load", function () {
    
    $.getJSON("./currencies.json", function (data) {
        let curr = data;
        let isEven = true;

        (function () {
            let body = document.getElementById("content");

            for (let record in curr.rates) {
                let p = document.createElement("p");
                let b = document.createElement("b");
                let span = document.createElement("span");

                b.textContent = `${record}: `;
                span.textContent = curr.rates[record].toFixed(4);

                p.appendChild(b);
                p.appendChild(span);

                body.appendChild(p);
            }

            rateChange(body, curr, "rates");
        }());

        
        function rateChange(parentElement, dataObejct, dataProperty) {
            const firstRound = setInterval(() => {
                increaseRates(parentElement, dataObejct, dataProperty);
            }, 5000);
    
            setTimeout(() => {
                clearInterval(firstRound);
    
                (curr.rates);
    
                if (isEven === true) {
                    increaseRates(parentElement, dataObejct, dataProperty);
                    return isEven = false;
                } else {
                    decreaseRates(parentElement, dataObejct, dataProperty);
                    return isEven = true;
                }
    
            }, 60000);
    
            const loop = setInterval(() => {
                const innerLoop = setInterval(() => {
                    if (isEven === true) {
                        increaseRates(parentElement, dataObejct, dataProperty);
                    } else {
                        decreaseRates(parentElement, dataObejct, dataProperty);
                    }
    
                }, 5000);
    
                setTimeout(() => {
                    clearInterval(innerLoop);
    
                    if (isEven === true) {
                        increaseRates(parentElement, dataObejct, dataProperty);
    
                        return isEven = false;
                    } else {
                        decreaseRates(parentElement, dataObejct, dataProperty);
    
                        return isEven = true;
                    }
    
                }, 60000);
    
            }, 60001);
    
            setTimeout(() => clearInterval(loop), 300000);
        }
    
        function increaseRates(parent, dataObejct, dataProperty) {
            let fragment = document.createDocumentFragment();
    
            for (let rate in dataObejct[dataProperty]) {
                let newRate = Number(dataObejct[dataProperty][rate].toFixed(4)) + 0.0001;
                dataObejct[dataProperty][rate] = newRate;
    
                let p = document.createElement("p");
                let b = document.createElement("b");
                let span = document.createElement("span");
    
                b.textContent = `${rate}: `;
                span.textContent = dataObejct[dataProperty][rate].toFixed(4);
    
                p.appendChild(b);
                p.appendChild(span);
                
                span.classList.add("green");

                fragment.appendChild(p);
            }
    
            parent.innerHTML = "";
            parent.appendChild(fragment);
            return dataObejct[dataProperty];
        }
    
        function decreaseRates(parent, dataObejct, dataProperty) {
            let fragment = document.createDocumentFragment();
    
            for (let rate in dataObejct.rates) {
                let p = document.createElement("p");
                let b = document.createElement("b");
                let span = document.createElement("span");
    
                if (Number(dataObejct[dataProperty][rate].toFixed(4)) - 0.0001 > 1.0001) {
                    dataObejct[dataProperty][rate] = Number(dataObejct[dataProperty][rate].toFixed(4)) - 0.0001;
                } else {
                    dataObejct[dataProperty][rate] = Number(dataObejct[dataProperty][rate].toFixed(4));
                }
    
                b.textContent = `${rate}: `;
                span.textContent = dataObejct[dataProperty][rate].toFixed(4);
    
                p.appendChild(b);
                p.appendChild(span);
    
                span.classList.add("red");

                fragment.appendChild(p);
            }

            parent.innerHTML = "";
            parent.appendChild(fragment);
            return dataObejct[dataProperty];
        }

    });

});