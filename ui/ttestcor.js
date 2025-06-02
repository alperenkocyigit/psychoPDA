(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.module = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"labelVar","title":"Label","type":"Variable","suggested":["nominal"]},{"name":"hypTrueCor","title":"Hypothesised True Correlation","type":"Variable","suggested":["continuous"],"permitted":["numeric"]},{"name":"observedSE","title":"Observed Standard Error","type":"Variable","suggested":["continuous"],"permitted":["numeric"]},{"name":"observedCor","title":"Observed Correlation","type":"Variable","suggested":["continuous"],"permitted":["numeric"]},{"name":"n","title":"N","type":"Variable","suggested":["continuous"],"permitted":["numeric"]},{"name":"alpha","type":"Number","title":"Alpha","default":0.05},{"name":"sensHyp","title":"Sensitivity - Hypothesized True Effect","type":"Bool","default":true},{"name":"sensN","title":"Sensitivity - Sample Size","type":"Bool","default":true},{"name":"sensObs","title":"Sensitivity - Observed Correlation","type":"Bool","default":true},{"name":"HTEViz","title":"Sensitivity - Scatter Viz HTE","type":"Bool","default":false},{"name":"bootSims","type":"Number","title":"Number of Simulations","default":10000},{"name":"lengthOut","type":"Number","title":"lengthOut","default":1000},{"name":"corType","title":"Correlation Type","type":"List","options":[{"name":"pearson","title":"Pearson"},{"name":"spearman","title":"Spearman"}]}];

const view = function() {
    
    this.handlers = { }

    View.extend({
        jus: "3.0",

        events: [

	]

    }).call(this);
}

view.layout = ui.extend({

    label: "T-Test for Correlations",
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
					label: "Label",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "labelVar",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					typeName: 'TargetLayoutBox',
					label: "Hypothesised True Correlation",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "hypTrueCor",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					typeName: 'TargetLayoutBox',
					label: "Observed Standard Error",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "observedSE",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					typeName: 'TargetLayoutBox',
					label: "Observed Correlation",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "observedCor",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					typeName: 'TargetLayoutBox',
					label: "N",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "n",
							maxItemCount: 1,
							isTarget: true
						}
					]
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			typeName: 'LayoutBox',
			margin: "large",
			controls: [
				{
					type: DefaultControls.TextBox,
					typeName: 'TextBox',
					name: "alpha",
					format: FormatDef.number
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			typeName: 'LayoutBox',
			margin: "large",
			controls: [
				{
					type: DefaultControls.CheckBox,
					typeName: 'CheckBox',
					name: "sensHyp"
				},
				{
					type: DefaultControls.CheckBox,
					typeName: 'CheckBox',
					name: "sensN"
				},
				{
					type: DefaultControls.CheckBox,
					typeName: 'CheckBox',
					name: "sensObs"
				},
				{
					type: DefaultControls.CheckBox,
					typeName: 'CheckBox',
					name: "HTEViz"
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			typeName: 'LayoutBox',
			margin: "large",
			controls: [
				{
					type: DefaultControls.TextBox,
					typeName: 'TextBox',
					name: "bootSims",
					format: FormatDef.number
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			typeName: 'LayoutBox',
			margin: "large",
			controls: [
				{
					type: DefaultControls.TextBox,
					typeName: 'TextBox',
					name: "lengthOut",
					format: FormatDef.number
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			typeName: 'LayoutBox',
			margin: "large",
			controls: [
				{
					type: DefaultControls.ComboBox,
					typeName: 'ComboBox',
					name: "corType"
				}
			]
		}
	]
});

module.exports = { view : view, options: options };

},{}]},{},[1])(1)
});
