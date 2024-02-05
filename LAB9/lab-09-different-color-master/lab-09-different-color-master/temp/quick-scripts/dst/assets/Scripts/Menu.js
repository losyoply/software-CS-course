
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Menu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7O0lBY0EsQ0FBQztJQVpHLG1EQUFtRDtJQUNuRCx5REFBeUQ7SUFDekQsY0FBYztJQUNkLDRCQUFhLEdBQWI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0JBQUssR0FBTDtRQUFBLGlCQUlDO1FBSEcsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDOUQsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNaLENBQUM7SUFaZ0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQWN4QjtJQUFELFdBQUM7Q0FkRCxBQWNDLENBZGlDLEVBQUUsQ0FBQyxTQUFTLEdBYzdDO2tCQWRvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09IFRPRE8gPT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyAxLiBBZGQgZHluYW1pYyBjbGljayBldmVudCB0byBTdGFydEJ1dHRvbiB0byBjYWxsIHRoaXNcclxuICAgIC8vICAgIGZ1bmN0aW9uXHJcbiAgICBsb2FkR2FtZVNjZW5lKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9VSS9TdGFydEJ1dHRvblwiKS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRHYW1lU2NlbmUoKTtcclxuICAgICAgICB9LHRoaXMpO1xyXG4gICAgfVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbn1cclxuIl19