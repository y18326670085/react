var lock = new PatternLock("#lock", {
    onDraw: function(pattern){
        if(md5(pattern) == "ff111e4a5406ed4024a901c57e811167"){
            lock.reset();
            $(".lock").hide();
        }else{
            $(".patt-lines").css({
                backgroundColor: "#123",
                opacity: 0.5
            })
            setTimeout(function () {
                lock.reset();
            },1200)
        }
    }
});