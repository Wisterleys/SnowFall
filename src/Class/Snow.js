class Snow{
    /*
    offsetHeight: 0
    offsetLeft: 8
    offsetParent: body
    offsetTop: 8
    offsetWidth:
    */
    constructor(element){
        this.element=element;
        this.color="rgb(255,255,255)";
        this.interval=10
        this.body = [window.innerWidth,window.innerHeight];
        this.receives()
        this.loop(this.interval)
    }
    receives(){
        this.element.style=`position:absolute;top:${0};left:${Math.random() * (95 - 1) + 1}%;background:${this.color};width:8px;height:8px;border-radius:360px`
        //this.element.left=this.element.offsetLeft;
    }
    removeEl(){
        this.element.remove()
    }
    loop(interval){
        let cont=this.element.offsetTop;
       let loop = setInterval(() => {
            this.element.style.top=cont+"px"
            this.element.offsetLeft+this.element.offsetWidth+1>=this.body[0]?this.removeEl():0
            if(this.element.offsetTop+this.element.offsetHeight+1>this.body[1]){
                clearInterval(loop)
                //cont=0;
                this.element.style.width=this.element.offsetHeight+this.element.offsetHeight+"px"
                this.element.style.borderRadius="50px 50px 0px 0px"
                
                setTimeout(() => {
                    this.removeEl() 
                },1000);
            }
            cont++;
        }, (interval));
    }
}