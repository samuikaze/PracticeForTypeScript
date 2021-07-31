import { LatLngExpression } from "leaflet";
import { SourceUBikeInfo, UBikeInfo } from 'data';

let URL = 'https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json';

export default function fetchUBikeData(url = URL) {
  return fetch(url)
    .then(result => result.json())

    // 一次轉換成 SourceUBikeInfo[] 型別
    .then(({ retVal }) =>
      Object.keys(retVal).map(key => <SourceUBikeInfo>(retVal[key]))
    )

    // 二次轉換成 UBikeInfo[] 型別
    .then(sourceInfo => sourceInfo.map(sourceInfo => (<UBikeInfo>{
      availableBikes: parseInt(sourceInfo.sbi, 10),
      totalBikes: parseInt(sourceInfo.tot, 10),
      latLng: <LatLngExpression>[
        parseFloat(sourceInfo.lat),
        parseFloat(sourceInfo.lng),
      ],
      regionName: sourceInfo.sarea,
      stopName: sourceInfo.sna
    })));
}
