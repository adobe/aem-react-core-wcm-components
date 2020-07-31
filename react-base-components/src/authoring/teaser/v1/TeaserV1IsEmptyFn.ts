import {TeaserV1Model} from "./TeaserV1";

export function TeaserV1IsEmptyFn(props:TeaserV1Model): boolean{
    return (!props.imagePath && !props.description &&  props.actions.length == 0)
}
