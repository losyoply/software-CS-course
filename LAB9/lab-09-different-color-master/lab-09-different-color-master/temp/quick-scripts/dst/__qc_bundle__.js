
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/Circle');
require('./assets/Scripts/GameManager');
require('./assets/Scripts/Menu');
require('./assets/migration/use_reversed_rotateTo');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Circle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '164a92KgZ1DIro953xb26Ry', 'Circle');
// Scripts/Circle.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        return _this;
    }
    Circle.prototype.start = function () {
        this.bg = this.node.getChildByName("Background");
    };
    Circle.prototype.update = function (dt) {
        if (this.bg.width < this.node.width) {
            this.bg.width = (this.node.width - 10) * 0.1 + this.bg.width;
            this.bg.height = (this.node.height - 10) * 0.1 + this.bg.height;
        }
        if (this.bg.width > this.node.width) {
            this.bg.width = this.node.width;
            this.bg.height = this.node.height;
        }
    };
    Circle = __decorate([
        ccclass
    ], Circle);
    return Circle;
}(cc.Component));
exports.default = Circle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQ2lyY2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQWtCQztRQWhCRyxRQUFFLEdBQVksSUFBSSxDQUFDOztJQWdCdkIsQ0FBQztJQWRHLHNCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUM7WUFDL0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDN0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7U0FDbkU7UUFDRCxJQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDO1lBQy9CLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQWpCZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWtCMUI7SUFBRCxhQUFDO0NBbEJELEFBa0JDLENBbEJtQyxFQUFFLENBQUMsU0FBUyxHQWtCL0M7a0JBbEJvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIGJnOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5iZyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMuYmcud2lkdGggPCB0aGlzLm5vZGUud2lkdGgpe1xyXG4gICAgICAgICAgICB0aGlzLmJnLndpZHRoID0gKHRoaXMubm9kZS53aWR0aCAtIDEwKSAqIDAuMSArIHRoaXMuYmcud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuYmcuaGVpZ2h0ID0gKHRoaXMubm9kZS5oZWlnaHQgLSAxMCkgKiAwLjEgKyB0aGlzLmJnLmhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5iZy53aWR0aCA+IHRoaXMubm9kZS53aWR0aCl7XHJcbiAgICAgICAgICAgIHRoaXMuYmcud2lkdGggPSB0aGlzLm5vZGUud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuYmcuaGVpZ2h0ID0gdGhpcy5ub2RlLmhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_reversed_rotateTo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9183cxAf2hAlKn1CNf8Edz9', 'use_reversed_rotateTo');
// migration/use_reversed_rotateTo.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with v2.1.0/v2.1.1/v2.2.1/v2.2.2 versions.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Action in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0/v2.1.1/v2.2.1/v2.2.2 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Action，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
cc.RotateTo._reverse = true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfcmV2ZXJzZWRfcm90YXRlVG8uanMiXSwibmFtZXMiOlsiY2MiLCJSb3RhdGVUbyIsIl9yZXZlcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxRQUFILENBQVlDLFFBQVosR0FBdUIsSUFBdkIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgdXNlZCBmb3IgcHJvamVjdHMgY29tcGF0aWJsZSB3aXRoIHYyLjEuMC92Mi4xLjEvdjIuMi4xL3YyLjIuMiB2ZXJzaW9ucy5cclxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cclxuICogSWYgeW91IGRvbid0IHVzZSBjYy5BY3Rpb24gaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cclxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cclxuICpcclxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMC92Mi4xLjEvdjIuMi4xL3YyLjIuMiDniYjmnKznmoTlt6XnqIvvvIxcclxuICog5L2g5peg6ZyA5Zyo5Lu75L2V5YW25a6D6aG555uu5Lit5omL5Yqo5re75Yqg5q2k6ISa5pys44CCXHJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBBY3Rpb27vvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcclxuICog5aaC5p6c5L2g55qE6aG555uu5pyJ5omY566h5LqOIGdpdCDnrYnniYjmnKzlupPvvIzor7flsIbmraTohJrmnKzkuIDlubbkuIrkvKDjgIJcclxuICovXHJcblxyXG5jYy5Sb3RhdGVUby5fcmV2ZXJzZSA9IHRydWU7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2634aExJ/hM/LL1ywU24TgI', 'GameManager');
// Scripts/GameManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.circleContainer = null;
        _this.cover_red = null;
        _this.cover = null;
        _this.gameoverPanel = null;
        _this.circlePrefab = null;
        _this.bgm = null;
        _this.bgm_2 = null;
        _this.correctSound = null;
        _this.level = [["level", "plusTime_sec", "minusTime_sec", "n_by_n", "nextLevel", "type", "type_option_arr"], ["level1", "1", "1", "2", "3", "CLOSER", "1"], ["level2", "0.98", "1", "3", "2", "CLOSER", "2"], ["level3", "0.96", "1", "3", "3", "CLOSER", "3"], ["level4", "0.94", "1", "3", "2", "CLOSER", "3"], ["level5", "0.92", "1", "4", "2", "CLOSER", "4"], ["level6", "0.9", "1", "4", "3", "CLOSER", "5"], ["level7", "0.88", "1", "4", "2", "CLOSER", "5"], ["level8", "0.86", "1", "4", "3", "CLOSER", "6"], ["level9", "0.84", "1", "5", "3", "CLOSER", "6"], ["level10", "0.82", "1", "5", "2", "CLOSER", "6"], ["level11", "0.8", "1", "5", "3", "CLOSER", "7"], ["level12", "0.78", "1.2", "5", "2", "CLOSER", "7"], ["level13", "0.76", "1.2", "5", "2", "CLOSER", "7"], ["level14", "0.74", "1.2", "5", "2", "CLOSER", "7"], ["level15", "0.72", "1.2", "6", "2", "CLOSER", "8"], ["level16", "0.7", "1.2", "6", "4", "CLOSER", "8"], ["level17", "0.68", "1.2", "6", "2", "CLOSER", "8"], ["level18", "0.66", "1.2", "6", "3", "CLOSER", "9"], ["level19", "0.64", "1.2", "6", "2", "CLOSER", "9"], ["level20", "0.62", "1.3", "7", "3", "CLOSER", "9"], ["level21", "0.6", "1.3", "7", "1", "CLOSER", "9"], ["level22", "0.58", "1.3", "7", "1", "CLOSER", "10"], ["level23", "0.56", "1.3", "7", "1", "CLOSER", "10"], ["level24", "0.54", "1.3", "7", "1", "CLOSER", "10"], ["level25", "0.52", "1.3", "7", "200", "CLOSER", "10"], ["MAX", "0", "1.3", "7", "80", "CLOSER", "10"]];
        _this.colorSet = [["colorId", "color_r", "color_g", "color_b"], ["color0", "90", "45", "145"], ["color1", "145", "35", "135"], ["color2", "215", "15", "120"], ["color3", "230", "35", "45"], ["color4", "245", "150", "30"], ["color5", "250", "220", "5"], ["color6", "180", "210", "55"], ["color7", "5", "190", "115"], ["color8", "5", "150", "175"], ["color9", "24", "75", "169"]];
        _this.curLevel = 1;
        _this.levelWinCount = 0;
        _this.gameLevel = 1;
        _this.remainTime = 20;
        _this.curCloserArr = [];
        _this.gameover = false;
        _this.flag = false;
        return _this;
    }
    GameManager.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    GameManager.prototype.start = function () {
        this.initProperties();
        this.playBGM();
        this.newRound();
    };
    GameManager.prototype.initProperties = function () {
        this.levelText = cc.find("Canvas/UI/LEVEL/number").getComponent(cc.Label);
        this.timeText = cc.find("Canvas/UI/TIME/number").getComponent(cc.Label);
    };
    GameManager.prototype.update = function (dt) {
        if (!this.gameover) {
            this.updateUI(dt);
            if (this.remainTime == 0) {
                this.gameover = true;
                this.onGameover();
            }
        }
        if (this.gameLevel >= 10 && !this.flag) {
            this.stopBGM();
            this.playAdvanceBGM();
            this.flag = true;
        }
    };
    GameManager.prototype.playAdvanceBGM = function () {
        cc.audioEngine.playMusic(this.bgm_2, true);
    };
    GameManager.prototype.onKeyDown = function (event) {
        if (event.keyCode == cc.macro.KEY.k) {
            this.getResult(null, "Ans");
        }
    };
    GameManager.prototype.newRound = function () {
        this.checkCloserArr();
        var row = parseInt(this.level[this.curLevel][3]);
        this.spawnCircle(row);
    };
    GameManager.prototype.checkCloserArr = function () {
        if (this.curCloserArr.length <= 1) {
            var index = Math.floor(Math.random() * 10);
            var indexL = (index + 9) % 10;
            var p = parseInt(this.level[this.curLevel][6]) + 1;
            var u = cc.color(parseInt(this.colorSet[index + 1][1]), parseInt(this.colorSet[index + 1][2]), parseInt(this.colorSet[index + 1][3]));
            var d = cc.color(parseInt(this.colorSet[indexL + 1][1]), parseInt(this.colorSet[indexL + 1][2]), parseInt(this.colorSet[indexL + 1][3]));
            var c = cc.color(Math.ceil((d.getR() - u.getR()) / p), Math.ceil((d.getG() - u.getG()) / p), Math.ceil((d.getB() - u.getB()) / p));
            this.curCloserArr.length = 0;
            this.curCloserArr.push(u);
            for (var f = 1; f <= p; f++) {
                var m = cc.color(u.getR() + c.getR() * f, u.getG() + c.getG() * f, u.getB() + c.getB() * f);
                if (Math.abs(d.getR() - m.getR()) + Math.abs(d.getG() - m.getG()) + Math.abs(d.getB() - m.getB()) >= 10) {
                    this.curCloserArr.push(m);
                }
            }
            this.curCloserArr.push(d);
        }
        this.targetColor = this.curCloserArr.shift();
        this.baseColor = this.curCloserArr[0];
    };
    GameManager.prototype.getResult = function (event, customEventData) {
        if (this.gameover)
            return;
        if (customEventData == "Ans") {
            this.gameLevel++;
            this.levelWinCount++;
            if (this.levelWinCount == parseInt(this.level[this.curLevel][4])) {
                this.levelWinCount = 0;
                this.curLevel++;
                if (this.curLevel > 26) {
                    this.curLevel = 26;
                }
            }
            this.remainTime += parseFloat(this.level[this.curLevel][1]);
            this.newRound();
            this.playEffect();
        }
        else {
            var offset = 4;
            this.circleContainer.runAction(cc.sequence(cc.moveTo(0.05, cc.v2(offset, -110.5)), cc.moveTo(0.05, cc.v2(-offset, -110.5)), cc.moveTo(0.05, cc.v2(offset, -110.5)), cc.moveTo(0.05, cc.v2(-offset, -110.5)), cc.moveTo(0.05, cc.v2(0, -110.5))));
            this.cover_red.runAction(cc.sequence(cc.fadeIn(0.1), cc.delayTime(0.1), cc.fadeOut(0.1)));
            this.remainTime -= parseFloat(this.level[this.curLevel][2]);
        }
    };
    GameManager.prototype.updateUI = function (dt) {
        this.levelText.string = this.gameLevel.toString();
        this.remainTime -= dt;
        if (this.remainTime < 0) {
            this.remainTime = 0;
        }
        this.timeText.string = this.remainTime.toFixed(2).toString().replace(".", ":");
    };
    GameManager.prototype.onGameover = function () {
        this.cover.runAction(cc.fadeTo(0.2, 128));
        this.gameoverPanel.active = true;
        this.gameoverPanel.runAction(cc.fadeIn(0.2));
        var LEVELText = this.gameoverPanel.getChildByName("LEVEL").getComponent(cc.Label);
        LEVELText.string = "Lv. " + this.gameLevel.toString();
        this.stopBGM();
    };
    GameManager.prototype.loadMenu = function () {
        cc.director.loadScene("menu");
    };
    GameManager.prototype.playBGM = function () {
        // ===================== TODO =====================
        // 1. Play music. The audio clip to play is this.bgm
        cc.audioEngine.playMusic(this.bgm, true);
        // ================================================
    };
    GameManager.prototype.stopBGM = function () {
        // ===================== TODO =====================
        // 1. Stop music. 
        cc.audioEngine.stopMusic();
        // ================================================
    };
    GameManager.prototype.playEffect = function () {
        // ===================== TODO =====================
        // 1. Play sound effect. The audio clip to play is 
        //    this.correctSound
        cc.audioEngine.playEffect(this.correctSound, false);
        // ================================================
    };
    GameManager.prototype.spawnCircle = function (row) {
        cc.log("spawn " + row + "*" + row);
        this.clearCircle();
        var containerSize = 380;
        if (row == 2) {
            containerSize = 246;
        }
        else if (row == 3) {
            containerSize = 369;
        }
        var circleSize = containerSize / row;
        // ===================== TODO =====================
        // 1. Update the size of circleContainer
        //
        // 2. Spawn [row]*[row] circles (this.circlePrefab)
        //    under circleContainer.
        //    (Be child nodes of the circleContainer node)
        // 
        //    Hints:  cc.instantiate(), cc.Node.addChild()
        // 
        // 3. All circles should be place like a square matrix.
        //    There is no space between each circle in each
        //    row and each column.
        // 
        //    e.g. 
        //    A 3*3 matrix of circles is look like:
        //    https://i.imgur.com/NuLEiyY.png
        //    A 4*4 matrix of circles is look like:
        //    https://i.imgur.com/Ij8GDvx.png
        // 
        //    Hints:  Layout component
        // 
        // 4. The width and height of each circle is 
        //    [circleSize].
        // 
        // 6. There is a child node named "Background" under
        //    the circle node. You should change the color
        //    of the "Background" node to this.targetColor
        //    if it is the answer. Otherwise, change the color to
        //    this.baseColor.
        // 
        // 7. Add a click event to the Button component of
        //    each circle so that when you click on it,
        //    GameManager.getResult() will be called.
        // 
        // 8. If the circle is the answer, customEventData
        //    of the click event should be "Ans". Please refer to 
        //    GameManager.getResult() for more details.
        // ================================================
        var answer = Math.floor(Math.random() * row * row);
        var layout = this.circleContainer.getComponent(cc.Layout);
        for (var i = 0; i < row * row; i++) {
            var circle = cc.instantiate(this.circlePrefab);
            if (i == answer) {
                circle.getChildByName("Background").color = this.targetColor;
                circle.on(cc.Node.EventType.MOUSE_DOWN, function () {
                    this.getResult("event", "Ans");
                }, this);
            }
            else {
                circle.getChildByName("Background").color = this.baseColor;
                circle.on(cc.Node.EventType.MOUSE_DOWN, function () {
                    this.getResult();
                }, this);
            }
            this.circleContainer.addChild(circle);
            // layout.node.addChild(circle);
            layout.updateLayout();
        }
        this.circleContainer.width = containerSize;
        this.circleContainer.height = containerSize;
        layout.cellSize.width = circleSize;
        layout.cellSize.height = circleSize;
    };
    GameManager.prototype.clearCircle = function () {
        this.circleContainer.removeAllChildren();
    };
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "circleContainer", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "cover_red", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "cover", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "gameoverPanel", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "circlePrefab", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], GameManager.prototype, "bgm", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], GameManager.prototype, "bgm_2", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], GameManager.prototype, "correctSound", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBZ1NDO1FBN1JHLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBR2hDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixTQUFHLEdBQWlCLElBQUksQ0FBQztRQUd6QixXQUFLLEdBQWlCLElBQUksQ0FBQztRQUczQixrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFFbEMsV0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3A2QyxjQUFRLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksRUFB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QUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25JLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDO2dCQUN2QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzVG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QVMsRUFBQyxDQUFDOzRDQUNMO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzs4Q0FDTjtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7cURBQ0k7SUF4QmpCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FnUy9CO0lBQUQsa0JBQUM7Q0FoU0QsQUFnU0MsQ0FoU3dDLEVBQUUsQ0FBQyxTQUFTLEdBZ1NwRDtrQkFoU29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNpcmNsZUNvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb3Zlcl9yZWQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY292ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhbWVvdmVyUGFuZWw6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBjaXJjbGVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXHJcbiAgICBiZ206IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXHJcbiAgICBiZ21fMjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuQXVkaW9DbGlwfSlcclxuICAgIGNvcnJlY3RTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBsZXZlbCA9IFtbXCJsZXZlbFwiLCBcInBsdXNUaW1lX3NlY1wiLCBcIm1pbnVzVGltZV9zZWNcIiwgXCJuX2J5X25cIiwgXCJuZXh0TGV2ZWxcIiwgXCJ0eXBlXCIsIFwidHlwZV9vcHRpb25fYXJyXCJdLCBbXCJsZXZlbDFcIiwgXCIxXCIsIFwiMVwiLCBcIjJcIiwgXCIzXCIsIFwiQ0xPU0VSXCIsIFwiMVwiXSwgW1wibGV2ZWwyXCIsIFwiMC45OFwiLCBcIjFcIiwgXCIzXCIsIFwiMlwiLCBcIkNMT1NFUlwiLCBcIjJcIl0sIFtcImxldmVsM1wiLCBcIjAuOTZcIiwgXCIxXCIsIFwiM1wiLCBcIjNcIiwgXCJDTE9TRVJcIiwgXCIzXCJdLCBbXCJsZXZlbDRcIiwgXCIwLjk0XCIsIFwiMVwiLCBcIjNcIiwgXCIyXCIsIFwiQ0xPU0VSXCIsIFwiM1wiXSwgW1wibGV2ZWw1XCIsIFwiMC45MlwiLCBcIjFcIiwgXCI0XCIsIFwiMlwiLCBcIkNMT1NFUlwiLCBcIjRcIl0sIFtcImxldmVsNlwiLCBcIjAuOVwiLCBcIjFcIiwgXCI0XCIsIFwiM1wiLCBcIkNMT1NFUlwiLCBcIjVcIl0sIFtcImxldmVsN1wiLCBcIjAuODhcIiwgXCIxXCIsIFwiNFwiLCBcIjJcIiwgXCJDTE9TRVJcIiwgXCI1XCJdLCBbXCJsZXZlbDhcIiwgXCIwLjg2XCIsIFwiMVwiLCBcIjRcIiwgXCIzXCIsIFwiQ0xPU0VSXCIsIFwiNlwiXSwgW1wibGV2ZWw5XCIsIFwiMC44NFwiLCBcIjFcIiwgXCI1XCIsIFwiM1wiLCBcIkNMT1NFUlwiLCBcIjZcIl0sIFtcImxldmVsMTBcIiwgXCIwLjgyXCIsIFwiMVwiLCBcIjVcIiwgXCIyXCIsIFwiQ0xPU0VSXCIsIFwiNlwiXSwgW1wibGV2ZWwxMVwiLCBcIjAuOFwiLCBcIjFcIiwgXCI1XCIsIFwiM1wiLCBcIkNMT1NFUlwiLCBcIjdcIl0sIFtcImxldmVsMTJcIiwgXCIwLjc4XCIsIFwiMS4yXCIsIFwiNVwiLCBcIjJcIiwgXCJDTE9TRVJcIiwgXCI3XCJdLCBbXCJsZXZlbDEzXCIsIFwiMC43NlwiLCBcIjEuMlwiLCBcIjVcIiwgXCIyXCIsIFwiQ0xPU0VSXCIsIFwiN1wiXSwgW1wibGV2ZWwxNFwiLCBcIjAuNzRcIiwgXCIxLjJcIiwgXCI1XCIsIFwiMlwiLCBcIkNMT1NFUlwiLCBcIjdcIl0sIFtcImxldmVsMTVcIiwgXCIwLjcyXCIsIFwiMS4yXCIsIFwiNlwiLCBcIjJcIiwgXCJDTE9TRVJcIiwgXCI4XCJdLCBbXCJsZXZlbDE2XCIsIFwiMC43XCIsIFwiMS4yXCIsIFwiNlwiLCBcIjRcIiwgXCJDTE9TRVJcIiwgXCI4XCJdLCBbXCJsZXZlbDE3XCIsIFwiMC42OFwiLCBcIjEuMlwiLCBcIjZcIiwgXCIyXCIsIFwiQ0xPU0VSXCIsIFwiOFwiXSwgW1wibGV2ZWwxOFwiLCBcIjAuNjZcIiwgXCIxLjJcIiwgXCI2XCIsIFwiM1wiLCBcIkNMT1NFUlwiLCBcIjlcIl0sIFtcImxldmVsMTlcIiwgXCIwLjY0XCIsIFwiMS4yXCIsIFwiNlwiLCBcIjJcIiwgXCJDTE9TRVJcIiwgXCI5XCJdLCBbXCJsZXZlbDIwXCIsIFwiMC42MlwiLCBcIjEuM1wiLCBcIjdcIiwgXCIzXCIsIFwiQ0xPU0VSXCIsIFwiOVwiXSwgW1wibGV2ZWwyMVwiLCBcIjAuNlwiLCBcIjEuM1wiLCBcIjdcIiwgXCIxXCIsIFwiQ0xPU0VSXCIsIFwiOVwiXSwgW1wibGV2ZWwyMlwiLCBcIjAuNThcIiwgXCIxLjNcIiwgXCI3XCIsIFwiMVwiLCBcIkNMT1NFUlwiLCBcIjEwXCJdLCBbXCJsZXZlbDIzXCIsIFwiMC41NlwiLCBcIjEuM1wiLCBcIjdcIiwgXCIxXCIsIFwiQ0xPU0VSXCIsIFwiMTBcIl0sIFtcImxldmVsMjRcIiwgXCIwLjU0XCIsIFwiMS4zXCIsIFwiN1wiLCBcIjFcIiwgXCJDTE9TRVJcIiwgXCIxMFwiXSwgW1wibGV2ZWwyNVwiLCBcIjAuNTJcIiwgXCIxLjNcIiwgXCI3XCIsIFwiMjAwXCIsIFwiQ0xPU0VSXCIsIFwiMTBcIl0sIFtcIk1BWFwiLCBcIjBcIiwgXCIxLjNcIiwgXCI3XCIsIFwiODBcIiwgXCJDTE9TRVJcIiwgXCIxMFwiXV07XHJcbiAgICBjb2xvclNldCA9IFtbXCJjb2xvcklkXCIsIFwiY29sb3JfclwiLCBcImNvbG9yX2dcIiwgXCJjb2xvcl9iXCJdLCBbXCJjb2xvcjBcIiwgXCI5MFwiLCBcIjQ1XCIsIFwiMTQ1XCJdLCBbXCJjb2xvcjFcIiwgXCIxNDVcIiwgXCIzNVwiLCBcIjEzNVwiXSwgW1wiY29sb3IyXCIsIFwiMjE1XCIsIFwiMTVcIiwgXCIxMjBcIl0sIFtcImNvbG9yM1wiLCBcIjIzMFwiLCBcIjM1XCIsIFwiNDVcIl0sIFtcImNvbG9yNFwiLCBcIjI0NVwiLCBcIjE1MFwiLCBcIjMwXCJdLCBbXCJjb2xvcjVcIiwgXCIyNTBcIiwgXCIyMjBcIiwgXCI1XCJdLCBbXCJjb2xvcjZcIiwgXCIxODBcIiwgXCIyMTBcIiwgXCI1NVwiXSwgW1wiY29sb3I3XCIsIFwiNVwiLCBcIjE5MFwiLCBcIjExNVwiXSwgW1wiY29sb3I4XCIsIFwiNVwiLCBcIjE1MFwiLCBcIjE3NVwiXSwgW1wiY29sb3I5XCIsIFwiMjRcIiwgXCI3NVwiLCBcIjE2OVwiXV07XHJcblxyXG4gICAgY3VyTGV2ZWw6IG51bWJlciA9IDE7XHJcbiAgICBsZXZlbFdpbkNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgZ2FtZUxldmVsOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHJlbWFpblRpbWU6IG51bWJlciA9IDIwO1xyXG5cclxuICAgIGxldmVsVGV4dDogY2MuTGFiZWw7XHJcbiAgICB0aW1lVGV4dDogY2MuTGFiZWw7XHJcblxyXG4gICAgdGFyZ2V0Q29sb3I6IGNjLkNvbG9yO1xyXG4gICAgYmFzZUNvbG9yOiBjYy5Db2xvcjtcclxuICAgIGN1ckNsb3NlckFycjogY2MuQ29sb3JbXSA9IFtdO1xyXG5cclxuICAgIGdhbWVvdmVyID0gZmFsc2U7XHJcblxyXG4gICAgZmxhZzpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdFByb3BlcnRpZXMoKTtcclxuICAgICAgICB0aGlzLnBsYXlCR00oKVxyXG4gICAgICAgIHRoaXMubmV3Um91bmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0UHJvcGVydGllcygpe1xyXG4gICAgICAgIHRoaXMubGV2ZWxUZXh0ID0gY2MuZmluZChcIkNhbnZhcy9VSS9MRVZFTC9udW1iZXJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLnRpbWVUZXh0ID0gY2MuZmluZChcIkNhbnZhcy9VSS9USU1FL251bWJlclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmdhbWVvdmVyKXtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVVSShkdCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucmVtYWluVGltZSA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZW92ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkdhbWVvdmVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdhbWVMZXZlbCA+PSAxMCAmJiAhdGhpcy5mbGFnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEJHTSgpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlBZHZhbmNlQkdNKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmxhZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlBZHZhbmNlQkdNKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbV8yLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbktleURvd24oZXZlbnQpIHtcclxuICAgICAgICBpZihldmVudC5rZXlDb2RlID09IGNjLm1hY3JvLktFWS5rKXtcclxuICAgICAgICAgICAgdGhpcy5nZXRSZXN1bHQobnVsbCwgXCJBbnNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5ld1JvdW5kKCl7XHJcbiAgICAgICAgdGhpcy5jaGVja0Nsb3NlckFycigpO1xyXG4gICAgICAgIGxldCByb3cgPSBwYXJzZUludCh0aGlzLmxldmVsW3RoaXMuY3VyTGV2ZWxdWzNdKTtcclxuICAgICAgICB0aGlzLnNwYXduQ2lyY2xlKHJvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDbG9zZXJBcnIoKXtcclxuICAgICAgICBpZih0aGlzLmN1ckNsb3NlckFyci5sZW5ndGggPD0gMSl7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICAgICAgbGV0IGluZGV4TCA9IChpbmRleCArIDkpICUgMTA7XHJcbiAgICAgICAgICAgIGxldCBwID0gcGFyc2VJbnQodGhpcy5sZXZlbFt0aGlzLmN1ckxldmVsXVs2XSkgKyAxO1xyXG4gICAgICAgICAgICBsZXQgdSA9IGNjLmNvbG9yKHBhcnNlSW50KHRoaXMuY29sb3JTZXRbaW5kZXggKyAxXVsxXSksIHBhcnNlSW50KHRoaXMuY29sb3JTZXRbaW5kZXggKyAxXVsyXSksIHBhcnNlSW50KHRoaXMuY29sb3JTZXRbaW5kZXggKyAxXVszXSkpO1xyXG4gICAgICAgICAgICBsZXQgZCA9IGNjLmNvbG9yKHBhcnNlSW50KHRoaXMuY29sb3JTZXRbaW5kZXhMICsgMV1bMV0pLCBwYXJzZUludCh0aGlzLmNvbG9yU2V0W2luZGV4TCArIDFdWzJdKSwgcGFyc2VJbnQodGhpcy5jb2xvclNldFtpbmRleEwgKyAxXVszXSkpO1xyXG4gICAgICAgICAgICBsZXQgYyA9IGNjLmNvbG9yKE1hdGguY2VpbCgoZC5nZXRSKCkgLSB1LmdldFIoKSkgLyBwKSwgTWF0aC5jZWlsKChkLmdldEcoKSAtIHUuZ2V0RygpKSAvIHApLCBNYXRoLmNlaWwoKGQuZ2V0QigpIC0gdS5nZXRCKCkpIC8gcCkpO1xyXG4gICAgICAgICAgICB0aGlzLmN1ckNsb3NlckFyci5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmN1ckNsb3NlckFyci5wdXNoKHUpO1xyXG4gICAgICAgICAgICBmb3IobGV0IGYgPSAxOyBmIDw9IHA7IGYrKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgbSA9IGNjLmNvbG9yKHUuZ2V0UigpICsgYy5nZXRSKCkgKiBmLCB1LmdldEcoKSArIGMuZ2V0RygpICogZiwgdS5nZXRCKCkgKyBjLmdldEIoKSAqIGYpO1xyXG4gICAgICAgICAgICAgICAgaWYoTWF0aC5hYnMoZC5nZXRSKCkgLSBtLmdldFIoKSkgKyBNYXRoLmFicyhkLmdldEcoKSAtIG0uZ2V0RygpKSArIE1hdGguYWJzKGQuZ2V0QigpIC0gbS5nZXRCKCkpID49IDEwKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1ckNsb3NlckFyci5wdXNoKG0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY3VyQ2xvc2VyQXJyLnB1c2goZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFyZ2V0Q29sb3IgPSB0aGlzLmN1ckNsb3NlckFyci5zaGlmdCgpO1xyXG4gICAgICAgIHRoaXMuYmFzZUNvbG9yID0gdGhpcy5jdXJDbG9zZXJBcnJbMF07XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgZ2V0UmVzdWx0KGV2ZW50LCBjdXN0b21FdmVudERhdGEpe1xyXG4gICAgICAgIGlmKHRoaXMuZ2FtZW92ZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYoY3VzdG9tRXZlbnREYXRhID09IFwiQW5zXCIpe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVMZXZlbCsrO1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsV2luQ291bnQrKztcclxuICAgICAgICAgICAgaWYodGhpcy5sZXZlbFdpbkNvdW50ID09IHBhcnNlSW50KHRoaXMubGV2ZWxbdGhpcy5jdXJMZXZlbF1bNF0pKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxXaW5Db3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckxldmVsKys7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmN1ckxldmVsID4gMjYpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyTGV2ZWwgPSAyNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlbWFpblRpbWUgKz0gcGFyc2VGbG9hdCh0aGlzLmxldmVsW3RoaXMuY3VyTGV2ZWxdWzFdKTtcclxuICAgICAgICAgICAgdGhpcy5uZXdSb3VuZCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wbGF5RWZmZWN0KCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSA0O1xyXG4gICAgICAgICAgICB0aGlzLmNpcmNsZUNvbnRhaW5lci5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4wNSwgY2MudjIob2Zmc2V0LCAtMTEwLjUpKSxcclxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjA1LCBjYy52Migtb2Zmc2V0LCAtMTEwLjUpKSxcclxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjA1LCBjYy52MihvZmZzZXQsIC0xMTAuNSkpLFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMDUsIGNjLnYyKC1vZmZzZXQsIC0xMTAuNSkpLFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMDUsIGNjLnYyKDAsIC0xMTAuNSkpXHJcbiAgICAgICAgICAgICkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb3Zlcl9yZWQucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MuZmFkZUluKDAuMSksXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4xKSxcclxuICAgICAgICAgICAgICAgIGNjLmZhZGVPdXQoMC4xKVxyXG4gICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgdGhpcy5yZW1haW5UaW1lIC09IHBhcnNlRmxvYXQodGhpcy5sZXZlbFt0aGlzLmN1ckxldmVsXVsyXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVVJKGR0KXtcclxuICAgICAgICB0aGlzLmxldmVsVGV4dC5zdHJpbmcgPSB0aGlzLmdhbWVMZXZlbC50b1N0cmluZygpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbWFpblRpbWUgLT0gZHQ7XHJcbiAgICAgICAgaWYodGhpcy5yZW1haW5UaW1lIDwgMCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtYWluVGltZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZVRleHQuc3RyaW5nID0gdGhpcy5yZW1haW5UaW1lLnRvRml4ZWQoMikudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBcIjpcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25HYW1lb3Zlcigpe1xyXG4gICAgICAgIHRoaXMuY292ZXIucnVuQWN0aW9uKGNjLmZhZGVUbygwLjIsIDEyOCkpO1xyXG4gICAgICAgIHRoaXMuZ2FtZW92ZXJQYW5lbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ2FtZW92ZXJQYW5lbC5ydW5BY3Rpb24oY2MuZmFkZUluKDAuMikpO1xyXG4gICAgICAgIGxldCBMRVZFTFRleHQgPSB0aGlzLmdhbWVvdmVyUGFuZWwuZ2V0Q2hpbGRCeU5hbWUoXCJMRVZFTFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIExFVkVMVGV4dC5zdHJpbmcgPSBcIkx2LiBcIiArIHRoaXMuZ2FtZUxldmVsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5zdG9wQkdNKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE1lbnUoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtZW51XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlCR00oKXtcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT0gVE9ETyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyAxLiBQbGF5IG11c2ljLiBUaGUgYXVkaW8gY2xpcCB0byBwbGF5IGlzIHRoaXMuYmdtXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtLCB0cnVlKTtcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcEJHTSgpe1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PSBUT0RPID09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIDEuIFN0b3AgbXVzaWMuIFxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlFZmZlY3QoKXtcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT0gVE9ETyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyAxLiBQbGF5IHNvdW5kIGVmZmVjdC4gVGhlIGF1ZGlvIGNsaXAgdG8gcGxheSBpcyBcclxuICAgICAgICAvLyAgICB0aGlzLmNvcnJlY3RTb3VuZFxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jb3JyZWN0U291bmQsIGZhbHNlKTtcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIH1cclxuXHJcbiAgICBzcGF3bkNpcmNsZShyb3c6IG51bWJlcil7XHJcbiAgICAgICAgY2MubG9nKFwic3Bhd24gXCIgKyByb3cgKyBcIipcIiArIHJvdyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJDaXJjbGUoKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRhaW5lclNpemUgPSAzODA7XHJcbiAgICAgICAgaWYocm93ID09IDIpe1xyXG4gICAgICAgICAgICBjb250YWluZXJTaXplID0gMjQ2O1xyXG4gICAgICAgIH1lbHNlIGlmKHJvdyA9PSAzKXtcclxuICAgICAgICAgICAgY29udGFpbmVyU2l6ZSA9IDM2OTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNpcmNsZVNpemUgPSBjb250YWluZXJTaXplIC8gcm93O1xyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT0gVE9ETyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyAxLiBVcGRhdGUgdGhlIHNpemUgb2YgY2lyY2xlQ29udGFpbmVyXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAyLiBTcGF3biBbcm93XSpbcm93XSBjaXJjbGVzICh0aGlzLmNpcmNsZVByZWZhYilcclxuICAgICAgICAvLyAgICB1bmRlciBjaXJjbGVDb250YWluZXIuXHJcbiAgICAgICAgLy8gICAgKEJlIGNoaWxkIG5vZGVzIG9mIHRoZSBjaXJjbGVDb250YWluZXIgbm9kZSlcclxuICAgICAgICAvLyBcclxuICAgICAgICAvLyAgICBIaW50czogIGNjLmluc3RhbnRpYXRlKCksIGNjLk5vZGUuYWRkQ2hpbGQoKVxyXG4gICAgICAgIC8vIFxyXG4gICAgICAgIC8vIDMuIEFsbCBjaXJjbGVzIHNob3VsZCBiZSBwbGFjZSBsaWtlIGEgc3F1YXJlIG1hdHJpeC5cclxuICAgICAgICAvLyAgICBUaGVyZSBpcyBubyBzcGFjZSBiZXR3ZWVuIGVhY2ggY2lyY2xlIGluIGVhY2hcclxuICAgICAgICAvLyAgICByb3cgYW5kIGVhY2ggY29sdW1uLlxyXG4gICAgICAgIC8vIFxyXG4gICAgICAgIC8vICAgIGUuZy4gXHJcbiAgICAgICAgLy8gICAgQSAzKjMgbWF0cml4IG9mIGNpcmNsZXMgaXMgbG9vayBsaWtlOlxyXG4gICAgICAgIC8vICAgIGh0dHBzOi8vaS5pbWd1ci5jb20vTnVMRWl5WS5wbmdcclxuICAgICAgICAvLyAgICBBIDQqNCBtYXRyaXggb2YgY2lyY2xlcyBpcyBsb29rIGxpa2U6XHJcbiAgICAgICAgLy8gICAgaHR0cHM6Ly9pLmltZ3VyLmNvbS9JajhHRHZ4LnBuZ1xyXG4gICAgICAgIC8vIFxyXG4gICAgICAgIC8vICAgIEhpbnRzOiAgTGF5b3V0IGNvbXBvbmVudFxyXG4gICAgICAgIC8vIFxyXG4gICAgICAgIC8vIDQuIFRoZSB3aWR0aCBhbmQgaGVpZ2h0IG9mIGVhY2ggY2lyY2xlIGlzIFxyXG4gICAgICAgIC8vICAgIFtjaXJjbGVTaXplXS5cclxuICAgICAgICAvLyBcclxuICAgICAgICBcclxuICAgICAgICAvLyA2LiBUaGVyZSBpcyBhIGNoaWxkIG5vZGUgbmFtZWQgXCJCYWNrZ3JvdW5kXCIgdW5kZXJcclxuICAgICAgICAvLyAgICB0aGUgY2lyY2xlIG5vZGUuIFlvdSBzaG91bGQgY2hhbmdlIHRoZSBjb2xvclxyXG4gICAgICAgIC8vICAgIG9mIHRoZSBcIkJhY2tncm91bmRcIiBub2RlIHRvIHRoaXMudGFyZ2V0Q29sb3JcclxuICAgICAgICAvLyAgICBpZiBpdCBpcyB0aGUgYW5zd2VyLiBPdGhlcndpc2UsIGNoYW5nZSB0aGUgY29sb3IgdG9cclxuICAgICAgICAvLyAgICB0aGlzLmJhc2VDb2xvci5cclxuICAgICAgICAvLyBcclxuICAgICAgICAvLyA3LiBBZGQgYSBjbGljayBldmVudCB0byB0aGUgQnV0dG9uIGNvbXBvbmVudCBvZlxyXG4gICAgICAgIC8vICAgIGVhY2ggY2lyY2xlIHNvIHRoYXQgd2hlbiB5b3UgY2xpY2sgb24gaXQsXHJcbiAgICAgICAgLy8gICAgR2FtZU1hbmFnZXIuZ2V0UmVzdWx0KCkgd2lsbCBiZSBjYWxsZWQuXHJcbiAgICAgICAgLy8gXHJcbiAgICAgICAgLy8gOC4gSWYgdGhlIGNpcmNsZSBpcyB0aGUgYW5zd2VyLCBjdXN0b21FdmVudERhdGFcclxuICAgICAgICAvLyAgICBvZiB0aGUgY2xpY2sgZXZlbnQgc2hvdWxkIGJlIFwiQW5zXCIuIFBsZWFzZSByZWZlciB0byBcclxuICAgICAgICAvLyAgICBHYW1lTWFuYWdlci5nZXRSZXN1bHQoKSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIHZhciBhbnN3ZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByb3cgKiByb3cpO1xyXG4gICAgICAgIHZhciBsYXlvdXQgPSB0aGlzLmNpcmNsZUNvbnRhaW5lci5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3cgKiByb3c7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY2lyY2xlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jaXJjbGVQcmVmYWIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGkgPT0gYW5zd2VyKSB7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGUuZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmNvbG9yID0gdGhpcy50YXJnZXRDb2xvcjtcclxuICAgICAgICAgICAgICAgIGNpcmNsZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRSZXN1bHQoXCJldmVudFwiLCBcIkFuc1wiKTtcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2lyY2xlLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5jb2xvciA9IHRoaXMuYmFzZUNvbG9yO1xyXG4gICAgICAgICAgICAgICAgY2lyY2xlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFJlc3VsdCgpO1xyXG4gICAgICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jaXJjbGVDb250YWluZXIuYWRkQ2hpbGQoY2lyY2xlKTtcclxuICAgICAgICAgICAgLy8gbGF5b3V0Lm5vZGUuYWRkQ2hpbGQoY2lyY2xlKTtcclxuICAgICAgICAgICAgbGF5b3V0LnVwZGF0ZUxheW91dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNpcmNsZUNvbnRhaW5lci53aWR0aCA9IGNvbnRhaW5lclNpemU7XHJcbiAgICAgICAgdGhpcy5jaXJjbGVDb250YWluZXIuaGVpZ2h0ID0gY29udGFpbmVyU2l6ZTtcclxuICAgICAgICBcclxuICAgICAgICBsYXlvdXQuY2VsbFNpemUud2lkdGggPSBjaXJjbGVTaXplO1xyXG4gICAgICAgIGxheW91dC5jZWxsU2l6ZS5oZWlnaHQgPSBjaXJjbGVTaXplO1xyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbGVhckNpcmNsZSgpe1xyXG4gICAgICAgIHRoaXMuY2lyY2xlQ29udGFpbmVyLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
