

const callToApi = () => {
    return fetch ("https://dev.adalab.es/api/projectCard")
    .then((response) => response.json())
    .then((responseData) => {
        const formData = {
            name: responseData.name,
            slogan: responseData.slogan,
            technologies: responseData.technologies,
            demo: responseData.demo,
            repo: responseData.repo,
            desc: responseData.desc,
            author: responseData.author,
            job: responseData.job,
            image: responseData.image,
            photo: responseData.photo,
        };
        return formData;
    });
};

export default callToApi
