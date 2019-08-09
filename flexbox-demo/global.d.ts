declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq';
    [key: string]: string | undefined;
  }
}

declare type JSONPrimitive = string | number | boolean | null;
declare type JSONValue = JSONPrimitive | JSONObject | JSONArray;
declare type JSONObject = { [key: string]: JSONValue };
declare interface JSONArray extends Array<JSONValue> {}
