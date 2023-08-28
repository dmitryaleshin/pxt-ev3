"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FieldColorEnum=void 0;class FieldColorEnum extends pxtblockly.FieldColorNumber{constructor(o,r,e){super(o,r,e),this.isFieldCustom_=!0,this.paramsData=r.data}mapColour(o){switch(o){case"#000000":return"ColorSensorColor.Black";case"#006db3":return"ColorSensorColor.Blue";case"#00934b":return"ColorSensorColor.Green";case"#ffd01b":return"ColorSensorColor.Yellow";case"#f12a21":return"ColorSensorColor.Red";case"#ffffff":return"ColorSensorColor.White";case"#6c2d00":return"ColorSensorColor.Brown";default:return"ColorSensorColor.None"}}mapEnum(o){switch(o){case"ColorSensorColor.Black":return"#000000";case"ColorSensorColor.Blue":return"#006db3";case"ColorSensorColor.Green":return"#00934b";case"ColorSensorColor.Yellow":return"#ffd01b";case"ColorSensorColor.Red":return"#f12a21";case"ColorSensorColor.White":return"#ffffff";case"ColorSensorColor.Brown":return"#6c2d00";case"ColorSensorColor.None":return"#dfe6e9";default:return o}}showEditor_(){super.showEditor_(),document.querySelectorAll(".legoColorPicker td").forEach(o=>{const r=this.mapColour(o.getAttribute("title"));var e=this.paramsData.findIndex(o=>o[1]===r);o.setAttribute("title",this.paramsData[e][0])})}getValue(o){var r=this.mapColour(this.value_);return!o&&-1<r.indexOf("#")?"0x"+r.replace(/^#/,""):r}setValue(o){o=this.mapEnum(o);this.sourceBlock_&&Blockly.Events.isEnabled()&&this.value_!=o&&Blockly.Events.fire(new Blockly.Events.BlockChange(this.sourceBlock_,"field",this.name,this.value_,o)),this.value_=o,this.sourceBlock_&&this.sourceBlock_.setColour(o)}}exports.FieldColorEnum=FieldColorEnum;