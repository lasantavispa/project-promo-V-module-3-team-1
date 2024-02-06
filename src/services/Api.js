

const callToApi = (formData) => {
    return fetch ("https://dev.adalab.es/api/projectCard", {
        method: "POST",
        body: JSON.stringify(),
        headers: {"Content-type": "application/json"},
    })
    .then((response) => response.json())
    .then((responseData) => {
        return responseData;
        
    })
    .catch((error)=> {
        console.error("Error calling API:", error);

        formData = {
            name: formData.name.value,
            slogan: formData.slogan.value,
            technologies: formData.technologies.value,
            demo: formData.demo.value,
            repo: formData. repo.value,
            desc: formData.desc.value,
            author: formData.author.value,
            job: formData.job.value,
            image: formData.image.value,
            photo: formData.photo.value,
           };
      
    });

      };


  
  export default callToApi;