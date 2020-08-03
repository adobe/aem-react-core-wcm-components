import React from 'react';
import { ResponsiveGrid} from '@adobe/cq-react-editable-components';


export default class MainResponsiveGrid extends ResponsiveGrid{

    getItemComponentProps(item, itemKey, itemPath) {
        const attrs = super.getItemComponentProps(item, itemKey, itemPath);

        if(itemPath.endsWith('navigation')){
            attrs.className += " cmp-examples-structure__aside";
        }else if(itemPath.endsWith('responsivegrid')){
            attrs.className += " cmp-examples-structure__main";
        }

        return attrs;
    }

    // render() {
    //     return (
    //         <>
    //             { this.childComponents }
    //             { this.placeholderComponent }
    //         </>
    //     );
    // }
}