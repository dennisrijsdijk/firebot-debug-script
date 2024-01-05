import {Firebot, ScriptModules} from "@crowbartools/firebot-custom-scripts-types";

interface Params {
  message: string;
}

const script: Firebot.CustomScript<Params> = {
  getScriptManifest: () => {
    return {
      name: "Debug Custom Script",
      description: "A starter custom script for debug",
      author: "SomeDev",
      version: "1.0",
      firebotVersion: "5",
    };
  },
  getDefaultParameters: () => {
    return {
      message: {
        type: "string",
        default: "Hello World!",
        description: "Message",
        secondaryDescription: "Enter a message here",
      },
    };
  },
  run: (runRequest) => {
    modules = runRequest.modules;
    modules.logger.debug("Script Run")
  },
  parametersUpdated(parameters: Params) {
    modules.logger.debug("Script Params Updated", JSON.stringify(parameters, null, 4))
  },
  stop() {
    modules.logger.debug("Script Stop")
  }
};

let modules: ScriptModules;

export default script;
