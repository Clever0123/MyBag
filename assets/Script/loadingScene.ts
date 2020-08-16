const { ccclass, property } = cc._decorator;

@ccclass
export default class LoadingScene extends cc.Component {
   // @property(cc.Button)
   // loadbtn: cc.Button = null
        
    start () {
        let loadbtn = this.node.getChildByName('loadBtn')
        loadbtn.on(cc.Node.EventType.TOUCH_END, () => {
            cc.director.loadScene("mainScene")
        })
    // setTimeout(() => {
    //     cc.director.loadScene("mainScene", () => {
    //         console.log("进入主游戏场景")
    //     })
    // },2000)
    // cc.TransitionFad.create(200,"mainScene",cc.color(0,0,0))
    }
}
