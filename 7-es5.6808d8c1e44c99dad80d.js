var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),__read=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var o,i,l=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(o=l.next()).done;)a.push(o.value)}catch(r){i={error:r}}finally{try{o&&!o.done&&(n=l.return)&&n.call(l)}finally{if(i)throw i.error}}return a},__spread=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(__read(arguments[e]));return t},__values=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{L6id:function(t,e,n){"use strict";n.r(e);var o=n("8Y7J"),i=function(){},l=n("pMnS"),a=n("Xd0L"),r=n("IP0z"),s=n("cUpR"),u=n("/HVE"),c=n("SVse"),p=n("omvX"),d=o.qb({encapsulation:2,styles:[".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:0;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}@media (-ms-high-contrast:active){.mat-option{margin:0 1px}.mat-option.mat-active{border:solid 1px currentColor;margin:0}}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}@media (-ms-high-contrast:active){.mat-option .mat-option-ripple{opacity:.5}}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}"],data:{}});function b(t){return o.Kb(0,[(t()(),o.sb(0,0,null,null,1,"mat-pseudo-checkbox",[["class","mat-option-pseudo-checkbox mat-pseudo-checkbox"]],[[2,"mat-pseudo-checkbox-indeterminate",null],[2,"mat-pseudo-checkbox-checked",null],[2,"mat-pseudo-checkbox-disabled",null],[2,"_mat-animation-noopable",null]],null,null,g,_)),o.rb(1,49152,null,0,a.s,[[2,p.a]],{state:[0,"state"],disabled:[1,"disabled"]},null)],(function(t,e){var n=e.component;t(e,1,0,n.selected?"checked":"",n.disabled)}),(function(t,e){t(e,0,0,"indeterminate"===o.Db(e,1).state,"checked"===o.Db(e,1).state,o.Db(e,1).disabled,"NoopAnimations"===o.Db(e,1)._animationMode)}))}function h(t){return o.Kb(2,[(t()(),o.hb(16777216,null,null,1,null,b)),o.rb(1,16384,null,0,c.k,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(t()(),o.sb(2,0,null,null,1,"span",[["class","mat-option-text"]],null,null,null,null,null)),o.Cb(null,0),(t()(),o.sb(4,0,null,null,1,"div",[["class","mat-option-ripple mat-ripple"],["mat-ripple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),o.rb(5,212992,null,0,a.u,[o.k,o.y,u.a,[2,a.k],[2,p.a]],{disabled:[0,"disabled"],trigger:[1,"trigger"]},null)],(function(t,e){var n=e.component;t(e,1,0,n.multiple),t(e,5,0,n.disabled||n.disableRipple,n._getHostElement())}),(function(t,e){t(e,4,0,o.Db(e,5).unbounded)}))}var m=o.qb({encapsulation:2,styles:[".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}"],data:{}});function f(t){return o.Kb(2,[(t()(),o.sb(0,0,null,null,2,"label",[["class","mat-optgroup-label"]],[[8,"id",0]],null,null,null,null)),(t()(),o.Ib(1,null,["",""])),o.Cb(null,0),o.Cb(null,1)],null,(function(t,e){var n=e.component;t(e,0,0,n._labelId),t(e,1,0,n.label)}))}var _=o.qb({encapsulation:2,styles:[".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0,0,.2,.1),background-color 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:'';border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}"],data:{}});function g(t){return o.Kb(2,[],null,null)}var v=n("dJrM"),y=n("HsOI"),w=n("s7LF"),O=n("5GAg"),x=n("KCVW"),D=n("dvZr"),k=n("QQfA"),S=n("zMNK"),C=n("quSY"),F=n("XNiG"),j=n("NXyV"),P=n("VRyK"),A=n("LRne"),L=n("xgIS"),E=n("IzEk"),I=n("eIep"),R=n("pLZG"),B=n("lJxs"),T=n("vkgz"),V=n("3E0/"),G=0,M=function(t,e){this.source=t,this.option=e},W=function(){},K=Object(a.B)(W),q=new o.p("mat-autocomplete-default-options",{providedIn:"root",factory:function(){return{autoActiveFirstOption:!1}}}),z=function(t){function e(e,n,i){var l=this;return(l=t.call(this)||this)._changeDetectorRef=e,l._elementRef=n,l.showPanel=!1,l._isOpen=!1,l.displayWith=null,l.optionSelected=new o.m,l.opened=new o.m,l.closed=new o.m,l._classList={},l.id="mat-autocomplete-"+G++,l._autoActiveFirstOption=!!i.autoActiveFirstOption,l}return __extends(e,t),Object.defineProperty(e.prototype,"isOpen",{get:function(){return this._isOpen&&this.showPanel},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"autoActiveFirstOption",{get:function(){return this._autoActiveFirstOption},set:function(t){this._autoActiveFirstOption=Object(x.b)(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"classList",{set:function(t){this._classList=t&&t.length?t.split(" ").reduce((function(t,e){return t[e.trim()]=!0,t}),{}):{},this._setVisibilityClasses(this._classList),this._elementRef.nativeElement.className=""},enumerable:!0,configurable:!0}),e.prototype.ngAfterContentInit=function(){this._keyManager=new O.a(this.options).withWrap(),this._setVisibility()},e.prototype._setScrollTop=function(t){this.panel&&(this.panel.nativeElement.scrollTop=t)},e.prototype._getScrollTop=function(){return this.panel?this.panel.nativeElement.scrollTop:0},e.prototype._setVisibility=function(){this.showPanel=!!this.options.length,this._setVisibilityClasses(this._classList),this._changeDetectorRef.markForCheck()},e.prototype._emitSelectEvent=function(t){var e=new M(this,t);this.optionSelected.emit(e)},e.prototype._setVisibilityClasses=function(t){t["mat-autocomplete-visible"]=this.showPanel,t["mat-autocomplete-hidden"]=!this.showPanel},e}(K),N=new o.p("mat-autocomplete-scroll-strategy");function H(t){return function(){return t.scrollStrategies.reposition()}}var X=function(){function t(t,e,n,o,i,l,a,r,s,u){var c=this;this._element=t,this._overlay=e,this._viewContainerRef=n,this._zone=o,this._changeDetectorRef=i,this._dir=a,this._formField=r,this._document=s,this._viewportRuler=u,this._componentDestroyed=!1,this._autocompleteDisabled=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=C.a.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new F.a,this._windowBlurHandler=function(){c._canOpenOnNextFocus=c._document.activeElement!==c._element.nativeElement||c.panelOpen},this._onChange=function(){},this._onTouched=function(){},this.position="auto",this.autocompleteAttribute="off",this._overlayAttached=!1,this.optionSelections=Object(j.a)((function(){return c.autocomplete&&c.autocomplete.options?Object(P.a).apply(void 0,__spread(c.autocomplete.options.map((function(t){return t.onSelectionChange})))):c._zone.onStable.asObservable().pipe(Object(E.a)(1),Object(I.a)((function(){return c.optionSelections})))})),this._scrollStrategy=l}return Object.defineProperty(t.prototype,"autocompleteDisabled",{get:function(){return this._autocompleteDisabled},set:function(t){this._autocompleteDisabled=Object(x.b)(t)},enumerable:!0,configurable:!0}),t.prototype.ngAfterViewInit=function(){var t=this;if("undefined"!=typeof window&&(this._zone.runOutsideAngular((function(){window.addEventListener("blur",t._windowBlurHandler)})),Object(u.d)())){var e=this._element.nativeElement,n=e.getRootNode?e.getRootNode():null;this._isInsideShadowRoot=n instanceof window.ShadowRoot}},t.prototype.ngOnChanges=function(t){t.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())},t.prototype.ngOnDestroy=function(){"undefined"!=typeof window&&window.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()},Object.defineProperty(t.prototype,"panelOpen",{get:function(){return this._overlayAttached&&this.autocomplete.showPanel},enumerable:!0,configurable:!0}),t.prototype.openPanel=function(){this._attachOverlay(),this._floatLabel()},t.prototype.closePanel=function(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this.autocomplete.closed.emit(),this.autocomplete._isOpen=this._overlayAttached=!1,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._componentDestroyed||this._changeDetectorRef.detectChanges())},t.prototype.updatePosition=function(){this._overlayAttached&&this._overlayRef.updatePosition()},Object.defineProperty(t.prototype,"panelClosingActions",{get:function(){var t=this;return Object(P.a)(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Object(R.a)((function(){return t._overlayAttached}))),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Object(R.a)((function(){return t._overlayAttached}))):Object(A.a)()).pipe(Object(B.a)((function(t){return t instanceof a.r?t:null})))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"activeOption",{get:function(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null},enumerable:!0,configurable:!0}),t.prototype._getOutsideClickStream=function(){var t=this;return Object(P.a)(Object(L.a)(this._document,"click"),Object(L.a)(this._document,"touchend")).pipe(Object(R.a)((function(e){var n=t._isInsideShadowRoot&&e.composedPath?e.composedPath()[0]:e.target,o=t._formField?t._formField._elementRef.nativeElement:null;return t._overlayAttached&&n!==t._element.nativeElement&&(!o||!o.contains(n))&&!!t._overlayRef&&!t._overlayRef.overlayElement.contains(n)})))},t.prototype.writeValue=function(t){var e=this;Promise.resolve(null).then((function(){return e._setTriggerValue(t)}))},t.prototype.registerOnChange=function(t){this._onChange=t},t.prototype.registerOnTouched=function(t){this._onTouched=t},t.prototype.setDisabledState=function(t){this._element.nativeElement.disabled=t},t.prototype._handleKeydown=function(t){var e=t.keyCode;if(e===D.e&&t.preventDefault(),this.activeOption&&e===D.d&&this.panelOpen)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){var n=this.autocomplete._keyManager.activeItem,o=e===D.n||e===D.b;this.panelOpen||e===D.m?this.autocomplete._keyManager.onKeydown(t):o&&this._canOpen()&&this.openPanel(),(o||this.autocomplete._keyManager.activeItem!==n)&&this._scrollToOption()}},t.prototype._handleInput=function(t){var e=t.target,n=e.value;"number"===e.type&&(n=""==n?null:parseFloat(n)),this._previousValue!==n&&(this._previousValue=n,this._onChange(n),this._canOpen()&&this._document.activeElement===t.target&&this.openPanel())},t.prototype._handleFocus=function(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(),this._floatLabel(!0)):this._canOpenOnNextFocus=!0},t.prototype._floatLabel=function(t){void 0===t&&(t=!1),this._formField&&"auto"===this._formField.floatLabel&&(t?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)},t.prototype._resetLabel=function(){this._manuallyFloatingLabel&&(this._formField.floatLabel="auto",this._manuallyFloatingLabel=!1)},t.prototype._scrollToOption=function(){var t=this.autocomplete._keyManager.activeItemIndex||0,e=Object(a.y)(t,this.autocomplete.options,this.autocomplete.optionGroups);if(0===t&&1===e)this.autocomplete._setScrollTop(0);else{var n=Object(a.z)(t+e,48,this.autocomplete._getScrollTop(),256);this.autocomplete._setScrollTop(n)}},t.prototype._subscribeToClosingActions=function(){var t=this,e=this._zone.onStable.asObservable().pipe(Object(E.a)(1)),n=this.autocomplete.options.changes.pipe(Object(T.a)((function(){return t._positionStrategy.reapplyLastPosition()})),Object(V.a)(0));return Object(P.a)(e,n).pipe(Object(I.a)((function(){var e=t.panelOpen;return t._resetActiveItem(),t.autocomplete._setVisibility(),t.panelOpen&&(t._overlayRef.updatePosition(),e!==t.panelOpen&&t.autocomplete.opened.emit()),t.panelClosingActions})),Object(E.a)(1)).subscribe((function(e){return t._setValueAndClose(e)}))},t.prototype._destroyPanel=function(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)},t.prototype._setTriggerValue=function(t){var e=this.autocomplete&&this.autocomplete.displayWith?this.autocomplete.displayWith(t):t,n=null!=e?e:"";this._formField?this._formField._control.value=n:this._element.nativeElement.value=n,this._previousValue=n},t.prototype._setValueAndClose=function(t){t&&t.source&&(this._clearPreviousSelectedOption(t.source),this._setTriggerValue(t.source.value),this._onChange(t.source.value),this._element.nativeElement.focus(),this.autocomplete._emitSelectEvent(t.source)),this.closePanel()},t.prototype._clearPreviousSelectedOption=function(t){this.autocomplete.options.forEach((function(e){e!=t&&e.selected&&e.deselect()}))},t.prototype._attachOverlay=function(){var t=this;if(!this.autocomplete)throw Error("Attempting to open an undefined instance of `mat-autocomplete`. Make sure that the id passed to the `matAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.");var e=this._overlayRef;e?(this._positionStrategy.setOrigin(this._getConnectedElement()),e.updateSize({width:this._getPanelWidth()})):(this._portal=new S.g(this.autocomplete.template,this._viewContainerRef),e=this._overlay.create(this._getOverlayConfig()),this._overlayRef=e,e.keydownEvents().subscribe((function(e){(e.keyCode===D.e||e.keyCode===D.n&&e.altKey)&&(t._resetActiveItem(),t._closeKeyEventStream.next(),e.stopPropagation(),e.preventDefault())})),this._viewportRuler&&(this._viewportSubscription=this._viewportRuler.change().subscribe((function(){t.panelOpen&&e&&e.updateSize({width:t._getPanelWidth()})})))),e&&!e.hasAttached()&&(e.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());var n=this.panelOpen;this.autocomplete._setVisibility(),this.autocomplete._isOpen=this._overlayAttached=!0,this.panelOpen&&n!==this.panelOpen&&this.autocomplete.opened.emit()},t.prototype._getOverlayConfig=function(){return new k.b({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir})},t.prototype._getOverlayPosition=function(){var t=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);return this._setStrategyPositions(t),this._positionStrategy=t,t},t.prototype._setStrategyPositions=function(t){var e={originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},n={originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-autocomplete-panel-above"};t.withPositions("above"===this.position?[n]:"below"===this.position?[e]:[e,n])},t.prototype._getConnectedElement=function(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element},t.prototype._getPanelWidth=function(){return this.autocomplete.panelWidth||this._getHostWidth()},t.prototype._getHostWidth=function(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width},t.prototype._resetActiveItem=function(){this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption?0:-1)},t.prototype._canOpen=function(){var t=this._element.nativeElement;return!t.readOnly&&!t.disabled&&!this._autocompleteDisabled},t}(),$=function(){},J=n("hOhj"),Y=n("ZwOa"),U=n("oapL"),Z=o.qb({encapsulation:2,styles:[".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}@media (-ms-high-contrast:active){.mat-autocomplete-panel{outline:solid 1px}}"],data:{}});function Q(t){return o.Kb(0,[(t()(),o.sb(0,0,[[2,0],["panel",1]],null,3,"div",[["class","mat-autocomplete-panel"],["role","listbox"]],[[8,"id",0]],null,null,null,null)),o.Fb(512,null,c.v,c.w,[o.r,o.s,o.k,o.D]),o.rb(2,278528,null,0,c.i,[c.v],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.Cb(null,0)],(function(t,e){t(e,2,0,"mat-autocomplete-panel",e.component._classList)}),(function(t,e){t(e,0,0,e.component.id)}))}function tt(t){return o.Kb(2,[o.Gb(402653184,1,{template:0}),o.Gb(671088640,2,{panel:0}),(t()(),o.hb(0,[[1,2]],null,0,null,Q))],null,null)}var et=n("bujt"),nt=n("Fwaw"),ot=n("wO+i"),it=n("UXun"),lt=n("JX91"),at=n("itXk"),rt=function(){function t(t,e){var n=this;this.router=t,this.route=e,this.what=new w.e("",w.p.compose([w.p.required,function(t){return"string"==typeof t.value?{type:!0}:null}])),this.layerGroups$=this.route.data.pipe(Object(ot.a)("capabilities"),Object(R.a)((function(t){return!!t})),Object(B.a)((function(t){return n.workLayers(t)})),Object(it.a)(1)),this.typingText$=this.what.valueChanges.pipe(Object(lt.a)(this.what.value),Object(B.a)((function(t){return t?"string"==typeof t?t.toLocaleLowerCase():(t.title||"").toLocaleLowerCase():""}))),this.options$=Object(at.a)([this.layerGroups$,this.typingText$]).pipe(Object(B.a)((function(t){var e=__read(t,2),n=e[0],o=e[1];return n.map((function(t){var e=t.items.filter((function(t){return-1!==t.title.toLocaleLowerCase().indexOf(o)}));return Object.assign({},t,{items:e})})).filter((function(t){return t.items.length}))})))}return Object.defineProperty(t.prototype,"stars",{set:function(t){var e=t.nativeElement;e.width=window.innerWidth,e.height=window.innerHeight},enumerable:!0,configurable:!0}),t.prototype.ngAfterViewInit=function(){new WorldWind.WorldWindow("stars").addLayer(new WorldWind.StarFieldLayer)},t.prototype.workLayers=function(t){var e,n,o=new Map;try{for(var i=__values(Array.from(t.querySelectorAll("Layer>Name"))),l=i.next();!l.done;l=i.next()){var a=l.value,r=a.parentElement,s=this.findGroup(r),u=o.get(s);u||o.set(s,u=[]),u.push({name:a.innerHTML,title:r.querySelector("Title").innerHTML})}}catch(c){e={error:c}}finally{try{l&&!l.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return Array.from(o.entries()).map((function(t){var e=__read(t,2);return{title:e[0],items:e[1]}}))},t.prototype.findGroup=function(t){var e=t.parentElement;if("Layer"!==e.parentElement.tagName)return"";var n=this.findGroup(e),o=e.querySelector("Title").innerHTML;return n?this.findGroup(e)+" - "+o:o},t.prototype.displayFn=function(t){return"string"==typeof t?t:t.title},t.prototype.go=function(t){this.router.navigateByUrl("/timelapse/"+t.name)},t}(),st=n("iInd"),ut=o.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;width:100vw;height:100vh;position:relative}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{top:0;position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;width:100vw}mat-form-field[_ngcontent-%COMP%]{max-width:500px;width:100%}"]],data:{}});function ct(t){return o.Kb(0,[(t()(),o.sb(0,0,null,null,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],(function(t,e,n){var i=!0;return"click"===e&&(i=!1!==o.Db(t,1)._selectViaInteraction()&&i),"keydown"===e&&(i=!1!==o.Db(t,1)._handleKeydown(n)&&i),i}),h,d)),o.rb(1,8568832,[[11,4]],0,a.p,[o.k,o.h,[2,a.j],[2,a.o]],{value:[0,"value"]},null),(t()(),o.Ib(2,0,[" "," "]))],(function(t,e){t(e,1,0,e.context.$implicit)}),(function(t,e){t(e,0,0,o.Db(e,1)._getTabIndex(),o.Db(e,1).selected,o.Db(e,1).multiple,o.Db(e,1).active,o.Db(e,1).id,o.Db(e,1)._getAriaSelected(),o.Db(e,1).disabled.toString(),o.Db(e,1).disabled),t(e,2,0,e.context.$implicit.title)}))}function pt(t){return o.Kb(0,[(t()(),o.sb(0,0,null,null,3,"mat-optgroup",[["class","mat-optgroup"],["role","group"]],[[2,"mat-optgroup-disabled",null],[1,"aria-disabled",0],[1,"aria-labelledby",0]],null,null,f,m)),o.rb(1,49152,[[12,4]],0,a.o,[],{label:[0,"label"]},null),(t()(),o.hb(16777216,null,1,1,null,ct)),o.rb(3,278528,null,0,c.j,[o.O,o.L,o.r],{ngForOf:[0,"ngForOf"]},null)],(function(t,e){t(e,1,0,e.context.$implicit.title),t(e,3,0,e.context.$implicit.items)}),(function(t,e){t(e,0,0,o.Db(e,1).disabled,o.Db(e,1).disabled.toString(),o.Db(e,1)._labelId)}))}function dt(t){return o.Kb(0,[o.Gb(402653184,1,{stars:0}),(t()(),o.sb(1,0,[[1,0],["stars",1]],null,0,"canvas",[["id","stars"]],null,null,null,null,null)),(t()(),o.sb(2,0,null,null,33,"div",[],null,null,null,null,null)),(t()(),o.sb(3,0,null,null,1,"h1",[],null,null,null,null,null)),(t()(),o.Ib(-1,null,["Earth: How did it change?"])),(t()(),o.sb(5,0,null,null,27,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,v.b,v.a)),o.rb(6,7520256,null,9,y.b,[o.k,o.h,[2,a.h],[2,r.b],[2,y.a],u.a,o.y,[2,p.a]],null,null),o.Gb(603979776,2,{_controlNonStatic:0}),o.Gb(335544320,3,{_controlStatic:0}),o.Gb(603979776,4,{_labelChildNonStatic:0}),o.Gb(335544320,5,{_labelChildStatic:0}),o.Gb(603979776,6,{_placeholderChild:0}),o.Gb(603979776,7,{_errorChildren:1}),o.Gb(603979776,8,{_hintChildren:1}),o.Gb(603979776,9,{_prefixChildren:1}),o.Gb(603979776,10,{_suffixChildren:1}),(t()(),o.sb(16,16777216,null,1,8,"input",[["class","mat-autocomplete-trigger mat-input-element mat-form-field-autofill-control"],["matInput",""],["placeholder","What"],["type","text"]],[[1,"autocomplete",0],[1,"role",0],[1,"aria-autocomplete",0],[1,"aria-activedescendant",0],[1,"aria-expanded",0],[1,"aria-owns",0],[1,"aria-haspopup",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focusin"],[null,"keydown"],[null,"focus"]],(function(t,e,n){var i=!0;return"input"===e&&(i=!1!==o.Db(t,17)._handleInput(n.target.value)&&i),"blur"===e&&(i=!1!==o.Db(t,17).onTouched()&&i),"compositionstart"===e&&(i=!1!==o.Db(t,17)._compositionStart()&&i),"compositionend"===e&&(i=!1!==o.Db(t,17)._compositionEnd(n.target.value)&&i),"focusin"===e&&(i=!1!==o.Db(t,18)._handleFocus()&&i),"blur"===e&&(i=!1!==o.Db(t,18)._onTouched()&&i),"input"===e&&(i=!1!==o.Db(t,18)._handleInput(n)&&i),"keydown"===e&&(i=!1!==o.Db(t,18)._handleKeydown(n)&&i),"blur"===e&&(i=!1!==o.Db(t,23)._focusChanged(!1)&&i),"focus"===e&&(i=!1!==o.Db(t,23)._focusChanged(!0)&&i),"input"===e&&(i=!1!==o.Db(t,23)._onInput()&&i),i}),null,null)),o.rb(17,16384,null,0,w.c,[o.D,o.k,[2,w.a]],null,null),o.rb(18,4866048,null,0,X,[o.k,k.a,o.O,o.y,o.h,N,[2,r.b],[2,y.b],[2,c.d],J.d],{autocomplete:[0,"autocomplete"]},null),o.Fb(1024,null,w.j,(function(t,e){return[t,e]}),[w.c,X]),o.rb(20,540672,null,0,w.f,[[8,null],[8,null],[6,w.j],[2,w.s]],{form:[0,"form"]},null),o.Fb(2048,null,w.k,null,[w.f]),o.rb(22,16384,null,0,w.l,[[4,w.k]],null,null),o.rb(23,999424,null,0,Y.a,[o.k,u.a,[6,w.k],[2,w.n],[2,w.i],a.b,[8,null],U.a,o.y],{placeholder:[0,"placeholder"],type:[1,"type"]},null),o.Fb(2048,[[2,4],[3,4]],y.c,null,[Y.a]),(t()(),o.sb(25,0,null,1,7,"mat-autocomplete",[["class","mat-autocomplete"]],null,null,null,tt,Z)),o.Fb(6144,null,a.j,null,[z]),o.rb(27,1097728,[["auto",4]],2,z,[o.h,o.k,q],{displayWith:[0,"displayWith"],autoActiveFirstOption:[1,"autoActiveFirstOption"]},null),o.Gb(603979776,11,{options:1}),o.Gb(603979776,12,{optionGroups:1}),(t()(),o.hb(16777216,null,0,2,null,pt)),o.rb(31,278528,null,0,c.j,[o.O,o.L,o.r],{ngForOf:[0,"ngForOf"]},null),o.Eb(131072,c.b,[o.h]),(t()(),o.sb(33,0,null,null,2,"button",[["color","primary"],["mat-button",""],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(t,e,n){var o=!0,i=t.component;return"click"===e&&(o=!1!==i.go(i.what.value)&&o),o}),et.d,et.b)),o.rb(34,180224,null,0,nt.b,[o.k,O.b,[2,p.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(t()(),o.Ib(-1,0,[" Show me what you got! "]))],(function(t,e){var n=e.component;t(e,18,0,o.Db(e,27)),t(e,20,0,n.what),t(e,23,0,"What","text"),t(e,27,0,n.displayFn,!0),t(e,31,0,o.Jb(e,31,0,o.Db(e,32).transform(n.options$))),t(e,34,0,!n.what.valid,"primary")}),(function(t,e){t(e,5,1,["standard"==o.Db(e,6).appearance,"fill"==o.Db(e,6).appearance,"outline"==o.Db(e,6).appearance,"legacy"==o.Db(e,6).appearance,o.Db(e,6)._control.errorState,o.Db(e,6)._canLabelFloat,o.Db(e,6)._shouldLabelFloat(),o.Db(e,6)._hasFloatingLabel(),o.Db(e,6)._hideControlPlaceholder(),o.Db(e,6)._control.disabled,o.Db(e,6)._control.autofilled,o.Db(e,6)._control.focused,"accent"==o.Db(e,6).color,"warn"==o.Db(e,6).color,o.Db(e,6)._shouldForward("untouched"),o.Db(e,6)._shouldForward("touched"),o.Db(e,6)._shouldForward("pristine"),o.Db(e,6)._shouldForward("dirty"),o.Db(e,6)._shouldForward("valid"),o.Db(e,6)._shouldForward("invalid"),o.Db(e,6)._shouldForward("pending"),!o.Db(e,6)._animationsEnabled]),t(e,16,1,[o.Db(e,18).autocompleteAttribute,o.Db(e,18).autocompleteDisabled?null:"combobox",o.Db(e,18).autocompleteDisabled?null:"list",o.Db(e,18).panelOpen&&o.Db(e,18).activeOption?o.Db(e,18).activeOption.id:null,o.Db(e,18).autocompleteDisabled?null:o.Db(e,18).panelOpen.toString(),o.Db(e,18).autocompleteDisabled||!o.Db(e,18).panelOpen?null:null==o.Db(e,18).autocomplete?null:o.Db(e,18).autocomplete.id,!o.Db(e,18).autocompleteDisabled,o.Db(e,22).ngClassUntouched,o.Db(e,22).ngClassTouched,o.Db(e,22).ngClassPristine,o.Db(e,22).ngClassDirty,o.Db(e,22).ngClassValid,o.Db(e,22).ngClassInvalid,o.Db(e,22).ngClassPending,o.Db(e,23)._isServer,o.Db(e,23).id,o.Db(e,23).placeholder,o.Db(e,23).disabled,o.Db(e,23).required,o.Db(e,23).readonly&&!o.Db(e,23)._isNativeSelect||null,o.Db(e,23)._ariaDescribedby||null,o.Db(e,23).errorState,o.Db(e,23).required.toString()]),t(e,33,0,o.Db(e,34).disabled||null,"NoopAnimations"===o.Db(e,34)._animationMode)}))}var bt=o.ob("app-home",rt,(function(t){return o.Kb(0,[(t()(),o.sb(0,0,null,null,1,"app-home",[],null,null,null,dt,ut)),o.rb(1,4243456,null,0,rt,[st.k,st.a],null,null)],null,null)}),{},{},[]),ht=n("POq0"),mt=n("Ei5L"),ft=function(){};n.d(e,"HomeModuleNgFactory",(function(){return _t}));var _t=o.pb(i,[],(function(t){return o.Ab([o.Bb(512,o.j,o.ab,[[8,[l.a,bt]],[3,o.j],o.w]),o.Bb(4608,c.m,c.l,[o.t,[2,c.A]]),o.Bb(4608,w.d,w.d,[]),o.Bb(4608,w.r,w.r,[]),o.Bb(4608,ht.c,ht.c,[]),o.Bb(4608,a.b,a.b,[]),o.Bb(4608,k.a,k.a,[k.g,k.c,o.j,k.f,k.d,o.q,o.y,c.d,r.b,[2,c.g]]),o.Bb(5120,k.h,k.i,[k.a]),o.Bb(5120,N,H,[k.a]),o.Bb(1073742336,c.c,c.c,[]),o.Bb(1073742336,st.m,st.m,[[2,st.r],[2,st.k]]),o.Bb(1073742336,ft,ft,[]),o.Bb(1073742336,w.q,w.q,[]),o.Bb(1073742336,w.o,w.o,[]),o.Bb(1073742336,u.b,u.b,[]),o.Bb(1073742336,U.c,U.c,[]),o.Bb(1073742336,ht.d,ht.d,[]),o.Bb(1073742336,y.d,y.d,[]),o.Bb(1073742336,Y.b,Y.b,[]),o.Bb(1073742336,r.a,r.a,[]),o.Bb(1073742336,a.l,a.l,[[2,a.d],[2,s.f]]),o.Bb(1073742336,a.v,a.v,[]),o.Bb(1073742336,nt.c,nt.c,[]),o.Bb(1073742336,a.t,a.t,[]),o.Bb(1073742336,a.q,a.q,[]),o.Bb(1073742336,S.f,S.f,[]),o.Bb(1073742336,J.b,J.b,[]),o.Bb(1073742336,k.e,k.e,[]),o.Bb(1073742336,$,$,[]),o.Bb(1073742336,i,i,[]),o.Bb(1024,st.i,(function(){return[[{path:"",component:rt,resolve:{capabilities:mt.a}}]]}),[])])}))}}]);