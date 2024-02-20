import r from"angular2/src/facade/lang";import"angular2/src/core/di";import"angular2/src/core/di/metadata";import"./src/core/metadata/di.js";import"angular2/src/core/change_detection";import"./src/core/metadata/directives.js";import"./src/core/metadata/view.js";import"./src/core/util/decorators.js";import e from"./src/core/metadata.js";import o from"./src/core/util.js";import t from"./src/core/prod_mode.js";import"./src/core/di/metadata.js";import"./src/core/di/decorators.js";import"./src/core/di/forward_ref.js";import"angular2/src/facade/exceptions";import"./src/core/di/injector.js";import"angular2/src/facade/collection";import"angular2/src/core/reflection/reflection";import"./src/core/di/reflective_key.js";import"./src/core/di/reflective_exceptions.js";import"./src/core/di/provider.js";import"./src/core/di/reflective_provider.js";import"./src/core/di/reflective_injector.js";import"./src/core/di/opaque_token.js";import c from"./src/core/di.js";import"./src/facade/lang.js";import"angular2/src/facade/promise";import"rxjs/Subject";import"rxjs/observable/PromiseObservable";import"rxjs/operator/toPromise";import"rxjs/Observable";import"./src/facade/async.js";import"./src/facade/base_wrapped_exception.js";import"angular2/src/facade/base_wrapped_exception";import"./src/facade/exception_handler.js";import"./src/facade/exceptions.js";import i from"./src/facade/facade.js";import"angular2/src/core/zone/ng_zone";import s from"./src/core/application_tokens.js";import"angular2/src/facade/async";import"angular2/src/core/testability/testability";import"angular2/src/core/linker/component_resolver";import"angular2/src/core/console";import"./src/core/profile/wtf_impl.js";import"./src/core/profile/profile.js";import a from"./src/core/application_ref.js";import"./src/core/zone/ng_zone_impl.js";import"./src/core/zone/ng_zone.js";import p from"./src/core/zone.js";import"./src/core/render/api.js";import m from"./src/core/render.js";import"./src/core/linker/view_type.js";import"./src/core/linker/element_ref.js";import"./src/core/linker/view_container_ref.js";import"./src/core/linker/element.js";import"./src/core/linker/exceptions.js";import"angular2/src/core/change_detection/change_detection";import"angular2/src/core/render/api";import"angular2/src/core/application_tokens";import"./src/core/linker/view_utils.js";import"./src/core/linker/component_factory.js";import"./src/core/linker/component_resolver.js";import"./src/core/linker/query_list.js";import"./src/core/linker/dynamic_component_loader.js";import"./src/core/linker/template_ref.js";import"./src/core/change_detection/change_detector_ref.js";import"angular2/src/core/change_detection/constants";import"./src/core/linker/view_ref.js";import n from"./src/core/linker.js";import l from"./src/core/debug/debug_node.js";import _ from"./src/core/testability/testability.js";import"./src/core/change_detection/differs/iterable_differs.js";import"./src/core/change_detection/differs/default_iterable_differ.js";import"./src/core/change_detection/differs/keyvalue_differs.js";import"./src/core/change_detection/differs/default_keyvalue_differ.js";import"./src/core/change_detection/constants.js";import"./src/core/change_detection/change_detection_util.js";import"./src/core/change_detection/change_detection.js";import d from"./src/core/change_detection.js";import f from"./src/core/platform_directives_and_pipes.js";import"./src/core/reflection/reflector_reader.js";import"./src/core/reflection/reflector.js";import"./src/core/reflection/reflection_capabilities.js";import j from"./src/core/reflection/reflection.js";import g from"./src/core/platform_common_providers.js";import u from"./src/core/application_common_providers.js";"use strict";var P={};function __export(r){for(var e in r)P.hasOwnProperty(e)||(P[e]=r[e])}__export(e);__export(o);__export(t);__export(c);__export(i);var v=r;P.enableProdMode=v.enableProdMode;var x=a;P.createPlatform=x.createPlatform;P.assertPlatform=x.assertPlatform;P.disposePlatform=x.disposePlatform;P.getPlatform=x.getPlatform;P.coreBootstrap=x.coreBootstrap;P.coreLoadAndBootstrap=x.coreLoadAndBootstrap;P.createNgZone=x.createNgZone;P.PlatformRef=x.PlatformRef;P.ApplicationRef=x.ApplicationRef;var b=s;P.APP_ID=b.APP_ID;P.APP_INITIALIZER=b.APP_INITIALIZER;P.PACKAGE_ROOT_URL=b.PACKAGE_ROOT_URL;P.PLATFORM_INITIALIZER=b.PLATFORM_INITIALIZER;__export(p);__export(m);__export(n);var A=l;P.DebugElement=A.DebugElement;P.DebugNode=A.DebugNode;P.asNativeElements=A.asNativeElements;__export(_);__export(d);__export(f);__export(g);__export(u);__export(j);const I=P.enableProdMode,R=P.createPlatform,k=P.assertPlatform,h=P.disposePlatform,E=P.getPlatform,L=P.coreBootstrap,N=P.coreLoadAndBootstrap,y=P.createNgZone,O=P.PlatformRef,T=P.ApplicationRef,w=P.APP_ID,D=P.APP_INITIALIZER,Z=P.PACKAGE_ROOT_URL,z=P.PLATFORM_INITIALIZER,B=P.DebugElement,M=P.DebugNode,C=P.asNativeElements;export default P;export{w as APP_ID,D as APP_INITIALIZER,T as ApplicationRef,B as DebugElement,M as DebugNode,Z as PACKAGE_ROOT_URL,z as PLATFORM_INITIALIZER,O as PlatformRef,C as asNativeElements,k as assertPlatform,L as coreBootstrap,N as coreLoadAndBootstrap,y as createNgZone,R as createPlatform,h as disposePlatform,I as enableProdMode,E as getPlatform};

