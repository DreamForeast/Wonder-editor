open Js.Promise;

module CustomEventHandler = {
  include EmptyEventHandler.EmptyEventHandler;
  type prepareTuple = unit;
  type dataTuple = unit;
  type return = unit;

  let handleSelfLogic = ((uiState, dispatchFunc), (), ()) =>
    StateEngineService.unsafeGetState()
    |> AssetIMGUIEngineService.removeSettedAssetBitmapData
    |> StateLogicService.renderWhenStop
    |> StateEngineService.setState
    |> ignore;
};

module MakeEventHandler = EventHandler.MakeEventHandler(CustomEventHandler);