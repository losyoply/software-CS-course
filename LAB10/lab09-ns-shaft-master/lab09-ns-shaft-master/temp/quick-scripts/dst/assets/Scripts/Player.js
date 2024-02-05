
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3cd2fFlgBpPIYNN/GI2S42+', 'Player');
// Scripts/Player.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.playerSpeed = 300;
        _this.playerStandSpeed = 50;
        _this.nailSound = null;
        _this.dieSound = null;
        _this.gameMgr = null;
        _this.idleFrame = null;
        _this.anim = null;
        _this.moveDir = 0;
        _this.ceilingPos = 155;
        _this.fallDown = false;
        _this.damageTime = 0;
        return _this;
    }
    Player.prototype.start = function () {
        this.idleFrame = this.getComponent(cc.Sprite).spriteFrame;
        this.anim = this.getComponent(cc.Animation);
    };
    Player.prototype.update = function (dt) {
        this.node.x += this.playerSpeed * this.moveDir * dt;
        this.node.scaleX = (this.moveDir >= 0) ? 1 : -1;
        this.node.y = (this.node.y >= this.ceilingPos) ? this.ceilingPos : this.node.y;
        if (this.getComponent(cc.RigidBody).linearVelocity.y != this.playerStandSpeed)
            this.fallDown = true;
        else
            this.fallDown = false;
        if (this.damageTime > 0)
            this.damageTime -= dt;
        else
            this.damageTime = 0;
        this.playerAnimation();
    };
    Player.prototype.reborn = function (rebornPos) {
        this.damageTime = 0;
        this.node.position = rebornPos;
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2();
    };
    Player.prototype.playerMove = function (moveDir) {
        this.moveDir = moveDir;
    };
    Player.prototype.playerRecover = function () {
        this.gameMgr.getComponent("GameMgr").updateLife(1);
    };
    Player.prototype.playerDamage = function () {
        this.damageTime = 1;
        cc.audioEngine.playEffect(this.nailSound, false);
        this.gameMgr.getComponent("GameMgr").updateLife(-5);
    };
    Player.prototype.playerDie = function () {
        cc.audioEngine.playEffect(this.dieSound, false);
        this.gameMgr.getComponent("GameMgr").updateLife(-12);
    };
    Player.prototype.playerAnimation = function () {
        if (this.fallDown) {
            if (this.damageTime > 0) {
                if (this.moveDir == 0 && !this.anim.getAnimationState("fall_front_hurt").isPlaying)
                    this.anim.play("fall_front_hurt");
                else if (this.moveDir != 0 && !this.anim.getAnimationState("fall_side_hurt").isPlaying)
                    this.anim.play("fall_side_hurt");
            }
            else {
                if (this.moveDir == 0 && !this.anim.getAnimationState("fall_front").isPlaying)
                    this.anim.play("fall_front");
                else if (this.moveDir != 0 && !this.anim.getAnimationState("fall_side").isPlaying)
                    this.anim.play("fall_side");
            }
        }
        else {
            if (this.damageTime > 0) {
                if (this.moveDir == 0 && !this.anim.getAnimationState("idle_hurt").isPlaying)
                    this.anim.play("idle_hurt");
                else if (this.moveDir != 0 && !this.anim.getAnimationState("walk_hurt").isPlaying)
                    this.anim.play("walk_hurt");
            }
            else {
                if (this.moveDir == 0) {
                    this.anim.stop();
                    this.getComponent(cc.Sprite).spriteFrame = this.idleFrame;
                }
                else if (!this.anim.getAnimationState("walk").isPlaying)
                    this.anim.play("walk");
            }
        }
    };
    Player.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.node.name == "lowerBound") {
            this.playerDie();
        }
        else if (otherCollider.node.name == "ceiling") {
            cc.log("player contact");
            this.playerDamage();
        }
    };
    __decorate([
        property()
    ], Player.prototype, "playerSpeed", void 0);
    __decorate([
        property()
    ], Player.prototype, "playerStandSpeed", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Player.prototype, "nailSound", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Player.prototype, "dieSound", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "gameMgr", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQXdJQztRQXJJRyxpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUcxQixzQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFHOUIsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFHL0IsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFHOUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUVoQixlQUFTLEdBQW1CLElBQUksQ0FBQztRQUVqQyxVQUFJLEdBQWlCLElBQUksQ0FBQztRQUUxQixhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRVosZ0JBQVUsR0FBVyxHQUFHLENBQUM7UUFFekIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixnQkFBVSxHQUFXLENBQUMsQ0FBQzs7SUE2R25DLENBQUM7SUEzR0csc0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQzFELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBTyxFQUFFO1FBRUwsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMs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RUFBRSxhQUFhO1FBRS9DLElBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksWUFBWSxFQUMxQztZQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNwQjthQUNJLElBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxFQUM1QztZQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkI7SUFFTCxDQUFDO0lBcElEO1FBREMsUUFBUSxFQUFFOytDQUNlO0lBRzFCO1FBREMsUUFBUSxFQUFFO29EQUNtQjtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7NkNBQ0M7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDOzRDQUNBO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ007SUFmUCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBd0kxQjtJQUFELGFBQUM7Q0F4SUQsQUF3SUMsQ0F4SW1DLEVBQUUsQ0FBQyxTQUFTLEdBd0kvQztrQkF4SW9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZU1nciBmcm9tIFwiLi9HYW1lTWdyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IFxue1xuICAgIEBwcm9wZXJ0eSgpXG4gICAgcGxheWVyU3BlZWQ6IG51bWJlciA9IDMwMDtcblxuICAgIEBwcm9wZXJ0eSgpXG4gICAgcGxheWVyU3RhbmRTcGVlZDogbnVtYmVyID0gNTA7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuQXVkaW9DbGlwfSlcbiAgICBuYWlsU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuQXVkaW9DbGlwfSlcbiAgICBkaWVTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdhbWVNZ3I6IGNjLk5vZGUgPSBudWxsO1xuICAgIFxuICAgIHByaXZhdGUgaWRsZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XG5cbiAgICBwcml2YXRlIG1vdmVEaXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBjZWlsaW5nUG9zOiBudW1iZXIgPSAxNTU7XG5cbiAgICBwcml2YXRlIGZhbGxEb3duOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGRhbWFnZVRpbWU6IG51bWJlciA9IDA7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMuaWRsZUZyYW1lID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpXG4gICAge1xuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnBsYXllclNwZWVkICogdGhpcy5tb3ZlRGlyICogZHQ7XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAodGhpcy5tb3ZlRGlyID49IDApID8gMSA6IC0xO1xuICAgICAgICB0aGlzLm5vZGUueSA9ICh0aGlzLm5vZGUueSA+PSB0aGlzLmNlaWxpbmdQb3MpID8gdGhpcy5jZWlsaW5nUG9zIDogdGhpcy5ub2RlLnk7XG4gICAgICAgIGlmKHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueSAhPSB0aGlzLnBsYXllclN0YW5kU3BlZWQpXG4gICAgICAgICAgICB0aGlzLmZhbGxEb3duID0gdHJ1ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5mYWxsRG93biA9IGZhbHNlO1xuXG4gICAgICAgIGlmKHRoaXMuZGFtYWdlVGltZSA+IDApXG4gICAgICAgICAgICB0aGlzLmRhbWFnZVRpbWUgLT0gZHQ7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuZGFtYWdlVGltZSA9IDA7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJBbmltYXRpb24oKTtcbiAgICB9XG5cbiAgICByZWJvcm4ocmVib3JuUG9zOiBjYy5WZWMyKVxuICAgIHtcbiAgICAgICAgdGhpcy5kYW1hZ2VUaW1lID0gMDtcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gcmVib3JuUG9zO1xuICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoKTtcbiAgICB9XG5cbiAgICBwbGF5ZXJNb3ZlKG1vdmVEaXI6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMubW92ZURpciA9IG1vdmVEaXI7XG4gICAgfVxuXG4gICAgcGxheWVyUmVjb3ZlcigpXG4gICAge1xuICAgICAgICB0aGlzLmdhbWVNZ3IuZ2V0Q29tcG9uZW50KFwiR2FtZU1nclwiKS51cGRhdGVMaWZlKDEpO1xuICAgIH1cblxuICAgIHBsYXllckRhbWFnZSgpXG4gICAge1xuICAgICAgICB0aGlzLmRhbWFnZVRpbWUgPSAxO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmFpbFNvdW5kLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuZ2FtZU1nci5nZXRDb21wb25lbnQoXCJHYW1lTWdyXCIpLnVwZGF0ZUxpZmUoLTUpO1xuICAgIH1cblxuICAgIHBsYXllckRpZSgpXG4gICAge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZGllU291bmQsZmFsc2UpO1xuICAgICAgICB0aGlzLmdhbWVNZ3IuZ2V0Q29tcG9uZW50KFwiR2FtZU1nclwiKS51cGRhdGVMaWZlKC0xMik7XG4gICAgfVxuXG4gICAgcGxheWVyQW5pbWF0aW9uKClcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuZmFsbERvd24pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuZGFtYWdlVGltZSA+IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5tb3ZlRGlyID09IDAgJiYgIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShcImZhbGxfZnJvbnRfaHVydFwiKS5pc1BsYXlpbmcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiZmFsbF9mcm9udF9odXJ0XCIpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5tb3ZlRGlyICE9IDAgJiYgIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShcImZhbGxfc2lkZV9odXJ0XCIpLmlzUGxheWluZylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJmYWxsX3NpZGVfaHVydFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLm1vdmVEaXIgPT0gMCAmJiAhdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKFwiZmFsbF9mcm9udFwiKS5pc1BsYXlpbmcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiZmFsbF9mcm9udFwiKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRoaXMubW92ZURpciAhPSAwICYmICF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoXCJmYWxsX3NpZGVcIikuaXNQbGF5aW5nKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImZhbGxfc2lkZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuZGFtYWdlVGltZSA+IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5tb3ZlRGlyID09IDAgJiYgIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShcImlkbGVfaHVydFwiKS5pc1BsYXlpbmcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiaWRsZV9odXJ0XCIpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5tb3ZlRGlyICE9IDAgJiYgIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShcIndhbGtfaHVydFwiKS5pc1BsYXlpbmcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwid2Fsa19odXJ0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMubW92ZURpciA9PSAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuaWRsZUZyYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKCF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoXCJ3YWxrXCIpLmlzUGxheWluZylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJ3YWxrXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKVxuICAgIHtcbiAgICAgICAgaWYob3RoZXJDb2xsaWRlci5ub2RlLm5hbWUgPT0gXCJsb3dlckJvdW5kXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyRGllKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihvdGhlckNvbGxpZGVyLm5vZGUubmFtZSA9PSBcImNlaWxpbmdcIilcbiAgICAgICAge1xuICAgICAgICAgICAgY2MubG9nKFwicGxheWVyIGNvbnRhY3RcIik7XG4gICAgICAgICAgICB0aGlzLnBsYXllckRhbWFnZSgpO1xuICAgICAgICB9XG5cbiAgICB9XG59XG4iXX0=