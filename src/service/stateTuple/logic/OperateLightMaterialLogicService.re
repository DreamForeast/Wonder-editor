let createLightMaterial = (editEngineState, runEngineState) => {
  let (editEngineState, _editMaterial) =
    editEngineState |> LightMaterialEngineService.create;
  let (runEngineState, runMaterial) =
    runEngineState |> LightMaterialEngineService.create;

  OperateMaterialLogicService.checkEditAndRunMaterialWithDiff(
    (_editMaterial, runMaterial),
    DiffType.LightMaterial,
    editEngineState,
    runEngineState,
  );
};

let disposeLightMaterial =
    (gameObject, material, (editEngineState, runEngineState)) =>
  (editEngineState, runEngineState)
  |> StateLogicService.handleFuncWithDiff(
       [|
         {arguments: [|gameObject|], type_: GameObject},
         {arguments: [|material|], type_: LightMaterial},
       |],
       GameObjectComponentEngineService.disposeLightMaterialComponent,
     );

let addLightMaterial =
    (gameObject, material, (editEngineState, runEngineState)) =>
  (editEngineState, runEngineState)
  |> StateLogicService.handleFuncWithDiff(
       [|
         {arguments: [|gameObject|], type_: GameObject},
         {arguments: [|material|], type_: LightMaterial},
       |],
       GameObjectComponentEngineService.addLightMaterialComponent,
     );

let setLightMaterialColor =
    (color, material, (editEngineState, runEngineState)) =>
  (editEngineState, runEngineState)
  |> StateLogicService.handleFuncWithDiff(
       [|{arguments: [|material|], type_: LightMaterial}|],
       LightMaterialEngineService.setLightMaterialDiffuseColor(color),
     );

let setLightMaterialMapToEngineState = (mapId, newMaterial, engineStateTuple) =>
  engineStateTuple
  |> StateLogicService.handleFuncWithDiff(
       [|
         {arguments: [|mapId|], type_: Texture},
         {arguments: [|newMaterial|], type_: LightMaterial},
       |],
       LightMaterialEngineService.setLightMaterialDiffuseMap,
     );

let reInitAllMaterials = engineState =>
  LightMaterialEngineService.reInitMaterials(
    GameObjectComponentEngineService.getAllLightMaterialComponents(
      engineState,
    ),
    engineState,
  );