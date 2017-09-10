describe("translation", function () {
    var editorState = null,
        engineState = null,
        sandbox = null,
        gl = null;
    var currentGameObject;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();

        testTool.clearAndOpenContractCheck(sandbox);

        editorState = stateEditTool.createState();

        engineState = stateTool.createAndSetFakeGLState(sandbox);

        gl = stateTool.getGLFromFakeGLState(engineState);


        editorState = mainBussTool.initEditor(editorState);
        stateEditTool.setState(editorState);

    });
    afterEach(function () {
        testTool.clear(sandbox);
        sandbox.restore();
    });

    describe("set current gameObject is the sceneTree first child, uid=0", function(){
        beforeEach(function(){
            sceneEditTool.setCurrentGameObject(0);
            currentGameObject = sceneEditTool.getCurrentGameObject();
        });

        it("test set current gameObject's position", function () {
            var pos = [0.5, 0, 0];

            transformViewTool.setCurrentGameObjectLocalTranslation(pos[0], pos[1], pos[2]);

            mainBussTool.loopBody(editorState);


            var transform = gameObjectAdaptorTool.getTransform(currentGameObject);
            expect(
                testTool.getValues(
                    transformAdaptorTool.getPosition(transform).values
                )
            ).toEqual(pos);
        });
        it("test translate current gameObject", function () {
            var pos = [0.5, 1, 2];

            transformViewTool.setCurrentGameObjectLocalTranslation(pos[0], pos[1], pos[2]);
            transformViewTool.setCurrentGameObjectLocalTranslation(pos[0], pos[1], pos[2]);

            mainBussTool.loopBody(editorState);

            var transform = gameObjectAdaptorTool.getTransform(currentGameObject);
            expect(
                testTool.getValues(
                    transformAdaptorTool.getPosition(transform).values
                )
            ).toEqual([1, 2, 4]);
        });
    });
});
