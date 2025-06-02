(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.module = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const events = {
    update: function(ui) {
        updatePlotVarsICCSupplier(ui, this);
    },

    onChange_item: function(ui) {
        updatePlotVarsICCSupplier(ui, this);
    },
    
    onUpdate_plotVarsSupplier: function(ui) {
        updatePlotVarsICCSupplier(ui, this);
    },
};

let updatePlotVarsICCSupplier = function(ui, context) {
    let b1 = context.cloneArray(ui.item.value(), []);
    b1 = context.valuesToItems(b1, FormatDef.variable);
    ui.plotVarsICCSupplier.setValue(b1);
};


module.exports = events;


},{}],2:[function(require,module,exports){

// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data","description":{"ui":"The raw data with rows as test takers and item, grouping, and matching variables as columns.\n","R":"The raw data with rows as test takers and item, grouping, and matching variables as columns\n"}},{"name":"item","title":"Items","type":"Variables","suggested":["continuous"],"permitted":["numeric"],"description":{"ui":"Items which are to be assessed for DIF.\n","R":"A vector of strings naming the item columns from `data` which are to be assessed for DIF\n"}},{"name":"group","title":"Grouping variable","type":"Variable","suggested":["nominal"],"permitted":["factor","numeric"],"description":{"ui":"The grouping variable.\n","R":"A string naming the grouping variable from `data`\n"}},{"name":"groupContrasts","title":"Contrast groups","type":"String"},{"name":"matchVar","title":"Matching variable","type":"Variable","suggested":["continuous"],"permitted":["numeric"],"description":{"ui":"The matching variable.\n","R":"A string naming the matching variable from `data`\n"}},{"name":"anchor","title":"Anchor item(s)","type":"Variables","suggested":["continuous"],"permitted":["numeric"],"description":{"ui":"The anchor items for use in purification. This will be ignored if an external matching variable is supplied.\n","R":"a vector of strings naming the anchor item columns from `data` for use in purification. This will be ignored if an external matching variable is supplied\n"}},{"name":"groupType","title":"Group type","type":"List","options":[{"name":"groupBin","title":"Discrete groups (n = 2)"},{"name":"groupNonBin","title":"Discrete groups (n > 2)"},{"name":"cont","title":"Continuous variable"}],"description":{"ui":"Either \"discrete\" (default) to specify that group membership is made of two (or more than two) groups, or \"continuous\" to indicate that group membership is based on a continuous criterion.\n","R":"Either \"discrete\" (default) to specify that group membership is made of two (or more than two) groups, or \"continuous\" to indicate that group membership is based on a continuous criterion.\n"}},{"name":"difFlagScale","title":"Evaluation scale","type":"List","options":[{"name":"zt","title":"Zumbo-Thomas"},{"name":"jg","title":"Jodoin-Gierl"}],"description":{"ui":"The effect size criterion scale to be used in assigning 'level' to flagged items.\n","R":"The effect size criterion scale to be used in assigning 'level' to flagged items\n"}},{"name":"designAnalysis","type":"Bool","title":"Design analysis","default":false,"description":{"ui":"True/False, perform a design analysis. NB: Computationally intensive.\n","R":"True/False, perform a design analysis. NB: Computationally intensive\n"}},{"name":"designAnalysisEffectType","type":"List","title":"Effect type","options":[{"name":"nagR2","title":"Δ Naeglekirke R²"},{"name":"coefficients","title":"Regression Coefficients"}],"default":"nagR2","description":{"ui":"In progress\n","R":"In progress\n"}},{"name":"designAnalysisSigOnly","type":"Bool","title":"Flagged items only","default":true,"description":{"ui":"True/False, should only items which have been flagged for exhibitting DIF be considered in the Design Analysis?\n","R":"True/False, should only items which have been flagged for exhibitting DIF be considered in the Design Analysis?\n"}},{"name":"bootSims","title":"Bootstrap N","type":"Number","default":1000,"description":{"ui":"Number of bootstrap simulations to perform.\n","R":"Number of bootstrap simulations to perform\n"}},{"name":"power","type":"Bool","title":"Empirical observed power","default":false,"description":{"ui":"True/False, display the empirical observed power.","R":"True/False, display the empirical observed power\n"}},{"name":"D","title":"Hypothesized true effect size","type":"String","default":"","description":{"ui":"A character string indicating the hypothesized True Effect to be used in Design Analysis. Left blank will default to the category thresholds of the DIF scale selected.\n","R":"A character string indicating the hypothesized True Effect to be used in Design Analysis. Left blank will default to the category thresholds of the DIF scale selected\n"}},{"name":"type","title":"Type","type":"List","options":[{"name":"udif","title":"Uniform DIF"},{"name":"nudif","title":"Non-Uniform DIF"},{"name":"both","title":"Uniform and Non-Uniform DIF"}],"default":"both","description":{"ui":"A character string specifying which DIF effects must be tested. Possible values are \"both\" (default), \"udif\" and \"nudif\".\n","R":"A character string specifying which DIF effects must be tested. Possible values are \"both\" (default), \"udif\" and \"nudif\"\n"}},{"name":"criterion","title":"Flagging criterion","type":"List","options":[{"name":"Wald","title":"Wald Statistic"},{"name":"LRT","title":"Likelihood Ratio Test"}],"description":{"ui":"A character string specifying which DIF statistic is computed. Possible values are \"LRT\" (default) or \"Wald\".\n","R":"A character string specifying which DIF statistic is computed. Possible values are \"LRT\" (default) or \"Wald\"\n"}},{"name":"nagEff","title":"Naeglekirke R²","type":"Bool","default":true},{"name":"coeffEff","title":"Regression coefficients","type":"Bool","default":false},{"name":"alpha","title":"Alpha","type":"Number","default":0.05,"description":{"ui":"Significance level.\n","R":"Significance level\n"}},{"name":"purify","title":"Item purification","type":"Bool","default":false,"description":{"ui":"Should the method be used iteratively to purify the set of anchor items? (default is FALSE). Ignored if an external matching variable is supplied.\n","R":"Should the method be used iteratively to purify the set of anchor items? (default is FALSE). Ignored if an external matching variable is supplied\n"}},{"name":"nIter","title":"Number of iterations","type":"Number","default":10,"description":{"ui":"The maximal number of iterations in the item purification process. (default is 10).\n","R":"The maximal number of iterations in the item purification process. (default is 10)\n"}},{"name":"pAdjustMethod","title":"P-value adjustment","type":"List","options":[{"name":"bonferroni","title":"Bonferroni"},{"name":"holm","title":"Holm"},{"name":"hochberg","title":"Hochberg"},{"name":"hommel","title":"Hommel"},{"name":"BH","title":"Benjamini-Hochberg"},{"name":"BY","title":"Benjamini-Yekutieli"},{"name":"none","title":"None"}],"default":"none","description":{"ui":"Either none (default) or the acronym of the method for p-value adjustment for multiple comparisons\n","R":"Either none (default) or the acronym of the method for p-value adjustment for multiple comparisons.\n"}},{"name":"plotVarsICC","type":"Variables","description":{"ui":"Items for plotting Item Response Curves.\n","R":"A vector of strings naming the item columns for plotting Item Response Curves\n"}}];

const view = function() {
    
    

    View.extend({
        jus: "2.0",

        events: [

	],

	update: require('./glmdif.events').update

    }).call(this);
}

view.layout = ui.extend({

    label: "Binary Differential Item Functioning",
    jus: "2.0",
    type: "root",
    stage: 0, //0 - release, 1 - development, 2 - proposed
    controls: [
		{
			type: DefaultControls.VariableSupplier,
			typeName: 'VariableSupplier',
			name: "itemSupplier",
			label: "Data variables",
			persistentItems: false,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.TargetLayoutBox,
					typeName: 'TargetLayoutBox',
					label: "Item(s) for Analysis",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "item",
							isTarget: true,
							events: [
								{ execute: require('./glmdif.events').onChange_item }
							]
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					typeName: 'TargetLayoutBox',
					label: "Anchor Items",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "anchor",
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					typeName: 'TargetLayoutBox',
					label: "Matching Variable",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "matchVar",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					typeName: 'TargetLayoutBox',
					label: "Grouping Variable",
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
			type: DefaultControls.CollapseBox,
			typeName: 'CollapseBox',
			label: "DIF Analysis",
			margin: "normal",
			collapsed: true,
			controls: [
				{
					type: DefaultControls.LayoutBox,
					typeName: 'LayoutBox',
					stretchFactor: 1,
					margin: "large",
					controls: [
						{
							type: DefaultControls.Label,
							typeName: 'Label',
							label: "Analysis",
							fitToGrid: true,
							cell: {"column":0,"row":0},
							controls: [
								{
									type: DefaultControls.ComboBox,
									typeName: 'ComboBox',
									name: "type"
								},
								{
									type: DefaultControls.ComboBox,
									typeName: 'ComboBox',
									name: "criterion"
								},
								{
									type: DefaultControls.ComboBox,
									typeName: 'ComboBox',
									name: "difFlagScale"
								},
								{
									type: DefaultControls.TextBox,
									typeName: 'TextBox',
									name: "alpha",
									format: FormatDef.number
								},
								{
									type: DefaultControls.ComboBox,
									typeName: 'ComboBox',
									name: "pAdjustMethod"
								}
							]
						},
						{
							type: DefaultControls.Label,
							typeName: 'Label',
							label: "Grouping variable",
							fitToGrid: true,
							cell: {"column":0,"row":1},
							controls: [
								{
									name: "groupType_cont",
									type: DefaultControls.RadioButton,
									typeName: 'RadioButton',
									optionName: "groupType",
									optionPart: "cont"
								},
								{
									type: DefaultControls.RadioButton,
									typeName: 'RadioButton',
									name: "groupType_binary",
									optionName: "groupType",
									optionPart: "groupBin",
									label: "Discrete groups (n = 2)"
								},
								{
									type: DefaultControls.RadioButton,
									typeName: 'RadioButton',
									name: "groupType_nonBinary",
									optionName: "groupType",
									optionPart: "groupNonBin",
									label: "Discrete groups (n > 2)",
									controls: [
										{
											type: DefaultControls.TextBox,
											typeName: 'TextBox',
											name: "groupContrasts",
											format: FormatDef.string,
											enable: "(groupType:groupNonBin)"
										}
									]
								}
							]
						},
						{
							type: DefaultControls.Label,
							typeName: 'Label',
							label: "Effect type",
							fitToGrid: true,
							cell: {"column":0,"row":2},
							controls: [
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "nagEff"
								},
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "coeffEff"
								}
							]
						},
						{
							type: DefaultControls.Label,
							typeName: 'Label',
							label: "Purification",
							fitToGrid: true,
							cell: {"column":0,"row":3},
							controls: [
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "purify",
									enable: "(anchor)",
									controls: [
										{
											type: DefaultControls.TextBox,
											typeName: 'TextBox',
											name: "nIter",
											format: FormatDef.number,
											enable: "(purify)"
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
			label: "Design Analysis",
			margin: "normal",
			collapsed: true,
			controls: [
				{
					type: DefaultControls.LayoutBox,
					typeName: 'LayoutBox',
					stretchFactor: 1,
					margin: "large",
					controls: [
						{
							type: DefaultControls.Label,
							typeName: 'Label',
							label: "Analysis | Computationally Instensive",
							fitToGrid: true,
							cell: {"column":0,"row":0},
							controls: [
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "designAnalysis"
								},
								{
									type: DefaultControls.ComboBox,
									typeName: 'ComboBox',
									name: "designAnalysisEffectType"
								},
								{
									type: DefaultControls.TextBox,
									typeName: 'TextBox',
									name: "D",
									format: FormatDef.string
								},
								{
									type: DefaultControls.TextBox,
									typeName: 'TextBox',
									name: "bootSims",
									format: FormatDef.number
								}
							]
						},
						{
							type: DefaultControls.Label,
							typeName: 'Label',
							label: "Advanced",
							fitToGrid: true,
							cell: {"column":0,"row":1},
							controls: [
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "designAnalysisSigOnly"
								},
								{
									type: DefaultControls.LayoutBox,
									typeName: 'LayoutBox',
									margin: "large",
									controls: [
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "power"
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
			label: "Item Response Curves",
			margin: "normal",
			collapsed: true,
			controls: [
				{
					type: DefaultControls.VariableSupplier,
					typeName: 'VariableSupplier',
					name: "plotVarsICCSupplier",
					populate: "manual",
					persistentItems: false,
					stretchFactor: 1,
					events: [
						{ onEvent: 'update', execute: require('./glmdif.events').onUpdate_plotVarsSupplier }
					],
					controls: [
						{
							type: DefaultControls.TargetLayoutBox,
							typeName: 'TargetLayoutBox',
							controls: [
								{
									type: DefaultControls.VariablesListBox,
									typeName: 'VariablesListBox',
									name: "plotVarsICC",
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

},{"./glmdif.events":1}]},{},[2])(2)
});
