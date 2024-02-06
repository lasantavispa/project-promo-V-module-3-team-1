

const callToApi = (sendData) => {
    return fetch ("https://dev.adalab.es/api/projectCard", {
        method: "POST",
        body: JSON.stringify(sendData),
        header: {"Content-type": "application/json"},
    })
    .then((response) => response.json())
    }

export default callToApi
