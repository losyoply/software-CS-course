"use strict";
cc._RF.push(module, '43c13HUa8dDhK8pvT2k3r48', 'Menu');
// Scripts/Menu.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ===================== TODO =====================
    // 1. Add dynamic click event to StartButton to call this
    //    function
    Menu.prototype.loadGameScene = function () {
        cc.director.loadScene("game");
    };
    Menu.prototype.start = function () {
        var _this = this;
        cc.find("Canvas/UI/StartButton").on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.loadGameScene();
        }, this);
    };
    Menu = __decorate([
        ccclass
    ], Menu);
    return Menu;
}(cc.Component));
exports.default = Menu;

cc._RF.pop();