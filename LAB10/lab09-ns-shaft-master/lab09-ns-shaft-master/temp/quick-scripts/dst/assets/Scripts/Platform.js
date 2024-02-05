
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