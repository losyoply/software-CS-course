
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/GameMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9eafa6oJfhL2YaT2IrMk8jP', 'GameMgr');
// Scripts/GameMgr.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameMgr = /** @class */ (function (_super) {
    __extends(GameMgr, _super);
    function GameMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.background = null;
        _this.wall = null;
        _this.upperBound = null;
        _this.lowerBound = null;
        _this.player = null;
        _this.platforms = null;
        _this.platformPrefabs = [];
        _this.startIcon = null;
        _this.pauseIcon = null;
        _this.scoreNode = null;
        _this.highestScoreNode = null;
        _this.lifeBar = null;
        _this.bgm = null;
        _this.backgroundInitPos = -72;
        _this.backgroundResetPos = 56;
        _this.wallInitPos = -23;
        _this.wallResetPos = 9;
        _this.physicManager = null;
        _this.leftDown = false;
        _this.rightDown = false;
        _this.score = 0;
        _this.highestScore = 0;
        _this.pause = false;
        _this.playerLife = 12;
        return _this;
    }
    GameMgr.prototype.onLoad = function () {
        // ===================== TODO =====================
        // 1. Enable physics manager 
        // 2. Set physics gravity to (0, -200)
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2(0, -200);
        // ================================================
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    GameMgr.prototype.start = function () {
        var _this = this;
        this.schedule(function () {
            var idx = _this.randomChoosePlatform();
            var platform = cc.instantiate(_this.platformPrefabs[idx]);
            platform.parent = _this.platforms;
            platform.position = cc.v2(-144 + Math.random() * 288, -190);
        }, 1.2);
        this.updateHighestScore(0);
        this.scoreCount = function () { _this.updateScore(_this.score + 1); };
    };
    GameMgr.prototype.update = function (dt) {
        if (this.wall.y >= this.wallResetPos)
            this.wall.y = this.wallInitPos;
        this.background.y += 0.2;
        if (this.background.y >= this.backgroundResetPos)
            this.background.y = this.backgroundInitPos;
    };
    GameMgr.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                this.leftDown = true;
                this.player.playerMove(-1);
                break;
            case cc.macro.KEY.right:
                this.rightDown = true;
                this.player.playerMove(1);
                break;
            case cc.macro.KEY.a:
                this.gameStart();
                break;
            case cc.macro.KEY.d:
                this.gameOver();
                break;
        }
    };
    GameMgr.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                this.leftDown = false;
                if (this.rightDown)
                    this.player.playerMove(1);
                else
                    this.player.playerMove(0);
                break;
            case cc.macro.KEY.right:
                this.rightDown = false;
                if (this.leftDown)
                    this.player.playerMove(-1);
                else
                    this.player.playerMove(0);
                break;
        }
    };
    GameMgr.prototype.randomChoosePlatform = function () {
        var rand = Math.random();
        //0: normal, 1: nails, 2: fake, 3: conveyor, 4: trampoline
        var prob = [6, 2, 2, 3, 2];
        var sum = prob.reduce(function (a, b) { return a + b; });
        for (var i = 1; i < prob.length; i++)
            prob[i] += prob[i - 1];
        for (var i = 0; i < prob.length; i++) {
            prob[i] /= sum;
            if (rand <= prob[i])
                return i;
        }
    };
    GameMgr.prototype.updateHighestScore = function (score) {
        this.highestScore = score;
        this.highestScoreNode.getComponent(cc.Label).string = (Array(4).join("0") + this.highestScore.toString()).slice(-4);
    };
    GameMgr.prototype.updateScore = function (score) {
        this.score = score;
        this.scoreNode.getComponent(cc.Label).string = (Array(4).join("0") + this.score.toString()).slice(-4);
    };
    GameMgr.prototype.updateLife = function (num) {
        this.playerLife += num;
        this.playerLife = Math.min(Math.max(this.playerLife, 0), 12);
        this.lifeBar.width = this.playerLife * 8;
        if (this.playerLife == 0)
            this.gameOver();
    };
    GameMgr.prototype.gameStart = function () {
        this.startIcon.active = false;
        if (this.score > this.highestScore)
            this.updateHighestScore(this.score);
        this.updateScore(1);
        this.updateLife(12);
        var rebornPos = cc.v2();
        this.platforms.children.forEach(function (platform) {
            platform.getComponent("Platform").reset();
            if (platform.name != 'Nails')
                rebornPos = platform.position.add(cc.v2(0, 50));
        });
        this.player.reborn(rebornPos);
        this.player.node.active = true;
        this.schedule(this.scoreCount, 2);
        cc.audioEngine.playMusic(this.bgm, true);
    };
    GameMgr.prototype.gamePause = function () {
        if (this.pause)
            this.pause = false;
        else
            this.pause = true;
        if (this.pause) {
            this.pauseIcon.active = true;
            this.scheduleOnce(function () {
                cc.game.pause();
            }, 0.1);
        }
        else {
            this.pauseIcon.active = false;
            cc.game.resume();
        }
    };
    GameMgr.prototype.gameOver = function () {
        this.player.node.active = false;
        this.unschedule(this.scoreCount);
        this.startIcon.active = true;
        cc.audioEngine.stopMusic();
    };
    GameMgr.prototype.gameEnd = function () {
        cc.game.end();
    };
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "background", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "wall", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "upperBound", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "lowerBound", void 0);
    __decorate([
        property(Player_1.default)
    ], GameMgr.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "platforms", void 0);
    __decorate([
        property([cc.Prefab])
    ], GameMgr.prototype, "platformPrefabs", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "startIcon", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "pauseIcon", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "scoreNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "highestScoreNode", void 0);
    __decorate([
        property(cc.Node)
    ], GameMgr.prototype, "lifeBar", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], GameMgr.prototype, "bgm", void 0);
    GameMgr = __decorate([
        ccclass
    ], GameMgr);
    return GameMgr;
}(cc.Component));
exports.default = GameMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBRXhCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBNk9DO1FBMU9HLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsWUFBTSxHQUFXLElBQUksQ0FBQztRQUd0QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHFCQUFlLEdBQWdCLEVBQUUsQ0FBQztRQUdsQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFHekIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUdoQyxTQUFHLEdBQWlCLElBQUksQ0FBQztRQUVqQix1QkFBaUIsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUV4Qix3QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFFeEIsaUJBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUVsQixrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUVqQixtQkFBYSxHQUFzQixJQUFJLENBQUM7UUFFeEMsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFJekIsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUV2QixnQkFBVSxHQUFXLEVBQUUsQ0FBQzs7SUE4S3BDLENBQUM7SUE1S0csd0JBQU0sR0FBTjtRQUVJLG1E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QUNHO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxnQkFBTSxDQUFDOzJDQUNLO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7b0RBQ1k7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDZTtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNjO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsQ0FBQzt3Q0FDTDtJQXZDUixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBNk8zQjtJQUFELGNBQUM7Q0E3T0QsQUE2T0MsQ0E3T29DLEVBQUUsQ0FBQyxTQUFTLEdBNk9oRDtrQkE3T29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNZ3IgZXh0ZW5kcyBjYy5Db21wb25lbnQgXG57XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmFja2dyb3VuZDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB3YWxsOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHVwcGVyQm91bmQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbG93ZXJCb3VuZDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoUGxheWVyKVxuICAgIHBsYXllcjogUGxheWVyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBsYXRmb3JtczogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXG4gICAgcGxhdGZvcm1QcmVmYWJzOiBjYy5QcmVmYWJbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc3RhcnRJY29uOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBhdXNlSWNvbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzY29yZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGlnaGVzdFNjb3JlTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGxpZmVCYXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLkF1ZGlvQ2xpcH0pXG4gICAgYmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBiYWNrZ3JvdW5kSW5pdFBvcyA9IC03MjtcblxuICAgIHByaXZhdGUgYmFja2dyb3VuZFJlc2V0UG9zID0gNTY7XG5cbiAgICBwcml2YXRlIHdhbGxJbml0UG9zID0gLTIzO1xuXG4gICAgcHJpdmF0ZSB3YWxsUmVzZXRQb3MgPSA5O1xuXG4gICAgcHJpdmF0ZSBwaHlzaWNNYW5hZ2VyOiBjYy5QaHlzaWNzTWFuYWdlciA9IG51bGw7XG5cbiAgICBwcml2YXRlIGxlZnREb3duOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHJpZ2h0RG93bjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgaGlnaGVzdFNjb3JlOiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBzY29yZUNvdW50O1xuXG4gICAgcHJpdmF0ZSBwYXVzZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBwbGF5ZXJMaWZlOiBudW1iZXIgPSAxMjtcblxuICAgIG9uTG9hZCgpXG4gICAge1xuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT0gVE9ETyA9PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8gMS4gRW5hYmxlIHBoeXNpY3MgbWFuYWdlciBcbiAgICAgICAgLy8gMi4gU2V0IHBoeXNpY3MgZ3Jhdml0eSB0byAoMCwgLTIwMClcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5ncmF2aXR5ID0gY2MudjIoMCwgLTIwMCk7XG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaWR4ID0gdGhpcy5yYW5kb21DaG9vc2VQbGF0Zm9ybSgpO1xuICAgICAgICAgICAgbGV0IHBsYXRmb3JtID0gY2MuaW5zdGFudGlhdGUodGhpcy5wbGF0Zm9ybVByZWZhYnNbaWR4XSk7XG4gICAgICAgICAgICBwbGF0Zm9ybS5wYXJlbnQgPSB0aGlzLnBsYXRmb3JtcztcbiAgICAgICAgICAgIHBsYXRmb3JtLnBvc2l0aW9uID0gY2MudjIoLTE0NCtNYXRoLnJhbmRvbSgpKjI4OCwgLTE5MCk7XG4gICAgICAgIH0sIDEuMik7XG5cbiAgICAgICAgdGhpcy51cGRhdGVIaWdoZXN0U2NvcmUoMCk7XG4gICAgICAgIHRoaXMuc2NvcmVDb3VudCA9ICgpPT57IHRoaXMudXBkYXRlU2NvcmUodGhpcy5zY29yZSsxKTsgfTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpXG4gICAge1xuICAgICAgICBpZih0aGlzLndhbGwueSA+PSB0aGlzLndhbGxSZXNldFBvcylcbiAgICAgICAgICAgIHRoaXMud2FsbC55ID0gdGhpcy53YWxsSW5pdFBvcztcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC55ICs9IDAuMjtcbiAgICAgICAgaWYodGhpcy5iYWNrZ3JvdW5kLnkgPj0gdGhpcy5iYWNrZ3JvdW5kUmVzZXRQb3MpXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmQueSA9IHRoaXMuYmFja2dyb3VuZEluaXRQb3M7XG4gICAgfVxuXG4gICAgb25LZXlEb3duKGV2ZW50KVxuICAgIHtcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmxlZnQ6XG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0RG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGxheWVyTW92ZSgtMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0RG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGxheWVyTW92ZSgxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lU3RhcnQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25LZXlVcChldmVudClcbiAgICB7XG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5sZWZ0OlxuICAgICAgICAgICAgICAgIHRoaXMubGVmdERvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnJpZ2h0RG93bilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGxheWVyTW92ZSgxKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXllck1vdmUoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0RG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMubGVmdERvd24pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXllck1vdmUoLTEpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGxheWVyTW92ZSgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJhbmRvbUNob29zZVBsYXRmb3JtKClcbiAgICB7XG4gICAgICAgIGxldCByYW5kID0gTWF0aC5yYW5kb20oKTtcblxuICAgICAgICAvLzA6IG5vcm1hbCwgMTogbmFpbHMsIDI6IGZha2UsIDM6IGNvbnZleW9yLCA0OiB0cmFtcG9saW5lXG4gICAgICAgIGxldCBwcm9iID0gWzYsIDIsIDIsIDMsIDJdO1xuICAgICAgICBsZXQgc3VtID0gcHJvYi5yZWR1Y2UoKGEsYik9PmErYik7XG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBwcm9iLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgcHJvYltpXSArPSBwcm9iW2ktMV07XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9iLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBwcm9iW2ldIC89IHN1bTtcbiAgICAgICAgICAgIGlmKHJhbmQgPD0gcHJvYltpXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUhpZ2hlc3RTY29yZShzY29yZTogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgdGhpcy5oaWdoZXN0U2NvcmUgPSBzY29yZTtcbiAgICAgICAgdGhpcy5oaWdoZXN0U2NvcmVOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKEFycmF5KDQpLmpvaW4oXCIwXCIpICsgdGhpcy5oaWdoZXN0U2NvcmUudG9TdHJpbmcoKSkuc2xpY2UoLTQpO1xuICAgIH1cblxuICAgIHVwZGF0ZVNjb3JlKHNjb3JlOiBudW1iZXIpXG4gICAge1xuICAgICAgICB0aGlzLnNjb3JlID0gc2NvcmU7XG4gICAgICAgIHRoaXMuc2NvcmVOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKEFycmF5KDQpLmpvaW4oXCIwXCIpICsgdGhpcy5zY29yZS50b1N0cmluZygpKS5zbGljZSgtNCk7XG4gICAgfVxuXG4gICAgdXBkYXRlTGlmZShudW06IG51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMucGxheWVyTGlmZSArPSBudW07XG4gICAgICAgIHRoaXMucGxheWVyTGlmZSA9IE1hdGgubWluKE1hdGgubWF4KHRoaXMucGxheWVyTGlmZSwgMCksIDEyKTtcbiAgICAgICAgdGhpcy5saWZlQmFyLndpZHRoID0gdGhpcy5wbGF5ZXJMaWZlICogOFxuICAgICAgICBpZih0aGlzLnBsYXllckxpZmUgPT0gMClcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICB9XG5cbiAgICBnYW1lU3RhcnQoKVxuICAgIHtcbiAgICAgICAgdGhpcy5zdGFydEljb24uYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgaWYodGhpcy5zY29yZSA+IHRoaXMuaGlnaGVzdFNjb3JlKVxuICAgICAgICB0aGlzLnVwZGF0ZUhpZ2hlc3RTY29yZSh0aGlzLnNjb3JlKTtcbiAgICAgICAgdGhpcy51cGRhdGVTY29yZSgxKTtcbiAgICAgICAgdGhpcy51cGRhdGVMaWZlKDEyKTtcblxuICAgICAgICBsZXQgcmVib3JuUG9zID0gY2MudjIoKTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybXMuY2hpbGRyZW4uZm9yRWFjaCgocGxhdGZvcm0pID0+IHtcbiAgICAgICAgICAgIHBsYXRmb3JtLmdldENvbXBvbmVudChcIlBsYXRmb3JtXCIpLnJlc2V0KCk7XG4gICAgICAgICAgICBpZihwbGF0Zm9ybS5uYW1lICE9ICdOYWlscycpXG4gICAgICAgICAgICAgICAgcmVib3JuUG9zID0gcGxhdGZvcm0ucG9zaXRpb24uYWRkKGNjLnYyKDAsIDUwKSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5wbGF5ZXIucmVib3JuKHJlYm9yblBvcyk7XG4gICAgICAgIHRoaXMucGxheWVyLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnNjb3JlQ291bnQsIDIpO1xuXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZ2FtZVBhdXNlKClcbiAgICB7XG4gICAgICAgIGlmKHRoaXMucGF1c2UpXG4gICAgICAgICAgICB0aGlzLnBhdXNlID0gZmFsc2U7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMucGF1c2UgPSB0cnVlO1xuICAgICAgICBpZih0aGlzLnBhdXNlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnBhdXNlSWNvbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcbiAgICAgICAgICAgICAgICBjYy5nYW1lLnBhdXNlKCk7XG4gICAgICAgICAgICB9LCAwLjEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wYXVzZUljb24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBjYy5nYW1lLnJlc3VtZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKVxuICAgIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuc2NvcmVDb3VudCk7XG5cbiAgICAgICAgdGhpcy5zdGFydEljb24uYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcbiAgICB9XG5cbiAgICBnYW1lRW5kKClcbiAgICB7XG4gICAgICAgIGNjLmdhbWUuZW5kKCk7XG4gICAgfVxufVxuIl19