const fetch = require("node-fetch");

export async function getLatestRelease(){
    let releasesData = await fetch("https://api.github.com/repos/MehediH/Tweeten/releases/latest").then(data => data.json())
    
    let updateLinks = {
        windows: "",
        mac: ""
    }

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