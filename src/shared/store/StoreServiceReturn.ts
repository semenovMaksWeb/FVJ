 export interface StoreServiceReturn {
    storeKeyGet: (key: string) => any;
    storeKeyUpdate: (key:string, value:any) => void;
    storeLinkUpdate: (link:any, key: string, value: any) => void;
}