"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const path = require("path");
const vscode = require("vscode");
const extId = 'unotes';

exports.ExtId = extId;

exports.GlobalState = {
    UnotesVersion: 'Unotes.Version'
}

exports.Utils = {

  context: null,

  stripMD(str){
    const pos = str.toUpperCase().lastIndexOf('.MD');
    if(pos<0){
      return str;
    }
    return str.substring(0, pos);
  }

} // Utils

class UnotesConfig {
  constructor() {
    if(!vscode.workspace.rootPath){
      return;
    }

    this.settings = vscode.workspace.getConfiguration(extId);    
    this.rootPath = this.settings.get('rootPath', vscode.workspace.rootPath);
    if(!this.rootPath){
        this.rootPath = vscode.workspace.rootPath;
    }
    this.folderPath = path.join(this.rootPath, './.unotes');

    // setting change events
    this._onDidChange_editor_settings = new vscode.EventEmitter();
    this.onDidChange_editor_settings = this._onDidChange_editor_settings.event;
  }



  onChange(e){
    if(e.affectsConfiguration(extId)){
      this.settings = vscode.workspace.getConfiguration(extId);
      // fire events
      const editorPath = extId + '.editor';
      if(e.affectsConfiguration(editorPath)){
        this._onDidChange_editor_settings.fire();
        if(e.affectsConfiguration(editorPath + '.display2X')){
          //console.log(this.settings.get('editor'));
          //console.log(`display2X==${this.settings.get('editor.display2X')}`);
        }
      }
    }      
  }

} // UnotesConfig

exports.Config = new UnotesConfig();