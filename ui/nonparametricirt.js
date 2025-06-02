(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.module = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data"},{"name":"item","title":"Responses","type":"Variables","suggested":["continuous"],"permitted":["numeric"]},{"name":"group","title":"Participant group","type":"Variable","suggested":["ordinal"],"permitted":["factor"]},{"name":"format","title":"Item Format","type":"List","options":[{"title":"Binary","name":"formatMC"},{"title":"Rating-scale","name":"formatPartial"},{"title":"Nominal","name":"formatNominal"}],"default":"formatMC"},{"name":"miss","title":"Missing responses","type":"List","options":[{"title":"Permitted","name":"option"},{"title":"Random fill uniform","name":"random.unif"},{"title":"Random fill multinomial","name":"random.multinom"},{"title":"Omit","name":"omit"}],"default":"option"},{"name":"NAweight","type":"Number","title":"Missing Response Weight","min":0,"max":1,"default":0},{"name":"OCCoption","type":"String","title":"Option Characteristic Curve | Option","default":"1"},{"name":"itemPlotOCC","title":"Option Characteristic Curve","type":"Bool","default":false},{"name":"itemPlotEIS","title":"Expected Item Score","type":"Bool","default":false},{"name":"itemPlotOCCDIF","title":"Option Characteristic Curve","type":"Bool","default":false},{"name":"itemPlotEISDIF","title":"Expected Item Score","type":"Bool","default":false},{"name":"pairwisePlotsDIF","title":"Pairwise","type":"Bool","default":false},{"name":"itemPlotSupplier","type":"Variables","title":"Items"},{"name":"axisTypeTest","title":"X-Axis","type":"List","options":[{"title":"Theta distribution","name":"distribution"},{"title":"Expected total score","name":"score"}],"default":"score"},{"name":"axisTypeItem","title":"X-Axis","type":"List","options":[{"title":"Theta distribution","name":"distribution"},{"title":"Expected total score","name":"score"}],"default":"score"},{"name":"testPlotDensityDIF","title":"Density - DIF","type":"Bool","default":false},{"name":"testPlotExpectedDIF","title":"Expected - DIF","type":"Bool","default":false},{"name":"testPlotSDDIF","title":"Standard Deviation - DIF","type":"Bool","default":false},{"name":"testPlotDensity","title":"Density","type":"Bool","default":false},{"name":"testPlotExpected","title":"Expected","type":"Bool","default":false},{"name":"testPlotSD","title":"Standard Deviation","type":"Bool","default":false},{"name":"resTable","title":"Polyserial Item-Total Correlation","type":"Bool","default":false}];

const view = function() {
    
    this.handlers = { }

    View.extend({
        jus: "3.0",

        events: [

	]

    }).call(this);
}

view.layout = ui.extend({

    label: "Non-Parametric IRT",
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
					label: "Responses",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "item",
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					typeName: 'TargetLayoutBox',
					label: "Participant group",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "group",
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
					type: DefaultControls.CheckBox,
					typeName: 'CheckBox',
					name: "resTable"
				}
			]
		},
		{
			type: DefaultControls.CollapseBox,
			typeName: 'CollapseBox',
			label: "Response Parameters",
			margin: "normal",
			collapsed: true,
			controls: [
				{
					type: DefaultControls.LayoutBox,
					typeName: 'LayoutBox',
					margin: "large",
					controls: [
						{
							type: DefaultControls.ComboBox,
							typeName: 'ComboBox',
							name: "format"
						},
						{
							type: DefaultControls.ComboBox,
							typeName: 'ComboBox',
							name: "miss"
						},
						{
							type: DefaultControls.TextBox,
							typeName: 'TextBox',
							name: "NAweight",
							format: FormatDef.number
						}
					]
				}
			]
		},
		{
			type: DefaultControls.CollapseBox,
			typeName: 'CollapseBox',
			label: "Test Plots",
			margin: "normal",
			collapsed: true,
			controls: [
				{
					type: DefaultControls.LayoutBox,
					typeName: 'LayoutBox',
					margin: "large",
					controls: [
						{
							type: DefaultControls.ComboBox,
							typeName: 'ComboBox',
							name: "axisTypeTest"
						}
					]
				},
				{
					type: DefaultControls.LayoutBox,
					typeName: 'LayoutBox',
					margin: "large",
					style: "inline",
					controls: [
						{
							type: DefaultControls.Label,
							typeName: 'Label',
							label: "Full model",
							controls: [
								{
									type: DefaultControls.LayoutBox,
									typeName: 'LayoutBox',
									margin: "large",
									controls: [
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "testPlotDensity"
										},
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "testPlotExpected"
										},
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "testPlotSD"
										}
									]
								}
							]
						},
						{
							type: DefaultControls.Label,
							typeName: 'Label',
							label: "DIF models",
							controls: [
								{
									type: DefaultControls.LayoutBox,
									typeName: 'LayoutBox',
									margin: "large",
									controls: [
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "testPlotDensityDIF"
										},
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "testPlotExpectedDIF"
										},
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "testPlotSDDIF"
										}
									]
								}
							]
						}
					]
				}
			]
		},
		{
			type: DefaultControls.CollapseBox,
			typeName: 'CollapseBox',
			label: "Item Plots",
			margin: "normal",
			collapsed: true,
			controls: [
				{
					type: DefaultControls.LayoutBox,
					typeName: 'LayoutBox',
					margin: "large",
					style: "inline",
					controls: [
						{
							type: DefaultControls.ComboBox,
							typeName: 'ComboBox',
							name: "axisTypeItem"
						},
						{
							type: DefaultControls.Label,
							typeName: 'Label',
							label: "Full model",
							controls: [
								{
									type: DefaultControls.LayoutBox,
									typeName: 'LayoutBox',
									margin: "large",
									controls: [
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "itemPlotOCC"
										},
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "itemPlotEIS"
										}
									]
								}
							]
						},
						{
							type: DefaultControls.Label,
							typeName: 'Label',
							label: "DIF models",
							controls: [
								{
									type: DefaultControls.LayoutBox,
									typeName: 'LayoutBox',
									margin: "large",
									controls: [
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "itemPlotOCCDIF"
										},
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "itemPlotEISDIF"
										},
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "pairwisePlotsDIF"
										}
									]
								}
							]
						}
					]
				},
				{
					type: DefaultControls.LayoutBox,
					typeName: 'LayoutBox',
					margin: "large",
					style: "list",
					controls: [
						{
							type: DefaultControls.TextBox,
							typeName: 'TextBox',
							name: "OCCoption",
							format: FormatDef.string
						}
					]
				},
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
									name: "itemPlotSupplier",
									isTarget: true
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
