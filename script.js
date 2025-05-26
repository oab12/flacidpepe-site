
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("✅ Your card has been successfully sold on the dark web!");

    setTimeout(function() {
        alert("Downloading: tax_fraud_toolkit.zip");
    }, 2000);

    setTimeout(function() {
        document.body.innerHTML = `
            <div style="text-align: center; padding-top: 50px; font-family: Arial;">
                <h1 style="color: green;">THANK YOU FOR YOUR GENEROUS DONATION TO:</h1>
                <h2 style="color: #800000;">FLACIDPP'S EXILED ROYAL TREASURY</h2>
                <img src="https://media.tenor.com/k-WwG8UXAAIAAAAd/money-rain.gif" alt="money rain" style="width: 200px; margin-top: 20px;">
                <p style="margin-top: 30px;">You will be handsomely rewarded once the funds clear.</p>
                <button style="margin-top: 20px; padding: 10px 20px; font-size: 16px; background: gold; border: none; cursor: pointer;">Double Your Donation</button>
            </div>
        `;
    }, 4000);
});
