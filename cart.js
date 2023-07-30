const moreLessButtons = document.querySelectorAll(".quantity button"); 

const cartProducts = document.querySelectorAll(".products-container li");

cartProducts.forEach(product => {
    console.log("click")
    const moreLessButtons = product.querySelectorAll(".quantity button")
    moreLessButtons.forEach(button => {
        button.addEventListener("click", () => {
            if(button.id === "more") {
                console.log("click")
                let numberElement = product.querySelector(".quantity h1");
                let toNumber = parseInt(numberElement.textContent);
                let price = product.querySelector(".price");
                let priceToNumber = parseFloat(price.textContent.replace("$", ""))

                toNumber += 1;
                priceToNumber = priceToNumber / (toNumber - 1) * toNumber;

                price.textContent = `$${priceToNumber.toFixed(2)}`;
                numberElement.textContent = toNumber;
            }else {
                let numberElement = product.querySelector(".quantity h1");
                var toNumber = parseInt(numberElement.textContent);

                if(toNumber <= 1) {
                    return;
                }

                toNumber -= 1;
                numberElement.textContent = toNumber
            
    }
})

})

})



