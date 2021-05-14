'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Sinon = require("wonder-bs-sinon/lib/js/src/sinon.js");
var Sinon$1 = require("sinon");
var Wonder_jest = require("wonder-bs-jest/lib/js/src/wonder_jest.js");
var RedoUndoTool$WonderEditor = require("../../tool/RedoUndoTool.js");
var GameObjectTool$WonderEditor = require("../../../../tool/GameObjectTool.js");
var StateLogicService$WonderEditor = require("../../../../../src/service/stateTuple/logic/StateLogicService.js");
var MainEditorSceneTool$WonderEditor = require("../../../../tool/MainEditorSceneTool.js");
var SceneTreeWidgetService$WonderEditor = require("../../../../../src/service/record/editor/widget/SceneTreeWidgetService.js");
var MainEditorLeftHeaderTool$WonderEditor = require("../../../../unit/composable_component/mainEditor/composable_component/leftHeader/tool/MainEditorLeftHeaderTool.js");
var BuildComponentForCurryTool$WonderEditor = require("../../../../tool/BuildComponentForCurryTool.js");
var CurrentSelectSourceEditorService$WonderEditor = require("../../../../../src/service/state/editor/CurrentSelectSourceEditorService.js");
var MainEditorInspectorAddComponentTool$WonderEditor = require("../../../inspector/atom_component/addableComponent/tool/MainEditorInspectorAddComponentTool.js");
var MainEditorInspectorRemoveComponentTool$WonderEditor = require("../../../inspector/atom_component/addableComponent/tool/MainEditorInspectorRemoveComponentTool.js");

Wonder_jest.describe("redo_undo: remove cameraGroup component", (function (param) {
        var sandbox = Sinon.getSandboxDefaultVal(/* () */0);
        var _simulateRemoveSpecificComponent = function (param) {
          return MainEditorInspectorRemoveComponentTool$WonderEditor.removeCameraGroupComponent(undefined, undefined, undefined, /* () */0);
        };
        var _beforeEach = function (param) {
          MainEditorSceneTool$WonderEditor.initState(sandbox, undefined, undefined, /* () */0);
          MainEditorSceneTool$WonderEditor.createDefaultScene(sandbox, MainEditorSceneTool$WonderEditor.setFirstCubeToBeCurrentSceneTreeNode);
          var partial_arg = SceneTreeWidgetService$WonderEditor.getWidget(/* () */0);
          StateLogicService$WonderEditor.getAndSetEditorState((function (param) {
                  return CurrentSelectSourceEditorService$WonderEditor.setCurrentSelectSource(partial_arg, param);
                }));
          var newGameObject = GameObjectTool$WonderEditor.getNewGameObject(undefined, /* () */0);
          MainEditorLeftHeaderTool$WonderEditor.addCube(undefined, undefined, /* () */0);
          MainEditorInspectorAddComponentTool$WonderEditor.addCameraGroupComponent(undefined, undefined, newGameObject, /* () */0);
          return MainEditorSceneTool$WonderEditor.setSceneFirstCameraToBeCurrentSceneTreeNode(/* () */0);
        };
        var _afterEach = function (param) {
          return /* () */0;
        };
        beforeEach((function () {
                sandbox[0] = Sinon$1.sandbox.create();
                return /* () */0;
              }));
        afterEach((function () {
                return Curry._1(Sinon.restoreSandbox, sandbox[0]);
              }));
        return RedoUndoTool$WonderEditor.testRedoUndoOneStep(sandbox, "prepare first step: set currentSceneTreeNode", /* tuple */[
                    _simulateRemoveSpecificComponent,
                    _beforeEach,
                    _afterEach
                  ], BuildComponentForCurryTool$WonderEditor.buildInspectorComponent);
      }));

/*  Not a pure module */