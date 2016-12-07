!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r=t("object"==typeof exports?require("react"):e.react);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/static/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(1),c=n(u),f=function(e){function t(e,r){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return n.onDrop=n.onDrop.bind(n),n.onDragEnter=n.onDragEnter.bind(n),n.onDragLeave=n.onDragLeave.bind(n),n.openFileChooser=n.openFileChooser.bind(n),n.id=1,n.state={files:[]},n}return s(t,e),p(t,[{key:"onDrop",value:function(e){var t=this;e.preventDefault(),this.onDragLeave(e);var r=e.dataTransfer?e.dataTransfer.files:e.target.files;this.props.multiple===!1&&r.length>1&&(r=[r[0]]);for(var n=[],i=0;i<r.length;i++){var a=r[i];if(a.id="files-"+this.id++,a.extension=this.fileExtension(a),a.sizeReadable=this.fileSizeReadable(a.size),a.type&&"image"===this.mimeTypeLeft(a.type)?a.preview={type:"image",url:window.URL.createObjectURL(a)}:a.preview={type:"file"},this.state.files.length+n.length>=this.props.maxFiles){this.onError({code:4,message:"maximum file count reached"},a);break}this.fileTypeAcceptable(a)&&this.fileSizeAcceptable(a)&&n.push(a)}this.setState({files:this.props.multiple===!1?n:[].concat(o(this.state.files),n)},function(){t.props.onChange.call(t,t.state.files)})}},{key:"onDragOver",value:function(e){e.preventDefault(),e.stopPropagation()}},{key:"onDragEnter",value:function(e){var t=document.getElementsByClassName(this.props.className)[0];t.className+=" "+this.props.dropActiveClassName}},{key:"onDragLeave",value:function(e){var t=document.getElementsByClassName(this.props.className)[0];t.className=t.className.replace(" "+this.props.dropActiveClassName,"")}},{key:"openFileChooser",value:function(){this.inputElement.value=null,this.inputElement.click()}},{key:"fileTypeAcceptable",value:function(e){var t=this.props.accepts;if(t){if(e.type)for(var r=this.mimeTypeLeft(e.type),n=this.mimeTypeRight(e.type),o=0;o<t.length;o++){var i=t[o],a=i.split("/")[0],s=i.split("/")[1];if(a&&s){if(a===r&&"*"===s)return!0;if(a===r&&s===n)return!0}}return this.onError({code:1,message:e.name+" is not a valid file type"},e),!1}return!0}},{key:"fileSizeAcceptable",value:function(e){return e.size>this.props.maxFileSize?(this.onError({code:2,message:e.name+" is too large"},e),!1):e.size<this.props.minFileSize?(this.onError({code:3,message:e.name+" is too small"},e),!1):!0}},{key:"mimeTypeLeft",value:function(e){return e.split("/")[0]}},{key:"mimeTypeRight",value:function(e){return e.split("/")[1]}},{key:"fileExtension",value:function(e){var t=e.name.split(".");return t.length>1?t[t.length-1]:"none"}},{key:"fileSizeReadable",value:function(e){return e>=1e9?Math.ceil(e/1e9)+"GB":e>=1e6?Math.ceil(e/1e6)+"MB":e>=1e3?Math.ceil(e/1e3)+"kB":Math.ceil(e)+"B"}},{key:"onError",value:function(e,t){this.props.onError.call(this,e,t)}},{key:"removeFile",value:function(e){var t=this;this.setState({files:this.state.files.filter(function(t){return t.id!==e.id})},function(){t.props.onChange.call(t,t.state.files)})}},{key:"removeFiles",value:function(){var e=this;this.setState({files:[]},function(){e.props.onChange.call(e,e.state.files)})}},{key:"render",value:function(){var e=this,t={type:"file",accept:this.props.accepts?this.props.accepts.join():"",multiple:this.props.multiple,style:{display:"none"},ref:function(t){e.inputElement=t},onChange:this.onDrop};return c["default"].createElement("div",null,c["default"].createElement("input",t),c["default"].createElement("div",l({className:this.props.className,onClick:this.props.clickable===!0?this.openFileChooser:null,onDrop:this.onDrop,onDragOver:this.onDragOver,onDragEnter:this.onDragEnter,onDragLeave:this.onDragLeave},this.props),this.props.children))}}]),t}(c["default"].Component);f.propTypes={children:c["default"].PropTypes.oneOfType([c["default"].PropTypes.arrayOf(c["default"].PropTypes.node),c["default"].PropTypes.node]),className:c["default"].PropTypes.string.isRequired,dropActiveClassName:c["default"].PropTypes.string,onChange:c["default"].PropTypes.func,onError:c["default"].PropTypes.func,accepts:c["default"].PropTypes.array,multiple:c["default"].PropTypes.bool,maxFiles:c["default"].PropTypes.number,maxFileSize:c["default"].PropTypes.number,minFileSize:c["default"].PropTypes.number,clickable:c["default"].PropTypes.bool},f.defaultProps={onChange:function(e){console.log(e)},onError:function(e,t){console.log("error code "+e.code+": "+e.message)},className:"files-dropzone",dropActiveClassName:"files-dropzone-active",accepts:null,multiple:!0,maxFiles:1/0,maxFileSize:1/0,minFileSize:0,clickable:!0},t["default"]=f},function(t,r){t.exports=e}])});