import { Model } from "@/shared";
import { ConfigFrontElementAttrModel } from "@entities/configFront/model/ConfigFrontElementAttrModel";
import { ConfigFrontElementEvent } from "@entities/configFront/model/ConfigFrontElementEvent";

export interface ConfigFrontElementModel {
    type: string;
    innerHtml?: string;
    attr: Model.DymanicNull<ConfigFrontElementAttrModel[]>;
    children: Model.DymanicNull<ConfigFrontElementModel[]>;
    event: Model.DymanicNull<ConfigFrontElementEvent>;
}