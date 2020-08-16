const { ccclass, property } = cc._decorator;

@ccclass
export default class LoadingScene extends cc.Component {
   // @property(cc.Button)
   // loadbtn: cc.Button = null
        
    start () {
        /*let loadbtn = this.node.getChildByName('loadBtn')
        loadbtn.on(cc.Node.EventType.TOUCH_END, () => {
            this.node.runAction(cc.sequence(cc.fadeOut(0.5), cc.callFunc( () =>{
                cc.director.loadScene("mainScene")
                })))
        })*/
    // setTimeout(() => {
    //     cc.director.loadScene("mainScene", () => {
    //         console.log("进入主游戏场景")
    //     })
    // },2000)
    // cc.TransitionFad.create(200,"mainScene",cc.color(0,0,0))
    
    }
    btngosence(){
        this.node.runAction(cc.sequence(cc.fadeOut(0.5), cc.callFunc( () =>{
            cc.director.loadScene("mainScene")
            })))
    }
    
}
