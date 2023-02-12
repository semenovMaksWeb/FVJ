import { Model } from "@/shared"
import { ConfigFrontElementCallback } from "@entities/configFront/model/ConfigFrontElementCallback";


export type ConfigFrontElementEvent =
    Model.DymanicNull<
        Model.DymanicObject<ConfigFrontElementCallback[]>
    >;