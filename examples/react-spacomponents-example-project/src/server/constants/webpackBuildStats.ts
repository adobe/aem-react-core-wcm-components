/*global process */
//@ts-nocheck

import statsFile from '../../../../ui.apps/src/content/jcr_root/apps/core-components-examples/wcm-react/clientlibs/react-spacomponents/resources/stats.json';

export const webpackBuildStats = statsFile;

export const webpackBuildChunkNames = statsFile.assets
    //@ts-ignore
    .map((asset) => asset.name);

export const webpackExistingChunks = new Set(
    Object.entries(statsFile.namedChunkGroups)
        //@ts-ignore
        .filter(([, chunkInfo]) => chunkInfo.chunks.length > 0)
        .map(([chunkName]) => chunkName));
