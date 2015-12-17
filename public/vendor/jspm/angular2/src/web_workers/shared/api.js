'use strict';var lang_1 = require("angular2/src/facade/lang");
var di_1 = require("angular2/src/core/di");
exports.ON_WEB_WORKER = lang_1.CONST_EXPR(new di_1.OpaqueToken('WebWorker.onWebWorker'));
var WebWorkerElementRef = (function () {
    function WebWorkerElementRef(renderView, boundElementIndex) {
        this.renderView = renderView;
        this.boundElementIndex = boundElementIndex;
    }
    return WebWorkerElementRef;
})();
exports.WebWorkerElementRef = WebWorkerElementRef;
var WebWorkerTemplateCmd = (function () {
    function WebWorkerTemplateCmd() {
    }
    WebWorkerTemplateCmd.prototype.visit = function (visitor, context) { return null; };
    return WebWorkerTemplateCmd;
})();
exports.WebWorkerTemplateCmd = WebWorkerTemplateCmd;
var WebWorkerTextCmd = (function () {
    function WebWorkerTextCmd(isBound, ngContentIndex, value) {
        this.isBound = isBound;
        this.ngContentIndex = ngContentIndex;
        this.value = value;
    }
    WebWorkerTextCmd.prototype.visit = function (visitor, context) {
        return visitor.visitText(this, context);
    };
    return WebWorkerTextCmd;
})();
exports.WebWorkerTextCmd = WebWorkerTextCmd;
var WebWorkerNgContentCmd = (function () {
    function WebWorkerNgContentCmd(index, ngContentIndex) {
        this.index = index;
        this.ngContentIndex = ngContentIndex;
    }
    WebWorkerNgContentCmd.prototype.visit = function (visitor, context) {
        return visitor.visitNgContent(this, context);
    };
    return WebWorkerNgContentCmd;
})();
exports.WebWorkerNgContentCmd = WebWorkerNgContentCmd;
var WebWorkerBeginElementCmd = (function () {
    function WebWorkerBeginElementCmd(isBound, ngContentIndex, name, attrNameAndValues, eventTargetAndNames) {
        this.isBound = isBound;
        this.ngContentIndex = ngContentIndex;
        this.name = name;
        this.attrNameAndValues = attrNameAndValues;
        this.eventTargetAndNames = eventTargetAndNames;
    }
    WebWorkerBeginElementCmd.prototype.visit = function (visitor, context) {
        return visitor.visitBeginElement(this, context);
    };
    return WebWorkerBeginElementCmd;
})();
exports.WebWorkerBeginElementCmd = WebWorkerBeginElementCmd;
var WebWorkerEndElementCmd = (function () {
    function WebWorkerEndElementCmd() {
    }
    WebWorkerEndElementCmd.prototype.visit = function (visitor, context) {
        return visitor.visitEndElement(context);
    };
    return WebWorkerEndElementCmd;
})();
exports.WebWorkerEndElementCmd = WebWorkerEndElementCmd;
var WebWorkerBeginComponentCmd = (function () {
    function WebWorkerBeginComponentCmd(isBound, ngContentIndex, name, attrNameAndValues, eventTargetAndNames, templateId) {
        this.isBound = isBound;
        this.ngContentIndex = ngContentIndex;
        this.name = name;
        this.attrNameAndValues = attrNameAndValues;
        this.eventTargetAndNames = eventTargetAndNames;
        this.templateId = templateId;
    }
    WebWorkerBeginComponentCmd.prototype.visit = function (visitor, context) {
        return visitor.visitBeginComponent(this, context);
    };
    return WebWorkerBeginComponentCmd;
})();
exports.WebWorkerBeginComponentCmd = WebWorkerBeginComponentCmd;
var WebWorkerEndComponentCmd = (function () {
    function WebWorkerEndComponentCmd() {
    }
    WebWorkerEndComponentCmd.prototype.visit = function (visitor, context) {
        return visitor.visitEndComponent(context);
    };
    return WebWorkerEndComponentCmd;
})();
exports.WebWorkerEndComponentCmd = WebWorkerEndComponentCmd;
var WebWorkerEmbeddedTemplateCmd = (function () {
    function WebWorkerEmbeddedTemplateCmd(isBound, ngContentIndex, name, attrNameAndValues, eventTargetAndNames, isMerged, children) {
        this.isBound = isBound;
        this.ngContentIndex = ngContentIndex;
        this.name = name;
        this.attrNameAndValues = attrNameAndValues;
        this.eventTargetAndNames = eventTargetAndNames;
        this.isMerged = isMerged;
        this.children = children;
    }
    WebWorkerEmbeddedTemplateCmd.prototype.visit = function (visitor, context) {
        return visitor.visitEmbeddedTemplate(this, context);
    };
    return WebWorkerEmbeddedTemplateCmd;
})();
exports.WebWorkerEmbeddedTemplateCmd = WebWorkerEmbeddedTemplateCmd;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjIvc3JjL3dlYl93b3JrZXJzL3NoYXJlZC9hcGkudHMiXSwibmFtZXMiOlsiV2ViV29ya2VyRWxlbWVudFJlZiIsIldlYldvcmtlckVsZW1lbnRSZWYuY29uc3RydWN0b3IiLCJXZWJXb3JrZXJUZW1wbGF0ZUNtZCIsIldlYldvcmtlclRlbXBsYXRlQ21kLmNvbnN0cnVjdG9yIiwiV2ViV29ya2VyVGVtcGxhdGVDbWQudmlzaXQiLCJXZWJXb3JrZXJUZXh0Q21kIiwiV2ViV29ya2VyVGV4dENtZC5jb25zdHJ1Y3RvciIsIldlYldvcmtlclRleHRDbWQudmlzaXQiLCJXZWJXb3JrZXJOZ0NvbnRlbnRDbWQiLCJXZWJXb3JrZXJOZ0NvbnRlbnRDbWQuY29uc3RydWN0b3IiLCJXZWJXb3JrZXJOZ0NvbnRlbnRDbWQudmlzaXQiLCJXZWJXb3JrZXJCZWdpbkVsZW1lbnRDbWQiLCJXZWJXb3JrZXJCZWdpbkVsZW1lbnRDbWQuY29uc3RydWN0b3IiLCJXZWJXb3JrZXJCZWdpbkVsZW1lbnRDbWQudmlzaXQiLCJXZWJXb3JrZXJFbmRFbGVtZW50Q21kIiwiV2ViV29ya2VyRW5kRWxlbWVudENtZC5jb25zdHJ1Y3RvciIsIldlYldvcmtlckVuZEVsZW1lbnRDbWQudmlzaXQiLCJXZWJXb3JrZXJCZWdpbkNvbXBvbmVudENtZCIsIldlYldvcmtlckJlZ2luQ29tcG9uZW50Q21kLmNvbnN0cnVjdG9yIiwiV2ViV29ya2VyQmVnaW5Db21wb25lbnRDbWQudmlzaXQiLCJXZWJXb3JrZXJFbmRDb21wb25lbnRDbWQiLCJXZWJXb3JrZXJFbmRDb21wb25lbnRDbWQuY29uc3RydWN0b3IiLCJXZWJXb3JrZXJFbmRDb21wb25lbnRDbWQudmlzaXQiLCJXZWJXb3JrZXJFbWJlZGRlZFRlbXBsYXRlQ21kIiwiV2ViV29ya2VyRW1iZWRkZWRUZW1wbGF0ZUNtZC5jb25zdHJ1Y3RvciIsIldlYldvcmtlckVtYmVk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QSxzQkFBaUJBLEdBQWpCQSxpQkFBaUJBLENBQVVBO1FBQVNBLHdCQUFtQkEsR0FBbkJBLG1CQUFtQkEsQ0FBVUE7UUFDakVBLGFBQVFBLEdBQVJBLFFBQVFBLENBQVNBO1FBQVNBLGFBQVFBLEdBQVJBLFFBQVFBLENBQXFCQTtJQUFHQSxDQUFDQTtJQUM5RUQsNENBQUtBLEdBQUxBLFVBQU1BLE9BQTZCQSxFQUFFQSxPQUFZQTtRQUMvQ0UsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EscUJBQXFCQSxDQUFDQSxJQUFJQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtJQUN0REEsQ0FBQ0E7SUFDSEYsbUNBQUNBO0FBQURBLENBQUNBLEFBUEQsSUFPQztBQVBZLG9DQUE0QiwrQkFPeEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q09OU1RfRVhQUn0gZnJvbSBcImFuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZ1wiO1xuaW1wb3J0IHtPcGFxdWVUb2tlbn0gZnJvbSBcImFuZ3VsYXIyL3NyYy9jb3JlL2RpXCI7XG5pbXBvcnQge1xuICBSZW5kZXJFbGVtZW50UmVmLFxuICBSZW5kZXJWaWV3UmVmLFxuICBSZW5kZXJUZW1wbGF0ZUNtZCxcbiAgUmVuZGVyVGV4dENtZCxcbiAgUmVuZGVyTmdDb250ZW50Q21kLFxuICBSZW5kZXJCZWdpbkVsZW1lbnRDbWQsXG4gIFJlbmRlckJlZ2luQ29tcG9uZW50Q21kLFxuICBSZW5kZXJFbWJlZGRlZFRlbXBsYXRlQ21kLFxuICBSZW5kZXJDb21tYW5kVmlzaXRvclxufSBmcm9tIFwiYW5ndWxhcjIvc3JjL2NvcmUvcmVuZGVyL2FwaVwiO1xuXG5leHBvcnQgY29uc3QgT05fV0VCX1dPUktFUiA9IENPTlNUX0VYUFIobmV3IE9wYXF1ZVRva2VuKCdXZWJXb3JrZXIub25XZWJXb3JrZXInKSk7XG5cbmV4cG9ydCBjbGFzcyBXZWJXb3JrZXJFbGVtZW50UmVmIGltcGxlbWVudHMgUmVuZGVyRWxlbWVudFJlZiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZW5kZXJWaWV3OiBSZW5kZXJWaWV3UmVmLCBwdWJsaWMgYm91bmRFbGVtZW50SW5kZXg6IG51bWJlcikge31cbn1cblxuZXhwb3J0IGNsYXNzIFdlYldvcmtlclRlbXBsYXRlQ21kIGltcGxlbWVudHMgUmVuZGVyVGVtcGxhdGVDbWQge1xuICB2aXNpdCh2aXNpdG9yOiBSZW5kZXJDb21tYW5kVmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHsgcmV0dXJuIG51bGw7IH1cbn1cblxuZXhwb3J0IGNsYXNzIFdlYldvcmtlclRleHRDbWQgaW1wbGVtZW50cyBSZW5kZXJUZXh0Q21kIHtcbiAgY29uc3RydWN0b3IocHVibGljIGlzQm91bmQ6IGJvb2xlYW4sIHB1YmxpYyBuZ0NvbnRlbnRJbmRleDogbnVtYmVyLCBwdWJsaWMgdmFsdWU6IHN0cmluZykge31cbiAgdmlzaXQodmlzaXRvcjogUmVuZGVyQ29tbWFuZFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRUZXh0KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXZWJXb3JrZXJOZ0NvbnRlbnRDbWQgaW1wbGVtZW50cyBSZW5kZXJOZ0NvbnRlbnRDbWQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5kZXg6IG51bWJlciwgcHVibGljIG5nQ29udGVudEluZGV4OiBudW1iZXIpIHt9XG4gIHZpc2l0KHZpc2l0b3I6IFJlbmRlckNvbW1hbmRWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0TmdDb250ZW50KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXZWJXb3JrZXJCZWdpbkVsZW1lbnRDbWQgaW1wbGVtZW50cyBSZW5kZXJCZWdpbkVsZW1lbnRDbWQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaXNCb3VuZDogYm9vbGVhbiwgcHVibGljIG5nQ29udGVudEluZGV4OiBudW1iZXIsIHB1YmxpYyBuYW1lOiBzdHJpbmcsXG4gICAgICAgICAgICAgIHB1YmxpYyBhdHRyTmFtZUFuZFZhbHVlczogc3RyaW5nW10sIHB1YmxpYyBldmVudFRhcmdldEFuZE5hbWVzOiBzdHJpbmdbXSkge31cbiAgdmlzaXQodmlzaXRvcjogUmVuZGVyQ29tbWFuZFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRCZWdpbkVsZW1lbnQodGhpcywgY29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdlYldvcmtlckVuZEVsZW1lbnRDbWQgaW1wbGVtZW50cyBSZW5kZXJUZW1wbGF0ZUNtZCB7XG4gIHZpc2l0KHZpc2l0b3I6IFJlbmRlckNvbW1hbmRWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RW5kRWxlbWVudChjb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2ViV29ya2VyQmVnaW5Db21wb25lbnRDbWQgaW1wbGVtZW50cyBSZW5kZXJCZWdpbkNvbXBvbmVudENtZCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpc0JvdW5kOiBib29sZWFuLCBwdWJsaWMgbmdDb250ZW50SW5kZXg6IG51bWJlciwgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICAgICAgICAgICAgcHVibGljIGF0dHJOYW1lQW5kVmFsdWVzOiBzdHJpbmdbXSwgcHVibGljIGV2ZW50VGFyZ2V0QW5kTmFtZXM6IHN0cmluZ1tdLFxuICAgICAgICAgICAgICBwdWJsaWMgdGVtcGxhdGVJZDogc3RyaW5nKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBSZW5kZXJDb21tYW5kVmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEJlZ2luQ29tcG9uZW50KHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXZWJXb3JrZXJFbmRDb21wb25lbnRDbWQgaW1wbGVtZW50cyBSZW5kZXJUZW1wbGF0ZUNtZCB7XG4gIHZpc2l0KHZpc2l0b3I6IFJlbmRlckNvbW1hbmRWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2aXNpdG9yLnZpc2l0RW5kQ29tcG9uZW50KGNvbnRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXZWJXb3JrZXJFbWJlZGRlZFRlbXBsYXRlQ21kIGltcGxlbWVudHMgUmVuZGVyRW1iZWRkZWRUZW1wbGF0ZUNtZCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpc0JvdW5kOiBib29sZWFuLCBwdWJsaWMgbmdDb250ZW50SW5kZXg6IG51bWJlciwgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICAgICAgICAgICAgcHVibGljIGF0dHJOYW1lQW5kVmFsdWVzOiBzdHJpbmdbXSwgcHVibGljIGV2ZW50VGFyZ2V0QW5kTmFtZXM6IHN0cmluZ1tdLFxuICAgICAgICAgICAgICBwdWJsaWMgaXNNZXJnZWQ6IGJvb2xlYW4sIHB1YmxpYyBjaGlsZHJlbjogUmVuZGVyVGVtcGxhdGVDbWRbXSkge31cbiAgdmlzaXQodmlzaXRvcjogUmVuZGVyQ29tbWFuZFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRFbWJlZGRlZFRlbXBsYXRlKHRoaXMsIGNvbnRleHQpO1xuICB9XG59XG4iXX0=