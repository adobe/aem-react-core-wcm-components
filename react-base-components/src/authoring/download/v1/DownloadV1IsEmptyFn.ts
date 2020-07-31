import {DownloadV1Model} from "./DownloadV1";


export function DownloadV1IsEmptyFn(props:DownloadV1Model): boolean{
    return (props.url == null || props.url.length === 0) && props.handleOnClick == null;
}