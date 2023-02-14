import { Model, Callback } from "@/shared";
import { ConfigFrontParamsModel } from "@entities/configFront/model/ConfigFrontParamsModel";
import { ConfigFrontParamsDataEnum } from "@entities/configFront/enums/ConfigFrontParamsDataEnum";

export interface ConfigFrontElementCallback {
    name: Callback.CallbackEnum;
    save: Model.DymanicNull<{
        type: ConfigFrontParamsDataEnum;
        key: string[];
    }>;
    params: Model.DymanicNull<ConfigFrontParamsModel[]>
}