let sectionOffset=$("#page1").offset().top
$(window).scroll(function(){
    let windowScroll=$(window).scrollTop();
    if (windowScroll > sectionOffset) {
 $(".navbar").css("backgroundColor"," #0078ff")
    }
    else if(windowScroll < sectionOffset){
        $(".navbar").css("backgroundColor","transparent") 
    }
})
