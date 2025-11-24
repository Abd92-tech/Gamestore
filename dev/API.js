<<<<<<< Updated upstream
const url = https//api.rawg.io/api/platforms?key=890a02b254564eae8e3dda102a5ea1f3

fetch={url}
=======
const url = "https://api.rawg.io/api/platforms?key=890a02b254564eae8e3dda102a5ea1f3"
fetch(url)
>>>>>>> Stashed changes


    .then(reponse => reponse.json())


    .then(data => {


        console.log("Données météo :");


<<<<<<< Updated upstream
        console.log("data:")
 

=======
        console.log(data);


>>>>>>> Stashed changes
    })