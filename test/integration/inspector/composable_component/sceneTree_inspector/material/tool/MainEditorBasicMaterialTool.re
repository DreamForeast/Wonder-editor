let triggerFileDragStartEvent = index => {
  let assetComponent = BuildComponentTool.buildAssetComponent();
  BaseEventTool.triggerComponentEvent(
    assetComponent,
    BasicMaterialEventTool.triggerFileDragStartEvent(index),
  );
};
let triggerTextureRemoveClickEvent = () => {
  let inspectorComponent =
    BuildComponentTool.buildInspectorComponent(
      TestTool.buildEmptyAppState(),
      InspectorTool.buildFakeAllShowComponentConfig(),
    );
  BaseEventTool.triggerComponentEvent(
    inspectorComponent,
    BasicMaterialEventTool.triggerRemoveTextureClickEvent,
  );
};
let triggerTextureDragEvent = () => {
  let inspectorComponent =
    BuildComponentTool.buildInspectorComponent(
      TestTool.buildEmptyAppState(),
      InspectorTool.buildFakeAllShowComponentConfig(),
    );
  BaseEventTool.triggerComponentEvent(
    inspectorComponent,
    BasicMaterialEventTool.triggerTextureDragEnterEvent,
  );
  BaseEventTool.triggerComponentEvent(
    inspectorComponent,
    BasicMaterialEventTool.triggerTextureDragDropEvent,
  );
};

/* TODO extract triggerTextureDragEvent */

/* TODO add drag leave test case: 
if trigger drag leave , should change css
*/

let triggerTextureFirstDragEvent = () => {
  let inspectorComponent =
    BuildComponentTool.buildInspectorComponent(
      TestTool.buildEmptyAppState(),
      InspectorTool.buildFakeAllShowComponentConfig(),
    );
  BaseEventTool.triggerComponentEvent(
    inspectorComponent,
    BasicMaterialEventTool.triggerTextureDragEnterEvent,
  );
  BaseEventTool.triggerComponentEvent(
    inspectorComponent,
    BasicMaterialEventTool.triggerTextureDragLeaveEvent,
  );
  BaseEventTool.triggerComponentEvent(
    inspectorComponent,
    BasicMaterialEventTool.triggerTextureDragEnterEvent,
  );
  BaseEventTool.triggerComponentEvent(
    inspectorComponent,
    BasicMaterialEventTool.triggerTextureDragDropEvent,
  );
};