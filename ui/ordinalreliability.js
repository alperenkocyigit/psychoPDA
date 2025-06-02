(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.module = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"items","title":"Items","type":"Variables"},{"name":"alphaTable","type":"Bool","title":"Alpha","default":false},{"name":"thetaTable","type":"Bool","title":"Theta","default":false},{"name":"omegaTable","type":"Bool","title":"Omega","default":false},{"name":"guttmanTable","type":"Bool","title":"Guttman","default":false},{"name":"polyTable","type":"Bool","title":"Polychoric matrix","default":false},{"name":"omegaPlot","type":"Bool","title":"Omega Factor Analysis"}];

const view = function() {
    
    this.handlers = { }

    View.extend({
        jus: "3.0",

        events: [

	]

    }).call(this);
}

view.layout = ui.extend({

    label: "Ordinal Reliability",
    jus: "3.0",
    type: "root",
    stage: 0, //0 - release, 1 - development, 2 - proposed
    controls: [
		{
			type: DefaultControls.VariableSupplier,
			typeName: 'VariableSupplier',
			persistentItems: false,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.TargetLayoutBox,
					typeName: 'TargetLayoutBox',
					label: "Items",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "items",
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.LayoutBox,
					typeName: 'LayoutBox',
					stretchFactor: 1,
					margin: "large",
					style: "inline",
					controls: [
						{
							type: DefaultControls.Label,
							typeName: 'Label',
							label: "Ordinal Reliability Types",
							controls: [
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "alphaTable"
								},
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "omegaTable"
								},
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "thetaTable"
								},
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "guttmanTable"
								}
							]
						}
					]
				},
				{
					type: DefaultControls.LayoutBox,
					typeName: 'LayoutBox',
					stretchFactor: 1,
					margin: "large",
					controls: [
						{
							type: DefaultControls.Label,
							typeName: 'Label',
							label: "Visualization",
							controls: [
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "polyTable"
								},
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "omegaPlot"
								}
							]
						}
					]
				}
			]
		}
	]
});

module.exports = { view : view, options: options };

},{}]},{},[1])(1)
});
