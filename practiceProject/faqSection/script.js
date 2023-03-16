document.addEventListener(onclick,function (){
    let event = window.event;
    let className = event.currentTarget.attributes.class;
    // if(className == "faq__header"){
    console.log(className);
    // }
})
getClassName = () => {
    let event = window.event;
    let className = event.currentTarget.attributes.class;
    // if(className == "faq__header"){
    console.log(className);
    // }
}