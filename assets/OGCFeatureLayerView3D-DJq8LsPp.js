import{r as t,m as e,a as o,e as a}from"./index-qgceQGhJ.js";import{g as s}from"./FeatureLayerViewBase3D-BcPnLxC7.js";import"./HeatmapDensity.glsl-CV01Pum4.js";import"./timeSupport-D-wn_yvm.js";import"./utils-BiFALfQ-.js";import"./projectExtentUtils-CpsLyICU.js";import"./geometryServiceUtils-l39SmBH1.js";import"./dehydratedFeatureComparison-CosQzx--.js";import"./utils-BZ-GJHPj.js";import"./queryForSymbologySnapping-CfZ76Psr.js";import"./Graphics3DFeatureProcessor-bLbHFVR8.js";import"./hash-CcEbRgUF.js";import"./renderingInfoUtils-xnLdyqLM.js";import"./ExtentSet-LzLSsxfq.js";import"./optimizedFeatureQueryEngineAdapter-CzF7h13G.js";import"./centroid-DdLmOD72.js";import"./PooledRBush-N31JtEq_.js";import"./quickselect-QQC62dOK.js";import"./popupUtils-D3aZrscX.js";import"./Graphics3DObjectStates-CPxQ3Lul.js";import"./attributeUtils-Dc8--CBJ.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./QueryEngine-Ca5zsv6H.js";import"./normalizeUtils-C9JSFqZE.js";import"./normalizeUtilsCommon-DPaXvCjQ.js";import"./WhereClause-DR0529nX.js";import"./TimeOnly-BxBNf0i_.js";import"./queryUtils-ThmYo2rj.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./utils-BAi8yq_j.js";import"./utils-COJ5_TTD.js";import"./utils-DA3NWUXP.js";import"./ClassBreaksDefinition-C5HastC_.js";import"./SnappingCandidate-O5eRSE6e.js";import"./highlightUtils-BvdfEAAl.js";import"./languageUtils-CViqpePd.js";import"./ImmutableArray-BPVd6ESQ.js";import"./shared-CRsRFZw2.js";import"./number-BfbFpaD1.js";import"./FeatureStore-DJhGixQU.js";import"./BoundsStore-PXgTvl2o.js";import"./LayerView3D-D5zPWdnT.js";import"./query-C7blem7c.js";import"./pbfQueryUtils-BrRNajLq.js";import"./pbf-BRYOGeYN.js";import"./WorkerHandle-CrENw9FC.js";import"./EventedSet-DR641n2N.js";import"./LayerView-DOsXg3KL.js";import"./RefreshableLayerView-B4I2SyUD.js";const l=p=>{let r=class extends p{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([e()],r.prototype,"layer",void 0),t([e({readOnly:!0})],r.prototype,"availableFields",null),r=t([o("esri.views.layers.OGCFeatureLayerView")],r),r};let i=class extends l(s){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new a("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};t([e()],i.prototype,"layer",void 0),i=t([o("esri.views.3d.layers.OGCFeatureLayerView3D")],i);const mr=i;export{mr as default};
