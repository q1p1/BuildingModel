import{aT as n,ap as e}from"./index-jYn0Tv9l.js";import{d as p}from"./queryTopFeatures-CwVsu1DH.js";import s from"./TopFeaturesQuery-DbKMD7xF.js";import"./normalizeUtils-BWQRfNYT.js";import"./normalizeUtilsCommon-Dy9pI1t1.js";import"./query-B0mQNSkq.js";import"./pbfQueryUtils-CM8N9c8w.js";import"./pbf-CTH06Koi.js";async function w(a,i,m){const r=n(a),o=await p(r,s.from(i),{...m}),t=o.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:o.data.count,extent:null}:{count:o.data.count,extent:e.fromJSON(t)}}export{w as executeForTopExtents};
