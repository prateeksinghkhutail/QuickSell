;/*FB_PKG_DELIM*/

__d("FDSInterestsDeepDiveHeaderTopRow.react",["CometRow.react","CometRowItem.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={rootWithActor:{paddingTop:"x1miatn0",$$css:!0},rootWithEntityHeaderTabs:{paddingTop:"x1miatn0",$$css:!0},rootWithoutActor:{paddingTop:"xhzj8wp","@media (max-width: 899px)_paddingTop":"xty2ufk",$$css:!0},rootWithoutEntityHeaderTabsAndWithActor:{paddingBottom:"xx6bls6",$$css:!0},rootWithoutEntityHeaderTabsAndWithoutActor:{paddingBottom:"xq1608w","@media (max-width: 899px)_paddingBottom":"x1rik9be",$$css:!0}};function a(a){var b=a.actor,d=a.auxiliary,e=a.entityHeaderHasTabs;a=a.titleBlock;return j.jsx("div",{className:(h||(h=c("stylex")))(e&&k.rootWithEntityHeaderTabs,!e&&b!=null&&k.rootWithoutEntityHeaderTabsAndWithActor,!e&&b==null&&k.rootWithoutEntityHeaderTabsAndWithoutActor,b==null&&k.rootWithoutActor,b!=null&&k.rootWithActor),children:j.jsxs(c("CometRow.react"),{paddingHorizontal:0,paddingVertical:0,spacing:16,spacingVertical:0,verticalAlign:"center",children:[b!=null?j.jsx(c("CometRowItem.react"),{children:b}):null,j.jsx(c("CometRowItem.react"),{expanding:!0,children:j.jsxs(c("CometRow.react"),{paddingHorizontal:0,paddingVertical:0,spacingVertical:0,verticalAlign:"center",children:[j.jsx(c("CometRowItem.react"),{expanding:!0,children:a}),d!=null?j.jsx(c("CometRowItem.react"),{verticalAlign:"bottom",children:d}):null]})})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("SearchCometInterestsDeepDiveActionButtonsGlimmer.react",["CometRowItem.react","FDSGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={bottomRowLocation:{height:"xc9qbxq",$$css:!0},root:{borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",height:"x1vqgdyp",width:"xl0us3e",$$css:!0}};function a(a){a=a.location;return i.jsx(c("CometRowItem.react"),{children:i.jsx(c("FDSGlimmer.react"),{index:0,xstyle:[j.root,a==="bottomRow"&&j.bottomRowLocation]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("SearchCometInterestsDeepDiveActionsLayout.react",["CometRow.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){a=a.children;return i.jsx(c("CometRow.react"),{align:"end",paddingHorizontal:0,paddingVertical:0,spacing:12,children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("SearchCometInterestsDeepDiveFeedEntryPointVariables",["WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={feedbackSource:40,feedLocation:"SEARCH",focusCommentID:null,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"search_results_page",scale:d("WebPixelRatio").get(),useDefaultActor:!1};g["default"]=a}),98);
__d("SearchCometInterestsDeepDiveHeaderGlimmer.react",["CometRouteParams","FDSEntityHeader.react","FDSGlimmer.react","FDSInterestsDeepDiveHeaderTopRow.react","SearchCometInterestsDeepDiveActionButtonsGlimmer.react","SearchCometInterestsDeepDiveActionsLayout.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={meta:{borderTopStartRadius:"x12myldv",borderTopEndRadius:"x1udsgas",borderBottomEndRadius:"xrc8dwe",borderBottomStartRadius:"xxxhv2y",height:"xmix8c7",marginBottom:"x4cne27",width:"x6iitch",$$css:!0},name:{borderTopStartRadius:"xhw592a",borderTopEndRadius:"xwihvcr",borderBottomEndRadius:"x7wuybg",borderBottomStartRadius:"xb9tvrk",height:"x1fgtraw",marginBottom:"x1e56ztr",width:"x544807",$$css:!0}};function a(){var a=d("CometRouteParams").useRouteParams();a=a.hashtag;return i.jsx(c("FDSEntityHeader.react"),{notice:null,showBackground:!0,showDropShadow:!0,topRow:i.jsx(c("FDSInterestsDeepDiveHeaderTopRow.react"),{auxiliary:typeof a==="string"?i.jsx(c("SearchCometInterestsDeepDiveActionsLayout.react"),{children:i.jsx(c("SearchCometInterestsDeepDiveActionButtonsGlimmer.react"),{location:"topRow"})}):null,entityHeaderHasTabs:!1,titleBlock:i.jsxs(i.Fragment,{children:[i.jsx(c("FDSGlimmer.react"),{index:0,xstyle:j.name}),i.jsx(c("FDSGlimmer.react"),{index:0,xstyle:j.meta})]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("SearchCometInterestsDeepDiveLayout.react",["CometColumn.react","CometColumnItem.react","CometLayout.react","CometStickyHeaderContentArea.react","FDSResponsiveColumns.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.columns,e=a.header;a=a.scrollKey;return i.jsx(c("CometLayout.react"),{children:i.jsx(c("CometStickyHeaderContentArea.react"),{header:e,scrollKey:a,children:i.jsx(c("CometColumn.react"),{paddingVertical:16,children:i.jsx(c("CometColumnItem.react"),{align:"center",children:i.jsx(d("FDSResponsiveColumns.react").Container,{containerWidth:"DEFAULT",children:b})})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("SearchCometInterestsDeepDivePostsQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="27366013866375914"}),null);
__d("SearchCometInterestsDeepDivePostsQuery$Parameters",["CometImmersivePhotoCanUserDisable3DMotion.relayprovider","CometUFIReactionsEnableShortName.relayprovider","CometUFIShareActionMigration.relayprovider","EventCometCardImage_prefetchEventImage.relayprovider","FBReelsMediaFooter_comet_enable_reels_ads_gk.relayprovider","GHLShouldChangeAdIdFieldName.relayprovider","GHLShouldChangeSponsoredDataFieldName.relayprovider","IncludeCommentWithAttachment.relayprovider","IsMergQAPolls.relayprovider","IsWorkUser.relayprovider","SearchCometInterestsDeepDivePostsQuery_facebookRelayOperation","StoriesArmadilloReplyEnabled.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("SearchCometInterestsDeepDivePostsQuery_facebookRelayOperation"),metadata:{},name:"SearchCometInterestsDeepDivePostsQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__GHLShouldChangeAdIdFieldNamerelayprovider:b("GHLShouldChangeAdIdFieldName.relayprovider"),__relay_internal__pv__GHLShouldChangeSponsoredDataFieldNamerelayprovider:b("GHLShouldChangeSponsoredDataFieldName.relayprovider"),__relay_internal__pv__CometImmersivePhotoCanUserDisable3DMotionrelayprovider:b("CometImmersivePhotoCanUserDisable3DMotion.relayprovider"),__relay_internal__pv__IsWorkUserrelayprovider:b("IsWorkUser.relayprovider"),__relay_internal__pv__IsMergQAPollsrelayprovider:b("IsMergQAPolls.relayprovider"),__relay_internal__pv__FBReelsMediaFooter_comet_enable_reels_ads_gkrelayprovider:b("FBReelsMediaFooter_comet_enable_reels_ads_gk.relayprovider"),__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider:b("CometUFIReactionsEnableShortName.relayprovider"),__relay_internal__pv__CometUFIShareActionMigrationrelayprovider:b("CometUFIShareActionMigration.relayprovider"),__relay_internal__pv__IncludeCommentWithAttachmentrelayprovider:b("IncludeCommentWithAttachment.relayprovider"),__relay_internal__pv__StoriesArmadilloReplyEnabledrelayprovider:b("StoriesArmadilloReplyEnabled.relayprovider"),__relay_internal__pv__EventCometCardImage_prefetchEventImagerelayprovider:b("EventCometCardImage_prefetchEventImage.relayprovider")}}};e.exports=a}),null);
__d("SearchCometInterestsDeepDiveRootContentQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8360553250738345"}),null);
__d("SearchCometInterestsDeepDiveRootContentQuery$Parameters",["SearchCometInterestsDeepDiveRootContentQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("SearchCometInterestsDeepDiveRootContentQuery_facebookRelayOperation"),metadata:{},name:"SearchCometInterestsDeepDiveRootContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("SearchCometInterestsDeepDiveRoot.entrypoint",["JSResourceForInteraction","SearchCometInterestsDeepDiveFeedEntryPointVariables","SearchCometInterestsDeepDivePostsQuery$Parameters","SearchCometInterestsDeepDiveRootContentQuery$Parameters","WebPixelRatio","uuidv4"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.routeParams,e=a.routeProps,f=e.group_id;e=e.topic_id;a=a.timeSpentMetaData;var g=b.__eep__,h;b.hashtag!=null&&(h=b.hashtag);var i;b.explore_tab!=null&&(i=b.explore_tab);b=(a=a==null?void 0:(b=a.session_ids)==null?void 0:b.search_sid)!=null?a:c("uuidv4")();a=i==="latest"?"RECENT":"TOP";f=f!=null?{container_scope_fbid:f}:null;g={extra_data:g!=null?JSON.stringify({entry_point:g}):null,scope_information:f,session_id:b,topic_id:h!=null?"#"+h:e};return{queries:{postsQuery:{parameters:c("SearchCometInterestsDeepDivePostsQuery$Parameters"),variables:babelHelpers["extends"]({input:babelHelpers["extends"]({},g,{explore_tab:a})},c("SearchCometInterestsDeepDiveFeedEntryPointVariables"))},rootContentQuery:{parameters:c("SearchCometInterestsDeepDiveRootContentQuery$Parameters"),variables:{input:babelHelpers["extends"]({},g),scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("SearchCometInterestsDeepDiveRoot.react").__setRef("SearchCometInterestsDeepDiveRoot.entrypoint")};g["default"]=a}),98);
__d("SearchCometResultsLoggedModuleContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({logModuleClick:null,logModuleInlineAction:null,logSeeMoreClick:null,sessionID:null,vpvdLoggerRef:null});g["default"]=b}),98);
__d("SearchResultPageLoggingInlineActionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744351");b=d("FalcoLoggerInternal").create("search_result_page_logging_inline_action",a);e=b;g["default"]=e}),98);
__d("SearchResultPageLoggingItemClickedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744352");b=d("FalcoLoggerInternal").create("search_result_page_logging_item_clicked",a);e=b;g["default"]=e}),98);
__d("SearchCometResultsLoggerUtil",["SearchResultPageLoggingInlineActionFalcoEvent","SearchResultPageLoggingItemClickedFalcoEvent","gkx"],(function(a,b,c,d,e,f,g){"use strict";a=function(a,b,d){c("SearchResultPageLoggingItemClickedFalcoEvent").logImmediately(function(){return{click_type:"graph_search_results_module_tapped",common:{logging_unit_id:a,module_role:d,session_id:b,timestamp:Date.now().toString()}}})};b=function(a,b,d){c("SearchResultPageLoggingInlineActionFalcoEvent").logImmediately(function(){return{common:{logging_unit_id:a,session_id:b,timestamp:Date.now().toString()},inline_action_name:d}})};d=function(a,b,d,e){c("SearchResultPageLoggingItemClickedFalcoEvent").logImmediately(function(){return{click_type:"graph_search_results_item_in_module_tapped",common:{logging_unit_id:a,module_role:e,session_id:b,timestamp:Date.now().toString()},unit_id_result_id:d}})};e=function(a,b,d){c("SearchResultPageLoggingInlineActionFalcoEvent").logImmediately(function(){return{common:{logging_unit_id:a,session_id:b,timestamp:Date.now().toString()},inline_action_name:d}})};f=function(a,b){c("SearchResultPageLoggingItemClickedFalcoEvent").logImmediately(function(){return{click_type:"graph_search_results_see_more_on_module_tapped",common:{logging_unit_id:a,session_id:b,timestamp:Date.now().toString()}}})};g.logModuleClick=a;g.logModuleInlineAction=b;g.logResultClick=d;g.logResultInlineAction=e;g.logSeeMoreClick=f}),98);
__d("SearchResultPageLoggingViewportViewFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744354");b=d("FalcoLoggerInternal").create("search_result_page_logging_viewport_view",a);e=b;g["default"]=e}),98);
__d("useSearchCometResultsVPVdLogger",["SearchResultPageLoggingViewportViewFalcoEvent","gkx","react","useVPVDImpression"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useCallback;function a(a){var b=a.loggingUnitID,d=a.sessionID,e=a.tappedResultID,f=i(function(a,f){c("SearchResultPageLoggingViewportViewFalcoEvent").logImmediately(function(){return{common:{logging_unit_id:b,session_id:d,timestamp:Date.now().toString()},is_bootstrap_entity_module:!1,unit_id_result_id:e,vpv_duration:String(f),vpv_start_time:String(a)}})},[b,d,e]);a=i(function(a){var b=a.visibleDuration;a=a.visibleTime;f(a,b)},[f]);return c("useVPVDImpression")({isLite:!0,minVisibleTimeMs:1,onVPVDEnd:a})}g["default"]=a}),98);
__d("SearchCometResultsLoggedModuleProvider.react",["SearchCometResultsLoggedModuleContext","SearchCometResultsLoggerUtil","react","useSearchCometResultsVPVdLogger"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useMemo;function a(a){var b=a.children,e=a.loggingUnitID,f=a.moduleRole,g=a.sessionID;a=a.shouldUseCustomVPVdRef;var h=c("useSearchCometResultsVPVdLogger")({loggingUnitID:e,sessionID:g}),k=h[0];h=j(function(){return{logModuleClick:function(){d("SearchCometResultsLoggerUtil").logModuleClick(e,g,f)},logModuleInlineAction:function(a){d("SearchCometResultsLoggerUtil").logModuleInlineAction(e,g,a)},logSeeMoreClick:function(){d("SearchCometResultsLoggerUtil").logSeeMoreClick(e,g)},sessionID:g,vpvdLoggerRef:k}},[e,f,g,k]);return i.jsx(c("SearchCometResultsLoggedModuleContext").Provider,{value:h,children:Boolean(a)?b:i.jsx("div",{ref:k,children:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useSearchCometResultsClientSERPUnitIDForSessionID",["uuidv4"],(function(a,b,c,d,e,f,g){"use strict";var h=new Map();function a(a){var b=h.get(a);if(b!=null)return b;b="www_serp:"+c("uuidv4")();h.set(a,b);return b}g["default"]=a}),98);
__d("SearchCometInterestsDeepDiveRoot.react",["CometErrorProjectContext","CometFeedGlimmer.react","CometPlaceholder.react","FDSResponsiveColumns.react","SearchCometInterestsDeepDiveHeaderGlimmer.react","SearchCometInterestsDeepDiveLayout.react","SearchCometResultsLoggedModuleProvider.react","deferredLoadComponent","react","requireDeferredForDisplay","useNullthrowsViolation","useSearchCometResultsClientSERPUnitIDForSessionID"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j=c("deferredLoadComponent")(c("requireDeferredForDisplay")("SearchCometInterestsDeepDiveRootContent.react").__setRef("SearchCometInterestsDeepDiveRoot.react"));function a(a){a=a.queries;var b=a.postsQuery;a=a.rootContentQuery;var e=i.jsx(c("SearchCometInterestsDeepDiveLayout.react"),{columns:i.jsx(d("FDSResponsiveColumns.react").Column,{columnType:"FEED",children:i.jsx(c("CometFeedGlimmer.react"),{})},"primary"),header:i.jsx(c("SearchCometInterestsDeepDiveHeaderGlimmer.react"),{})}),f=c("useNullthrowsViolation")(b.variables.input.session_id,"Session ID required for topic deep dive posts query"),g=c("useSearchCometResultsClientSERPUnitIDForSessionID")(f);return i.jsx(c("CometErrorProjectContext").Provider,{value:"search",children:i.jsx(c("SearchCometResultsLoggedModuleProvider.react"),{loggingUnitID:g,sessionID:f,children:i.jsx(c("CometPlaceholder.react"),{fallback:e,children:i.jsx(j,{postsQuery:b,rootContentQuery:a})},f)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("SearchCometResultsLoggedResultContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({logResultClick:null,logResultInlineAction:null,vpvdLoggerRef:null});g["default"]=b}),98);
__d("SearchCometResultsLoggedResultProvider.react",["SearchCometResultsLoggedResultContext","SearchCometResultsLoggerUtil","mergeRefs","react","useSearchCometResultsVPVdLogger","useStoryVPVDLogger"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useMemo;function a(a){var b=a.children,e=a.loggingUnitID,f=a.moduleRole,g=a.sessionID,h=a.shouldUseCustomVPVdRef;h=h===void 0?!1:h;var k=a.tappedResultID;a=c("useSearchCometResultsVPVdLogger")({loggingUnitID:e,sessionID:g,tappedResultID:k});var l=a[0];a=c("useStoryVPVDLogger")({interactionSourceOverride:78,position:0,trackable:e});var m=a[0];a[1];var n=j(function(){return c("mergeRefs")(l,m)},[l,m]);a=j(function(){return{logResultClick:function(){d("SearchCometResultsLoggerUtil").logResultClick(e,g,k,f)},logResultInlineAction:function(a){d("SearchCometResultsLoggerUtil").logResultInlineAction(e,g,a)},vpvdLoggerRef:n}},[e,f,g,k,n]);return i.jsx(c("SearchCometResultsLoggedResultContext").Provider,{value:a,children:h?b:i.jsx("div",{ref:n,children:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("SearchCometResultsLoggedResult_loggingModel.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"SearchCometResultsLoggedResult_loggingModel",selections:[{alias:null,args:null,kind:"ScalarField",name:"session_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"logging_unit_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tapped_result_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"module_role",storageKey:null}],type:"SearchResultLoggingViewModel",abstractKey:null};e.exports=a}),null);
__d("SearchCometResultsLoggedResult.react",["CometRelay","SearchCometResultsLoggedResultProvider.react","SearchCometResultsLoggedResult_loggingModel.graphql","react","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");function a(a){var e=a.children,f=a.loggingModel;a=a.shouldUseCustomVPVdRef;if(f==null)throw c("unrecoverableViolation")("Undefined result logging model","search");f=d("CometRelay").useFragment(h!==void 0?h:h=b("SearchCometResultsLoggedResult_loggingModel.graphql"),f);var g=f.logging_unit_id,i=f.module_role,k=f.session_id;f=f.tapped_result_id;return j.jsx(c("SearchCometResultsLoggedResultProvider.react"),{loggingUnitID:g,moduleRole:i,sessionID:k,shouldUseCustomVPVdRef:a,tappedResultID:f,children:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);