function launchFirework() {
    const apiUrl = "https://iwantfireworks.azurewebsites.net/Fireworks/send"; 

    const data = {
        message: "string" 
    };

    fetch(apiUrl, {
        method: "POST", // HTTP-methode
        headers: {
            "Content-Type": "application/json", // Geef aan dat de body JSON is
        },
        body: JSON.stringify(data), // Data omzetten naar JSON-string
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP-fout: ${response.status}`);
            }
            return response.json();
        })
        .then(responseData => {
            console.log("Response van server:", responseData);
            // alert("Bericht verzonden! Check de console.");
        })
        .catch(error => {
            console.error("Er is een fout opgetreden:", error);
            // alert("POST-verzoek mislukt.");
        });
}