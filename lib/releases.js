const fetch = require("node-fetch");

export async function getLatestRelease(){
    let updateLinks = {
        windows: "",
        mac: ""
    }

    let releasesData = await fetch("https://api.github.com/repos/MehediH/Tweeten/releases/latest").then((response) => {
        if(response.ok){
            return response.json()
        } else{
            throw new Error("Couldn't fetch data from GitHub!")
        }
    }).catch((error) => {
        console.error(error.message)
        return updateLinks;
    })

    if(!releasesData.assets){ return updateLinks; }

    for(let asset of releasesData.assets){
        if(asset.name === "TweetenSetup.exe"){
            updateLinks.windows = asset.browser_download_url
        }
    }

    if(updateLinks.mac === ""){
        let macData = await fetch("https://raw.githubusercontent.com/MehediH/Tweeten/master/auto_updater.json").then(data => data.json())
        updateLinks.mac = macData.url
    }

    
    return updateLinks
}