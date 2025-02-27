
async function FetchData() {
    try {
        const nothing = document.getElementById("nothing");
        const Qrcode = document.getElementById("Qrcode");
        const linkInput = document.getElementById("qrlink").value;

        if (linkInput === "") {
            nothing.style.display = "block";  
            Qrcode.style.display = "none";  
        }

        nothing.style.display = "none";
        Qrcode.style.display = "block";

        const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(linkInput)}`);
        
        
        Qrcode.src = response.url;

    } catch (error) {
        console.error('Error fetching data:', error);  
    }
}
