
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
require('./assets/Scripts/GameMgr');
require('./assets/Scripts/Platform');
require('./assets/Scripts/Player');
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
                    var __filename = 'preview-scripts/assets/Scripts/Platform.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a3e6dBne/JI4rscTjPZ8hyF', 'Platform');
// Scripts/Platform.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Platform = /** @class */ (function (_super) {
    __extends(Platform, _super);
    function Platform() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.soundEffect = null;
        _this.isTouched = false;
        _this.anim = null;
        _this.animState = null;
        _this.highestPos = 118;
        _this.moveSpeed = 100;
        _this.springVelocity = 320;
        return _this;
        // ===================== TODO =====================
        // 1. In the physics lecture, we know that Cocos Creator
        //    provides four contact callbacks. You need to use callbacks to
        //    design different behaviors for different platforms.
        //
        //    Hints: The callbacks are "onBeginContact", "onEndContact", "onPreSolve", "onPostSolve".
        //
        // 2. There are five different types of platforms: "Normal", "Fake", "Nails", "Trampoline", "Conveyor".
        //    When player touches the platform, you need to play the corresponding
        //    sound effect for each platform. (The audioClip named "soundEffect")
        //    Note that the sound effect only plays on the first time the player touches the platform.
        //
        // 3. "Trampoline" and "Fake" need to play animation when the player touches them.
        //    TAs have finished the animation functions, "playAnim" & "getAnimState", for you.
        //    You can directly call "playAnim" to play animation, and call "getAnimState" to get the current animation state.
        //    You have to play animations at the proper timing.
        //
        // 4. For "Trampoline", you have to do "spring effect" whenever the player touches it
        //
        //    Hints: Change "linearVelocity" of the player's rigidbody to make him jump.
        //    The jump value is "springVelocity".
        //
        // 5. For "Conveyor", you have to do "delivery effect" when player is in contact with it.
        //
        //    Hints: Change "linearVelocity" of the player's rigidbody to make him move.
        //    The move value is "moveSpeed".
        //
        // 6. For "Fake", you need to make the player fall 0.2 seconds after he touches the platform.
        //
        // 7. All the platforms have only "upside" collision. You have to prevent the collisions from the other directions.
        //
        //    Hints: You can use "contact.getWorldManifold().normal" to judge collision direction.
        //
        //
        // 8. When player touches "Nails" platform, you need to call the function "playerDamage" in "Player.ts" to update player health,
        //    or call the function "playerRecover" in "Player.ts" when player touches other platforms.
        //
        // 9. When platforms touch the node named "upperBound", you need to call the function "platformDestroy" to destroy the platform.
        // ================================================
    }
    Platform.prototype.start = function () {
        this.anim = this.getComponent(cc.Animation);
        if (this.node.name == "Conveyor") {
            this.node.scaleX = Math.random() >= 0.5 ? 1 : -1;
            this.moveSpeed *= this.node.scaleX;
        }
    };
    Platform.prototype.reset = function () {
        this.isTouched = false;
    };
    Platform.prototype.update = function (dt) {
        if (this.node.y - this.highestPos >= 0 &&
            this.node.y - this.highestPos < 100)
            this.getComponent(cc.PhysicsBoxCollider).enabled = false;
        else
            this.getComponent(cc.PhysicsBoxCollider).enabled = true;
    };
    Platform.prototype.playAnim = function () {
        if (this.anim)
            this.animState = this.anim.play();
    };
    Platform.prototype.getAnimState = function () {
        if (this.animState)
            return this.animState;
    };
    Platform.prototype.platformDestroy = function () {
        cc.log(this.node.name + " Platform destory.");
        this.node.destroy();
    };
    __decorate([
        property({ type: cc.AudioClip })
    ], Platform.prototype, "soundEffect", void 0);
    Platform = __decorate([
        ccclass
    ], Platform);
    return Platform;
}(cc.Component));
exports.default = Platform;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxhdGZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMEZDO1FBeEZDLGlCQUFXLEdBQWlCLElBQUksQ0FBQztRQUV2QixlQUFTLEdBQVksS0FBSyxDQUFDO1FBRTdCLFVBQUksR0FBaUIsSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBc0IsSUFBSSxDQUFDO1FBRXBDLGdCQUFVLEdBQVcsR0FBRyxDQUFDO1FBRXpCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFFeEIsb0JBQWMsR0FBVyxHQUFHLENBQUM7O1FBcUNyQyxtREFBbUQ7UUFDbkQsd0RBQXdEO1FBQ3hELG1FQUFtRTtRQUNuRSx5REFBeUQ7UUFDekQsRUFBRTtRQUNGLDZGQUE2RjtRQUM3RixFQUFFO1FBQ0YsdUdBQXVHO1FBQ3ZHLDBFQUEwRTtRQUMxRSx5RUFBeUU7UUFDekUsOEZBQThGO1FBQzlGLEVBQUU7UUFDRixrRkFBa0Y7UUFDbEYsc0ZBQXNGO1FBQ3RGLHFIQUFxSDtRQUNySCx1REFBdUQ7UUFDdkQsRUFBRTtRQUNGLHFGQUFxRjtRQUNyRixFQUFFO1FBQ0YsZ0ZBQWdGO1FBQ2hGLHlDQUF5QztRQUN6QyxFQUFFO1FBQ0YseUZBQXlGO1FBQ3pGLEVBQUU7UUFDRixnRkFBZ0Y7UUFDaEYsb0NBQW9DO1FBQ3BDLEVBQUU7UUFDRiw2RkFBNkY7UUFDN0YsRUFBRTtRQUNGLG1IQUFtSDtRQUNuSCxFQUFFO1FBQ0YsMEZBQTBGO1FBQzFGLEVBQUU7UUFDRixFQUFFO1FBQ0YsZ0lBQWdJO1FBQ2hJLDhGQUE4RjtRQUM5RixFQUFFO1FBQ0YsZ0lBQWdJO1FBQ2hJLG1EQUFtRDtJQUNyRCxDQUFDO0lBMUVDLHdCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTVDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksVUFBVSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQztJQUNILENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsSUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUM7WUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHO1lBRW5DLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzs7WUFDdEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQy9ELENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDNUMsQ0FBQztJQUVELGtDQUFlLEdBQWY7UUFDRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFvQixDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBL0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztpREFDQTtJQUZkLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwRjVCO0lBQUQsZUFBQztDQTFGRCxBQTBGQyxDQTFGcUMsRUFBRSxDQUFDLFNBQVMsR0EwRmpEO2tCQTFGb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICBzb3VuZEVmZmVjdDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICBwcm90ZWN0ZWQgaXNUb3VjaGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xuXG4gIHByaXZhdGUgYW5pbVN0YXRlOiBjYy5BbmltYXRpb25TdGF0ZSA9IG51bGw7XG5cbiAgcHJpdmF0ZSBoaWdoZXN0UG9zOiBudW1iZXIgPSAxMTg7XG5cbiAgcHJpdmF0ZSBtb3ZlU3BlZWQ6IG51bWJlciA9IDEwMDtcblxuICBwcml2YXRlIHNwcmluZ1ZlbG9jaXR5OiBudW1iZXIgPSAzMjA7XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcblxuICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcIkNvbnZleW9yXCIpIHtcbiAgICAgIHRoaXMubm9kZS5zY2FsZVggPSBNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMTtcbiAgICAgIHRoaXMubW92ZVNwZWVkICo9IHRoaXMubm9kZS5zY2FsZVg7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMubm9kZS55IC0gdGhpcy5oaWdoZXN0UG9zID49IDAgJiZcbiAgICAgIHRoaXMubm9kZS55IC0gdGhpcy5oaWdoZXN0UG9zIDwgMTAwXG4gICAgKVxuICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XG4gICAgZWxzZSB0aGlzLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpLmVuYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgcGxheUFuaW0oKSB7XG4gICAgaWYgKHRoaXMuYW5pbSkgdGhpcy5hbmltU3RhdGUgPSB0aGlzLmFuaW0ucGxheSgpO1xuICB9XG5cbiAgZ2V0QW5pbVN0YXRlKCkge1xuICAgIGlmICh0aGlzLmFuaW1TdGF0ZSkgcmV0dXJuIHRoaXMuYW5pbVN0YXRlO1xuICB9XG5cbiAgcGxhdGZvcm1EZXN0cm95KCkge1xuICAgIGNjLmxvZyh0aGlzLm5vZGUubmFtZSArIFwiIFBsYXRmb3JtIGRlc3RvcnkuXCIpO1xuICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT0gVE9ETyA9PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gMS4gSW4gdGhlIHBoeXNpY3MgbGVjdHVyZSwgd2Uga25vdyB0aGF0IENvY29zIENyZWF0b3JcbiAgLy8gICAgcHJvdmlkZXMgZm91ciBjb250YWN0IGNhbGxiYWNrcy4gWW91IG5lZWQgdG8gdXNlIGNhbGxiYWNrcyB0b1xuICAvLyAgICBkZXNpZ24gZGlmZmVyZW50IGJlaGF2aW9ycyBmb3IgZGlmZmVyZW50IHBsYXRmb3Jtcy5cbiAgLy9cbiAgLy8gICAgSGludHM6IFRoZSBjYWxsYmFja3MgYXJlIFwib25CZWdpbkNvbnRhY3RcIiwgXCJvbkVuZENvbnRhY3RcIiwgXCJvblByZVNvbHZlXCIsIFwib25Qb3N0U29sdmVcIi5cbiAgLy9cbiAgLy8gMi4gVGhlcmUgYXJlIGZpdmUgZGlmZmVyZW50IHR5cGVzIG9mIHBsYXRmb3JtczogXCJOb3JtYWxcIiwgXCJGYWtlXCIsIFwiTmFpbHNcIiwgXCJUcmFtcG9saW5lXCIsIFwiQ29udmV5b3JcIi5cbiAgLy8gICAgV2hlbiBwbGF5ZXIgdG91Y2hlcyB0aGUgcGxhdGZvcm0sIHlvdSBuZWVkIHRvIHBsYXkgdGhlIGNvcnJlc3BvbmRpbmdcbiAgLy8gICAgc291bmQgZWZmZWN0IGZvciBlYWNoIHBsYXRmb3JtLiAoVGhlIGF1ZGlvQ2xpcCBuYW1lZCBcInNvdW5kRWZmZWN0XCIpXG4gIC8vICAgIE5vdGUgdGhhdCB0aGUgc291bmQgZWZmZWN0IG9ubHkgcGxheXMgb24gdGhlIGZpcnN0IHRpbWUgdGhlIHBsYXllciB0b3VjaGVzIHRoZSBwbGF0Zm9ybS5cbiAgLy9cbiAgLy8gMy4gXCJUcmFtcG9saW5lXCIgYW5kIFwiRmFrZVwiIG5lZWQgdG8gcGxheSBhbmltYXRpb24gd2hlbiB0aGUgcGxheWVyIHRvdWNoZXMgdGhlbS5cbiAgLy8gICAgVEFzIGhhdmUgZmluaXNoZWQgdGhlIGFuaW1hdGlvbiBmdW5jdGlvbnMsIFwicGxheUFuaW1cIiAmIFwiZ2V0QW5pbVN0YXRlXCIsIGZvciB5b3UuXG4gIC8vICAgIFlvdSBjYW4gZGlyZWN0bHkgY2FsbCBcInBsYXlBbmltXCIgdG8gcGxheSBhbmltYXRpb24sIGFuZCBjYWxsIFwiZ2V0QW5pbVN0YXRlXCIgdG8gZ2V0IHRoZSBjdXJyZW50IGFuaW1hdGlvbiBzdGF0ZS5cbiAgLy8gICAgWW91IGhhdmUgdG8gcGxheSBhbmltYXRpb25zIGF0IHRoZSBwcm9wZXIgdGltaW5nLlxuICAvL1xuICAvLyA0LiBGb3IgXCJUcmFtcG9saW5lXCIsIHlvdSBoYXZlIHRvIGRvIFwic3ByaW5nIGVmZmVjdFwiIHdoZW5ldmVyIHRoZSBwbGF5ZXIgdG91Y2hlcyBpdFxuICAvL1xuICAvLyAgICBIaW50czogQ2hhbmdlIFwibGluZWFyVmVsb2NpdHlcIiBvZiB0aGUgcGxheWVyJ3MgcmlnaWRib2R5IHRvIG1ha2UgaGltIGp1bXAuXG4gIC8vICAgIFRoZSBqdW1wIHZhbHVlIGlzIFwic3ByaW5nVmVsb2NpdHlcIi5cbiAgLy9cbiAgLy8gNS4gRm9yIFwiQ29udmV5b3JcIiwgeW91IGhhdmUgdG8gZG8gXCJkZWxpdmVyeSBlZmZlY3RcIiB3aGVuIHBsYXllciBpcyBpbiBjb250YWN0IHdpdGggaXQuXG4gIC8vXG4gIC8vICAgIEhpbnRzOiBDaGFuZ2UgXCJsaW5lYXJWZWxvY2l0eVwiIG9mIHRoZSBwbGF5ZXIncyByaWdpZGJvZHkgdG8gbWFrZSBoaW0gbW92ZS5cbiAgLy8gICAgVGhlIG1vdmUgdmFsdWUgaXMgXCJtb3ZlU3BlZWRcIi5cbiAgLy9cbiAgLy8gNi4gRm9yIFwiRmFrZVwiLCB5b3UgbmVlZCB0byBtYWtlIHRoZSBwbGF5ZXIgZmFsbCAwLjIgc2Vjb25kcyBhZnRlciBoZSB0b3VjaGVzIHRoZSBwbGF0Zm9ybS5cbiAgLy9cbiAgLy8gNy4gQWxsIHRoZSBwbGF0Zm9ybXMgaGF2ZSBvbmx5IFwidXBzaWRlXCIgY29sbGlzaW9uLiBZb3UgaGF2ZSB0byBwcmV2ZW50IHRoZSBjb2xsaXNpb25zIGZyb20gdGhlIG90aGVyIGRpcmVjdGlvbnMuXG4gIC8vXG4gIC8vICAgIEhpbnRzOiBZb3UgY2FuIHVzZSBcImNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbFwiIHRvIGp1ZGdlIGNvbGxpc2lvbiBkaXJlY3Rpb24uXG4gIC8vXG4gIC8vXG4gIC8vIDguIFdoZW4gcGxheWVyIHRvdWNoZXMgXCJOYWlsc1wiIHBsYXRmb3JtLCB5b3UgbmVlZCB0byBjYWxsIHRoZSBmdW5jdGlvbiBcInBsYXllckRhbWFnZVwiIGluIFwiUGxheWVyLnRzXCIgdG8gdXBkYXRlIHBsYXllciBoZWFsdGgsXG4gIC8vICAgIG9yIGNhbGwgdGhlIGZ1bmN0aW9uIFwicGxheWVyUmVjb3ZlclwiIGluIFwiUGxheWVyLnRzXCIgd2hlbiBwbGF5ZXIgdG91Y2hlcyBvdGhlciBwbGF0Zm9ybXMuXG4gIC8vXG4gIC8vIDkuIFdoZW4gcGxhdGZvcm1zIHRvdWNoIHRoZSBub2RlIG5hbWVkIFwidXBwZXJCb3VuZFwiLCB5b3UgbmVlZCB0byBjYWxsIHRoZSBmdW5jdGlvbiBcInBsYXRmb3JtRGVzdHJveVwiIHRvIGRlc3Ryb3kgdGhlIHBsYXRmb3JtLlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbn1cbiJdfQ==
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
cc._RF.push(module, '847275V/2FO64G/UmoYCMwh', 'use_reversed_rotateTo');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQXdJQztRQXJJRyxpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUcxQixzQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFHOUIsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFHL0IsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFHOUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUVoQixlQUFTLEdBQW1CLElBQUksQ0FBQztRQUVqQyxVQUFJLEdBQWlCLElBQUksQ0FBQztRQUUxQixhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRVosZ0JBQVUsR0FBVyxHQUFHLENBQUM7UUFFekIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixnQkFBVSxHQUFXLENBQUMsQ0FBQzs7SUE2R25DLENBQUM7SUEzR0csc0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQzFELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBTyxFQUFFO1FBRUwsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQy9FLElBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3hFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOztZQUVyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUUxQixJQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQztZQUNsQixJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQzs7WUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFFeEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQU8sU0FBa0I7UUFFckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDN0QsQ0FBQztJQUVELDJCQUFVLEdBQVYsVUFBVyxPQUFlO1FBRXRCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRCw4QkFBYSxHQUFiO1FBRUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCw2QkFBWSxHQUFaO1FBRUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsMEJBQVMsR0FBVDtRQUVJLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELGdDQUFlLEdBQWY7UUFFSSxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQ2hCO1lBQ0ksSUFBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsRUFDdEI7Z0JBQ0ksSUFBRyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxTQUFTO29CQUM3RSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO3FCQUNqQyxJQUFHLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFNBQVM7b0JBQ2pGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDeEM7aUJBRUQ7Z0JBQ0ksSUFBRyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUztvQkFDeEUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7cUJBQzVCLElBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVM7b0JBQzVFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ25DO1NBQ0o7YUFFRDtZQUNJLElBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQ3RCO2dCQUNJLElBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVM7b0JBQ3ZFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3FCQUMzQixJQUFHLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTO29CQUM1RSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNuQztpQkFFRDtnQkFDSSxJQUFHLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUNwQjtvQkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztpQkFDN0Q7cUJBQ0ksSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUztvQkFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDOUI7U0FDSjtJQUNMLENBQUM7SUFFRCwrQkFBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhO1FBRS9DLElBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksWUFBWSxFQUMxQztZQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNwQjthQUNJLElBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxFQUM1QztZQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkI7SUFFTCxDQUFDO0lBcElEO1FBREMsUUFBUSxFQUFFOytDQUNlO0lBRzFCO1FBREMsUUFBUSxFQUFFO29EQUNtQjtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUM7NkNBQ0M7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLFNBQVMsRUFBQyxDQUFDOzRDQUNBO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ007SUFmUCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBd0kxQjtJQUFELGFBQUM7Q0F4SUQsQUF3SUMsQ0F4SW1DLEVBQUUsQ0FBQyxTQUFTLEdBd0kvQztrQkF4SW9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZU1nciBmcm9tIFwiLi9HYW1lTWdyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IFxue1xuICAgIEBwcm9wZXJ0eSgpXG4gICAgcGxheWVyU3BlZWQ6IG51bWJlciA9IDMwMDtcblxuICAgIEBwcm9wZXJ0eSgpXG4gICAgcGxheWVyU3RhbmRTcGVlZDogbnVtYmVyID0gNTA7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuQXVkaW9DbGlwfSlcbiAgICBuYWlsU291bmQ6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuQXVkaW9DbGlwfSlcbiAgICBkaWVTb3VuZDogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdhbWVNZ3I6IGNjLk5vZGUgPSBudWxsO1xuICAgIFxuICAgIHByaXZhdGUgaWRsZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGFuaW06IGNjLkFuaW1hdGlvbiA9IG51bGw7XG5cbiAgICBwcml2YXRlIG1vdmVEaXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBjZWlsaW5nUG9zOiBudW1iZXIgPSAxNTU7XG5cbiAgICBwcml2YXRlIGZhbGxEb3duOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGRhbWFnZVRpbWU6IG51bWJlciA9IDA7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMuaWRsZUZyYW1lID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcbiAgICAgICAgdGhpcy5hbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpXG4gICAge1xuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnBsYXllclNwZWVkICogdGhpcy5tb3ZlRGlyICogZHQ7XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAodGhpcy5tb3ZlRGlyID49IDApID8gMSA6IC0xO1xuICAgICAgICB0aGlzLm5vZGUueSA9ICh0aGlzLm5vZGUueSA+PSB0aGlzLmNlaWxpbmdQb3MpID8gdGhpcy5jZWlsaW5nUG9zIDogdGhpcy5ub2RlLnk7XG4gICAgICAgIGlmKHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueSAhPSB0aGlzLnBsYXllclN0YW5kU3BlZWQpXG4gICAgICAgICAgICB0aGlzLmZhbGxEb3duID0gdHJ1ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5mYWxsRG93biA9IGZhbHNlO1xuXG4gICAgICAgIGlmKHRoaXMuZGFtYWdlVGltZSA+IDApXG4gICAgICAgICAgICB0aGlzLmRhbWFnZVRpbWUgLT0gZHQ7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuZGFtYWdlVGltZSA9IDA7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJBbmltYXRpb24oKTtcbiAgICB9XG5cbiAgICByZWJvcm4ocmVib3JuUG9zOiBjYy5WZWMyKVxuICAgIHtcbiAgICAgICAgdGhpcy5kYW1hZ2VUaW1lID0gMDtcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gcmVib3JuUG9zO1xuICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoKTtcbiAgICB9XG5cbiAgICBwbGF5ZXJNb3ZlKG1vdmVEaXI6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMubW92ZURpciA9IG1vdmVEaXI7XG4gICAgfVxuXG4gICAgcGxheWVyUmVjb3ZlcigpXG4gICAge1xuICAgICAgICB0aGlzLmdhbWVNZ3IuZ2V0Q29tcG9uZW50KFwiR2FtZU1nclwiKS51cGRhdGVMaWZlKDEpO1xuICAgIH1cblxuICAgIHBsYXllckRhbWFnZSgpXG4gICAge1xuICAgICAgICB0aGlzLmRhbWFnZVRpbWUgPSAxO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMubmFpbFNvdW5kLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuZ2FtZU1nci5nZXRDb21wb25lbnQoXCJHYW1lTWdyXCIpLnVwZGF0ZUxpZmUoLTUpO1xuICAgIH1cblxuICAgIHBsYXllckRpZSgpXG4gICAge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZGllU291bmQsZmFsc2UpO1xuICAgICAgICB0aGlzLmdhbWVNZ3IuZ2V0Q29tcG9uZW50KFwiR2FtZU1nclwiKS51cGRhdGVMaWZlKC0xMik7XG4gICAgfVxuXG4gICAgcGxheWVyQW5pbWF0aW9uKClcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuZmFsbERvd24pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuZGFtYWdlVGltZSA+IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5tb3ZlRGlyID09IDAgJiYgIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShcImZhbGxfZnJvbnRfaHVydFwiKS5pc1BsYXlpbmcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiZmFsbF9mcm9udF9odXJ0XCIpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5tb3ZlRGlyICE9IDAgJiYgIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShcImZhbGxfc2lkZV9odXJ0XCIpLmlzUGxheWluZylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJmYWxsX3NpZGVfaHVydFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLm1vdmVEaXIgPT0gMCAmJiAhdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKFwiZmFsbF9mcm9udFwiKS5pc1BsYXlpbmcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiZmFsbF9mcm9udFwiKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRoaXMubW92ZURpciAhPSAwICYmICF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoXCJmYWxsX3NpZGVcIikuaXNQbGF5aW5nKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW0ucGxheShcImZhbGxfc2lkZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuZGFtYWdlVGltZSA+IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5tb3ZlRGlyID09IDAgJiYgIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShcImlkbGVfaHVydFwiKS5pc1BsYXlpbmcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwiaWRsZV9odXJ0XCIpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5tb3ZlRGlyICE9IDAgJiYgIXRoaXMuYW5pbS5nZXRBbmltYXRpb25TdGF0ZShcIndhbGtfaHVydFwiKS5pc1BsYXlpbmcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KFwid2Fsa19odXJ0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMubW92ZURpciA9PSAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuaWRsZUZyYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKCF0aGlzLmFuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoXCJ3YWxrXCIpLmlzUGxheWluZylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJ3YWxrXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKVxuICAgIHtcbiAgICAgICAgaWYob3RoZXJDb2xsaWRlci5ub2RlLm5hbWUgPT0gXCJsb3dlckJvdW5kXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyRGllKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihvdGhlckNvbGxpZGVyLm5vZGUubmFtZSA9PSBcImNlaWxpbmdcIilcbiAgICAgICAge1xuICAgICAgICAgICAgY2MubG9nKFwicGxheWVyIGNvbnRhY3RcIik7XG4gICAgICAgICAgICB0aGlzLnBsYXllckRhbWFnZSgpO1xuICAgICAgICB9XG5cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
