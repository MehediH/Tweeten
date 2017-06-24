$( document ).ready(function() {

    $(document).ready(function(){
        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });
    });

    qs = document.location.search.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    var version = params["v"]

    if(version != undefined){
         $.ajax({
            url: "https://api.github.com/repos/MehediH/Tweeten/releases/tags/" + version,
            dataType: "text",
            success: function(data) {
                var data = $.parseJSON(data);

                if(data.length != 0){
                    $("header .donthide").text(data.name)
                    $("header p").text("Tweeten " + data.tag_name + " changelog, and download links.")
                    var body = new showdown.Converter()
                    var body = body.makeHtml(data.body)
                    $(".timeline.container").append(body)
                    $(".indicator").remove();

                    $(".timeline.container").append('<div class="download-release-alt download-release"><span>Download Now:</span><a href="" class="dl-link" target="_blank" title="Download Tweeten for your Windows 7, 8, or 10 PC, today.">Windows (64-bit)</a><a href="" class="dl-link" target="_blank" title="Download Tweeten for your Mac, today.">macOS</a></div>')
                    var downloads = data["assets"]
                    var w64 = ""
                    var mac = ""
                    
                    for(download in downloads){
                        if(downloads[download].name.includes("darwin")){
                            mac = downloads[download].browser_download_url;
                        }

                        if(downloads[download].name.includes("TweetenSetup")){
                            w64 = downloads[download].browser_download_url;
                        }
                    }

                                
                    $(".dl-link").each(function() {
                        if($(this).attr("href") == ""){
                            if($(this)[0].textContent.includes("macOS")){
                                $(this).attr("href", mac)
                            }

                            if($(this)[0].textContent.includes("64-bit")){
                                $(this).attr("href", w64)
                            }

                        }
                    })
                } else{
                    allReleases()
                }
            },
            error: function(err){
                if(err.status == 404){
                    $(".indicator").text("We couldn't find the details for version " + version + ". Here are the latest releases:")
                    allReleases()
                }
            }
        });
    } else{
        allReleases()
        $(".indicator").fadeOut();  
    }


    function allReleases(){
        Date.prototype.formatMMDDYYYY = function(){
            return (this.getMonth() + 1) + 
            "/" +  this.getDate() +
            "/" +  this.getFullYear();
        }

        $.ajax({
            url: "https://api.github.com/repos/MehediH/Tweeten/releases",
            dataType: "text",
            success: function(data) {
                var data = $.parseJSON(data);

                if(data.length != 0){
                    for(release in data){
                        var release = data[release]
                        var tag = release.tag_name
                        var body = new showdown.Converter()
                        var body = body.makeHtml(release.body)
                        var name = release.name
                        var releaseDate = new Date(release.published_at).formatMMDDYYYY();

                        $(".tweeten-release").append('<li><time class="tweeten_tmtime"><span>' + releaseDate + '</span> <span>' + tag + '</span></time><div class="tweeten_tmicon tweeten_tmicon-phone"></div><div class="tweeten_tmlabel"><h2>' + name + '</h2>' + body + '<div class="download-release"><span>Download Now:</span><a href="" class="dl-link" target="_blank" title="Download Tweeten for your Windows 7, 8, or 10 PC, today.">Windows (64-bit)</a><a href="" class="dl-link" target="_blank" title="Download Tweeten for your Mac, today.">macOS</a></div></div></li>');
 

                        var downloads = release["assets"]
                        var w64 = ""
                        var mac = ""

                        for(download in downloads){
                            if(downloads[download].name.includes("darwin")){
                                mac = downloads[download].browser_download_url;
                            }

                            if(downloads[download].name.includes("TweetenSetup")){
                                w64 = downloads[download].browser_download_url;
                            }

                        }
                                    
                        $(".dl-link").each(function() {
                            if($(this).attr("href") == ""){
                                if($(this)[0].textContent.includes("macOS")){
                                    $(this).attr("href", mac)
                                }

                                if($(this)[0].textContent.includes("64-bit")){
                                    $(this).attr("href", w64)
                                }

                            }
                        })
                    }     

                    
                } else{
                    $(".indicator").text("No releases found, please check again later.")
                }
            }
        });
    }
});