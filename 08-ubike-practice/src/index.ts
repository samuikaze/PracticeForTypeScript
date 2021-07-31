import L, { LayerGroup } from 'leaflet';
import mapConfig from './map.config';
import fetchData from './fetchData';
import { districts } from './districtData';
import { Districts } from './data';

const $selectDistrict = <HTMLSelectElement | null>(
  document.getElementById('select-district')
);

if ($selectDistrict == null) {
  throw new Error('No select-district field provided.');
}

districts.forEach(d => {
  const $optionTag = document.createElement('option');

  $optionTag.setAttribute('value', d);
  $optionTag.innerHTML = d;

  $selectDistrict.appendChild($optionTag);
});

const {
  coordinate,
  zoomLevel,
  tileLayerURL,
  containerID,
} = mapConfig;

fetchData().then(data => {
  console.log(data);
});

const map = L.map(containerID);

map.setView(coordinate, zoomLevel);

L.tileLayer(tileLayerURL).addTo(map);

let markerLayer: LayerGroup;

let currentDistrict = <Districts>$selectDistrict.value;

function updateUBikeMap(district: Districts): void {
  // 轉換點位並繪製
  fetchData().then(data => {
    // 1. 先將資料根據選到的行政區進行過濾的動作
    const selectedData = data.filter(info => {
      return info.regionName === currentDistrict;
    });

    // 2. 將 selectedData 裡面的 UBikeInfo 轉換成 Leaflet Marker
    const markers = selectedData.map(data => {
      const marker = new L.Marker(data.latLng);

      // 顯示 UBike 資料
      marker.bindTooltip(`
        <p>${data.regionName} － ${data.stopName}</p>
        <p>總自行車數：${data.totalBikes}</p>
        <p>可用自行車數：${data.availableBikes}</p>
      `);

      marker.on('mouseover', () => {
        marker.openTooltip();
      });

      marker.on('mouseleave', () => {
        marker.closeTooltip();
      });

      return marker;
    });

    // 3. 將所有的 Marker 丟進 LayerGroup 並新增到地圖
    markerLayer = L.layerGroup(markers);
    markerLayer.addTo(map);
  });
}

updateUBikeMap(currentDistrict);

$selectDistrict.addEventListener('change', (event) => {
  // 當行政區變更時，需要更新 UBike 地圖資訊

  // 1. 取得行政區的值
  let { value } = <HTMLSelectElement>(event.target);
  currentDistrict = <Districts>value;

  // 2. 將原本的 Marker 除掉
  markerLayer.remove();

  // 3. 更新地圖
  updateUBikeMap(currentDistrict);
});
