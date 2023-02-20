import { ConfigFrontService } from "./entities/configFront/ConfigFrontService";
import { ConfigFrontParamsDataEnum } from "./entities/configFront/enums/ConfigFrontParamsDataEnum";
import { ConfigFrontModel } from "./entities/configFront/model/ConfigFrontModel";
import { getDataTable } from "./entities/index";
import { CallbackEnum } from "./shared/callback";
import { Model, Callback } from "./shared/index";


const data: Model.ObjectAny[] = [
    {
        id: 1,
        date: "20-20-2022",
        _tec: {
            visible: true
        }
    },
    {
        id: 2,
        date: "20-20-2022",
        _tec: {
            visible: true
        }
    },
    {
        id: 3,
        date: "20-20-2022",
        _tec: {
            visible: true
        }
    },
    {
        id: 4,
        date: "20-20-2022",
        _tec: {
            visible: true
        }
    },
    {
        id: 5,
        date: "20-20-2022",
        _tec: {
            visible: true
        }
    },
    {
        id: 6,
        date: "20-20-2022",
        _tec: {
            visible: true
        }
    },
    {
        id: 7,
        date: "20-20-2022",
        _tec: {
            visible: true
        }
    }
]
const filter: getDataTable.FilterDataTableModel[] = [
    {
        key: "id",
        values: [1, 5, 6, 7]
    }
]

getDataTable.GetDataTableService().filterData(data, filter);
console.log(data);


const json: ConfigFrontModel = {
    "file_link": null,
    "head": null,
    "body": [
        {
            event: null,
            "type": "form",
            "attr": [
                {
                    "key": "id",
                    "value": "form-authorization"
                }
            ],
            "children": [
                {
                    event: null,
                    children: null,
                    "type": 'input',
                    "attr": [
                        {
                            "key": "name",
                            "value": "login"
                        },
                        {
                            "key": "id",
                            "value": "input-login"
                        }
                    ]
                },
                {
                    event: null,
                    children: null,
                    "type": "input",
                    "attr": [
                        {
                            "key": "name",
                            "value": "password"
                        },
                        {
                            "key": "type",
                            "value": "password"
                        },
                        {
                            "key": "id",
                            "value": "input-password"
                        }
                    ]
                },
                {
                    children: null,
                    "type": "button",
                    "innerHtml": "Вход",
                    "attr": [
                        {
                            "key": "name",
                            "value": "authorization"
                        },
                        {
                            "key": "id",
                            "value": "button-authorization"
                        },
                        {
                            "key": "type",
                            "value": "button"
                        }
                    ],
                    event: {
                        "click": [
                            {
                                "name": CallbackEnum.apiBec,
                                "save": {
                                    "type": ConfigFrontParamsDataEnum.local,
                                    "key": [
                                        "token"
                                    ]
                                },
                                "params": [
                                    {
                                        "key": [
                                            "login"
                                        ],
                                        "type": ConfigFrontParamsDataEnum.dom,
                                        "id": "input-login"
                                    },
                                    {
                                        "key": [
                                            "password"
                                        ],
                                        "type": ConfigFrontParamsDataEnum.dom,
                                        "id": "input-password"
                                    }
                                ]
                            },
                            {
                                "name": CallbackEnum.saveCookie,
                                "save": null,
                                "params": [
                                    {
                                        "key": ["value"],
                                        "type": ConfigFrontParamsDataEnum.local,
                                        "link": [
                                            "token"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    ]
}
const configFrontService = new ConfigFrontService(json);
configFrontService.create();