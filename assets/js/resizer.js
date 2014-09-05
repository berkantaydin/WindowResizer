jQuery(document).ready(function ($) {
        $('#tabs').tab();

        $(".doit").click(function(){
            chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, { width: 1024, height:768 });
        });
        console.log("aa");
    });