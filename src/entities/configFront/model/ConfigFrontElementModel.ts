import { ConfigFrontElementAttrModel } from "@entities/configFront/model/ConfigFrontElementAttrModel";

export interface ConfigFrontElementModel {
    type: string;
    attr: ConfigFrontElementAttrModel[];
    children: ConfigFrontElementModel[];
}