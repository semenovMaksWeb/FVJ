import { Model } from "@/shared";
import { ConfigFrontElementEventEnum } from "@entities/configFront/enums/ConfigFrontElementEventEnum";
import { ConfigFrontParamsModel } from "@entities/configFront/model/ConfigFrontParamsModel"

export interface ConfigFrontElementEvent {
    name: ConfigFrontElementEventEnum;
    save: Model.DymanicNull<ConfigFrontParamsModel>;
    params: Model.DymanicNull<Model.DymanicObject<ConfigFrontParamsModel>>
}

