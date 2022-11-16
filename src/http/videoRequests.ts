import {REACT_APP_API_URL_VIDEO} from "../utils/consts";

export const getVideo = async () => {

    const selectedVideo = '281376cf-7bd7-4791-8849-d277ca0ae325'

    let myHeaders = new Headers();
    return fetch(`${REACT_APP_API_URL_VIDEO}/${selectedVideo}`, {
        method: 'GET',
        redirect: 'follow',
    })
        .then(response => {
            return response.arrayBuffer().then((fileData: ArrayBuffer) => {
                const blob = new Blob([fileData], {type: "video/mp4"}); 
                return URL.createObjectURL(blob);
            });
        })
        .catch(error => {
            return error
        });
}

export const uploadVideo = async (data: any) => {
    const formData = new FormData();
    formData.append('file', data)
    let myHeaders = new Headers();
    myHeaders.append("Access-Control-Allow-Origin", "no-cors");
    return fetch("https://localhost:7183/VideoData/upload", {
        method: 'POST',
        body: formData,
        headers: myHeaders,
    }).catch(error => {
        return error
    });
}

export const getVideoInfo = () => {
    return {Name: "Name", Description: "Descrewfdsf", ChannelName: "ChannelName", CountLikes: 123, CountComments: 100}
}
