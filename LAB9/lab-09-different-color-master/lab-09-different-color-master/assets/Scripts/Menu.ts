const {ccclass, property} = cc._decorator;

@ccclass
export default class Menu extends cc.Component {
    
    // ===================== TODO =====================
    // 1. Add dynamic click event to StartButton to call this
    //    function
    loadGameScene(){
        cc.director.loadScene("game");
    }
    start(){
        cc.find("Canvas/UI/StartButton").on(cc.Node.EventType.MOUSE_DOWN, ()=>{
            this.loadGameScene();
        },this);
    }
    // ================================================
}
