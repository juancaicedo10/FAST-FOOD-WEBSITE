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

                price.textContent = `$${priceToNumber.toFixed(3)}`;
                numberElement.textContent = toNumber;

                updateTotal(product)

            }else {
                let numberElement = product.querySelector(".quantity h1");
                var toNumber = parseInt(numberElement.textContent);
                let price = product.querySelector(".price");
                let priceToNumber = parseFloat(price.textContent.replace("$", ""))

                if(toNumber <= 1) {
                    return;
                }

                toNumber -= 1;
                priceToNumber = priceToNumber / (toNumber + 1) * toNumber;
                price.textContent = `$${priceToNumber.toFixed(3)}`;
                numberElement.textContent = toNumber;

            updateTotal(product)
    }
})

})

})

function updateTotal() {
    const cartProducts = document.querySelectorAll(".products-container li");
    let total = 0;

    cartProducts.forEach(product => {
        const priceElement = product.querySelector(".price");
        const price = parseFloat(priceElement.textContent.replace("$", ""))
        total += price;
    })

    total = `$${total.toFixed(3)}`

    const totalPay = document.querySelector(".totalPay");

    totalPay.textContent = total
}



const discountCodeEl = document.querySelector(".discount input");

discountCodeEl.addEventListener("input", () => {
    const cleanedValue = discountCodeEl.value.replace(/\D/g, "");

    const maskedValue = applyMask(cleanedValue);

    discountCodeEl.value = maskedValue



    function applyMask(value) {
        const mask = "##-##-##";
        let maskedValue = "";
        let j = 0;
      
        for (let i = 0; i < mask.length; i++) {
          if (mask[i] === "#") {
            maskedValue += value[j] || ""; // Agregar el dígito o dejar vacío si no hay más dígitos
            j++;
          } else if (mask[i] === "-" && value[j - 1]) {
            maskedValue += "-";
          }
        }
      
        return maskedValue;
      }
})

const payBtn = document.querySelector(".pay");

payBtn.addEventListener("click", () => {
    alert("thanks for your shop :)")
})



