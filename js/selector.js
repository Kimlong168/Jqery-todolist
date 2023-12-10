function func1(){

    //$(selector).action();
    //selector: html element, class, id, attribute, value
    //action: event, effect, html, css, dom, widget

    //id
    // $("#item1").css("background-color","red");
    // $("#item2").css("background-color","blue");

    //class
    // $(".classA").css("background-color","red");
    // $(".classB").css("background-color","yellow");

    //tag
    // $("p").css("background-color","green");

    //attribute
    // $("a[target='_blank']").css("background-color","red");

    //multiple selector
    $("h1,a").css("background-color","pink");
    $("#item1,#item2").css("background-color","gray");

    // note: jquery selector is the same as CSS selector.
}