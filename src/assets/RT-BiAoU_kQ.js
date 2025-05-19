import{Z as Ce,W as ge}from"./index-Dju9e0Mk.js";import{u as e}from"./util-CASLgOZv.js";import{h as Ie}from"./http-Cr7o0t0N.js";function ye(f){throw new Error('Could not dynamically require "'+f+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ve={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(f,t){(function(a){f.exports=a()})(function(){return function a(n,r,i){function o(g,F){if(!r[g]){if(!n[g]){var A=typeof ye=="function"&&ye;if(!F&&A)return A(g,!0);if(u)return u(g,!0);var N=new Error("Cannot find module '"+g+"'");throw N.code="MODULE_NOT_FOUND",N}var m=r[g]={exports:{}};n[g][0].call(m.exports,function(I){var c=n[g][1][I];return o(c||I)},m,m.exports,a,n,r,i)}return r[g].exports}for(var u=typeof ye=="function"&&ye,d=0;d<i.length;d++)o(i[d]);return o}({1:[function(a,n,r){var i=a("./utils"),o=a("./support"),u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(d){for(var g,F,A,N,m,I,c,p=[],_=0,$=d.length,y=$,b=i.getTypeOf(d)!=="string";_<d.length;)y=$-_,A=b?(g=d[_++],F=_<$?d[_++]:0,_<$?d[_++]:0):(g=d.charCodeAt(_++),F=_<$?d.charCodeAt(_++):0,_<$?d.charCodeAt(_++):0),N=g>>2,m=(3&g)<<4|F>>4,I=1<y?(15&F)<<2|A>>6:64,c=2<y?63&A:64,p.push(u.charAt(N)+u.charAt(m)+u.charAt(I)+u.charAt(c));return p.join("")},r.decode=function(d){var g,F,A,N,m,I,c=0,p=0,_="data:";if(d.substr(0,_.length)===_)throw new Error("Invalid base64 input, it looks like a data url.");var $,y=3*(d=d.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(d.charAt(d.length-1)===u.charAt(64)&&y--,d.charAt(d.length-2)===u.charAt(64)&&y--,y%1!=0)throw new Error("Invalid base64 input, bad content length.");for($=o.uint8array?new Uint8Array(0|y):new Array(0|y);c<d.length;)g=u.indexOf(d.charAt(c++))<<2|(N=u.indexOf(d.charAt(c++)))>>4,F=(15&N)<<4|(m=u.indexOf(d.charAt(c++)))>>2,A=(3&m)<<6|(I=u.indexOf(d.charAt(c++))),$[p++]=g,m!==64&&($[p++]=F),I!==64&&($[p++]=A);return $}},{"./support":30,"./utils":32}],2:[function(a,n,r){var i=a("./external"),o=a("./stream/DataWorker"),u=a("./stream/Crc32Probe"),d=a("./stream/DataLengthProbe");function g(F,A,N,m,I){this.compressedSize=F,this.uncompressedSize=A,this.crc32=N,this.compression=m,this.compressedContent=I}g.prototype={getContentWorker:function(){var F=new o(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new d("data_length")),A=this;return F.on("end",function(){if(this.streamInfo.data_length!==A.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),F},getCompressedWorker:function(){return new o(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},g.createWorkerFrom=function(F,A,N){return F.pipe(new u).pipe(new d("uncompressedSize")).pipe(A.compressWorker(N)).pipe(new d("compressedSize")).withStreamInfo("compression",A)},n.exports=g},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(a,n,r){var i=a("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new i("STORE compression")},uncompressWorker:function(){return new i("STORE decompression")}},r.DEFLATE=a("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(a,n,r){var i=a("./utils"),o=function(){for(var u,d=[],g=0;g<256;g++){u=g;for(var F=0;F<8;F++)u=1&u?3988292384^u>>>1:u>>>1;d[g]=u}return d}();n.exports=function(u,d){return u!==void 0&&u.length?i.getTypeOf(u)!=="string"?function(g,F,A,N){var m=o,I=N+A;g^=-1;for(var c=N;c<I;c++)g=g>>>8^m[255&(g^F[c])];return-1^g}(0|d,u,u.length,0):function(g,F,A,N){var m=o,I=N+A;g^=-1;for(var c=N;c<I;c++)g=g>>>8^m[255&(g^F.charCodeAt(c))];return-1^g}(0|d,u,u.length,0):0}},{"./utils":32}],5:[function(a,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(a,n,r){var i=null;i=typeof Promise<"u"?Promise:a("lie"),n.exports={Promise:i}},{lie:37}],7:[function(a,n,r){var i=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=a("pako"),u=a("./utils"),d=a("./stream/GenericWorker"),g=i?"uint8array":"array";function F(A,N){d.call(this,"FlateWorker/"+A),this._pako=null,this._pakoAction=A,this._pakoOptions=N,this.meta={}}r.magic="\b\0",u.inherits(F,d),F.prototype.processChunk=function(A){this.meta=A.meta,this._pako===null&&this._createPako(),this._pako.push(u.transformTo(g,A.data),!1)},F.prototype.flush=function(){d.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},F.prototype.cleanUp=function(){d.prototype.cleanUp.call(this),this._pako=null},F.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var A=this;this._pako.onData=function(N){A.push({data:N,meta:A.meta})}},r.compressWorker=function(A){return new F("Deflate",A)},r.uncompressWorker=function(){return new F("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(a,n,r){function i(m,I){var c,p="";for(c=0;c<I;c++)p+=String.fromCharCode(255&m),m>>>=8;return p}function o(m,I,c,p,_,$){var y,b,M=m.file,E=m.compression,O=$!==g.utf8encode,W=u.transformTo("string",$(M.name)),C=u.transformTo("string",g.utf8encode(M.name)),G=M.comment,J=u.transformTo("string",$(G)),S=u.transformTo("string",g.utf8encode(G)),w=C.length!==M.name.length,l=S.length!==G.length,x="",X="",z="",ae=M.dir,U=M.date,te={crc32:0,compressedSize:0,uncompressedSize:0};I&&!c||(te.crc32=m.crc32,te.compressedSize=m.compressedSize,te.uncompressedSize=m.uncompressedSize);var v=0;I&&(v|=8),O||!w&&!l||(v|=2048);var D=0,ee=0;ae&&(D|=16),_==="UNIX"?(ee=798,D|=function(Q,le){var me=Q;return Q||(me=le?16893:33204),(65535&me)<<16}(M.unixPermissions,ae)):(ee=20,D|=function(Q){return 63&(Q||0)}(M.dosPermissions)),y=U.getUTCHours(),y<<=6,y|=U.getUTCMinutes(),y<<=5,y|=U.getUTCSeconds()/2,b=U.getUTCFullYear()-1980,b<<=4,b|=U.getUTCMonth()+1,b<<=5,b|=U.getUTCDate(),w&&(X=i(1,1)+i(F(W),4)+C,x+="up"+i(X.length,2)+X),l&&(z=i(1,1)+i(F(J),4)+S,x+="uc"+i(z.length,2)+z);var q="";return q+=`
\0`,q+=i(v,2),q+=E.magic,q+=i(y,2),q+=i(b,2),q+=i(te.crc32,4),q+=i(te.compressedSize,4),q+=i(te.uncompressedSize,4),q+=i(W.length,2),q+=i(x.length,2),{fileRecord:A.LOCAL_FILE_HEADER+q+W+x,dirRecord:A.CENTRAL_FILE_HEADER+i(ee,2)+q+i(J.length,2)+"\0\0\0\0"+i(D,4)+i(p,4)+W+x+J}}var u=a("../utils"),d=a("../stream/GenericWorker"),g=a("../utf8"),F=a("../crc32"),A=a("../signature");function N(m,I,c,p){d.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=I,this.zipPlatform=c,this.encodeFileName=p,this.streamFiles=m,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}u.inherits(N,d),N.prototype.push=function(m){var I=m.meta.percent||0,c=this.entriesCount,p=this._sources.length;this.accumulate?this.contentBuffer.push(m):(this.bytesWritten+=m.data.length,d.prototype.push.call(this,{data:m.data,meta:{currentFile:this.currentFile,percent:c?(I+100*(c-p-1))/c:100}}))},N.prototype.openedSource=function(m){this.currentSourceOffset=this.bytesWritten,this.currentFile=m.file.name;var I=this.streamFiles&&!m.file.dir;if(I){var c=o(m,I,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:c.fileRecord,meta:{percent:0}})}else this.accumulate=!0},N.prototype.closedSource=function(m){this.accumulate=!1;var I=this.streamFiles&&!m.file.dir,c=o(m,I,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(c.dirRecord),I)this.push({data:function(p){return A.DATA_DESCRIPTOR+i(p.crc32,4)+i(p.compressedSize,4)+i(p.uncompressedSize,4)}(m),meta:{percent:100}});else for(this.push({data:c.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},N.prototype.flush=function(){for(var m=this.bytesWritten,I=0;I<this.dirRecords.length;I++)this.push({data:this.dirRecords[I],meta:{percent:100}});var c=this.bytesWritten-m,p=function(_,$,y,b,M){var E=u.transformTo("string",M(b));return A.CENTRAL_DIRECTORY_END+"\0\0\0\0"+i(_,2)+i(_,2)+i($,4)+i(y,4)+i(E.length,2)+E}(this.dirRecords.length,c,m,this.zipComment,this.encodeFileName);this.push({data:p,meta:{percent:100}})},N.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},N.prototype.registerPrevious=function(m){this._sources.push(m);var I=this;return m.on("data",function(c){I.processChunk(c)}),m.on("end",function(){I.closedSource(I.previous.streamInfo),I._sources.length?I.prepareNextSource():I.end()}),m.on("error",function(c){I.error(c)}),this},N.prototype.resume=function(){return!!d.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},N.prototype.error=function(m){var I=this._sources;if(!d.prototype.error.call(this,m))return!1;for(var c=0;c<I.length;c++)try{I[c].error(m)}catch{}return!0},N.prototype.lock=function(){d.prototype.lock.call(this);for(var m=this._sources,I=0;I<m.length;I++)m[I].lock()},n.exports=N},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(a,n,r){var i=a("../compressions"),o=a("./ZipFileWorker");r.generateWorker=function(u,d,g){var F=new o(d.streamFiles,g,d.platform,d.encodeFileName),A=0;try{u.forEach(function(N,m){A++;var I=function($,y){var b=$||y,M=i[b];if(!M)throw new Error(b+" is not a valid compression method !");return M}(m.options.compression,d.compression),c=m.options.compressionOptions||d.compressionOptions||{},p=m.dir,_=m.date;m._compressWorker(I,c).withStreamInfo("file",{name:N,dir:p,date:_,comment:m.comment||"",unixPermissions:m.unixPermissions,dosPermissions:m.dosPermissions}).pipe(F)}),F.entriesCount=A}catch(N){F.error(N)}return F}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(a,n,r){function i(){if(!(this instanceof i))return new i;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new i;for(var u in this)typeof this[u]!="function"&&(o[u]=this[u]);return o}}(i.prototype=a("./object")).loadAsync=a("./load"),i.support=a("./support"),i.defaults=a("./defaults"),i.version="3.10.1",i.loadAsync=function(o,u){return new i().loadAsync(o,u)},i.external=a("./external"),n.exports=i},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(a,n,r){var i=a("./utils"),o=a("./external"),u=a("./utf8"),d=a("./zipEntries"),g=a("./stream/Crc32Probe"),F=a("./nodejsUtils");function A(N){return new o.Promise(function(m,I){var c=N.decompressed.getContentWorker().pipe(new g);c.on("error",function(p){I(p)}).on("end",function(){c.streamInfo.crc32!==N.decompressed.crc32?I(new Error("Corrupted zip : CRC32 mismatch")):m()}).resume()})}n.exports=function(N,m){var I=this;return m=i.extend(m||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:u.utf8decode}),F.isNode&&F.isStream(N)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):i.prepareContent("the loaded zip file",N,!0,m.optimizedBinaryString,m.base64).then(function(c){var p=new d(m);return p.load(c),p}).then(function(c){var p=[o.Promise.resolve(c)],_=c.files;if(m.checkCRC32)for(var $=0;$<_.length;$++)p.push(A(_[$]));return o.Promise.all(p)}).then(function(c){for(var p=c.shift(),_=p.files,$=0;$<_.length;$++){var y=_[$],b=y.fileNameStr,M=i.resolve(y.fileNameStr);I.file(M,y.decompressed,{binary:!0,optimizedBinaryString:!0,date:y.date,dir:y.dir,comment:y.fileCommentStr.length?y.fileCommentStr:null,unixPermissions:y.unixPermissions,dosPermissions:y.dosPermissions,createFolders:m.createFolders}),y.dir||(I.file(M).unsafeOriginalName=b)}return p.zipComment.length&&(I.comment=p.zipComment),I})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(a,n,r){var i=a("../utils"),o=a("../stream/GenericWorker");function u(d,g){o.call(this,"Nodejs stream input adapter for "+d),this._upstreamEnded=!1,this._bindStream(g)}i.inherits(u,o),u.prototype._bindStream=function(d){var g=this;(this._stream=d).pause(),d.on("data",function(F){g.push({data:F,meta:{percent:0}})}).on("error",function(F){g.isPaused?this.generatedError=F:g.error(F)}).on("end",function(){g.isPaused?g._upstreamEnded=!0:g.end()})},u.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},u.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=u},{"../stream/GenericWorker":28,"../utils":32}],13:[function(a,n,r){var i=a("readable-stream").Readable;function o(u,d,g){i.call(this,d),this._helper=u;var F=this;u.on("data",function(A,N){F.push(A)||F._helper.pause(),g&&g(N)}).on("error",function(A){F.emit("error",A)}).on("end",function(){F.push(null)})}a("../utils").inherits(o,i),o.prototype._read=function(){this._helper.resume()},n.exports=o},{"../utils":32,"readable-stream":16}],14:[function(a,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(i,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(i,o);if(typeof i=="number")throw new Error('The "data" argument must not be a number');return new Buffer(i,o)},allocBuffer:function(i){if(Buffer.alloc)return Buffer.alloc(i);var o=new Buffer(i);return o.fill(0),o},isBuffer:function(i){return Buffer.isBuffer(i)},isStream:function(i){return i&&typeof i.on=="function"&&typeof i.pause=="function"&&typeof i.resume=="function"}}},{}],15:[function(a,n,r){function i(M,E,O){var W,C=u.getTypeOf(E),G=u.extend(O||{},F);G.date=G.date||new Date,G.compression!==null&&(G.compression=G.compression.toUpperCase()),typeof G.unixPermissions=="string"&&(G.unixPermissions=parseInt(G.unixPermissions,8)),G.unixPermissions&&16384&G.unixPermissions&&(G.dir=!0),G.dosPermissions&&16&G.dosPermissions&&(G.dir=!0),G.dir&&(M=_(M)),G.createFolders&&(W=p(M))&&$.call(this,W,!0);var J=C==="string"&&G.binary===!1&&G.base64===!1;O&&O.binary!==void 0||(G.binary=!J),(E instanceof A&&E.uncompressedSize===0||G.dir||!E||E.length===0)&&(G.base64=!1,G.binary=!0,E="",G.compression="STORE",C="string");var S=null;S=E instanceof A||E instanceof d?E:I.isNode&&I.isStream(E)?new c(M,E):u.prepareContent(M,E,G.binary,G.optimizedBinaryString,G.base64);var w=new N(M,S,G);this.files[M]=w}var o=a("./utf8"),u=a("./utils"),d=a("./stream/GenericWorker"),g=a("./stream/StreamHelper"),F=a("./defaults"),A=a("./compressedObject"),N=a("./zipObject"),m=a("./generate"),I=a("./nodejsUtils"),c=a("./nodejs/NodejsStreamInputAdapter"),p=function(M){M.slice(-1)==="/"&&(M=M.substring(0,M.length-1));var E=M.lastIndexOf("/");return 0<E?M.substring(0,E):""},_=function(M){return M.slice(-1)!=="/"&&(M+="/"),M},$=function(M,E){return E=E!==void 0?E:F.createFolders,M=_(M),this.files[M]||i.call(this,M,null,{dir:!0,createFolders:E}),this.files[M]};function y(M){return Object.prototype.toString.call(M)==="[object RegExp]"}var b={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(M){var E,O,W;for(E in this.files)W=this.files[E],(O=E.slice(this.root.length,E.length))&&E.slice(0,this.root.length)===this.root&&M(O,W)},filter:function(M){var E=[];return this.forEach(function(O,W){M(O,W)&&E.push(W)}),E},file:function(M,E,O){if(arguments.length!==1)return M=this.root+M,i.call(this,M,E,O),this;if(y(M)){var W=M;return this.filter(function(G,J){return!J.dir&&W.test(G)})}var C=this.files[this.root+M];return C&&!C.dir?C:null},folder:function(M){if(!M)return this;if(y(M))return this.filter(function(C,G){return G.dir&&M.test(C)});var E=this.root+M,O=$.call(this,E),W=this.clone();return W.root=O.name,W},remove:function(M){M=this.root+M;var E=this.files[M];if(E||(M.slice(-1)!=="/"&&(M+="/"),E=this.files[M]),E&&!E.dir)delete this.files[M];else for(var O=this.filter(function(C,G){return G.name.slice(0,M.length)===M}),W=0;W<O.length;W++)delete this.files[O[W].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(M){var E,O={};try{if((O=u.extend(M||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=O.type.toLowerCase(),O.compression=O.compression.toUpperCase(),O.type==="binarystring"&&(O.type="string"),!O.type)throw new Error("No output type specified.");u.checkSupport(O.type),O.platform!=="darwin"&&O.platform!=="freebsd"&&O.platform!=="linux"&&O.platform!=="sunos"||(O.platform="UNIX"),O.platform==="win32"&&(O.platform="DOS");var W=O.comment||this.comment||"";E=m.generateWorker(this,O,W)}catch(C){(E=new d("error")).error(C)}return new g(E,O.type||"string",O.mimeType)},generateAsync:function(M,E){return this.generateInternalStream(M).accumulate(E)},generateNodeStream:function(M,E){return(M=M||{}).type||(M.type="nodebuffer"),this.generateInternalStream(M).toNodejsStream(E)}};n.exports=b},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(a,n,r){n.exports=a("stream")},{stream:void 0}],17:[function(a,n,r){var i=a("./DataReader");function o(u){i.call(this,u);for(var d=0;d<this.data.length;d++)u[d]=255&u[d]}a("../utils").inherits(o,i),o.prototype.byteAt=function(u){return this.data[this.zero+u]},o.prototype.lastIndexOfSignature=function(u){for(var d=u.charCodeAt(0),g=u.charCodeAt(1),F=u.charCodeAt(2),A=u.charCodeAt(3),N=this.length-4;0<=N;--N)if(this.data[N]===d&&this.data[N+1]===g&&this.data[N+2]===F&&this.data[N+3]===A)return N-this.zero;return-1},o.prototype.readAndCheckSignature=function(u){var d=u.charCodeAt(0),g=u.charCodeAt(1),F=u.charCodeAt(2),A=u.charCodeAt(3),N=this.readData(4);return d===N[0]&&g===N[1]&&F===N[2]&&A===N[3]},o.prototype.readData=function(u){if(this.checkOffset(u),u===0)return[];var d=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,d},n.exports=o},{"../utils":32,"./DataReader":18}],18:[function(a,n,r){var i=a("../utils");function o(u){this.data=u,this.length=u.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(u){this.checkIndex(this.index+u)},checkIndex:function(u){if(this.length<this.zero+u||u<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+u+"). Corrupted zip ?")},setIndex:function(u){this.checkIndex(u),this.index=u},skip:function(u){this.setIndex(this.index+u)},byteAt:function(){},readInt:function(u){var d,g=0;for(this.checkOffset(u),d=this.index+u-1;d>=this.index;d--)g=(g<<8)+this.byteAt(d);return this.index+=u,g},readString:function(u){return i.transformTo("string",this.readData(u))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var u=this.readInt(4);return new Date(Date.UTC(1980+(u>>25&127),(u>>21&15)-1,u>>16&31,u>>11&31,u>>5&63,(31&u)<<1))}},n.exports=o},{"../utils":32}],19:[function(a,n,r){var i=a("./Uint8ArrayReader");function o(u){i.call(this,u)}a("../utils").inherits(o,i),o.prototype.readData=function(u){this.checkOffset(u);var d=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,d},n.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(a,n,r){var i=a("./DataReader");function o(u){i.call(this,u)}a("../utils").inherits(o,i),o.prototype.byteAt=function(u){return this.data.charCodeAt(this.zero+u)},o.prototype.lastIndexOfSignature=function(u){return this.data.lastIndexOf(u)-this.zero},o.prototype.readAndCheckSignature=function(u){return u===this.readData(4)},o.prototype.readData=function(u){this.checkOffset(u);var d=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,d},n.exports=o},{"../utils":32,"./DataReader":18}],21:[function(a,n,r){var i=a("./ArrayReader");function o(u){i.call(this,u)}a("../utils").inherits(o,i),o.prototype.readData=function(u){if(this.checkOffset(u),u===0)return new Uint8Array(0);var d=this.data.subarray(this.zero+this.index,this.zero+this.index+u);return this.index+=u,d},n.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(a,n,r){var i=a("../utils"),o=a("../support"),u=a("./ArrayReader"),d=a("./StringReader"),g=a("./NodeBufferReader"),F=a("./Uint8ArrayReader");n.exports=function(A){var N=i.getTypeOf(A);return i.checkSupport(N),N!=="string"||o.uint8array?N==="nodebuffer"?new g(A):o.uint8array?new F(i.transformTo("uint8array",A)):new u(i.transformTo("array",A)):new d(A)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(a,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(a,n,r){var i=a("./GenericWorker"),o=a("../utils");function u(d){i.call(this,"ConvertWorker to "+d),this.destType=d}o.inherits(u,i),u.prototype.processChunk=function(d){this.push({data:o.transformTo(this.destType,d.data),meta:d.meta})},n.exports=u},{"../utils":32,"./GenericWorker":28}],25:[function(a,n,r){var i=a("./GenericWorker"),o=a("../crc32");function u(){i.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}a("../utils").inherits(u,i),u.prototype.processChunk=function(d){this.streamInfo.crc32=o(d.data,this.streamInfo.crc32||0),this.push(d)},n.exports=u},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(a,n,r){var i=a("../utils"),o=a("./GenericWorker");function u(d){o.call(this,"DataLengthProbe for "+d),this.propName=d,this.withStreamInfo(d,0)}i.inherits(u,o),u.prototype.processChunk=function(d){if(d){var g=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=g+d.data.length}o.prototype.processChunk.call(this,d)},n.exports=u},{"../utils":32,"./GenericWorker":28}],27:[function(a,n,r){var i=a("../utils"),o=a("./GenericWorker");function u(d){o.call(this,"DataWorker");var g=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,d.then(function(F){g.dataIsReady=!0,g.data=F,g.max=F&&F.length||0,g.type=i.getTypeOf(F),g.isPaused||g._tickAndRepeat()},function(F){g.error(F)})}i.inherits(u,o),u.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},u.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,i.delay(this._tickAndRepeat,[],this)),!0)},u.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(i.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},u.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var d=null,g=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":d=this.data.substring(this.index,g);break;case"uint8array":d=this.data.subarray(this.index,g);break;case"array":case"nodebuffer":d=this.data.slice(this.index,g)}return this.index=g,this.push({data:d,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=u},{"../utils":32,"./GenericWorker":28}],28:[function(a,n,r){function i(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}i.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,u){return this._listeners[o].push(u),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,u){if(this._listeners[o])for(var d=0;d<this._listeners[o].length;d++)this._listeners[o][d].call(this,u)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var u=this;return o.on("data",function(d){u.processChunk(d)}),o.on("end",function(){u.end()}),o.on("error",function(d){u.error(d)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,u){return this.extraStreamInfo[o]=u,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},n.exports=i},{}],29:[function(a,n,r){var i=a("../utils"),o=a("./ConvertWorker"),u=a("./GenericWorker"),d=a("../base64"),g=a("../support"),F=a("../external"),A=null;if(g.nodestream)try{A=a("../nodejs/NodejsStreamOutputAdapter")}catch{}function N(I,c){return new F.Promise(function(p,_){var $=[],y=I._internalType,b=I._outputType,M=I._mimeType;I.on("data",function(E,O){$.push(E),c&&c(O)}).on("error",function(E){$=[],_(E)}).on("end",function(){try{var E=function(O,W,C){switch(O){case"blob":return i.newBlob(i.transformTo("arraybuffer",W),C);case"base64":return d.encode(W);default:return i.transformTo(O,W)}}(b,function(O,W){var C,G=0,J=null,S=0;for(C=0;C<W.length;C++)S+=W[C].length;switch(O){case"string":return W.join("");case"array":return Array.prototype.concat.apply([],W);case"uint8array":for(J=new Uint8Array(S),C=0;C<W.length;C++)J.set(W[C],G),G+=W[C].length;return J;case"nodebuffer":return Buffer.concat(W);default:throw new Error("concat : unsupported type '"+O+"'")}}(y,$),M);p(E)}catch(O){_(O)}$=[]}).resume()})}function m(I,c,p){var _=c;switch(c){case"blob":case"arraybuffer":_="uint8array";break;case"base64":_="string"}try{this._internalType=_,this._outputType=c,this._mimeType=p,i.checkSupport(_),this._worker=I.pipe(new o(_)),I.lock()}catch($){this._worker=new u("error"),this._worker.error($)}}m.prototype={accumulate:function(I){return N(this,I)},on:function(I,c){var p=this;return I==="data"?this._worker.on(I,function(_){c.call(p,_.data,_.meta)}):this._worker.on(I,function(){i.delay(c,arguments,p)}),this},resume:function(){return i.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(I){if(i.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new A(this,{objectMode:this._outputType!=="nodebuffer"},I)}},n.exports=m},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(a,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var i=new ArrayBuffer(0);try{r.blob=new Blob([i],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(i),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!a("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(a,n,r){for(var i=a("./utils"),o=a("./support"),u=a("./nodejsUtils"),d=a("./stream/GenericWorker"),g=new Array(256),F=0;F<256;F++)g[F]=252<=F?6:248<=F?5:240<=F?4:224<=F?3:192<=F?2:1;g[254]=g[254]=1;function A(){d.call(this,"utf-8 decode"),this.leftOver=null}function N(){d.call(this,"utf-8 encode")}r.utf8encode=function(m){return o.nodebuffer?u.newBufferFrom(m,"utf-8"):function(I){var c,p,_,$,y,b=I.length,M=0;for($=0;$<b;$++)(64512&(p=I.charCodeAt($)))==55296&&$+1<b&&(64512&(_=I.charCodeAt($+1)))==56320&&(p=65536+(p-55296<<10)+(_-56320),$++),M+=p<128?1:p<2048?2:p<65536?3:4;for(c=o.uint8array?new Uint8Array(M):new Array(M),$=y=0;y<M;$++)(64512&(p=I.charCodeAt($)))==55296&&$+1<b&&(64512&(_=I.charCodeAt($+1)))==56320&&(p=65536+(p-55296<<10)+(_-56320),$++),p<128?c[y++]=p:(p<2048?c[y++]=192|p>>>6:(p<65536?c[y++]=224|p>>>12:(c[y++]=240|p>>>18,c[y++]=128|p>>>12&63),c[y++]=128|p>>>6&63),c[y++]=128|63&p);return c}(m)},r.utf8decode=function(m){return o.nodebuffer?i.transformTo("nodebuffer",m).toString("utf-8"):function(I){var c,p,_,$,y=I.length,b=new Array(2*y);for(c=p=0;c<y;)if((_=I[c++])<128)b[p++]=_;else if(4<($=g[_]))b[p++]=65533,c+=$-1;else{for(_&=$===2?31:$===3?15:7;1<$&&c<y;)_=_<<6|63&I[c++],$--;1<$?b[p++]=65533:_<65536?b[p++]=_:(_-=65536,b[p++]=55296|_>>10&1023,b[p++]=56320|1023&_)}return b.length!==p&&(b.subarray?b=b.subarray(0,p):b.length=p),i.applyFromCharCode(b)}(m=i.transformTo(o.uint8array?"uint8array":"array",m))},i.inherits(A,d),A.prototype.processChunk=function(m){var I=i.transformTo(o.uint8array?"uint8array":"array",m.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var c=I;(I=new Uint8Array(c.length+this.leftOver.length)).set(this.leftOver,0),I.set(c,this.leftOver.length)}else I=this.leftOver.concat(I);this.leftOver=null}var p=function($,y){var b;for((y=y||$.length)>$.length&&(y=$.length),b=y-1;0<=b&&(192&$[b])==128;)b--;return b<0||b===0?y:b+g[$[b]]>y?b:y}(I),_=I;p!==I.length&&(o.uint8array?(_=I.subarray(0,p),this.leftOver=I.subarray(p,I.length)):(_=I.slice(0,p),this.leftOver=I.slice(p,I.length))),this.push({data:r.utf8decode(_),meta:m.meta})},A.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=A,i.inherits(N,d),N.prototype.processChunk=function(m){this.push({data:r.utf8encode(m.data),meta:m.meta})},r.Utf8EncodeWorker=N},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(a,n,r){var i=a("./support"),o=a("./base64"),u=a("./nodejsUtils"),d=a("./external");function g(c){return c}function F(c,p){for(var _=0;_<c.length;++_)p[_]=255&c.charCodeAt(_);return p}a("setimmediate"),r.newBlob=function(c,p){r.checkSupport("blob");try{return new Blob([c],{type:p})}catch{try{var _=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return _.append(c),_.getBlob(p)}catch{throw new Error("Bug : can't construct the Blob.")}}};var A={stringifyByChunk:function(c,p,_){var $=[],y=0,b=c.length;if(b<=_)return String.fromCharCode.apply(null,c);for(;y<b;)p==="array"||p==="nodebuffer"?$.push(String.fromCharCode.apply(null,c.slice(y,Math.min(y+_,b)))):$.push(String.fromCharCode.apply(null,c.subarray(y,Math.min(y+_,b)))),y+=_;return $.join("")},stringifyByChar:function(c){for(var p="",_=0;_<c.length;_++)p+=String.fromCharCode(c[_]);return p},applyCanBeUsed:{uint8array:function(){try{return i.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return i.nodebuffer&&String.fromCharCode.apply(null,u.allocBuffer(1)).length===1}catch{return!1}}()}};function N(c){var p=65536,_=r.getTypeOf(c),$=!0;if(_==="uint8array"?$=A.applyCanBeUsed.uint8array:_==="nodebuffer"&&($=A.applyCanBeUsed.nodebuffer),$)for(;1<p;)try{return A.stringifyByChunk(c,_,p)}catch{p=Math.floor(p/2)}return A.stringifyByChar(c)}function m(c,p){for(var _=0;_<c.length;_++)p[_]=c[_];return p}r.applyFromCharCode=N;var I={};I.string={string:g,array:function(c){return F(c,new Array(c.length))},arraybuffer:function(c){return I.string.uint8array(c).buffer},uint8array:function(c){return F(c,new Uint8Array(c.length))},nodebuffer:function(c){return F(c,u.allocBuffer(c.length))}},I.array={string:N,array:g,arraybuffer:function(c){return new Uint8Array(c).buffer},uint8array:function(c){return new Uint8Array(c)},nodebuffer:function(c){return u.newBufferFrom(c)}},I.arraybuffer={string:function(c){return N(new Uint8Array(c))},array:function(c){return m(new Uint8Array(c),new Array(c.byteLength))},arraybuffer:g,uint8array:function(c){return new Uint8Array(c)},nodebuffer:function(c){return u.newBufferFrom(new Uint8Array(c))}},I.uint8array={string:N,array:function(c){return m(c,new Array(c.length))},arraybuffer:function(c){return c.buffer},uint8array:g,nodebuffer:function(c){return u.newBufferFrom(c)}},I.nodebuffer={string:N,array:function(c){return m(c,new Array(c.length))},arraybuffer:function(c){return I.nodebuffer.uint8array(c).buffer},uint8array:function(c){return m(c,new Uint8Array(c.length))},nodebuffer:g},r.transformTo=function(c,p){if(p=p||"",!c)return p;r.checkSupport(c);var _=r.getTypeOf(p);return I[_][c](p)},r.resolve=function(c){for(var p=c.split("/"),_=[],$=0;$<p.length;$++){var y=p[$];y==="."||y===""&&$!==0&&$!==p.length-1||(y===".."?_.pop():_.push(y))}return _.join("/")},r.getTypeOf=function(c){return typeof c=="string"?"string":Object.prototype.toString.call(c)==="[object Array]"?"array":i.nodebuffer&&u.isBuffer(c)?"nodebuffer":i.uint8array&&c instanceof Uint8Array?"uint8array":i.arraybuffer&&c instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(c){if(!i[c.toLowerCase()])throw new Error(c+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(c){var p,_,$="";for(_=0;_<(c||"").length;_++)$+="\\x"+((p=c.charCodeAt(_))<16?"0":"")+p.toString(16).toUpperCase();return $},r.delay=function(c,p,_){setImmediate(function(){c.apply(_||null,p||[])})},r.inherits=function(c,p){function _(){}_.prototype=p.prototype,c.prototype=new _},r.extend=function(){var c,p,_={};for(c=0;c<arguments.length;c++)for(p in arguments[c])Object.prototype.hasOwnProperty.call(arguments[c],p)&&_[p]===void 0&&(_[p]=arguments[c][p]);return _},r.prepareContent=function(c,p,_,$,y){return d.Promise.resolve(p).then(function(b){return i.blob&&(b instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(b))!==-1)&&typeof FileReader<"u"?new d.Promise(function(M,E){var O=new FileReader;O.onload=function(W){M(W.target.result)},O.onerror=function(W){E(W.target.error)},O.readAsArrayBuffer(b)}):b}).then(function(b){var M=r.getTypeOf(b);return M?(M==="arraybuffer"?b=r.transformTo("uint8array",b):M==="string"&&(y?b=o.decode(b):_&&$!==!0&&(b=function(E){return F(E,i.uint8array?new Uint8Array(E.length):new Array(E.length))}(b))),b):d.Promise.reject(new Error("Can't read the data of '"+c+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(a,n,r){var i=a("./reader/readerFor"),o=a("./utils"),u=a("./signature"),d=a("./zipEntry"),g=a("./support");function F(A){this.files=[],this.loadOptions=A}F.prototype={checkSignature:function(A){if(!this.reader.readAndCheckSignature(A)){this.reader.index-=4;var N=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(N)+", expected "+o.pretty(A)+")")}},isSignature:function(A,N){var m=this.reader.index;this.reader.setIndex(A);var I=this.reader.readString(4)===N;return this.reader.setIndex(m),I},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var A=this.reader.readData(this.zipCommentLength),N=g.uint8array?"uint8array":"array",m=o.transformTo(N,A);this.zipComment=this.loadOptions.decodeFileName(m)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var A,N,m,I=this.zip64EndOfCentralSize-44;0<I;)A=this.reader.readInt(2),N=this.reader.readInt(4),m=this.reader.readData(N),this.zip64ExtensibleData[A]={id:A,length:N,value:m}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var A,N;for(A=0;A<this.files.length;A++)N=this.files[A],this.reader.setIndex(N.localHeaderOffset),this.checkSignature(u.LOCAL_FILE_HEADER),N.readLocalPart(this.reader),N.handleUTF8(),N.processAttributes()},readCentralDir:function(){var A;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(u.CENTRAL_FILE_HEADER);)(A=new d({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(A);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var A=this.reader.lastIndexOfSignature(u.CENTRAL_DIRECTORY_END);if(A<0)throw this.isSignature(0,u.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(A);var N=A;if(this.checkSignature(u.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(A=this.reader.lastIndexOfSignature(u.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(A),this.checkSignature(u.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,u.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(u.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(u.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var m=this.centralDirOffset+this.centralDirSize;this.zip64&&(m+=20,m+=12+this.zip64EndOfCentralSize);var I=N-m;if(0<I)this.isSignature(N,u.CENTRAL_FILE_HEADER)||(this.reader.zero=I);else if(I<0)throw new Error("Corrupted zip: missing "+Math.abs(I)+" bytes.")},prepareReader:function(A){this.reader=i(A)},load:function(A){this.prepareReader(A),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=F},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(a,n,r){var i=a("./reader/readerFor"),o=a("./utils"),u=a("./compressedObject"),d=a("./crc32"),g=a("./utf8"),F=a("./compressions"),A=a("./support");function N(m,I){this.options=m,this.loadOptions=I}N.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(m){var I,c;if(m.skip(22),this.fileNameLength=m.readInt(2),c=m.readInt(2),this.fileName=m.readData(this.fileNameLength),m.skip(c),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((I=function(p){for(var _ in F)if(Object.prototype.hasOwnProperty.call(F,_)&&F[_].magic===p)return F[_];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new u(this.compressedSize,this.uncompressedSize,this.crc32,I,m.readData(this.compressedSize))},readCentralPart:function(m){this.versionMadeBy=m.readInt(2),m.skip(2),this.bitFlag=m.readInt(2),this.compressionMethod=m.readString(2),this.date=m.readDate(),this.crc32=m.readInt(4),this.compressedSize=m.readInt(4),this.uncompressedSize=m.readInt(4);var I=m.readInt(2);if(this.extraFieldsLength=m.readInt(2),this.fileCommentLength=m.readInt(2),this.diskNumberStart=m.readInt(2),this.internalFileAttributes=m.readInt(2),this.externalFileAttributes=m.readInt(4),this.localHeaderOffset=m.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");m.skip(I),this.readExtraFields(m),this.parseZIP64ExtraField(m),this.fileComment=m.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var m=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),m==0&&(this.dosPermissions=63&this.externalFileAttributes),m==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var m=i(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=m.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=m.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=m.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=m.readInt(4))}},readExtraFields:function(m){var I,c,p,_=m.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});m.index+4<_;)I=m.readInt(2),c=m.readInt(2),p=m.readData(c),this.extraFields[I]={id:I,length:c,value:p};m.setIndex(_)},handleUTF8:function(){var m=A.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=g.utf8decode(this.fileName),this.fileCommentStr=g.utf8decode(this.fileComment);else{var I=this.findExtraFieldUnicodePath();if(I!==null)this.fileNameStr=I;else{var c=o.transformTo(m,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(c)}var p=this.findExtraFieldUnicodeComment();if(p!==null)this.fileCommentStr=p;else{var _=o.transformTo(m,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(_)}}},findExtraFieldUnicodePath:function(){var m=this.extraFields[28789];if(m){var I=i(m.value);return I.readInt(1)!==1||d(this.fileName)!==I.readInt(4)?null:g.utf8decode(I.readData(m.length-5))}return null},findExtraFieldUnicodeComment:function(){var m=this.extraFields[25461];if(m){var I=i(m.value);return I.readInt(1)!==1||d(this.fileComment)!==I.readInt(4)?null:g.utf8decode(I.readData(m.length-5))}return null}},n.exports=N},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(a,n,r){function i(I,c,p){this.name=I,this.dir=p.dir,this.date=p.date,this.comment=p.comment,this.unixPermissions=p.unixPermissions,this.dosPermissions=p.dosPermissions,this._data=c,this._dataBinary=p.binary,this.options={compression:p.compression,compressionOptions:p.compressionOptions}}var o=a("./stream/StreamHelper"),u=a("./stream/DataWorker"),d=a("./utf8"),g=a("./compressedObject"),F=a("./stream/GenericWorker");i.prototype={internalStream:function(I){var c=null,p="string";try{if(!I)throw new Error("No output type specified.");var _=(p=I.toLowerCase())==="string"||p==="text";p!=="binarystring"&&p!=="text"||(p="string"),c=this._decompressWorker();var $=!this._dataBinary;$&&!_&&(c=c.pipe(new d.Utf8EncodeWorker)),!$&&_&&(c=c.pipe(new d.Utf8DecodeWorker))}catch(y){(c=new F("error")).error(y)}return new o(c,p,"")},async:function(I,c){return this.internalStream(I).accumulate(c)},nodeStream:function(I,c){return this.internalStream(I||"nodebuffer").toNodejsStream(c)},_compressWorker:function(I,c){if(this._data instanceof g&&this._data.compression.magic===I.magic)return this._data.getCompressedWorker();var p=this._decompressWorker();return this._dataBinary||(p=p.pipe(new d.Utf8EncodeWorker)),g.createWorkerFrom(p,I,c)},_decompressWorker:function(){return this._data instanceof g?this._data.getContentWorker():this._data instanceof F?this._data:new u(this._data)}};for(var A=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],N=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},m=0;m<A.length;m++)i.prototype[A[m]]=N;n.exports=i},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(a,n,r){(function(i){var o,u,d=i.MutationObserver||i.WebKitMutationObserver;if(d){var g=0,F=new d(I),A=i.document.createTextNode("");F.observe(A,{characterData:!0}),o=function(){A.data=g=++g%2}}else if(i.setImmediate||i.MessageChannel===void 0)o="document"in i&&"onreadystatechange"in i.document.createElement("script")?function(){var c=i.document.createElement("script");c.onreadystatechange=function(){I(),c.onreadystatechange=null,c.parentNode.removeChild(c),c=null},i.document.documentElement.appendChild(c)}:function(){setTimeout(I,0)};else{var N=new i.MessageChannel;N.port1.onmessage=I,o=function(){N.port2.postMessage(0)}}var m=[];function I(){var c,p;u=!0;for(var _=m.length;_;){for(p=m,m=[],c=-1;++c<_;)p[c]();_=m.length}u=!1}n.exports=function(c){m.push(c)!==1||u||o()}}).call(this,typeof ge<"u"?ge:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(a,n,r){var i=a("immediate");function o(){}var u={},d=["REJECTED"],g=["FULFILLED"],F=["PENDING"];function A(_){if(typeof _!="function")throw new TypeError("resolver must be a function");this.state=F,this.queue=[],this.outcome=void 0,_!==o&&c(this,_)}function N(_,$,y){this.promise=_,typeof $=="function"&&(this.onFulfilled=$,this.callFulfilled=this.otherCallFulfilled),typeof y=="function"&&(this.onRejected=y,this.callRejected=this.otherCallRejected)}function m(_,$,y){i(function(){var b;try{b=$(y)}catch(M){return u.reject(_,M)}b===_?u.reject(_,new TypeError("Cannot resolve promise with itself")):u.resolve(_,b)})}function I(_){var $=_&&_.then;if(_&&(typeof _=="object"||typeof _=="function")&&typeof $=="function")return function(){$.apply(_,arguments)}}function c(_,$){var y=!1;function b(O){y||(y=!0,u.reject(_,O))}function M(O){y||(y=!0,u.resolve(_,O))}var E=p(function(){$(M,b)});E.status==="error"&&b(E.value)}function p(_,$){var y={};try{y.value=_($),y.status="success"}catch(b){y.status="error",y.value=b}return y}(n.exports=A).prototype.finally=function(_){if(typeof _!="function")return this;var $=this.constructor;return this.then(function(y){return $.resolve(_()).then(function(){return y})},function(y){return $.resolve(_()).then(function(){throw y})})},A.prototype.catch=function(_){return this.then(null,_)},A.prototype.then=function(_,$){if(typeof _!="function"&&this.state===g||typeof $!="function"&&this.state===d)return this;var y=new this.constructor(o);return this.state!==F?m(y,this.state===g?_:$,this.outcome):this.queue.push(new N(y,_,$)),y},N.prototype.callFulfilled=function(_){u.resolve(this.promise,_)},N.prototype.otherCallFulfilled=function(_){m(this.promise,this.onFulfilled,_)},N.prototype.callRejected=function(_){u.reject(this.promise,_)},N.prototype.otherCallRejected=function(_){m(this.promise,this.onRejected,_)},u.resolve=function(_,$){var y=p(I,$);if(y.status==="error")return u.reject(_,y.value);var b=y.value;if(b)c(_,b);else{_.state=g,_.outcome=$;for(var M=-1,E=_.queue.length;++M<E;)_.queue[M].callFulfilled($)}return _},u.reject=function(_,$){_.state=d,_.outcome=$;for(var y=-1,b=_.queue.length;++y<b;)_.queue[y].callRejected($);return _},A.resolve=function(_){return _ instanceof this?_:u.resolve(new this(o),_)},A.reject=function(_){var $=new this(o);return u.reject($,_)},A.all=function(_){var $=this;if(Object.prototype.toString.call(_)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=_.length,b=!1;if(!y)return this.resolve([]);for(var M=new Array(y),E=0,O=-1,W=new this(o);++O<y;)C(_[O],O);return W;function C(G,J){$.resolve(G).then(function(S){M[J]=S,++E!==y||b||(b=!0,u.resolve(W,M))},function(S){b||(b=!0,u.reject(W,S))})}},A.race=function(_){var $=this;if(Object.prototype.toString.call(_)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=_.length,b=!1;if(!y)return this.resolve([]);for(var M=-1,E=new this(o);++M<y;)O=_[M],$.resolve(O).then(function(W){b||(b=!0,u.resolve(E,W))},function(W){b||(b=!0,u.reject(E,W))});var O;return E}},{immediate:36}],38:[function(a,n,r){var i={};(0,a("./lib/utils/common").assign)(i,a("./lib/deflate"),a("./lib/inflate"),a("./lib/zlib/constants")),n.exports=i},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(a,n,r){var i=a("./zlib/deflate"),o=a("./utils/common"),u=a("./utils/strings"),d=a("./zlib/messages"),g=a("./zlib/zstream"),F=Object.prototype.toString,A=0,N=-1,m=0,I=8;function c(_){if(!(this instanceof c))return new c(_);this.options=o.assign({level:N,method:I,chunkSize:16384,windowBits:15,memLevel:8,strategy:m,to:""},_||{});var $=this.options;$.raw&&0<$.windowBits?$.windowBits=-$.windowBits:$.gzip&&0<$.windowBits&&$.windowBits<16&&($.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new g,this.strm.avail_out=0;var y=i.deflateInit2(this.strm,$.level,$.method,$.windowBits,$.memLevel,$.strategy);if(y!==A)throw new Error(d[y]);if($.header&&i.deflateSetHeader(this.strm,$.header),$.dictionary){var b;if(b=typeof $.dictionary=="string"?u.string2buf($.dictionary):F.call($.dictionary)==="[object ArrayBuffer]"?new Uint8Array($.dictionary):$.dictionary,(y=i.deflateSetDictionary(this.strm,b))!==A)throw new Error(d[y]);this._dict_set=!0}}function p(_,$){var y=new c($);if(y.push(_,!0),y.err)throw y.msg||d[y.err];return y.result}c.prototype.push=function(_,$){var y,b,M=this.strm,E=this.options.chunkSize;if(this.ended)return!1;b=$===~~$?$:$===!0?4:0,typeof _=="string"?M.input=u.string2buf(_):F.call(_)==="[object ArrayBuffer]"?M.input=new Uint8Array(_):M.input=_,M.next_in=0,M.avail_in=M.input.length;do{if(M.avail_out===0&&(M.output=new o.Buf8(E),M.next_out=0,M.avail_out=E),(y=i.deflate(M,b))!==1&&y!==A)return this.onEnd(y),!(this.ended=!0);M.avail_out!==0&&(M.avail_in!==0||b!==4&&b!==2)||(this.options.to==="string"?this.onData(u.buf2binstring(o.shrinkBuf(M.output,M.next_out))):this.onData(o.shrinkBuf(M.output,M.next_out)))}while((0<M.avail_in||M.avail_out===0)&&y!==1);return b===4?(y=i.deflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===A):b!==2||(this.onEnd(A),!(M.avail_out=0))},c.prototype.onData=function(_){this.chunks.push(_)},c.prototype.onEnd=function(_){_===A&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},r.Deflate=c,r.deflate=p,r.deflateRaw=function(_,$){return($=$||{}).raw=!0,p(_,$)},r.gzip=function(_,$){return($=$||{}).gzip=!0,p(_,$)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(a,n,r){var i=a("./zlib/inflate"),o=a("./utils/common"),u=a("./utils/strings"),d=a("./zlib/constants"),g=a("./zlib/messages"),F=a("./zlib/zstream"),A=a("./zlib/gzheader"),N=Object.prototype.toString;function m(c){if(!(this instanceof m))return new m(c);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},c||{});var p=this.options;p.raw&&0<=p.windowBits&&p.windowBits<16&&(p.windowBits=-p.windowBits,p.windowBits===0&&(p.windowBits=-15)),!(0<=p.windowBits&&p.windowBits<16)||c&&c.windowBits||(p.windowBits+=32),15<p.windowBits&&p.windowBits<48&&!(15&p.windowBits)&&(p.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new F,this.strm.avail_out=0;var _=i.inflateInit2(this.strm,p.windowBits);if(_!==d.Z_OK)throw new Error(g[_]);this.header=new A,i.inflateGetHeader(this.strm,this.header)}function I(c,p){var _=new m(p);if(_.push(c,!0),_.err)throw _.msg||g[_.err];return _.result}m.prototype.push=function(c,p){var _,$,y,b,M,E,O=this.strm,W=this.options.chunkSize,C=this.options.dictionary,G=!1;if(this.ended)return!1;$=p===~~p?p:p===!0?d.Z_FINISH:d.Z_NO_FLUSH,typeof c=="string"?O.input=u.binstring2buf(c):N.call(c)==="[object ArrayBuffer]"?O.input=new Uint8Array(c):O.input=c,O.next_in=0,O.avail_in=O.input.length;do{if(O.avail_out===0&&(O.output=new o.Buf8(W),O.next_out=0,O.avail_out=W),(_=i.inflate(O,d.Z_NO_FLUSH))===d.Z_NEED_DICT&&C&&(E=typeof C=="string"?u.string2buf(C):N.call(C)==="[object ArrayBuffer]"?new Uint8Array(C):C,_=i.inflateSetDictionary(this.strm,E)),_===d.Z_BUF_ERROR&&G===!0&&(_=d.Z_OK,G=!1),_!==d.Z_STREAM_END&&_!==d.Z_OK)return this.onEnd(_),!(this.ended=!0);O.next_out&&(O.avail_out!==0&&_!==d.Z_STREAM_END&&(O.avail_in!==0||$!==d.Z_FINISH&&$!==d.Z_SYNC_FLUSH)||(this.options.to==="string"?(y=u.utf8border(O.output,O.next_out),b=O.next_out-y,M=u.buf2string(O.output,y),O.next_out=b,O.avail_out=W-b,b&&o.arraySet(O.output,O.output,y,b,0),this.onData(M)):this.onData(o.shrinkBuf(O.output,O.next_out)))),O.avail_in===0&&O.avail_out===0&&(G=!0)}while((0<O.avail_in||O.avail_out===0)&&_!==d.Z_STREAM_END);return _===d.Z_STREAM_END&&($=d.Z_FINISH),$===d.Z_FINISH?(_=i.inflateEnd(this.strm),this.onEnd(_),this.ended=!0,_===d.Z_OK):$!==d.Z_SYNC_FLUSH||(this.onEnd(d.Z_OK),!(O.avail_out=0))},m.prototype.onData=function(c){this.chunks.push(c)},m.prototype.onEnd=function(c){c===d.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=c,this.msg=this.strm.msg},r.Inflate=m,r.inflate=I,r.inflateRaw=function(c,p){return(p=p||{}).raw=!0,I(c,p)},r.ungzip=I},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(a,n,r){var i=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(d){for(var g=Array.prototype.slice.call(arguments,1);g.length;){var F=g.shift();if(F){if(typeof F!="object")throw new TypeError(F+"must be non-object");for(var A in F)F.hasOwnProperty(A)&&(d[A]=F[A])}}return d},r.shrinkBuf=function(d,g){return d.length===g?d:d.subarray?d.subarray(0,g):(d.length=g,d)};var o={arraySet:function(d,g,F,A,N){if(g.subarray&&d.subarray)d.set(g.subarray(F,F+A),N);else for(var m=0;m<A;m++)d[N+m]=g[F+m]},flattenChunks:function(d){var g,F,A,N,m,I;for(g=A=0,F=d.length;g<F;g++)A+=d[g].length;for(I=new Uint8Array(A),g=N=0,F=d.length;g<F;g++)m=d[g],I.set(m,N),N+=m.length;return I}},u={arraySet:function(d,g,F,A,N){for(var m=0;m<A;m++)d[N+m]=g[F+m]},flattenChunks:function(d){return[].concat.apply([],d)}};r.setTyped=function(d){d?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,u))},r.setTyped(i)},{}],42:[function(a,n,r){var i=a("./common"),o=!0,u=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{u=!1}for(var d=new i.Buf8(256),g=0;g<256;g++)d[g]=252<=g?6:248<=g?5:240<=g?4:224<=g?3:192<=g?2:1;function F(A,N){if(N<65537&&(A.subarray&&u||!A.subarray&&o))return String.fromCharCode.apply(null,i.shrinkBuf(A,N));for(var m="",I=0;I<N;I++)m+=String.fromCharCode(A[I]);return m}d[254]=d[254]=1,r.string2buf=function(A){var N,m,I,c,p,_=A.length,$=0;for(c=0;c<_;c++)(64512&(m=A.charCodeAt(c)))==55296&&c+1<_&&(64512&(I=A.charCodeAt(c+1)))==56320&&(m=65536+(m-55296<<10)+(I-56320),c++),$+=m<128?1:m<2048?2:m<65536?3:4;for(N=new i.Buf8($),c=p=0;p<$;c++)(64512&(m=A.charCodeAt(c)))==55296&&c+1<_&&(64512&(I=A.charCodeAt(c+1)))==56320&&(m=65536+(m-55296<<10)+(I-56320),c++),m<128?N[p++]=m:(m<2048?N[p++]=192|m>>>6:(m<65536?N[p++]=224|m>>>12:(N[p++]=240|m>>>18,N[p++]=128|m>>>12&63),N[p++]=128|m>>>6&63),N[p++]=128|63&m);return N},r.buf2binstring=function(A){return F(A,A.length)},r.binstring2buf=function(A){for(var N=new i.Buf8(A.length),m=0,I=N.length;m<I;m++)N[m]=A.charCodeAt(m);return N},r.buf2string=function(A,N){var m,I,c,p,_=N||A.length,$=new Array(2*_);for(m=I=0;m<_;)if((c=A[m++])<128)$[I++]=c;else if(4<(p=d[c]))$[I++]=65533,m+=p-1;else{for(c&=p===2?31:p===3?15:7;1<p&&m<_;)c=c<<6|63&A[m++],p--;1<p?$[I++]=65533:c<65536?$[I++]=c:(c-=65536,$[I++]=55296|c>>10&1023,$[I++]=56320|1023&c)}return F($,I)},r.utf8border=function(A,N){var m;for((N=N||A.length)>A.length&&(N=A.length),m=N-1;0<=m&&(192&A[m])==128;)m--;return m<0||m===0?N:m+d[A[m]]>N?m:N}},{"./common":41}],43:[function(a,n,r){n.exports=function(i,o,u,d){for(var g=65535&i|0,F=i>>>16&65535|0,A=0;u!==0;){for(u-=A=2e3<u?2e3:u;F=F+(g=g+o[d++]|0)|0,--A;);g%=65521,F%=65521}return g|F<<16|0}},{}],44:[function(a,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(a,n,r){var i=function(){for(var o,u=[],d=0;d<256;d++){o=d;for(var g=0;g<8;g++)o=1&o?3988292384^o>>>1:o>>>1;u[d]=o}return u}();n.exports=function(o,u,d,g){var F=i,A=g+d;o^=-1;for(var N=g;N<A;N++)o=o>>>8^F[255&(o^u[N])];return-1^o}},{}],46:[function(a,n,r){var i,o=a("../utils/common"),u=a("./trees"),d=a("./adler32"),g=a("./crc32"),F=a("./messages"),A=0,N=4,m=0,I=-2,c=-1,p=4,_=2,$=8,y=9,b=286,M=30,E=19,O=2*b+1,W=15,C=3,G=258,J=G+C+1,S=42,w=113,l=1,x=2,X=3,z=4;function ae(s,B){return s.msg=F[B],B}function U(s){return(s<<1)-(4<s?9:0)}function te(s){for(var B=s.length;0<=--B;)s[B]=0}function v(s){var B=s.state,k=B.pending;k>s.avail_out&&(k=s.avail_out),k!==0&&(o.arraySet(s.output,B.pending_buf,B.pending_out,k,s.next_out),s.next_out+=k,B.pending_out+=k,s.total_out+=k,s.avail_out-=k,B.pending-=k,B.pending===0&&(B.pending_out=0))}function D(s,B){u._tr_flush_block(s,0<=s.block_start?s.block_start:-1,s.strstart-s.block_start,B),s.block_start=s.strstart,v(s.strm)}function ee(s,B){s.pending_buf[s.pending++]=B}function q(s,B){s.pending_buf[s.pending++]=B>>>8&255,s.pending_buf[s.pending++]=255&B}function Q(s,B){var k,P,h=s.max_chain_length,V=s.strstart,T=s.prev_length,H=s.nice_match,R=s.strstart>s.w_size-J?s.strstart-(s.w_size-J):0,j=s.window,K=s.w_mask,Z=s.prev,Y=s.strstart+G,se=j[V+T-1],re=j[V+T];s.prev_length>=s.good_match&&(h>>=2),H>s.lookahead&&(H=s.lookahead);do if(j[(k=B)+T]===re&&j[k+T-1]===se&&j[k]===j[V]&&j[++k]===j[V+1]){V+=2,k++;do;while(j[++V]===j[++k]&&j[++V]===j[++k]&&j[++V]===j[++k]&&j[++V]===j[++k]&&j[++V]===j[++k]&&j[++V]===j[++k]&&j[++V]===j[++k]&&j[++V]===j[++k]&&V<Y);if(P=G-(Y-V),V=Y-G,T<P){if(s.match_start=B,H<=(T=P))break;se=j[V+T-1],re=j[V+T]}}while((B=Z[B&K])>R&&--h!=0);return T<=s.lookahead?T:s.lookahead}function le(s){var B,k,P,h,V,T,H,R,j,K,Z=s.w_size;do{if(h=s.window_size-s.lookahead-s.strstart,s.strstart>=Z+(Z-J)){for(o.arraySet(s.window,s.window,Z,Z,0),s.match_start-=Z,s.strstart-=Z,s.block_start-=Z,B=k=s.hash_size;P=s.head[--B],s.head[B]=Z<=P?P-Z:0,--k;);for(B=k=Z;P=s.prev[--B],s.prev[B]=Z<=P?P-Z:0,--k;);h+=Z}if(s.strm.avail_in===0)break;if(T=s.strm,H=s.window,R=s.strstart+s.lookahead,j=h,K=void 0,K=T.avail_in,j<K&&(K=j),k=K===0?0:(T.avail_in-=K,o.arraySet(H,T.input,T.next_in,K,R),T.state.wrap===1?T.adler=d(T.adler,H,K,R):T.state.wrap===2&&(T.adler=g(T.adler,H,K,R)),T.next_in+=K,T.total_in+=K,K),s.lookahead+=k,s.lookahead+s.insert>=C)for(V=s.strstart-s.insert,s.ins_h=s.window[V],s.ins_h=(s.ins_h<<s.hash_shift^s.window[V+1])&s.hash_mask;s.insert&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[V+C-1])&s.hash_mask,s.prev[V&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=V,V++,s.insert--,!(s.lookahead+s.insert<C)););}while(s.lookahead<J&&s.strm.avail_in!==0)}function me(s,B){for(var k,P;;){if(s.lookahead<J){if(le(s),s.lookahead<J&&B===A)return l;if(s.lookahead===0)break}if(k=0,s.lookahead>=C&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+C-1])&s.hash_mask,k=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart),k!==0&&s.strstart-k<=s.w_size-J&&(s.match_length=Q(s,k)),s.match_length>=C)if(P=u._tr_tally(s,s.strstart-s.match_start,s.match_length-C),s.lookahead-=s.match_length,s.match_length<=s.max_lazy_match&&s.lookahead>=C){for(s.match_length--;s.strstart++,s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+C-1])&s.hash_mask,k=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart,--s.match_length!=0;);s.strstart++}else s.strstart+=s.match_length,s.match_length=0,s.ins_h=s.window[s.strstart],s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+1])&s.hash_mask;else P=u._tr_tally(s,0,s.window[s.strstart]),s.lookahead--,s.strstart++;if(P&&(D(s,!1),s.strm.avail_out===0))return l}return s.insert=s.strstart<C-1?s.strstart:C-1,B===N?(D(s,!0),s.strm.avail_out===0?X:z):s.last_lit&&(D(s,!1),s.strm.avail_out===0)?l:x}function ne(s,B){for(var k,P,h;;){if(s.lookahead<J){if(le(s),s.lookahead<J&&B===A)return l;if(s.lookahead===0)break}if(k=0,s.lookahead>=C&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+C-1])&s.hash_mask,k=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart),s.prev_length=s.match_length,s.prev_match=s.match_start,s.match_length=C-1,k!==0&&s.prev_length<s.max_lazy_match&&s.strstart-k<=s.w_size-J&&(s.match_length=Q(s,k),s.match_length<=5&&(s.strategy===1||s.match_length===C&&4096<s.strstart-s.match_start)&&(s.match_length=C-1)),s.prev_length>=C&&s.match_length<=s.prev_length){for(h=s.strstart+s.lookahead-C,P=u._tr_tally(s,s.strstart-1-s.prev_match,s.prev_length-C),s.lookahead-=s.prev_length-1,s.prev_length-=2;++s.strstart<=h&&(s.ins_h=(s.ins_h<<s.hash_shift^s.window[s.strstart+C-1])&s.hash_mask,k=s.prev[s.strstart&s.w_mask]=s.head[s.ins_h],s.head[s.ins_h]=s.strstart),--s.prev_length!=0;);if(s.match_available=0,s.match_length=C-1,s.strstart++,P&&(D(s,!1),s.strm.avail_out===0))return l}else if(s.match_available){if((P=u._tr_tally(s,0,s.window[s.strstart-1]))&&D(s,!1),s.strstart++,s.lookahead--,s.strm.avail_out===0)return l}else s.match_available=1,s.strstart++,s.lookahead--}return s.match_available&&(P=u._tr_tally(s,0,s.window[s.strstart-1]),s.match_available=0),s.insert=s.strstart<C-1?s.strstart:C-1,B===N?(D(s,!0),s.strm.avail_out===0?X:z):s.last_lit&&(D(s,!1),s.strm.avail_out===0)?l:x}function ie(s,B,k,P,h){this.good_length=s,this.max_lazy=B,this.nice_length=k,this.max_chain=P,this.func=h}function ce(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=$,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*O),this.dyn_dtree=new o.Buf16(2*(2*M+1)),this.bl_tree=new o.Buf16(2*(2*E+1)),te(this.dyn_ltree),te(this.dyn_dtree),te(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(W+1),this.heap=new o.Buf16(2*b+1),te(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*b+1),te(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function oe(s){var B;return s&&s.state?(s.total_in=s.total_out=0,s.data_type=_,(B=s.state).pending=0,B.pending_out=0,B.wrap<0&&(B.wrap=-B.wrap),B.status=B.wrap?S:w,s.adler=B.wrap===2?0:1,B.last_flush=A,u._tr_init(B),m):ae(s,I)}function he(s){var B=oe(s);return B===m&&function(k){k.window_size=2*k.w_size,te(k.head),k.max_lazy_match=i[k.level].max_lazy,k.good_match=i[k.level].good_length,k.nice_match=i[k.level].nice_length,k.max_chain_length=i[k.level].max_chain,k.strstart=0,k.block_start=0,k.lookahead=0,k.insert=0,k.match_length=k.prev_length=C-1,k.match_available=0,k.ins_h=0}(s.state),B}function fe(s,B,k,P,h,V){if(!s)return I;var T=1;if(B===c&&(B=6),P<0?(T=0,P=-P):15<P&&(T=2,P-=16),h<1||y<h||k!==$||P<8||15<P||B<0||9<B||V<0||p<V)return ae(s,I);P===8&&(P=9);var H=new ce;return(s.state=H).strm=s,H.wrap=T,H.gzhead=null,H.w_bits=P,H.w_size=1<<H.w_bits,H.w_mask=H.w_size-1,H.hash_bits=h+7,H.hash_size=1<<H.hash_bits,H.hash_mask=H.hash_size-1,H.hash_shift=~~((H.hash_bits+C-1)/C),H.window=new o.Buf8(2*H.w_size),H.head=new o.Buf16(H.hash_size),H.prev=new o.Buf16(H.w_size),H.lit_bufsize=1<<h+6,H.pending_buf_size=4*H.lit_bufsize,H.pending_buf=new o.Buf8(H.pending_buf_size),H.d_buf=1*H.lit_bufsize,H.l_buf=3*H.lit_bufsize,H.level=B,H.strategy=V,H.method=k,he(s)}i=[new ie(0,0,0,0,function(s,B){var k=65535;for(k>s.pending_buf_size-5&&(k=s.pending_buf_size-5);;){if(s.lookahead<=1){if(le(s),s.lookahead===0&&B===A)return l;if(s.lookahead===0)break}s.strstart+=s.lookahead,s.lookahead=0;var P=s.block_start+k;if((s.strstart===0||s.strstart>=P)&&(s.lookahead=s.strstart-P,s.strstart=P,D(s,!1),s.strm.avail_out===0)||s.strstart-s.block_start>=s.w_size-J&&(D(s,!1),s.strm.avail_out===0))return l}return s.insert=0,B===N?(D(s,!0),s.strm.avail_out===0?X:z):(s.strstart>s.block_start&&(D(s,!1),s.strm.avail_out),l)}),new ie(4,4,8,4,me),new ie(4,5,16,8,me),new ie(4,6,32,32,me),new ie(4,4,16,16,ne),new ie(8,16,32,32,ne),new ie(8,16,128,128,ne),new ie(8,32,128,256,ne),new ie(32,128,258,1024,ne),new ie(32,258,258,4096,ne)],r.deflateInit=function(s,B){return fe(s,B,$,15,8,0)},r.deflateInit2=fe,r.deflateReset=he,r.deflateResetKeep=oe,r.deflateSetHeader=function(s,B){return s&&s.state?s.state.wrap!==2?I:(s.state.gzhead=B,m):I},r.deflate=function(s,B){var k,P,h,V;if(!s||!s.state||5<B||B<0)return s?ae(s,I):I;if(P=s.state,!s.output||!s.input&&s.avail_in!==0||P.status===666&&B!==N)return ae(s,s.avail_out===0?-5:I);if(P.strm=s,k=P.last_flush,P.last_flush=B,P.status===S)if(P.wrap===2)s.adler=0,ee(P,31),ee(P,139),ee(P,8),P.gzhead?(ee(P,(P.gzhead.text?1:0)+(P.gzhead.hcrc?2:0)+(P.gzhead.extra?4:0)+(P.gzhead.name?8:0)+(P.gzhead.comment?16:0)),ee(P,255&P.gzhead.time),ee(P,P.gzhead.time>>8&255),ee(P,P.gzhead.time>>16&255),ee(P,P.gzhead.time>>24&255),ee(P,P.level===9?2:2<=P.strategy||P.level<2?4:0),ee(P,255&P.gzhead.os),P.gzhead.extra&&P.gzhead.extra.length&&(ee(P,255&P.gzhead.extra.length),ee(P,P.gzhead.extra.length>>8&255)),P.gzhead.hcrc&&(s.adler=g(s.adler,P.pending_buf,P.pending,0)),P.gzindex=0,P.status=69):(ee(P,0),ee(P,0),ee(P,0),ee(P,0),ee(P,0),ee(P,P.level===9?2:2<=P.strategy||P.level<2?4:0),ee(P,3),P.status=w);else{var T=$+(P.w_bits-8<<4)<<8;T|=(2<=P.strategy||P.level<2?0:P.level<6?1:P.level===6?2:3)<<6,P.strstart!==0&&(T|=32),T+=31-T%31,P.status=w,q(P,T),P.strstart!==0&&(q(P,s.adler>>>16),q(P,65535&s.adler)),s.adler=1}if(P.status===69)if(P.gzhead.extra){for(h=P.pending;P.gzindex<(65535&P.gzhead.extra.length)&&(P.pending!==P.pending_buf_size||(P.gzhead.hcrc&&P.pending>h&&(s.adler=g(s.adler,P.pending_buf,P.pending-h,h)),v(s),h=P.pending,P.pending!==P.pending_buf_size));)ee(P,255&P.gzhead.extra[P.gzindex]),P.gzindex++;P.gzhead.hcrc&&P.pending>h&&(s.adler=g(s.adler,P.pending_buf,P.pending-h,h)),P.gzindex===P.gzhead.extra.length&&(P.gzindex=0,P.status=73)}else P.status=73;if(P.status===73)if(P.gzhead.name){h=P.pending;do{if(P.pending===P.pending_buf_size&&(P.gzhead.hcrc&&P.pending>h&&(s.adler=g(s.adler,P.pending_buf,P.pending-h,h)),v(s),h=P.pending,P.pending===P.pending_buf_size)){V=1;break}V=P.gzindex<P.gzhead.name.length?255&P.gzhead.name.charCodeAt(P.gzindex++):0,ee(P,V)}while(V!==0);P.gzhead.hcrc&&P.pending>h&&(s.adler=g(s.adler,P.pending_buf,P.pending-h,h)),V===0&&(P.gzindex=0,P.status=91)}else P.status=91;if(P.status===91)if(P.gzhead.comment){h=P.pending;do{if(P.pending===P.pending_buf_size&&(P.gzhead.hcrc&&P.pending>h&&(s.adler=g(s.adler,P.pending_buf,P.pending-h,h)),v(s),h=P.pending,P.pending===P.pending_buf_size)){V=1;break}V=P.gzindex<P.gzhead.comment.length?255&P.gzhead.comment.charCodeAt(P.gzindex++):0,ee(P,V)}while(V!==0);P.gzhead.hcrc&&P.pending>h&&(s.adler=g(s.adler,P.pending_buf,P.pending-h,h)),V===0&&(P.status=103)}else P.status=103;if(P.status===103&&(P.gzhead.hcrc?(P.pending+2>P.pending_buf_size&&v(s),P.pending+2<=P.pending_buf_size&&(ee(P,255&s.adler),ee(P,s.adler>>8&255),s.adler=0,P.status=w)):P.status=w),P.pending!==0){if(v(s),s.avail_out===0)return P.last_flush=-1,m}else if(s.avail_in===0&&U(B)<=U(k)&&B!==N)return ae(s,-5);if(P.status===666&&s.avail_in!==0)return ae(s,-5);if(s.avail_in!==0||P.lookahead!==0||B!==A&&P.status!==666){var H=P.strategy===2?function(R,j){for(var K;;){if(R.lookahead===0&&(le(R),R.lookahead===0)){if(j===A)return l;break}if(R.match_length=0,K=u._tr_tally(R,0,R.window[R.strstart]),R.lookahead--,R.strstart++,K&&(D(R,!1),R.strm.avail_out===0))return l}return R.insert=0,j===N?(D(R,!0),R.strm.avail_out===0?X:z):R.last_lit&&(D(R,!1),R.strm.avail_out===0)?l:x}(P,B):P.strategy===3?function(R,j){for(var K,Z,Y,se,re=R.window;;){if(R.lookahead<=G){if(le(R),R.lookahead<=G&&j===A)return l;if(R.lookahead===0)break}if(R.match_length=0,R.lookahead>=C&&0<R.strstart&&(Z=re[Y=R.strstart-1])===re[++Y]&&Z===re[++Y]&&Z===re[++Y]){se=R.strstart+G;do;while(Z===re[++Y]&&Z===re[++Y]&&Z===re[++Y]&&Z===re[++Y]&&Z===re[++Y]&&Z===re[++Y]&&Z===re[++Y]&&Z===re[++Y]&&Y<se);R.match_length=G-(se-Y),R.match_length>R.lookahead&&(R.match_length=R.lookahead)}if(R.match_length>=C?(K=u._tr_tally(R,1,R.match_length-C),R.lookahead-=R.match_length,R.strstart+=R.match_length,R.match_length=0):(K=u._tr_tally(R,0,R.window[R.strstart]),R.lookahead--,R.strstart++),K&&(D(R,!1),R.strm.avail_out===0))return l}return R.insert=0,j===N?(D(R,!0),R.strm.avail_out===0?X:z):R.last_lit&&(D(R,!1),R.strm.avail_out===0)?l:x}(P,B):i[P.level].func(P,B);if(H!==X&&H!==z||(P.status=666),H===l||H===X)return s.avail_out===0&&(P.last_flush=-1),m;if(H===x&&(B===1?u._tr_align(P):B!==5&&(u._tr_stored_block(P,0,0,!1),B===3&&(te(P.head),P.lookahead===0&&(P.strstart=0,P.block_start=0,P.insert=0))),v(s),s.avail_out===0))return P.last_flush=-1,m}return B!==N?m:P.wrap<=0?1:(P.wrap===2?(ee(P,255&s.adler),ee(P,s.adler>>8&255),ee(P,s.adler>>16&255),ee(P,s.adler>>24&255),ee(P,255&s.total_in),ee(P,s.total_in>>8&255),ee(P,s.total_in>>16&255),ee(P,s.total_in>>24&255)):(q(P,s.adler>>>16),q(P,65535&s.adler)),v(s),0<P.wrap&&(P.wrap=-P.wrap),P.pending!==0?m:1)},r.deflateEnd=function(s){var B;return s&&s.state?(B=s.state.status)!==S&&B!==69&&B!==73&&B!==91&&B!==103&&B!==w&&B!==666?ae(s,I):(s.state=null,B===w?ae(s,-3):m):I},r.deflateSetDictionary=function(s,B){var k,P,h,V,T,H,R,j,K=B.length;if(!s||!s.state||(V=(k=s.state).wrap)===2||V===1&&k.status!==S||k.lookahead)return I;for(V===1&&(s.adler=d(s.adler,B,K,0)),k.wrap=0,K>=k.w_size&&(V===0&&(te(k.head),k.strstart=0,k.block_start=0,k.insert=0),j=new o.Buf8(k.w_size),o.arraySet(j,B,K-k.w_size,k.w_size,0),B=j,K=k.w_size),T=s.avail_in,H=s.next_in,R=s.input,s.avail_in=K,s.next_in=0,s.input=B,le(k);k.lookahead>=C;){for(P=k.strstart,h=k.lookahead-(C-1);k.ins_h=(k.ins_h<<k.hash_shift^k.window[P+C-1])&k.hash_mask,k.prev[P&k.w_mask]=k.head[k.ins_h],k.head[k.ins_h]=P,P++,--h;);k.strstart=P,k.lookahead=C-1,le(k)}return k.strstart+=k.lookahead,k.block_start=k.strstart,k.insert=k.lookahead,k.lookahead=0,k.match_length=k.prev_length=C-1,k.match_available=0,s.next_in=H,s.input=R,s.avail_in=T,k.wrap=V,m},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(a,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(a,n,r){n.exports=function(i,o){var u,d,g,F,A,N,m,I,c,p,_,$,y,b,M,E,O,W,C,G,J,S,w,l,x;u=i.state,d=i.next_in,l=i.input,g=d+(i.avail_in-5),F=i.next_out,x=i.output,A=F-(o-i.avail_out),N=F+(i.avail_out-257),m=u.dmax,I=u.wsize,c=u.whave,p=u.wnext,_=u.window,$=u.hold,y=u.bits,b=u.lencode,M=u.distcode,E=(1<<u.lenbits)-1,O=(1<<u.distbits)-1;e:do{y<15&&($+=l[d++]<<y,y+=8,$+=l[d++]<<y,y+=8),W=b[$&E];t:for(;;){if($>>>=C=W>>>24,y-=C,(C=W>>>16&255)===0)x[F++]=65535&W;else{if(!(16&C)){if(!(64&C)){W=b[(65535&W)+($&(1<<C)-1)];continue t}if(32&C){u.mode=12;break e}i.msg="invalid literal/length code",u.mode=30;break e}G=65535&W,(C&=15)&&(y<C&&($+=l[d++]<<y,y+=8),G+=$&(1<<C)-1,$>>>=C,y-=C),y<15&&($+=l[d++]<<y,y+=8,$+=l[d++]<<y,y+=8),W=M[$&O];a:for(;;){if($>>>=C=W>>>24,y-=C,!(16&(C=W>>>16&255))){if(!(64&C)){W=M[(65535&W)+($&(1<<C)-1)];continue a}i.msg="invalid distance code",u.mode=30;break e}if(J=65535&W,y<(C&=15)&&($+=l[d++]<<y,(y+=8)<C&&($+=l[d++]<<y,y+=8)),m<(J+=$&(1<<C)-1)){i.msg="invalid distance too far back",u.mode=30;break e}if($>>>=C,y-=C,(C=F-A)<J){if(c<(C=J-C)&&u.sane){i.msg="invalid distance too far back",u.mode=30;break e}if(w=_,(S=0)===p){if(S+=I-C,C<G){for(G-=C;x[F++]=_[S++],--C;);S=F-J,w=x}}else if(p<C){if(S+=I+p-C,(C-=p)<G){for(G-=C;x[F++]=_[S++],--C;);if(S=0,p<G){for(G-=C=p;x[F++]=_[S++],--C;);S=F-J,w=x}}}else if(S+=p-C,C<G){for(G-=C;x[F++]=_[S++],--C;);S=F-J,w=x}for(;2<G;)x[F++]=w[S++],x[F++]=w[S++],x[F++]=w[S++],G-=3;G&&(x[F++]=w[S++],1<G&&(x[F++]=w[S++]))}else{for(S=F-J;x[F++]=x[S++],x[F++]=x[S++],x[F++]=x[S++],2<(G-=3););G&&(x[F++]=x[S++],1<G&&(x[F++]=x[S++]))}break}}break}}while(d<g&&F<N);d-=G=y>>3,$&=(1<<(y-=G<<3))-1,i.next_in=d,i.next_out=F,i.avail_in=d<g?g-d+5:5-(d-g),i.avail_out=F<N?N-F+257:257-(F-N),u.hold=$,u.bits=y}},{}],49:[function(a,n,r){var i=a("../utils/common"),o=a("./adler32"),u=a("./crc32"),d=a("./inffast"),g=a("./inftrees"),F=1,A=2,N=0,m=-2,I=1,c=852,p=592;function _(S){return(S>>>24&255)+(S>>>8&65280)+((65280&S)<<8)+((255&S)<<24)}function $(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new i.Buf16(320),this.work=new i.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function y(S){var w;return S&&S.state?(w=S.state,S.total_in=S.total_out=w.total=0,S.msg="",w.wrap&&(S.adler=1&w.wrap),w.mode=I,w.last=0,w.havedict=0,w.dmax=32768,w.head=null,w.hold=0,w.bits=0,w.lencode=w.lendyn=new i.Buf32(c),w.distcode=w.distdyn=new i.Buf32(p),w.sane=1,w.back=-1,N):m}function b(S){var w;return S&&S.state?((w=S.state).wsize=0,w.whave=0,w.wnext=0,y(S)):m}function M(S,w){var l,x;return S&&S.state?(x=S.state,w<0?(l=0,w=-w):(l=1+(w>>4),w<48&&(w&=15)),w&&(w<8||15<w)?m:(x.window!==null&&x.wbits!==w&&(x.window=null),x.wrap=l,x.wbits=w,b(S))):m}function E(S,w){var l,x;return S?(x=new $,(S.state=x).window=null,(l=M(S,w))!==N&&(S.state=null),l):m}var O,W,C=!0;function G(S){if(C){var w;for(O=new i.Buf32(512),W=new i.Buf32(32),w=0;w<144;)S.lens[w++]=8;for(;w<256;)S.lens[w++]=9;for(;w<280;)S.lens[w++]=7;for(;w<288;)S.lens[w++]=8;for(g(F,S.lens,0,288,O,0,S.work,{bits:9}),w=0;w<32;)S.lens[w++]=5;g(A,S.lens,0,32,W,0,S.work,{bits:5}),C=!1}S.lencode=O,S.lenbits=9,S.distcode=W,S.distbits=5}function J(S,w,l,x){var X,z=S.state;return z.window===null&&(z.wsize=1<<z.wbits,z.wnext=0,z.whave=0,z.window=new i.Buf8(z.wsize)),x>=z.wsize?(i.arraySet(z.window,w,l-z.wsize,z.wsize,0),z.wnext=0,z.whave=z.wsize):(x<(X=z.wsize-z.wnext)&&(X=x),i.arraySet(z.window,w,l-x,X,z.wnext),(x-=X)?(i.arraySet(z.window,w,l-x,x,0),z.wnext=x,z.whave=z.wsize):(z.wnext+=X,z.wnext===z.wsize&&(z.wnext=0),z.whave<z.wsize&&(z.whave+=X))),0}r.inflateReset=b,r.inflateReset2=M,r.inflateResetKeep=y,r.inflateInit=function(S){return E(S,15)},r.inflateInit2=E,r.inflate=function(S,w){var l,x,X,z,ae,U,te,v,D,ee,q,Q,le,me,ne,ie,ce,oe,he,fe,s,B,k,P,h=0,V=new i.Buf8(4),T=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!S||!S.state||!S.output||!S.input&&S.avail_in!==0)return m;(l=S.state).mode===12&&(l.mode=13),ae=S.next_out,X=S.output,te=S.avail_out,z=S.next_in,x=S.input,U=S.avail_in,v=l.hold,D=l.bits,ee=U,q=te,B=N;e:for(;;)switch(l.mode){case I:if(l.wrap===0){l.mode=13;break}for(;D<16;){if(U===0)break e;U--,v+=x[z++]<<D,D+=8}if(2&l.wrap&&v===35615){V[l.check=0]=255&v,V[1]=v>>>8&255,l.check=u(l.check,V,2,0),D=v=0,l.mode=2;break}if(l.flags=0,l.head&&(l.head.done=!1),!(1&l.wrap)||(((255&v)<<8)+(v>>8))%31){S.msg="incorrect header check",l.mode=30;break}if((15&v)!=8){S.msg="unknown compression method",l.mode=30;break}if(D-=4,s=8+(15&(v>>>=4)),l.wbits===0)l.wbits=s;else if(s>l.wbits){S.msg="invalid window size",l.mode=30;break}l.dmax=1<<s,S.adler=l.check=1,l.mode=512&v?10:12,D=v=0;break;case 2:for(;D<16;){if(U===0)break e;U--,v+=x[z++]<<D,D+=8}if(l.flags=v,(255&l.flags)!=8){S.msg="unknown compression method",l.mode=30;break}if(57344&l.flags){S.msg="unknown header flags set",l.mode=30;break}l.head&&(l.head.text=v>>8&1),512&l.flags&&(V[0]=255&v,V[1]=v>>>8&255,l.check=u(l.check,V,2,0)),D=v=0,l.mode=3;case 3:for(;D<32;){if(U===0)break e;U--,v+=x[z++]<<D,D+=8}l.head&&(l.head.time=v),512&l.flags&&(V[0]=255&v,V[1]=v>>>8&255,V[2]=v>>>16&255,V[3]=v>>>24&255,l.check=u(l.check,V,4,0)),D=v=0,l.mode=4;case 4:for(;D<16;){if(U===0)break e;U--,v+=x[z++]<<D,D+=8}l.head&&(l.head.xflags=255&v,l.head.os=v>>8),512&l.flags&&(V[0]=255&v,V[1]=v>>>8&255,l.check=u(l.check,V,2,0)),D=v=0,l.mode=5;case 5:if(1024&l.flags){for(;D<16;){if(U===0)break e;U--,v+=x[z++]<<D,D+=8}l.length=v,l.head&&(l.head.extra_len=v),512&l.flags&&(V[0]=255&v,V[1]=v>>>8&255,l.check=u(l.check,V,2,0)),D=v=0}else l.head&&(l.head.extra=null);l.mode=6;case 6:if(1024&l.flags&&(U<(Q=l.length)&&(Q=U),Q&&(l.head&&(s=l.head.extra_len-l.length,l.head.extra||(l.head.extra=new Array(l.head.extra_len)),i.arraySet(l.head.extra,x,z,Q,s)),512&l.flags&&(l.check=u(l.check,x,Q,z)),U-=Q,z+=Q,l.length-=Q),l.length))break e;l.length=0,l.mode=7;case 7:if(2048&l.flags){if(U===0)break e;for(Q=0;s=x[z+Q++],l.head&&s&&l.length<65536&&(l.head.name+=String.fromCharCode(s)),s&&Q<U;);if(512&l.flags&&(l.check=u(l.check,x,Q,z)),U-=Q,z+=Q,s)break e}else l.head&&(l.head.name=null);l.length=0,l.mode=8;case 8:if(4096&l.flags){if(U===0)break e;for(Q=0;s=x[z+Q++],l.head&&s&&l.length<65536&&(l.head.comment+=String.fromCharCode(s)),s&&Q<U;);if(512&l.flags&&(l.check=u(l.check,x,Q,z)),U-=Q,z+=Q,s)break e}else l.head&&(l.head.comment=null);l.mode=9;case 9:if(512&l.flags){for(;D<16;){if(U===0)break e;U--,v+=x[z++]<<D,D+=8}if(v!==(65535&l.check)){S.msg="header crc mismatch",l.mode=30;break}D=v=0}l.head&&(l.head.hcrc=l.flags>>9&1,l.head.done=!0),S.adler=l.check=0,l.mode=12;break;case 10:for(;D<32;){if(U===0)break e;U--,v+=x[z++]<<D,D+=8}S.adler=l.check=_(v),D=v=0,l.mode=11;case 11:if(l.havedict===0)return S.next_out=ae,S.avail_out=te,S.next_in=z,S.avail_in=U,l.hold=v,l.bits=D,2;S.adler=l.check=1,l.mode=12;case 12:if(w===5||w===6)break e;case 13:if(l.last){v>>>=7&D,D-=7&D,l.mode=27;break}for(;D<3;){if(U===0)break e;U--,v+=x[z++]<<D,D+=8}switch(l.last=1&v,D-=1,3&(v>>>=1)){case 0:l.mode=14;break;case 1:if(G(l),l.mode=20,w!==6)break;v>>>=2,D-=2;break e;case 2:l.mode=17;break;case 3:S.msg="invalid block type",l.mode=30}v>>>=2,D-=2;break;case 14:for(v>>>=7&D,D-=7&D;D<32;){if(U===0)break e;U--,v+=x[z++]<<D,D+=8}if((65535&v)!=(v>>>16^65535)){S.msg="invalid stored block lengths",l.mode=30;break}if(l.length=65535&v,D=v=0,l.mode=15,w===6)break e;case 15:l.mode=16;case 16:if(Q=l.length){if(U<Q&&(Q=U),te<Q&&(Q=te),Q===0)break e;i.arraySet(X,x,z,Q,ae),U-=Q,z+=Q,te-=Q,ae+=Q,l.length-=Q;break}l.mode=12;break;case 17:for(;D<14;){if(U===0)break e;U--,v+=x[z++]<<D,D+=8}if(l.nlen=257+(31&v),v>>>=5,D-=5,l.ndist=1+(31&v),v>>>=5,D-=5,l.ncode=4+(15&v),v>>>=4,D-=4,286<l.nlen||30<l.ndist){S.msg="too many length or distance symbols",l.mode=30;break}l.have=0,l.mode=18;case 18:for(;l.have<l.ncode;){for(;D<3;){if(U===0)break e;U--,v+=x[z++]<<D,D+=8}l.lens[T[l.have++]]=7&v,v>>>=3,D-=3}for(;l.have<19;)l.lens[T[l.have++]]=0;if(l.lencode=l.lendyn,l.lenbits=7,k={bits:l.lenbits},B=g(0,l.lens,0,19,l.lencode,0,l.work,k),l.lenbits=k.bits,B){S.msg="invalid code lengths set",l.mode=30;break}l.have=0,l.mode=19;case 19:for(;l.have<l.nlen+l.ndist;){for(;ie=(h=l.lencode[v&(1<<l.lenbits)-1])>>>16&255,ce=65535&h,!((ne=h>>>24)<=D);){if(U===0)break e;U--,v+=x[z++]<<D,D+=8}if(ce<16)v>>>=ne,D-=ne,l.lens[l.have++]=ce;else{if(ce===16){for(P=ne+2;D<P;){if(U===0)break e;U--,v+=x[z++]<<D,D+=8}if(v>>>=ne,D-=ne,l.have===0){S.msg="invalid bit length repeat",l.mode=30;break}s=l.lens[l.have-1],Q=3+(3&v),v>>>=2,D-=2}else if(ce===17){for(P=ne+3;D<P;){if(U===0)break e;U--,v+=x[z++]<<D,D+=8}D-=ne,s=0,Q=3+(7&(v>>>=ne)),v>>>=3,D-=3}else{for(P=ne+7;D<P;){if(U===0)break e;U--,v+=x[z++]<<D,D+=8}D-=ne,s=0,Q=11+(127&(v>>>=ne)),v>>>=7,D-=7}if(l.have+Q>l.nlen+l.ndist){S.msg="invalid bit length repeat",l.mode=30;break}for(;Q--;)l.lens[l.have++]=s}}if(l.mode===30)break;if(l.lens[256]===0){S.msg="invalid code -- missing end-of-block",l.mode=30;break}if(l.lenbits=9,k={bits:l.lenbits},B=g(F,l.lens,0,l.nlen,l.lencode,0,l.work,k),l.lenbits=k.bits,B){S.msg="invalid literal/lengths set",l.mode=30;break}if(l.distbits=6,l.distcode=l.distdyn,k={bits:l.distbits},B=g(A,l.lens,l.nlen,l.ndist,l.distcode,0,l.work,k),l.distbits=k.bits,B){S.msg="invalid distances set",l.mode=30;break}if(l.mode=20,w===6)break e;case 20:l.mode=21;case 21:if(6<=U&&258<=te){S.next_out=ae,S.avail_out=te,S.next_in=z,S.avail_in=U,l.hold=v,l.bits=D,d(S,q),ae=S.next_out,X=S.output,te=S.avail_out,z=S.next_in,x=S.input,U=S.avail_in,v=l.hold,D=l.bits,l.mode===12&&(l.back=-1);break}for(l.back=0;ie=(h=l.lencode[v&(1<<l.lenbits)-1])>>>16&255,ce=65535&h,!((ne=h>>>24)<=D);){if(U===0)break e;U--,v+=x[z++]<<D,D+=8}if(ie&&!(240&ie)){for(oe=ne,he=ie,fe=ce;ie=(h=l.lencode[fe+((v&(1<<oe+he)-1)>>oe)])>>>16&255,ce=65535&h,!(oe+(ne=h>>>24)<=D);){if(U===0)break e;U--,v+=x[z++]<<D,D+=8}v>>>=oe,D-=oe,l.back+=oe}if(v>>>=ne,D-=ne,l.back+=ne,l.length=ce,ie===0){l.mode=26;break}if(32&ie){l.back=-1,l.mode=12;break}if(64&ie){S.msg="invalid literal/length code",l.mode=30;break}l.extra=15&ie,l.mode=22;case 22:if(l.extra){for(P=l.extra;D<P;){if(U===0)break e;U--,v+=x[z++]<<D,D+=8}l.length+=v&(1<<l.extra)-1,v>>>=l.extra,D-=l.extra,l.back+=l.extra}l.was=l.length,l.mode=23;case 23:for(;ie=(h=l.distcode[v&(1<<l.distbits)-1])>>>16&255,ce=65535&h,!((ne=h>>>24)<=D);){if(U===0)break e;U--,v+=x[z++]<<D,D+=8}if(!(240&ie)){for(oe=ne,he=ie,fe=ce;ie=(h=l.distcode[fe+((v&(1<<oe+he)-1)>>oe)])>>>16&255,ce=65535&h,!(oe+(ne=h>>>24)<=D);){if(U===0)break e;U--,v+=x[z++]<<D,D+=8}v>>>=oe,D-=oe,l.back+=oe}if(v>>>=ne,D-=ne,l.back+=ne,64&ie){S.msg="invalid distance code",l.mode=30;break}l.offset=ce,l.extra=15&ie,l.mode=24;case 24:if(l.extra){for(P=l.extra;D<P;){if(U===0)break e;U--,v+=x[z++]<<D,D+=8}l.offset+=v&(1<<l.extra)-1,v>>>=l.extra,D-=l.extra,l.back+=l.extra}if(l.offset>l.dmax){S.msg="invalid distance too far back",l.mode=30;break}l.mode=25;case 25:if(te===0)break e;if(Q=q-te,l.offset>Q){if((Q=l.offset-Q)>l.whave&&l.sane){S.msg="invalid distance too far back",l.mode=30;break}le=Q>l.wnext?(Q-=l.wnext,l.wsize-Q):l.wnext-Q,Q>l.length&&(Q=l.length),me=l.window}else me=X,le=ae-l.offset,Q=l.length;for(te<Q&&(Q=te),te-=Q,l.length-=Q;X[ae++]=me[le++],--Q;);l.length===0&&(l.mode=21);break;case 26:if(te===0)break e;X[ae++]=l.length,te--,l.mode=21;break;case 27:if(l.wrap){for(;D<32;){if(U===0)break e;U--,v|=x[z++]<<D,D+=8}if(q-=te,S.total_out+=q,l.total+=q,q&&(S.adler=l.check=l.flags?u(l.check,X,q,ae-q):o(l.check,X,q,ae-q)),q=te,(l.flags?v:_(v))!==l.check){S.msg="incorrect data check",l.mode=30;break}D=v=0}l.mode=28;case 28:if(l.wrap&&l.flags){for(;D<32;){if(U===0)break e;U--,v+=x[z++]<<D,D+=8}if(v!==(4294967295&l.total)){S.msg="incorrect length check",l.mode=30;break}D=v=0}l.mode=29;case 29:B=1;break e;case 30:B=-3;break e;case 31:return-4;case 32:default:return m}return S.next_out=ae,S.avail_out=te,S.next_in=z,S.avail_in=U,l.hold=v,l.bits=D,(l.wsize||q!==S.avail_out&&l.mode<30&&(l.mode<27||w!==4))&&J(S,S.output,S.next_out,q-S.avail_out)?(l.mode=31,-4):(ee-=S.avail_in,q-=S.avail_out,S.total_in+=ee,S.total_out+=q,l.total+=q,l.wrap&&q&&(S.adler=l.check=l.flags?u(l.check,X,q,S.next_out-q):o(l.check,X,q,S.next_out-q)),S.data_type=l.bits+(l.last?64:0)+(l.mode===12?128:0)+(l.mode===20||l.mode===15?256:0),(ee==0&&q===0||w===4)&&B===N&&(B=-5),B)},r.inflateEnd=function(S){if(!S||!S.state)return m;var w=S.state;return w.window&&(w.window=null),S.state=null,N},r.inflateGetHeader=function(S,w){var l;return S&&S.state&&2&(l=S.state).wrap?((l.head=w).done=!1,N):m},r.inflateSetDictionary=function(S,w){var l,x=w.length;return S&&S.state?(l=S.state).wrap!==0&&l.mode!==11?m:l.mode===11&&o(1,w,x,0)!==l.check?-3:J(S,w,x,x)?(l.mode=31,-4):(l.havedict=1,N):m},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(a,n,r){var i=a("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],u=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],d=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],g=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(F,A,N,m,I,c,p,_){var $,y,b,M,E,O,W,C,G,J=_.bits,S=0,w=0,l=0,x=0,X=0,z=0,ae=0,U=0,te=0,v=0,D=null,ee=0,q=new i.Buf16(16),Q=new i.Buf16(16),le=null,me=0;for(S=0;S<=15;S++)q[S]=0;for(w=0;w<m;w++)q[A[N+w]]++;for(X=J,x=15;1<=x&&q[x]===0;x--);if(x<X&&(X=x),x===0)return I[c++]=20971520,I[c++]=20971520,_.bits=1,0;for(l=1;l<x&&q[l]===0;l++);for(X<l&&(X=l),S=U=1;S<=15;S++)if(U<<=1,(U-=q[S])<0)return-1;if(0<U&&(F===0||x!==1))return-1;for(Q[1]=0,S=1;S<15;S++)Q[S+1]=Q[S]+q[S];for(w=0;w<m;w++)A[N+w]!==0&&(p[Q[A[N+w]]++]=w);if(O=F===0?(D=le=p,19):F===1?(D=o,ee-=257,le=u,me-=257,256):(D=d,le=g,-1),S=l,E=c,ae=w=v=0,b=-1,M=(te=1<<(z=X))-1,F===1&&852<te||F===2&&592<te)return 1;for(;;){for(W=S-ae,G=p[w]<O?(C=0,p[w]):p[w]>O?(C=le[me+p[w]],D[ee+p[w]]):(C=96,0),$=1<<S-ae,l=y=1<<z;I[E+(v>>ae)+(y-=$)]=W<<24|C<<16|G|0,y!==0;);for($=1<<S-1;v&$;)$>>=1;if($!==0?(v&=$-1,v+=$):v=0,w++,--q[S]==0){if(S===x)break;S=A[N+p[w]]}if(X<S&&(v&M)!==b){for(ae===0&&(ae=X),E+=l,U=1<<(z=S-ae);z+ae<x&&!((U-=q[z+ae])<=0);)z++,U<<=1;if(te+=1<<z,F===1&&852<te||F===2&&592<te)return 1;I[b=v&M]=X<<24|z<<16|E-c|0}}return v!==0&&(I[E+v]=S-ae<<24|64<<16|0),_.bits=X,0}},{"../utils/common":41}],51:[function(a,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(a,n,r){var i=a("../utils/common"),o=0,u=1;function d(h){for(var V=h.length;0<=--V;)h[V]=0}var g=0,F=29,A=256,N=A+1+F,m=30,I=19,c=2*N+1,p=15,_=16,$=7,y=256,b=16,M=17,E=18,O=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],W=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],C=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],G=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],J=new Array(2*(N+2));d(J);var S=new Array(2*m);d(S);var w=new Array(512);d(w);var l=new Array(256);d(l);var x=new Array(F);d(x);var X,z,ae,U=new Array(m);function te(h,V,T,H,R){this.static_tree=h,this.extra_bits=V,this.extra_base=T,this.elems=H,this.max_length=R,this.has_stree=h&&h.length}function v(h,V){this.dyn_tree=h,this.max_code=0,this.stat_desc=V}function D(h){return h<256?w[h]:w[256+(h>>>7)]}function ee(h,V){h.pending_buf[h.pending++]=255&V,h.pending_buf[h.pending++]=V>>>8&255}function q(h,V,T){h.bi_valid>_-T?(h.bi_buf|=V<<h.bi_valid&65535,ee(h,h.bi_buf),h.bi_buf=V>>_-h.bi_valid,h.bi_valid+=T-_):(h.bi_buf|=V<<h.bi_valid&65535,h.bi_valid+=T)}function Q(h,V,T){q(h,T[2*V],T[2*V+1])}function le(h,V){for(var T=0;T|=1&h,h>>>=1,T<<=1,0<--V;);return T>>>1}function me(h,V,T){var H,R,j=new Array(p+1),K=0;for(H=1;H<=p;H++)j[H]=K=K+T[H-1]<<1;for(R=0;R<=V;R++){var Z=h[2*R+1];Z!==0&&(h[2*R]=le(j[Z]++,Z))}}function ne(h){var V;for(V=0;V<N;V++)h.dyn_ltree[2*V]=0;for(V=0;V<m;V++)h.dyn_dtree[2*V]=0;for(V=0;V<I;V++)h.bl_tree[2*V]=0;h.dyn_ltree[2*y]=1,h.opt_len=h.static_len=0,h.last_lit=h.matches=0}function ie(h){8<h.bi_valid?ee(h,h.bi_buf):0<h.bi_valid&&(h.pending_buf[h.pending++]=h.bi_buf),h.bi_buf=0,h.bi_valid=0}function ce(h,V,T,H){var R=2*V,j=2*T;return h[R]<h[j]||h[R]===h[j]&&H[V]<=H[T]}function oe(h,V,T){for(var H=h.heap[T],R=T<<1;R<=h.heap_len&&(R<h.heap_len&&ce(V,h.heap[R+1],h.heap[R],h.depth)&&R++,!ce(V,H,h.heap[R],h.depth));)h.heap[T]=h.heap[R],T=R,R<<=1;h.heap[T]=H}function he(h,V,T){var H,R,j,K,Z=0;if(h.last_lit!==0)for(;H=h.pending_buf[h.d_buf+2*Z]<<8|h.pending_buf[h.d_buf+2*Z+1],R=h.pending_buf[h.l_buf+Z],Z++,H===0?Q(h,R,V):(Q(h,(j=l[R])+A+1,V),(K=O[j])!==0&&q(h,R-=x[j],K),Q(h,j=D(--H),T),(K=W[j])!==0&&q(h,H-=U[j],K)),Z<h.last_lit;);Q(h,y,V)}function fe(h,V){var T,H,R,j=V.dyn_tree,K=V.stat_desc.static_tree,Z=V.stat_desc.has_stree,Y=V.stat_desc.elems,se=-1;for(h.heap_len=0,h.heap_max=c,T=0;T<Y;T++)j[2*T]!==0?(h.heap[++h.heap_len]=se=T,h.depth[T]=0):j[2*T+1]=0;for(;h.heap_len<2;)j[2*(R=h.heap[++h.heap_len]=se<2?++se:0)]=1,h.depth[R]=0,h.opt_len--,Z&&(h.static_len-=K[2*R+1]);for(V.max_code=se,T=h.heap_len>>1;1<=T;T--)oe(h,j,T);for(R=Y;T=h.heap[1],h.heap[1]=h.heap[h.heap_len--],oe(h,j,1),H=h.heap[1],h.heap[--h.heap_max]=T,h.heap[--h.heap_max]=H,j[2*R]=j[2*T]+j[2*H],h.depth[R]=(h.depth[T]>=h.depth[H]?h.depth[T]:h.depth[H])+1,j[2*T+1]=j[2*H+1]=R,h.heap[1]=R++,oe(h,j,1),2<=h.heap_len;);h.heap[--h.heap_max]=h.heap[1],function(re,de){var $e,pe,Ne,ue,Fe,be,Pe=de.dyn_tree,Re=de.max_code,ke=de.stat_desc.static_tree,Ee=de.stat_desc.has_stree,Oe=de.stat_desc.extra_bits,we=de.stat_desc.extra_base,Ae=de.stat_desc.max_length,Se=0;for(ue=0;ue<=p;ue++)re.bl_count[ue]=0;for(Pe[2*re.heap[re.heap_max]+1]=0,$e=re.heap_max+1;$e<c;$e++)Ae<(ue=Pe[2*Pe[2*(pe=re.heap[$e])+1]+1]+1)&&(ue=Ae,Se++),Pe[2*pe+1]=ue,Re<pe||(re.bl_count[ue]++,Fe=0,we<=pe&&(Fe=Oe[pe-we]),be=Pe[2*pe],re.opt_len+=be*(ue+Fe),Ee&&(re.static_len+=be*(ke[2*pe+1]+Fe)));if(Se!==0){do{for(ue=Ae-1;re.bl_count[ue]===0;)ue--;re.bl_count[ue]--,re.bl_count[ue+1]+=2,re.bl_count[Ae]--,Se-=2}while(0<Se);for(ue=Ae;ue!==0;ue--)for(pe=re.bl_count[ue];pe!==0;)Re<(Ne=re.heap[--$e])||(Pe[2*Ne+1]!==ue&&(re.opt_len+=(ue-Pe[2*Ne+1])*Pe[2*Ne],Pe[2*Ne+1]=ue),pe--)}}(h,V),me(j,se,h.bl_count)}function s(h,V,T){var H,R,j=-1,K=V[1],Z=0,Y=7,se=4;for(K===0&&(Y=138,se=3),V[2*(T+1)+1]=65535,H=0;H<=T;H++)R=K,K=V[2*(H+1)+1],++Z<Y&&R===K||(Z<se?h.bl_tree[2*R]+=Z:R!==0?(R!==j&&h.bl_tree[2*R]++,h.bl_tree[2*b]++):Z<=10?h.bl_tree[2*M]++:h.bl_tree[2*E]++,j=R,se=(Z=0)===K?(Y=138,3):R===K?(Y=6,3):(Y=7,4))}function B(h,V,T){var H,R,j=-1,K=V[1],Z=0,Y=7,se=4;for(K===0&&(Y=138,se=3),H=0;H<=T;H++)if(R=K,K=V[2*(H+1)+1],!(++Z<Y&&R===K)){if(Z<se)for(;Q(h,R,h.bl_tree),--Z!=0;);else R!==0?(R!==j&&(Q(h,R,h.bl_tree),Z--),Q(h,b,h.bl_tree),q(h,Z-3,2)):Z<=10?(Q(h,M,h.bl_tree),q(h,Z-3,3)):(Q(h,E,h.bl_tree),q(h,Z-11,7));j=R,se=(Z=0)===K?(Y=138,3):R===K?(Y=6,3):(Y=7,4)}}d(U);var k=!1;function P(h,V,T,H){q(h,(g<<1)+(H?1:0),3),function(R,j,K,Z){ie(R),ee(R,K),ee(R,~K),i.arraySet(R.pending_buf,R.window,j,K,R.pending),R.pending+=K}(h,V,T)}r._tr_init=function(h){k||(function(){var V,T,H,R,j,K=new Array(p+1);for(R=H=0;R<F-1;R++)for(x[R]=H,V=0;V<1<<O[R];V++)l[H++]=R;for(l[H-1]=R,R=j=0;R<16;R++)for(U[R]=j,V=0;V<1<<W[R];V++)w[j++]=R;for(j>>=7;R<m;R++)for(U[R]=j<<7,V=0;V<1<<W[R]-7;V++)w[256+j++]=R;for(T=0;T<=p;T++)K[T]=0;for(V=0;V<=143;)J[2*V+1]=8,V++,K[8]++;for(;V<=255;)J[2*V+1]=9,V++,K[9]++;for(;V<=279;)J[2*V+1]=7,V++,K[7]++;for(;V<=287;)J[2*V+1]=8,V++,K[8]++;for(me(J,N+1,K),V=0;V<m;V++)S[2*V+1]=5,S[2*V]=le(V,5);X=new te(J,O,A+1,N,p),z=new te(S,W,0,m,p),ae=new te(new Array(0),C,0,I,$)}(),k=!0),h.l_desc=new v(h.dyn_ltree,X),h.d_desc=new v(h.dyn_dtree,z),h.bl_desc=new v(h.bl_tree,ae),h.bi_buf=0,h.bi_valid=0,ne(h)},r._tr_stored_block=P,r._tr_flush_block=function(h,V,T,H){var R,j,K=0;0<h.level?(h.strm.data_type===2&&(h.strm.data_type=function(Z){var Y,se=4093624447;for(Y=0;Y<=31;Y++,se>>>=1)if(1&se&&Z.dyn_ltree[2*Y]!==0)return o;if(Z.dyn_ltree[18]!==0||Z.dyn_ltree[20]!==0||Z.dyn_ltree[26]!==0)return u;for(Y=32;Y<A;Y++)if(Z.dyn_ltree[2*Y]!==0)return u;return o}(h)),fe(h,h.l_desc),fe(h,h.d_desc),K=function(Z){var Y;for(s(Z,Z.dyn_ltree,Z.l_desc.max_code),s(Z,Z.dyn_dtree,Z.d_desc.max_code),fe(Z,Z.bl_desc),Y=I-1;3<=Y&&Z.bl_tree[2*G[Y]+1]===0;Y--);return Z.opt_len+=3*(Y+1)+5+5+4,Y}(h),R=h.opt_len+3+7>>>3,(j=h.static_len+3+7>>>3)<=R&&(R=j)):R=j=T+5,T+4<=R&&V!==-1?P(h,V,T,H):h.strategy===4||j===R?(q(h,2+(H?1:0),3),he(h,J,S)):(q(h,4+(H?1:0),3),function(Z,Y,se,re){var de;for(q(Z,Y-257,5),q(Z,se-1,5),q(Z,re-4,4),de=0;de<re;de++)q(Z,Z.bl_tree[2*G[de]+1],3);B(Z,Z.dyn_ltree,Y-1),B(Z,Z.dyn_dtree,se-1)}(h,h.l_desc.max_code+1,h.d_desc.max_code+1,K+1),he(h,h.dyn_ltree,h.dyn_dtree)),ne(h),H&&ie(h)},r._tr_tally=function(h,V,T){return h.pending_buf[h.d_buf+2*h.last_lit]=V>>>8&255,h.pending_buf[h.d_buf+2*h.last_lit+1]=255&V,h.pending_buf[h.l_buf+h.last_lit]=255&T,h.last_lit++,V===0?h.dyn_ltree[2*T]++:(h.matches++,V--,h.dyn_ltree[2*(l[T]+A+1)]++,h.dyn_dtree[2*D(V)]++),h.last_lit===h.lit_bufsize-1},r._tr_align=function(h){q(h,2,3),Q(h,y,J),function(V){V.bi_valid===16?(ee(V,V.bi_buf),V.bi_buf=0,V.bi_valid=0):8<=V.bi_valid&&(V.pending_buf[V.pending++]=255&V.bi_buf,V.bi_buf>>=8,V.bi_valid-=8)}(h)}},{"../utils/common":41}],53:[function(a,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(a,n,r){(function(i){(function(o,u){if(!o.setImmediate){var d,g,F,A,N=1,m={},I=!1,c=o.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(o);p=p&&p.setTimeout?p:o,d={}.toString.call(o.process)==="[object process]"?function(b){process.nextTick(function(){$(b)})}:function(){if(o.postMessage&&!o.importScripts){var b=!0,M=o.onmessage;return o.onmessage=function(){b=!1},o.postMessage("","*"),o.onmessage=M,b}}()?(A="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",y,!1):o.attachEvent("onmessage",y),function(b){o.postMessage(A+b,"*")}):o.MessageChannel?((F=new MessageChannel).port1.onmessage=function(b){$(b.data)},function(b){F.port2.postMessage(b)}):c&&"onreadystatechange"in c.createElement("script")?(g=c.documentElement,function(b){var M=c.createElement("script");M.onreadystatechange=function(){$(b),M.onreadystatechange=null,g.removeChild(M),M=null},g.appendChild(M)}):function(b){setTimeout($,0,b)},p.setImmediate=function(b){typeof b!="function"&&(b=new Function(""+b));for(var M=new Array(arguments.length-1),E=0;E<M.length;E++)M[E]=arguments[E+1];var O={callback:b,args:M};return m[N]=O,d(N),N++},p.clearImmediate=_}function _(b){delete m[b]}function $(b){if(I)setTimeout($,0,b);else{var M=m[b];if(M){I=!0;try{(function(E){var O=E.callback,W=E.args;switch(W.length){case 0:O();break;case 1:O(W[0]);break;case 2:O(W[0],W[1]);break;case 3:O(W[0],W[1],W[2]);break;default:O.apply(u,W)}})(M)}finally{_(b),I=!1}}}}function y(b){b.source===o&&typeof b.data=="string"&&b.data.indexOf(A)===0&&$(+b.data.slice(A.length))}})(typeof self>"u"?i===void 0?this:i:self)}).call(this,typeof ge<"u"?ge:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(ve);var xe=ve.exports;const Be=Ce(xe);var Le={exports:{}};(function(f,t){(function(a,n){n()})(ge,function(){function a(g,F){return typeof F>"u"?F={autoBom:!1}:typeof F!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),F={autoBom:!F}),F.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(g.type)?new Blob(["\uFEFF",g],{type:g.type}):g}function n(g,F,A){var N=new XMLHttpRequest;N.open("GET",g),N.responseType="blob",N.onload=function(){d(N.response,F,A)},N.onerror=function(){console.error("could not download file")},N.send()}function r(g){var F=new XMLHttpRequest;F.open("HEAD",g,!1);try{F.send()}catch{}return 200<=F.status&&299>=F.status}function i(g){try{g.dispatchEvent(new MouseEvent("click"))}catch{var F=document.createEvent("MouseEvents");F.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),g.dispatchEvent(F)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof ge=="object"&&ge.global===ge?ge:void 0,u=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),d=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!u?function(g,F,A){var N=o.URL||o.webkitURL,m=document.createElement("a");F=F||g.name||"download",m.download=F,m.rel="noopener",typeof g=="string"?(m.href=g,m.origin===location.origin?i(m):r(m.href)?n(g,F,A):i(m,m.target="_blank")):(m.href=N.createObjectURL(g),setTimeout(function(){N.revokeObjectURL(m.href)},4e4),setTimeout(function(){i(m)},0))}:"msSaveOrOpenBlob"in navigator?function(g,F,A){if(F=F||g.name||"download",typeof g!="string")navigator.msSaveOrOpenBlob(a(g,A),F);else if(r(g))n(g,F,A);else{var N=document.createElement("a");N.href=g,N.target="_blank",setTimeout(function(){i(N)})}}:function(g,F,A,N){if(N=N||open("","_blank"),N&&(N.document.title=N.document.body.innerText="downloading..."),typeof g=="string")return n(g,F,A);var m=g.type==="application/octet-stream",I=/constructor/i.test(o.HTMLElement)||o.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||m&&I||u)&&typeof FileReader<"u"){var p=new FileReader;p.onloadend=function(){var y=p.result;y=c?y:y.replace(/^data:[^;]*;/,"data:attachment/file;"),N?N.location.href=y:location=y,N=null},p.readAsDataURL(g)}else{var _=o.URL||o.webkitURL,$=_.createObjectURL(g);N?N.location=$:location.href=$,N=null,setTimeout(function(){_.revokeObjectURL($)},4e4)}});o.saveAs=d.saveAs=d,f.exports=d})})(Le);var Te=Le.exports;function He(f={}){var n;if(!((n=f.children)!=null&&n.length))return{};const a={...f.children[0]||{}};return Object.keys(f).forEach(r=>{r.includes("_")&&(a[r]=f[r])}),a}function We(f){var _;const t=[],a=[],n=[],r=[],i=[],o=[],u=[],d=[],g=[],F=[],A=[],N=[],m=[],I=[];let c=!1,p=!1;try{if(f.children)for(const y of f.children)(_=y.children)==null||_.forEach(b=>{if(b.tagName.includes("SubscribePort")){const E=b.tagName.replace("SubscribePort",""),O=E==="UserProtocol"?"NPD":E;m.includes(O)||m.push(O)}else if(b.tagName.includes("PublishPort")){const E=b.tagName.replace("PublishPort",""),O=E==="UserProtocol"?"NPD":E;I.includes(O)||I.push(O)}const M=He(b);M&&(b.tagName==="AnalogPublishPort"?t.push(M):b.tagName==="AnalogSubscribePort"?a.push(M):b.tagName==="DiscretePublishPort"?n.push(M):b.tagName==="DiscreteSubscribePort"?o.push(M):b.tagName==="A664PublishPort"?F.push({Direction:"O",...M}):b.tagName==="A664SubscribePort"?g.push({Direction:"I",...M}):b.tagName==="A429PublishPort"?r.some(E=>E._BusName===b._BusName)||r.push({Direction:"O",...M}):b.tagName==="A429SubscribePort"?i.some(E=>E._BusName===b._BusName)||i.push({Direction:"I",...M}):b.tagName==="UserProtocolPublishPort"?u.some(E=>E._MsgName===b._MsgName)||u.push(M):b.tagName==="UserProtocolSubscribePort"?d.some(E=>E._MsgName===b._MsgName)||d.push(M):b.tagName==="A825PublishPort"?N.some(E=>E._BusName===b._BusName)||N.push(M):b.tagName==="A825SubscribePort"&&(A.some(E=>E._BusName===b._BusName)||A.push(M)))});const $=m.concat(I);return c=!!I.length,p=!!m.length,{AnalogPublishPort:t,AnalogSubscribePort:a,DiscretePublishPort:n,A429PublishPort:r,A429SubscribePort:i,DiscreteSubscribePort:o,NonProtocolPublishPort:u,NonProtocolSubscribePort:d,sub_Protocals:m,pub_Protocals:I,totalPubAndSub:$,hasPublish:c,hasSubscribe:p,A664SubscribePort:g,A664PublishPort:F,A825PublishPort:N,A825SubscribePort:A}}catch($){console.log($)}}function L(f=[],t){return`${f.map(t).join("")}`}function ze(f,t){return`
#ifndef __linux__
#include <windows.h> 
#endif
#include <string>
#include "VIPBaseTypes.h"
#include <iostream>
#include "Simulation.h"

int main()
 {
  std::string lSimulationName = "${f.label||f._SimulationName}";
  std::string lSimulationDescription = "Not Defined";
  std::string lSimulationPartNumber = "<SWPartNumber>";
  std::string lSimulationVersionInformation = "<Version>";
  VIP_UInt32 lSimulationUpdateRate = ${t.rate}; // Milliseconds.
  int PartiInfoupdateRate = 500;
  Simulation* m_Simulation = new Simulation();
  m_Simulation->update_freq = PartiInfoupdateRate;
  // Call VIPSetupAndConnectSimulation to setup the simulation and connect to the mesh
  m_Simulation->VIPSetupAndConnectSimulation(lSimulationName,
  lSimulationDescription,
  lSimulationPartNumber,
  lSimulationVersionInformation,
  lSimulationUpdateRate);
  delete m_Simulation;
  return 0;
  }
  `}function Ue(f){return`
#pragma once
#ifndef linux
#include "SimInterface\\DiscreteIOManager.h" 
#include "SimInterface\\DiscreteMessage.h" 
#include "SimInterface\\DiscreteAPeriodic.h" 
#include "SimInterface\\DiscretePeriodic.h" 
#else
#include "SimInterface/DiscreteIOManager.h" 
#include "SimInterface/DiscreteMessage.h" 
#include "SimInterface/DiscreteAPeriodic.h" 
#include "SimInterface/DiscretePeriodic.h"
#endif
#include "VIPSimDiscreteTypes.h"

${f.map(t=>`
class DiscreteMessage_${e.nameFilter(t._PortName)}: public DiscreteMessage, public DiscreteAPeriodic
{
public:
  DiscreteMessage_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle aParticpantHandle,
std::string aName, VIP_Direction aDirection);
  virtual ~DiscreteMessage_${e.nameFilter(t._PortName)}();
  
  VIP_Result initialise();
};
`).join("")}
  
class DiscreteOutputs : public DiscreteIOManager
{
public:
 DiscreteOutputs(VIP_ParticipantHandle aParticipantHandle);
 virtual ~DiscreteOutputs();
 VIP_Result setupMessages();
 
 // Discrete Message objects
 ${f.map(t=>`
DiscreteMessage_${e.nameFilter(t._PortName)}* ${e.nameFilter(t._PortName)};
`).join("")}
};
`}function je(f=[]){return`
#pragma once
#include "DiscreteOutputs_CG.h"
#ifndef __linux__
#pragma comment (lib, "User32.lib") 
#include <windows.h>
#endif

${f.map(t=>`
DiscreteMessage_${e.nameFilter(t._PortName)}::DiscreteMessage_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle aParticpantHandle,
  std::string aName,
  VIP_Direction aDirection)
  : DiscreteMessage(aParticpantHandle, aName, aDirection)
{
}
`).join("")}

${f.map(t=>`
DiscreteMessage_${e.nameFilter(t._PortName)}::~DiscreteMessage_${e.nameFilter(t._PortName)}()
{
}
`).join("")}
  
${f.map(t=>`
  VIP_Result DiscreteMessage_${e.nameFilter(t._PortName)}::initialise()
{
 VIP_Result lResult;
 lResult = DiscreteMessage::initialise();

 if (lResult == VIP_Success)
 {
 this->initialiseAPeriodic(DiscreteMessage::getHandle());
 lResult =DiscreteMessage::setDirection();
 }

 return lResult;
}

  `).join("")}


  DiscreteOutputs::DiscreteOutputs(VIP_ParticipantHandle aParticipantHandle)
  : DiscreteIOManager(aParticipantHandle)
{
 // Initialise Message Objects
 ${f.map(t=>`${e.nameFilter(t._PortName)} = NULL;`).join("")}
}

DiscreteOutputs::~DiscreteOutputs()
{
${f.map(t=>`
   if (${e.nameFilter(t._PortName)} != NULL)
   {
   delete ${e.nameFilter(t._PortName)};
   }
`).join("")}
}


  VIP_Result DiscreteOutputs::setupMessages()
  {
   VIP_Result lResult = VIP_Success;
   VIP_Result lLocalResult = VIP_Success;
   ${f.map(t=>`
   ${e.nameFilter(t._PortName)} = new DiscreteMessage_${e.nameFilter(t._PortName)}(m_ParticipantHandle, "${t._PortName}",
  VIP_Direction_Publish);
   lLocalResult = ${e.nameFilter(t._PortName)}->initialise();
   if (lLocalResult == VIP_Success)
   {
    addAPeriodicMessage(${e.nameFilter(t._PortName)});
   }
   else
   {
   lResult = lLocalResult;
   std::string lMessage;
   lMessage.append ("Port: ${e.nameFilter(t._PortName)} ");
   lMessage.append ("was not found in DiscreteOutputs"); 
   VIP_SendHealthMessage(m_ParticipantHandle, VIP_HealthLevel_Error,
  lMessage.c_str()); 
   }
   `).join("")}
   return lResult;
  }
`}function Ge(f){return`
#pragma once
#ifndef __linux__
#include "SimInterface\\DiscreteIOManager.h" 
#include "SimInterface\\DiscreteMessage.h" 
#include "SimInterface\\DiscreteAPeriodic.h" 
#include "SimInterface\\DiscretePeriodic.h" 
#else
#include "SimInterface/DiscreteIOManager.h" 
#include "SimInterface/DiscreteMessage.h" 
#include "SimInterface/DiscreteAPeriodic.h" 
#include "SimInterface/DiscretePeriodic.h" 
#endif
#include "VIPSimDiscreteTypes.h"

  ${f.map(t=>`
class DiscreteMessage_${e.nameFilter(t._PortName)} : public DiscreteMessage, public
DiscreteAPeriodic
{
public:
DiscreteMessage_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle aParticpantHandle,
  std::string aName, VIP_Direction aDirection);
   virtual ~DiscreteMessage_${e.nameFilter(t._PortName)}();
   VIP_Result initialise();
  };
  `).join("")}


class DiscreteInputs : public DiscreteIOManager
{
public:
 DiscreteInputs(VIP_ParticipantHandle aParticipantHandle);
 virtual ~DiscreteInputs();
 VIP_Result setupMessages();
 ${f.map(t=>`DiscreteMessage_${e.nameFilter(t._PortName)}* ${e.nameFilter(t._PortName)};`).join("")}
};
`}function Ze(f){return`
#pragma once
#include "DiscreteInputs_CG.h"
#ifndef linux 
#pragma comment (lib, "User32.lib") 
#include <windows.h>
#endif

  ${f.map(t=>`
    DiscreteMessage_${e.nameFilter(t._PortName)}::DiscreteMessage_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle
      aParticpantHandle,
       std::string aName,
       VIP_Direction aDirection)
       : DiscreteMessage(aParticpantHandle, aName, aDirection)
      {
      }
    `).join("")}

  ${f.map(t=>`
    DiscreteMessage_${e.nameFilter(t._PortName)}::~DiscreteMessage_${e.nameFilter(t._PortName)}()
    {
    }
    `).join("")}

  ${f.map(t=>`
VIP_Result DiscreteMessage_${e.nameFilter(t._PortName)}::initialise()
{
 VIP_Result lResult;
 lResult = DiscreteMessage::initialise();
 if (lResult == VIP_Success)
 {
 this->initialiseAPeriodic(DiscreteMessage::getHandle());
 lResult = DiscreteMessage::setDirection();
 }
 return lResult;
}
`).join("")}

  DiscreteInputs::DiscreteInputs(VIP_ParticipantHandle aParticipantHandle)
  : DiscreteIOManager(aParticipantHandle)
 {
  ${f.map(t=>`${e.nameFilter(t._PortName)} = NULL;`).join("")}
 }
 
DiscreteInputs::~DiscreteInputs()
{
  ${f.map(t=>`
 if (${e.nameFilter(t._PortName)} != NULL)
 {
 delete ${e.nameFilter(t._PortName)};
 }
 `).join("")}
}


VIP_Result DiscreteInputs::setupMessages()
{
 VIP_Result lResult = VIP_Success;
 VIP_Result lLocalResult = VIP_Success;
 ${f.map(t=>`
${e.nameFilter(t._PortName)} = new DiscreteMessage_${e.nameFilter(t._PortName)}(m_ParticipantHandle,"${t._PortName}", VIP_Direction_Subscribe);
 lLocalResult = ${e.nameFilter(t._PortName)}->initialise();
 if (lLocalResult == VIP_Success)
 {
 addAPeriodicMessage(${e.nameFilter(t._PortName)});
 }
 else
 {
 lResult = lLocalResult;
 std::string lMessage;
 lMessage.append ("Port: ${e.nameFilter(t._PortName)} ");
 lMessage.append ("was not found in DiscreteInputs"); 
 VIP_SendHealthMessage(m_ParticipantHandle, VIP_HealthLevel_Error,
lMessage.c_str()); 
 }
 `).join("")}
 return lResult;
}




  `}function Qe(f){return`
#pragma once
#ifndef __linux__
#include "SimInterface\\AnalogIOManager.h" 
#include "SimInterface\\AnalogMessage.h" 
#include "SimInterface\\AnalogAPeriodic.h" 
#include "SimInterface\\AnalogPeriodic.h" 
#else
#include "SimInterface/AnalogIOManager.h" 
#include "SimInterface/AnalogMessage.h" 
#include "SimInterface/AnalogAPeriodic.h" 
#include "SimInterface/AnalogPeriodic.h" 
#endif
#include "VIPSimAnalogTypes.h"

${f.map(t=>`
class AnalogMessage_${e.nameFilter(t._PortName)} : public AnalogMessage, public AnalogAPeriodic
{
public:
AnalogMessage_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle aParticpantHandle, std::string
aName, VIP_Direction aDirection);
virtual ~AnalogMessage_${e.nameFilter(t._PortName)}();
VIP_Result initialise();
};
`).join("")}


class AnalogInputs : public AnalogIOManager
{
public:
AnalogInputs(VIP_ParticipantHandle aParticipantHandle);
virtual ~AnalogInputs();
VIP_Result setupMessages();

// Analog Message objects
${f.map(t=>`AnalogMessage_${e.nameFilter(t._PortName)}* ${e.nameFilter(t._PortName)};`).join("")}
};

  
`}function qe(f){return`
#pragma once
#include "AnalogInputs_CG.h"
#ifndef __linux__
#include <windows.h>
#endif
${f.map(t=>`
  AnalogMessage_${e.nameFilter(t._PortName)}::AnalogMessage_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle
    aParticpantHandle,
     std::string aName, VIP_Direction aDirection)
     : AnalogMessage(aParticpantHandle, aName, aDirection)
    {
    }
  `).join("")}

  ${f.map(t=>`
    AnalogMessage_${e.nameFilter(t._PortName)}::~AnalogMessage_${e.nameFilter(t._PortName)}()
    {
    }
  `).join("")}


  ${f.map(t=>`
    VIP_Result AnalogMessage_${e.nameFilter(t._PortName)}::initialise()
{
 VIP_Result lResult;
 lResult = AnalogMessage::initialise();
 if (lResult == VIP_Success)
 {
 this->initialiseAPeriodic(AnalogMessage::getHandle());
 lResult = AnalogMessage::setDirection();
 }
 else
 {
 std::string lMessage;
 lMessage.append ("Error to initialise:AnalogMessage_${e.nameFilter(t._PortName)}"); 
 VIP_SendHealthMessage(AnalogMessage::getParentHandle(),
VIP_HealthLevel_Error, lMessage.c_str()); 
 }
 return lResult;
}
    `).join("")}


AnalogInputs::AnalogInputs(VIP_ParticipantHandle aParticipantHandle)
 : AnalogIOManager(aParticipantHandle)
{
 // Initialise Message Objects
 ${f.map(t=>`${e.nameFilter(t._PortName)} = NULL;`).join("")}
}



AnalogInputs::~AnalogInputs()
{
  // Delete the message objects
  ${f.map(t=>`
 if (${e.nameFilter(t._PortName)} != NULL)
 {
 delete ${e.nameFilter(t._PortName)};
 }
 `).join("")}
}

VIP_Result AnalogInputs::setupMessages()
{
//1)
 VIP_Result lResult = VIP_Success;
 VIP_Result lLocalResult = VIP_Success;
 // Setup Messages
 ${f.map(t=>`
 ${e.nameFilter(t._PortName)} = new AnalogMessage_${e.nameFilter(t._PortName)}(m_ParticipantHandle, "${t._PortName}",
VIP_Direction_Subscribe);
 lLocalResult =${e.nameFilter(t._PortName)}->initialise();
 if (lLocalResult == VIP_Success)
 {
 addAPeriodicMessage(${e.nameFilter(t._PortName)});
 }
 else
 {
 lResult = lLocalResult;
 std::string lMessage;
 lMessage.append ("Port: ${e.nameFilter(t._PortName)}");
 lMessage.append ("was not found in AnalogInputs"); 
 VIP_SendHealthMessage(m_ParticipantHandle, VIP_HealthLevel_Error,lMessage.c_str()); 
 }
 `).join("")}
 return lResult;
}


  `}function Ke(f){return`
#pragma once
#ifndef __linux__
#include "SimInterface\\AnalogIOManager.h" 
#include "SimInterface\\AnalogMessage.h" 
#include "SimInterface\\AnalogAPeriodic.h" 
#include "SimInterface\\AnalogPeriodic.h" 
#else
#include "SimInterface/AnalogIOManager.h" 
#include "SimInterface/AnalogMessage.h" 
#include "SimInterface/AnalogAPeriodic.h" 
#include "SimInterface/AnalogPeriodic.h" 
#endif

#include "VIPSimAnalogTypes.h"

${f.map(t=>`
class AnalogMessage_${e.nameFilter(t._PortName)} : public AnalogMessage, public AnalogAPeriodic
{
//1)
public:
 AnalogMessage_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle aParticpantHandle, std::string
aName, VIP_Direction aDirection);
 virtual ~AnalogMessage_${e.nameFilter(t._PortName)}();
//2) 
 VIP_Result initialise();
};
`).join("")}

class AnalogOutputs : public AnalogIOManager
{
//1)
public:
 AnalogOutputs(VIP_ParticipantHandle aParticipantHandle);
 virtual ~AnalogOutputs();
//2)
 VIP_Result setupMessages();
 ${f.map(t=>`AnalogMessage_${e.nameFilter(t._PortName)}* ${e.nameFilter(t._PortName)};`).join("")}
};

`}function Xe(f){return`
#pragma once
#include "AnalogOutputs_CG.h"
#ifndef __linux__
#include <windows.h>
#endif

${f.map(t=>`
AnalogMessage_${e.nameFilter(t._PortName)}::AnalogMessage_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle
aParticpantHandle,
 std::string aName, VIP_Direction aDirection)
 : AnalogMessage(aParticpantHandle, aName, aDirection)
{
}

`).join("")}

${f.map(t=>`
AnalogMessage_${e.nameFilter(t._PortName)}::~AnalogMessage_${e.nameFilter(t._PortName)}()
{
}
`).join("")}

  ${f.map(t=>`
  VIP_Result AnalogMessage_${e.nameFilter(t._PortName)}::initialise()
  {
  //1)
   VIP_Result lResult;
  //2
   lResult = AnalogMessage::initialise();
   if (lResult == VIP_Success)
   {
    this->initialiseAPeriodic(AnalogMessage::getHandle());
    lResult = AnalogMessage::setDirection();
   }
   else
   {
   std::string lMessage;
   lMessage.append ("Error to initialise: AnalogMessage_${e.nameFilter(t._PortName)}"); 
   VIP_SendHealthMessage(AnalogMessage::getParentHandle(),
  VIP_HealthLevel_Error, lMessage.c_str()); 
   }
  //3)
   return lResult;
  }
  `).join("")}


  AnalogOutputs::AnalogOutputs(VIP_ParticipantHandle aParticipantHandle)
 : AnalogIOManager(aParticipantHandle)
{
  ${f.map(t=>`${e.nameFilter(t._PortName)} = NULL;`).join("")}
}

AnalogOutputs::~AnalogOutputs()
{
  ${f.map(t=>`
  if (${e.nameFilter(t._PortName)} != NULL)
  {
  delete ${e.nameFilter(t._PortName)};
  }
  `).join("")}
 }
 

 VIP_Result AnalogOutputs::setupMessages()
{
//1)
 VIP_Result lResult = VIP_Success;
 VIP_Result lLocalResult = VIP_Success;
 ${f.map(t=>`
 // Setup Messages
 
 ${e.nameFilter(t._PortName)} = new AnalogMessage_${e.nameFilter(t._PortName)}(m_ParticipantHandle, "${t._PortName}",
VIP_Direction_Publish);
 lLocalResult = ${e.nameFilter(t._PortName)}->initialise();
 if (lLocalResult == VIP_Success)
 {
  addAPeriodicMessage(${e.nameFilter(t._PortName)});
 }
 else
 {
 lResult = lLocalResult;
 std::string lMessage;
 lMessage.append ("Port: ${e.nameFilter(t._PortName)} ");
 lMessage.append ("was not found in AnalogOutputs"); 
 VIP_SendHealthMessage(m_ParticipantHandle, VIP_HealthLevel_Error,
lMessage.c_str()); 
 }
 `).join("")}
 //3) 
 return lResult;
}

`}function Ye(){return`
#include "SimulationBase.h"
#include "VIPBaseTypes.h"
#include "ParticipantInfo.h"
#include "SharedMemoryMgmt.h"
class Simulation : public SimulationBase
{
public:
  VIP_Bool initialise();
  VIP_Bool update(VIP_State aState, VIP_Float aWarp); 
  VIP_Bool shutdown();
  VIP_Bool save(VIP_ParticipantHandle aParticipantHandle);
  VIP_Bool restore(VIP_ParticipantHandle aParticipantHandle);
};
`}function Ve(f=[]){return f!=null&&f.length?f.reduce((t,a)=>`${t}->${a}`,""):""}const Je={A429:"VIP429_PublishBus",A664:"VIP664_Publish",A825:"VIP825_PublishBus"},et=f=>Je[f]||`VIP${f}_Publish`,tt=(f,t)=>f===1?t?`#include "${t}.h"`:"":`extern "C"
{
  ${t?`#include "${t}.h"`:""}
}`,at=f=>f!==1?"":`
#include "VIPSimA429.h"
#include "VIPSimA664.h"
#include "VIPSimA825.h"
#include "VIPSimAnalog.h"
#include "VIPSimDiscrete.h"
#include "VIPSimSerial.h"
#include "VIPSimTCP_UDP.h"
#include "VIPSimUserProtocol.h"
#ifdef _WIN32
#include <windows.h> 
#else
#include <unistd.h>   
#endif  
`,nt=(f,t)=>f===1&&t?`static ${t}ModelClass rtObj;`:"",rt=f=>f!==1?"":`
#ifdef _WIN32
Sleep(1);
#else
usleep(1000); 
#endif
`,Me=(f,t,a)=>{const n={publish:i=>i.defaultValue?`${et(i.protocol)}(m_Inputs->${i.protocol}()->${i.msgName}->getHandle());
m_Inputs->${i.protocol}()${Ve(i.parentNames)}->setValue(${i.defaultValue});
m_Inputs->${i.protocol}()->${i.msgName}->send();`:"",receive:i=>`m_Inputs->${i.protocol}()->${i.msgName}->receive();`,getValue:(i,o)=>`${o===1?"rtObj.":""}${i.ClassValue}.${i.Name} = m_Inputs->${i.protocol}()${Ve(i.parentNames)}->getValue();`};if(!f.length)return"";const r=n[t];return r?f.map(i=>t==="getValue"?r(i,a):r(i)).join(`
`):""},De=(f,t,a)=>f.length?t==="setValue"?f.map(n=>`m_Outputs->${n.protocol}()${Ve(n.parentNames)}->setValue(${a===1?"rtObj.":""}${n.ClassValue}.${n.Name});`).join(`
`):t==="send"?f.map(n=>`m_Outputs->${n.protocol}()->${n.msgName}->send();`).join(`
`):"":"";function it(f,t,a=[],n){const r=(a==null?void 0:a.filter(o=>o.type==="Input"))||[],i=(a==null?void 0:a.filter(o=>o.type!=="Input"))||[];return`#include "Simulation.h"
${tt(n,t)}

#include "rtwtypes.h"

${at(n)}

${nt(n,t)}


#include <thread>

void rt_OneStep(void);
void rt_OneStep(void)
{
  static boolean_T OverrunFlag = false;
  if (OverrunFlag) {
    return;
  }
  OverrunFlag = true;
  ${n===1?"rtObj.step();":`${t}_step();`}
  OverrunFlag = false;
}

VIP_Bool Simulation::initialise()
{
  std::string partiName = "${f}";
  ParticipantInfo* participantinfo = new ParticipantInfo();
  VIPGetParticipantInfobyName(partiName.c_str(), participantinfo, false);
  runtime = std::chrono::nanoseconds(participantinfo->getRuntime());
  if(!isstart){
    std::thread saveparti(&SimulationBase::updateSimulationState, this);
    saveparti.detach();
    isstart = true;
  }

${rt(n)}

${Me(r,"publish",n)}

return TRUE;
}
VIP_Bool Simulation::update(VIP_State aState, VIP_Float )
{
VIP_Bool lResult = TRUE;
auto start = std::chrono::high_resolution_clock::now();
if (aState == VIP_State_Running)
{
  std::vector<long long> infos;
  auto start = std::chrono::high_resolution_clock::now();
  ${n===1?"rtObj.initialize();":`${t}_initialize();`}
  ${Me(r,"receive",n)}
  ${Me(r,"getValue",n)}

  rt_OneStep();

  ${De(i,"setValue",n)}
  
  ${De(i,"send",n)}

  auto end = std::chrono::high_resolution_clock::now();
  auto seconds = std::chrono::duration_cast<std::chrono::nanoseconds>(end - start).count();
  infos.emplace_back(seconds);
  infos.emplace_back(seconds - runtime.count());
  infoqueue.push(infos);
}
else if (aState == VIP_State_Paused)
{
}
return lResult;
}
VIP_Bool Simulation::shutdown()
{
return TRUE;
}
VIP_Bool Simulation::save(VIP_ParticipantHandle aParticipantHandle)
{
return TRUE;
}
VIP_Bool Simulation::restore(VIP_ParticipantHandle aParticipantHandle)
{
return TRUE;
}
`}function st(f,t){return`
#pragma once
#include <stdio.h>
#include <string.h>
${t?'#include "SimulationInputs_CG.h"':""}
${f?'#include "SimulationOutputs_CG.h"':""}
#include <queue>
#include <vector>
#include <chrono>

class SimulationBase
{
  private:
  VIP_ParticipantHandle m_participantHandle;
  protected:
  // Participant identification variables
  std::string m_ParticipantNameStr;
  std::string m_ParticipantDescriptionStr;
  std::string m_ParticipantPartNumberStr;
  std::string m_ParticipantVersionInformationStr;
  VIP_UInt32 m_ParticipantUpdateRate;
${t?"SimulationInputs* m_Inputs;":""}
${f?"SimulationOutputs* m_Outputs;":""}
  bool bIfRunning{false};
  void OnError(const char* aWhere, VIP_Result aResult);
  public:
  SimulationBase();
  ~SimulationBase();
  /// Setups up simulation and connects to VIP
  VIP_Bool VIPSetupAndConnectSimulation(std::string aSimulationName,
  std::string aDescription,
  std::string aPartNumber,
  std::string aVersionInformation,
  VIP_UInt32 aUpdateRate);
  /// Sends a Health Message that will be displayed in the Control Panel 
  VIP_Result SendHealthMessage(VIP_HealthLevel aLevel, const VIP_Char* aHealthMessage);
  /// Sends a Health Message that will be displayed in the Control Panel 
  VIP_Result SetHealthState(VIP_HealthState aState);
  
  // Initialise function that's called after the predefined I/O has been setupand before entering run mode
  virtual VIP_Bool initialise() = 0;
  // Update function that is called by VIP during run mode
  virtual VIP_Bool update(VIP_State aState, VIP_Float aWarp) = 0;
  // Shutdown function called before simulation is disconnected
  virtual VIP_Bool shutdown() = 0;
  // Save function is called when the a "Save to file" command has been issued
  virtual VIP_Bool save(VIP_ParticipantHandle aParticipantHandle) = 0;
  // Restore function is called when the "Restore from file" command has been issued
  virtual VIP_Bool restore(VIP_ParticipantHandle aParticipantHandle) = 0;
  VIP_Bool VIPCompute(VIP_State aState, VIP_Float aWarp );
  VIP_Bool VIPSave();
  VIP_Bool VIPRestore();

  VIP_Bool isstart;
  std::chrono::nanoseconds runtime;
  std::queue<std::vector<long long>> infoqueue;
  int update_freq{500};
  void updateSimulationState();
 };
 
`}function lt(f,t,a){return`
#include "SimulationBase.h"
#include "ParticipantInfo.h"
#include "SharedMemoryMgmt.h"
#include <iostream>
#ifndef __linux__
#include <windows.h>
#endif
VIP_Bool VIPComputeStatic(VIP_ParticipantHandle, void* aContext, VIP_State aState, VIP_Float aWarp)
{
  SimulationBase* lSim = (SimulationBase*)aContext;
  return lSim->VIPCompute(aState, aWarp);
}
VIP_Bool VIPSaveStatic(VIP_ParticipantHandle, void* aContext)
{
  SimulationBase* lSim = (SimulationBase*)aContext;
  return lSim->VIPSave();
}
VIP_Bool VIPRestoreStatic(VIP_ParticipantHandle, void* aContext)
{
  SimulationBase* lSim = (SimulationBase*)aContext;
  return lSim->VIPRestore();
}
SimulationBase::SimulationBase(void)
  : ${t?"m_Inputs(nullptr), ":""} ${f?"m_Outputs(nullptr),":""}  m_participantHandle(0)
{
  return;
}
SimulationBase::~SimulationBase()
{
${t?`
if (m_Inputs != nullptr)//存在subscriber port
  {
  delete m_Inputs;
  }
`:""}

${f?`
if (m_Outputs != nullptr)//存在publish port
{
delete m_Outputs;
}
`:""}
return;
}
void SimulationBase::OnError(const char* aWhere, VIP_Result aResult)
{
 std::string lMessage;
 lMessage += "ERROR (";
 lMessage += aWhere;
 lMessage += "): ";
 lMessage += VIP_GetErrorMessage( aResult );
 std::wstring lWide(lMessage.begin(), lMessage.end());
 std::cout << lWide.c_str() << std::endl;
 throw std::runtime_error("VIP_Result Error");
 
 return;
}
VIP_Bool SimulationBase::VIPSetupAndConnectSimulation(std::string aSimulationName,
 std::string aDescription,
 std::string aPartNumber,
 std::string aVersionInformation,
 VIP_UInt32 aUpdateRate)
{
 VIP_ParticipantInfo lParticipantInformation;

  memset(lParticipantInformation.mName, 0, sizeof(lParticipantInformation.mName));
  memset(lParticipantInformation.mDescription, 0, sizeof(lParticipantInformation.mDescription));
  memset(lParticipantInformation.mPartNumber, 0, sizeof(lParticipantInformation.mPartNumber));
  memset(lParticipantInformation.mVersionInformation, 0, sizeof(lParticipantInformation.mVersionInformation));

 VIP_Result lResult;
 VIP_Bool lbResult = TRUE;
 try
 { 
  #ifndef __linux__
  strncpy_s(lParticipantInformation.mName, aSimulationName.c_str(), aSimulationName.length()); 
  strncpy_s(lParticipantInformation.mDescription, aDescription.c_str(), aDescription.length()); 
  strncpy_s(lParticipantInformation.mPartNumber, aPartNumber.c_str(), aPartNumber.length()); 
  strncpy_s(lParticipantInformation.mVersionInformation, aVersionInformation.c_str(),
  aVersionInformation.length());
  #else
  strncpy(lParticipantInformation.mName, aSimulationName.c_str(), aSimulationName.length()); 
  strncpy(lParticipantInformation.mDescription, aDescription.c_str(), aDescription.length()); 
  strncpy(lParticipantInformation.mPartNumber, aPartNumber.c_str(), aPartNumber.length()); 
  strncpy(lParticipantInformation.mVersionInformation, aVersionInformation.c_str(),
  aVersionInformation.length());
  #endif
 m_participantHandle = VIP_RegisterParticipant(&lParticipantInformation);
 if (m_participantHandle != VIP_InvalidHandle)
 {
  char error[1024] = { 0 };
  VIP_Result result = VIP_LoadConfig(error, 1024);
  if (result != VIP_Success)
  {
  OnError("Failed to load config file. ", result);
  }
  else
  {
  std::cout << "OK to load config file. " << std::endl;
  }


 lResult = VIP_Connect(m_participantHandle);
 if (lResult != VIP_Success)
 {
 OnError("VIP_ConnectToMesh", lResult);
 }
${t?"m_Inputs = new SimulationInputs(m_participantHandle); //存在subscriber port":""} 
${f?"m_Outputs = new SimulationOutputs(m_participantHandle); //存在publish port":""}
${t?`lResult = m_Inputs->initialise();   
if (lResult != VIP_Success)
{
    OnError("Input initialise", lResult);
}
`:""}
${f?`lResult = m_Outputs->initialise();   
if (lResult != VIP_Success)
{
    OnError("Ouput initialise", lResult);
}
`:""}

 
 if (initialise() == TRUE)
 {
  lResult = VIP_SetState(m_participantHandle, VIP_State_Running);
  if (lResult != VIP_Success)
  {
  OnError("VIP_SetState", lResult);
  }
 // Register Save and Restore callbacks
 VIP_RegisterSaveRestoreCallBacks(m_participantHandle, VIPSaveStatic, VIPRestoreStatic,
this);
 VIP_EnterNormalMode(m_participantHandle, aUpdateRate, VIPComputeStatic, this);
 // Call users Shutdown method
 shutdown();
 }
 else
 {
 lbResult = FALSE;
 }
 lResult = VIP_Disconnect(m_participantHandle);
 if (lResult != VIP_Success)
 {
 OnError("VIP_DisconnectFromMesh", lResult);
 }
 
 }
 }
 catch(std::runtime_error&)
 {
  //nop
  lbResult = FALSE;
  }
  return lbResult;
 }
 VIP_Result SimulationBase::SendHealthMessage(VIP_HealthLevel aLevel,const VIP_Char* aHealthMessage)
 {
  return VIP_SendHealthMessage(m_participantHandle, aLevel, aHealthMessage);
 }
 VIP_Result SimulationBase::SetHealthState(VIP_HealthState aState)
 {
  return VIP_SetHealthState(m_participantHandle, aState);
 }
 VIP_Bool SimulationBase::VIPCompute(VIP_State aState, VIP_Float aWarp)
 {
  VIP_Bool lResult = TRUE;
  if (( aState == VIP_State_Running ) || ( aState == VIP_State_Paused ))
  { 
  lResult = update(aState, aWarp);
  }
  return lResult;
 }
 VIP_Bool SimulationBase::VIPSave()
 {
  return save(m_participantHandle);
 }
 VIP_Bool SimulationBase::VIPRestore()
 {
  return restore(m_participantHandle);
 }

void SimulationBase::updateSimulationState()
{
    std::string partiName = "${a}";
    ParticipantInfo *participantinfo = new ParticipantInfo();
    while(!bIfRunning);
    while (true) {
        VIPGetParticipantInfobyName(partiName.c_str(), participantinfo, false);
        VIP_State state;
        state = participantinfo->getState();
        if (state != VIP_State_Running) {
            // wait for running
        }
        else {
            break;
        }
    }
    std::vector<long long> info;
    auto now = std::chrono::high_resolution_clock::now();
    while (true)
    {
        auto last = std::chrono::high_resolution_clock::now();
        std::chrono::duration<double, std::milli> elapsed = last - now;
        if (elapsed.count() >= update_freq)
        {
            if (!infoqueue.empty())
            {
                info = infoqueue.front();
                participantinfo->setCalTime(std::to_string(info[0]));
                participantinfo->setDelayTime(std::to_string(info[1]));
                VIPSaveParticipantInfo(participantinfo);
                infoqueue.pop();
                now = std::chrono::high_resolution_clock::now();
            }
        }
        if (!infoqueue.empty()){
            infoqueue.pop();
        }
    }
}
`}function ot(f){return`
#pragma once
#include "VIPBaseTypes.h"
${f.map(t=>`
#include "${t}Inputs_CG.h"
`).join("")}

  class SimulationInputs
{
private:
 VIP_ParticipantHandle m_ParticipantHandle;
 ${f.map(t=>`${t}Inputs* m_${t}Inputs;`).join("")}

public:
 SimulationInputs(VIP_ParticipantHandle aParticipantHandle);
 ~SimulationInputs();
 VIP_Result initialise();
${f.map(t=>`${t}Inputs* ${t}();`).join("")}
 void receive();
};
  `}function ut(f){return`
#include "SimulationInputs_CG.h"

SimulationInputs::SimulationInputs(VIP_ParticipantHandle aParticipantHandle)
{
 m_ParticipantHandle = aParticipantHandle;
 ${f.map(t=>`m_${t}Inputs = new ${t}Inputs(m_ParticipantHandle);`).join("")}
}

SimulationInputs::~SimulationInputs()
{
  ${f.map(t=>`
 if (m_${t}Inputs != NULL)
 {
  delete m_${t}Inputs;
}
`).join("")}
}

${f.map(t=>`
${t}Inputs* SimulationInputs::${t}()
{
 return m_${t}Inputs;
}
`).join("")}

VIP_Result SimulationInputs::initialise()
{
//1)
 VIP_Result lResult = VIP_Success;
 VIP_Result lLocalResult = VIP_Success;
 ${f.map(t=>["A429","NPD","EVENT","A825"].includes(t)?`
    lLocalResult = m_${t}Inputs->setupIO();
    if (lLocalResult != VIP_Success)
    {
    lResult = lLocalResult;
    std::string lMessage;
    lMessage += "SimulationInputs::initialise m_${t}Inputs->setupIO() Failed: ";
    // lMessage += VIP_GetErrorMessage( lLocalResult );
    VIP_SendHealthMessage(m_ParticipantHandle, VIP_HealthLevel_Error,
   lMessage.c_str());
    }
    `:["Analog","Discrete","A664"].includes(t)?`
      lLocalResult = m_${t}Inputs->setupMessages();
      
      if (lLocalResult != VIP_Success)
      {
      lResult = lLocalResult;
      std::string lMessage;
      lMessage += "SimulationInputs::initialise m_${t}Inputs->setupMessages() Failed: ";
      // lMessage += VIP_GetErrorMessage( lLocalResult );
      VIP_SendHealthMessage(m_ParticipantHandle, VIP_HealthLevel_Error,
     lMessage.c_str());
      }
      `:"").join("")}
 return lResult;
}
void SimulationInputs::receive()
{
  ${f.map(t=>` m_${t}Inputs->receive();`).join("")}
}

`}function ct(f){return`
  #pragma once
  #include "VIPBaseTypes.h"
  ${f.map(t=>`
#include "${t}Outputs_CG.h"
`).join("")}

class SimulationOutputs
{
private:
 VIP_ParticipantHandle m_ParticipantHandle;
 ${f.map(t=>`${t}Outputs* m_${t}Outputs;
`).join("")}
public:
 SimulationOutputs(VIP_ParticipantHandle aParticipantHandle);
 ~SimulationOutputs();
 VIP_Result initialise();
 ${f.map(t=>`
${t}Outputs* ${t}();
`).join("")}
void send();
};

  `}function mt(f){return`
  #include "SimulationOutputs_CG.h"

  SimulationOutputs::SimulationOutputs(VIP_ParticipantHandle aParticipantHandle)
  {
   m_ParticipantHandle = aParticipantHandle;
   ${f.map(t=>`m_${t}Outputs = new ${t}Outputs(m_ParticipantHandle);
    `).join("")}
  }
  
SimulationOutputs::~SimulationOutputs()
{
  ${f.map(t=>`
    if (m_${t}Outputs != NULL)
    {
    delete m_${t}Outputs;
    }
    `).join("")}
}

${f.map(t=>`
${t}Outputs* SimulationOutputs::${t}()
{
 return m_${t}Outputs;
}
`).join("")}


VIP_Result SimulationOutputs::initialise()
{
//1)
 VIP_Result lResult = VIP_Success;
 VIP_Result lLocalResult = VIP_Success;
 ${f.map(t=>["A429","NPD","EVENT","A825"].includes(t)?`
    // 对于 A429 使用如下模板
    lLocalResult = m_${t}Outputs->setupIO();
    if (lLocalResult != VIP_Success)
    {
    lResult = lLocalResult;
    std::string lMessage;
    lMessage += "SimulationInputs::initialise m_${t}Outputs->setupIO() Failed: ";
    // lMessage += VIP_GetErrorMessage( lLocalResult );
    VIP_SendHealthMessage(m_ParticipantHandle, VIP_HealthLevel_Error,
   lMessage.c_str());
    }
    `:["Analog","Discrete","A664"].includes(t)?`
      //对于Analog 和 Discrete 使用如下模板
      lLocalResult = m_${t}Outputs->setupMessages();
      if (lLocalResult != VIP_Success)
      {
      lResult = lLocalResult;
      std::string lMessage;
      lMessage += "SimulationInputs::initialise m_${t}Outputs->setupMessages() Failed: ";
      // lMessage += VIP_GetErrorMessage( lLocalResult );
      VIP_SendHealthMessage(m_ParticipantHandle, VIP_HealthLevel_Error,
     lMessage.c_str());
      }
      `:"").join("")}
//3) 
 return lResult;
}


void SimulationOutputs::send()
{
  ${f.map(t=>`m_${t}Outputs->send();`).join("")}
}
  `}function _t(f){return`
#pragma once
#define __STR2__(x) #x
#define __STR1__(x) __STR2__(x)
#define __LOC__ __FILE__ "("__STR1__(__LINE__)") : Warning Msg: "

#ifndef __linux__
#include "SimInterface\\A429ArrayParameter.h" 
#include "SimInterface\\A429WordBase.h" 
#include "SimInterface\\A429LabeledWord.h" 
#include "SimInterface\\A429RawWord.h" 
#include "SimInterface\\Periodic.h"
#include "SimInterface\\APeriodic.h" 
#include "SimInterface\\A429Parameter.h" 
#include "SimInterface\\A429Enumeration.h"
#else
#include "SimInterface/A429ArrayParameter.h" 
#include "SimInterface/A429WordBase.h" 
#include "SimInterface/A429LabeledWord.h" 
#include "SimInterface/A429RawWord.h" 
#include "SimInterface/Periodic.h"
#include "SimInterface/APeriodic.h" 
#include "SimInterface/A429Parameter.h" 
#include "SimInterface/A429Enumeration.h"
#endif

${f.map((t,a)=>(t.children||[]).map((n,r)=>{const i=(n.children||[]).map(o=>{var u;return o._DataFormatType==="String"?`
        A429ArrayParameter<VIP_${e.dftMap(t,o,r,a)},
        VIP_Type_${e.dftMap(t,o,r,a)}Array>* ${e.nameFilter(o._ParamName)};
        `:o._DataFormatType==="Enumeration"?`
          static const EnumLookup EnumLookup${e.nameFilter(o._ParamName)}[];
          enum Enum${e.nameFilter(o._ParamName)}:int
          {
              ${e.nameFilter(o._ParamName)}_VIPUndefined = 2147483647,
              ${((o==null?void 0:o.children)||[]).map((d,g)=>`
                ${e.nameFilter(o._ParamName)}_${e.nameFilter(d._Value)} = ${d._ID}${g>=(o.children||[]).length-1?"":","}
                `).join("")}
          };
          A429Enumeration<Enum${e.nameFilter(o._ParamName)}, EnumLookup${e.nameFilter(o._ParamName)}, ${((u=o.children)==null?void 0:u.length)||0}>* ${e.nameFilter(o._ParamName)};
        `:`
        A429Parameter<VIP_${e.dftMap(t,o,r,a)}, VIP_Type_${e.dftMap(t,o,r,a)}>*
        ${e.nameFilter(o._ParamName)};
        `}).join("");return`
      // biaoji
class A429Word_${e.nameFilter(t._BusName)}_${e.nameFilter(n._WordName)} : public A429LabeledWord, public APeriodic{
protected:
 VIP_Result setupParameters();
public:
 A429Word_${e.nameFilter(t._BusName)}_${e.nameFilter(n._WordName)}(VIP429_BusHandle aBusHandle, std::string aWordName, VIP_UInt32 aLabel);
 virtual ~A429Word_${e.nameFilter(t._BusName)}_${e.nameFilter(n._WordName)}();
 ${i}
};
`}).join("")).join("")}

  `}const{eachData:_e}=e;function dt(f){return`#pragma once
#define __STR2__(x) #x
#define __STR1__(x) __STR2__(x)
#define __LOC__ __FILE__ "("__STR1__(__LINE__)") : Warning Msg: "
#include "A429WordData_CG.h"
#ifndef __linux__
#pragma comment (lib, "User32.lib") 
#include <windows.h>
#endif
${_e(f,(t,a)=>_e(t.children,n=>`A429Word_${e.nameFilter(t._BusName)}_${e.nameFilter(n._WordName)}::A429Word_${e.nameFilter(t._BusName)}_${e.nameFilter(n._WordName)}(VIP429_BusHandle
aBusHandle, std::string aWordName, VIP_UInt32 aLabel)
 : A429LabeledWord(aBusHandle, aWordName, aLabel)
{
  ${_e(n.children,r=>`${e.nameFilter(r._ParamName)}= NULL;
`)}
}
`))}

${_e(f,(t,a)=>_e(t.children,n=>`A429Word_${e.nameFilter(t._BusName)}_${e.nameFilter(n._WordName)}::~A429Word_${e.nameFilter(t._BusName)}_${e.nameFilter(n._WordName)}()
    {
      ${_e(n.children,r=>`if (${e.nameFilter(r._ParamName)} != NULL)
        {
        delete ${e.nameFilter(r._ParamName)};
        }
        `)}
    }
    `))}

  ${_e(f,(t,a)=>_e(t.children,(n,r)=>`VIP_Result A429Word_${e.nameFilter(t._BusName)}_${e.nameFilter(n._WordName)}::setupParameters()
{
 VIP_Result lResult = VIP_Success;
 VIP_Result lLocalResult = VIP_Success;
 VIP429_ParameterType paramType;
 ${_e(n.children,i=>{var u;let o=null;if(i._DataFormatType==="String")o=`paramType.DataFormat = VIP429_ISO5;
paramType.BitOffset = ${i._BitOffset};
paramType.SignificantBits = ${i._SizeInBits};
${e.nameFilter(i._ParamName)} = new A429ArrayParameter<VIP_${e.dftMap(t,i,r,a)}, VIP_Type_${e.dftMap(t,i,r,a)}Array>(getHandle(), "${i._ParamName}", paramType);
    `;else if(i._DataFormatType==="Enumeration")o=`paramType.DataFormat = VIP429_Enumeration;
${e.nameFilter(i._ParamName)}= new A429Enumeration<Enum${e.nameFilter(i._ParamName)}, EnumLookup${e.nameFilter(i._ParamName)}, ${((u=i.children)==null?void 0:u.length)||0}>(getHandle(), "${i._ParamName}", paramType);
`;else{const d=i._Resolution?`paramType.Resolution = ${i._Resolution};`:"";o=`paramType.DataFormat = VIP429_${i._DataFormatType};  
paramType.BitOffset = ${i._BitOffset};
paramType.SignificantBits = ${i._SizeInBits};
${d} 

${e.nameFilter(i._ParamName)} = new A429Parameter < VIP_${e.dftMap(t,i,r,a)}, VIP_Type_${e.dftMap(t,i,r,a)}> (getHandle(), "${i._ParamName}", paramType);
  `}return`
  ${o}
  if (${e.nameFilter(i._ParamName)}!= NULL)
  {
  lLocalResult = ${e.nameFilter(i._ParamName)} -> initialise();
}
  else
{
  lLocalResult = VIP_NullParameter;
}
if (lLocalResult != VIP_Success) {
  lResult = lLocalResult;
  std::string lMessage;
  lMessage.append("Parameter: ${e.nameFilter(i._ParamName)}");
  lMessage.append("was not found in A429Word_${e.nameFilter(t._BusName)}_${e.nameFilter(n._WordName)}");
  std::wstring lWide(lMessage.begin(), lMessage.end());
  std::cout << lWide.c_str() <<std::endl;
}
`})}
return lResult;
}
`))}


  ${_e(f,t=>`${_e(t.children,a=>`${_e(a.children,n=>{var r;return n._DataFormatType==="Enumeration"?`const EnumLookup A429Word_${e.nameFilter(t._BusName)}_${e.nameFilter(a._WordName)}::EnumLookup${n._ParamName}[${((r=n.children)==null?void 0:r.length)||0}] =
{
${_e(n.children,i=>`${n._ParamName}_${e.nameFilter(i._Value)}, "${e.nameFilter(i._Value)}",
`)}
};
`:""})}
`)}
`)}



  `}function ft(f){return`
#pragma once
#ifndef __linux__
#include "SimInterface\\A429IOManager.h" 
#else
#include "SimInterface/A429IOManager.h" 
#endif
#include "A429WordData_CG.h"

${f.map(t=>`
class A429Bus_${e.nameFilter(t._PortName)} : public A429Bus
{
protected:
 VIP_Result setupWords();
public:
 A429Bus_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle aParticipantHandle,
 std::string aPortName,
 VIP_Direction aDirection,
 VIP_UInt16 aQueueLength,
 VIP_QueueLossType aQueueLossType);
 virtual ~A429Bus_${e.nameFilter(t._PortName)}();
 ${(t.children||[]).map(a=>`
      A429Word_${e.nameFilter(t._BusName)}_${e.nameFilter(a._WordName)}* ${e.nameFilter(a._WordName)};
      `).join("")}
};
`).join("")}

class A429Inputs: public A429IOManager
  {
  public:
  A429Inputs(VIP_ParticipantHandle aParticipantHandle);
  virtual ~A429Inputs();
  VIP_Result setupIO();
  ${f.map(t=>`
  A429Bus_${e.nameFilter(t._PortName)}* ${e.nameFilter(t._PortName)};
 `).join("")}
 };  


  `}function ht(f){return`
#pragma once
#include "A429Inputs_CG.h"
  
  ${f.map(t=>`
A429Bus_${e.nameFilter(t._PortName)}::A429Bus_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle aParticipantHandle,
 std::string aPortName,
 VIP_Direction aDirection,
 VIP_UInt16 aQueueLength,
 VIP_QueueLossType aQueueLossType)
 : A429Bus(aParticipantHandle, aPortName, aDirection, aQueueLength,
aQueueLossType)
{
  ${(t.children||[]).map(a=>`${e.nameFilter(a._WordName)} = NULL;`).join("")}
}
`).join("")}

  ${f.map(t=>`
  A429Bus_${e.nameFilter(t._PortName)}::~A429Bus_${e.nameFilter(t._PortName)}()
  {
    ${(t.children||[]).map(a=>`
      if (${e.nameFilter(a._WordName)} != NULL)
      {
      delete ${e.nameFilter(a._WordName)};
      }
      `).join("")}
  }
  `).join("")}

  ${f.map(t=>`
VIP_Result A429Bus_${e.nameFilter(t._PortName)}::setupWords()
{
 VIP_Result lResult = VIP_Success;
 VIP_Result lLocalResult = VIP_Success;
 ${(t.children||[]).map(a=>`
 ${e.nameFilter(a._WordName)} = new A429Word_${e.nameFilter(t._BusName)}_${e.nameFilter(a._WordName)}(getHandle(), "${a._WordName}", ${a._Label});
 lLocalResult = ${e.nameFilter(a._WordName)}->initialiseWord();
 if (lLocalResult == VIP_Success)
 {
 lLocalResult = ${e.nameFilter(a._WordName)}->initialiseAPeriodic(${e.nameFilter(a._WordName)});
 
  if (lLocalResult == VIP_Success)
  {
    addAPeriodicWord(${e.nameFilter(a._WordName)});
  }
  else
  {
    lResult = lLocalResult;
  }
 }
 else
 {
 lResult = lLocalResult;
 }
 `).join("")}
 return lResult;
}
`).join("")}

  A429Inputs::A429Inputs(VIP_ParticipantHandle aParticipantHandle)
 : A429IOManager(aParticipantHandle)
{
  ${f.map(t=>`${e.nameFilter(t._PortName)} = NULL;`).join("")}
}

A429Inputs::~A429Inputs()
{
  ${f.map(t=>`
 if (${e.nameFilter(t._PortName)} != NULL)
 {
 delete ${e.nameFilter(t._PortName)};
 }
 `).join("")}
}


VIP_Result A429Inputs::setupIO()
{
 VIP_Result lResult = VIP_Success;
 VIP_Result lLocalResult = VIP_Success;
 ${f.map(t=>`
 ${e.nameFilter(t._PortName)} = new A429Bus_${e.nameFilter(t._PortName)}(m_ParticipantHandle, "${t._PortName}",
VIP_Direction_Subscribe, ${t._QueueLength}, VIP_QueueLossType_Lossy);
 lLocalResult = ${e.nameFilter(t._PortName)}->initialise();
 if (lLocalResult == VIP_Success)
 {
 addBus(${e.nameFilter(t._PortName)});
 }
 else
 {
 lResult = lLocalResult;
 }
 `).join("")}
 return lResult;
}


  `}function pt(f){return`
#pragma once
#ifndef __linux__
#include "SimInterface\\A429IOManager.h" 
#else
#include "SimInterface/A429IOManager.h" 
#endif
#include "A429WordData_CG.h"

${f.map(t=>`
class A429Bus_${e.nameFilter(t._PortName)} : public A429Bus
{
protected:
 VIP_Result setupWords();
public:
 // Constructor.
 A429Bus_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle aParticipantHandle,
 std::string aPortName,
 VIP_Direction aDirection);
 // Destructor.
 virtual ~A429Bus_${e.nameFilter(t._PortName)}();
 ${(t.children||[]).map(a=>`
 // A429 Word Objects.
 A429Word_${e.nameFilter(t._BusName)}_${e.nameFilter(a._WordName)}* ${e.nameFilter(a._WordName)};
 `).join("")}
};
`).join("")}


class A429Outputs : public A429IOManager
{
//1)
public:
 A429Outputs(VIP_ParticipantHandle aParticipantHandle);
 // Destructor.
 virtual ~A429Outputs();
//2)
 VIP_Result setupIO();
 ${f.map(t=>`
 A429Bus_${e.nameFilter(t._PortName)}* ${e.nameFilter(t._PortName)};
`).join("")}
};


  `}function Pt(f){return`
  #pragma once
  #include "A429Outputs_CG.h"

  ${f.map(t=>`
A429Bus_${e.nameFilter(t._PortName)}::A429Bus_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle aParticipantHandle,
 std::string aPortName,
 VIP_Direction aDirection)
 : A429Bus(aParticipantHandle, aPortName, aDirection)
{
  ${(t.children||[]).map(a=>`
    ${e.nameFilter(a._WordName)} = NULL;
 `).join("")}
}
`).join("")}


  ${f.map(t=>`
A429Bus_${e.nameFilter(t._PortName)}::~A429Bus_${e.nameFilter(t._PortName)}()
{
  ${(t.children||[]).map(a=>`
      if (${e.nameFilter(a._WordName)} != NULL)
      {
      delete ${e.nameFilter(a._WordName)};
      }
      `).join("")}
}
`).join("")}

  ${f.map(t=>`
  VIP_Result A429Bus_${e.nameFilter(t._PortName)}::setupWords()
  {
   VIP_Result lResult = VIP_Success;
   VIP_Result lLocalResult = VIP_Success;
   ${(t.children||[]).map(a=>`
   ${e.nameFilter(a._WordName)} = new A429Word_${e.nameFilter(t._BusName)}_${e.nameFilter(a._WordName)}(getHandle(), "${a._WordName}", ${a._Label});
   lLocalResult = ${e.nameFilter(a._WordName)}->initialiseWord();
   if (lLocalResult == VIP_Success)
   {
   lLocalResult = ${e.nameFilter(a._WordName)}->initialiseAPeriodic(${e.nameFilter(a._WordName)});
   if (lLocalResult == VIP_Success)
  {
    addAPeriodicWord(${e.nameFilter(a._WordName)});
  }
  else
  {
  lResult = lLocalResult;
  }
  }
  else
  {
  lResult = lLocalResult;
  }
  `).join("")}
  return lResult;
}
`).join("")}

  A429Outputs::A429Outputs(VIP_ParticipantHandle aParticipantHandle)
  : A429IOManager(aParticipantHandle)
 {
  ${f.map(t=>`
    ${e.nameFilter(t._PortName)} = NULL;
  `).join("")}
  
 }
 
 A429Outputs::~A429Outputs()
{
  ${f.map(t=>`
 if (${e.nameFilter(t._PortName)} != NULL)
 {
 delete ${e.nameFilter(t._PortName)};
 }
 `).join("")}
 
}


VIP_Result A429Outputs::setupIO()
{
 VIP_Result lResult = VIP_Success;
 VIP_Result lLocalResult = VIP_Success;
 ${f.map(t=>`
 // Setup buses
 ${e.nameFilter(t._PortName)} = new A429Bus_${e.nameFilter(t._PortName)}(m_ParticipantHandle, "${t._PortName}",
VIP_Direction_Publish); 
 // Initialise bus.
 lLocalResult = ${e.nameFilter(t._PortName)}->initialise();
 if (lLocalResult == VIP_Success)
 {
 // if successful add the bus.
 addBus(${e.nameFilter(t._PortName)});
 }
 else
 {
 lResult = lLocalResult;
 }
 `).join("")}
 return lResult;
}


  
  `}function gt(f){return`
#pragma once
#ifndef __linux__
#include "SimInterface\\NonProtocolArrayParameter.h" 
#include "SimInterface\\NonProtocolParameter.h" 
#include "SimInterface\\NonProtocolEnumeration.h" 
#include "SimInterface\\NonProtocolIOManager.h" 
#include "SimInterface\\NonProtocolMessage.h" 
#include "SimInterface\\NonProtocolAPeriodic.h" 
#include "SimInterface\\NonProtocolPeriodic.h"
#else
#include "SimInterface/NonProtocolArrayParameter.h" 
#include "SimInterface/NonProtocolParameter.h" 
#include "SimInterface/NonProtocolEnumeration.h" 
#include "SimInterface/NonProtocolIOManager.h" 
#include "SimInterface/NonProtocolMessage.h" 
#include "SimInterface/NonProtocolAPeriodic.h" 
#include "SimInterface/NonProtocolPeriodic.h"
#endif
${f.map(t=>{var a;return`
class NPDMessage_${e.nameFilter(t._PortName)} : public NonProtocolMessage, public NonProtocolAPeriodic
{
protected:
 VIP_Result setupParameters();
public:
 NPDMessage_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle aParticpantHandle,
 std::string aName,
 VIP_Direction aDirection,
 VIP_QueueType aQueueType,
 VIP_Int32 aQueueLength,
 VIP_QueueLossType aQueueLossType);
 virtual ~NPDMessage_${e.nameFilter(t._PortName)}();
VIP_Result initialise();

${(a=t.children)!=null&&a.length?t.children.map((n={})=>{var i,o,u;const r=n._DataFormatType||"";return r==="String"||r.includes("Array")?`
 NonProtocolArrayParameter<VIP_${e.dftMap({},n,0)}, VIP_Type_${e.dftMap({},n,0)}Array>*
${e.nameFilter(n._ParamName)};
`:r==="Enumeration"?`
static const EnumLookup EnumLookup${e.nameFilter(n._ParamName)}[];
enum Enum${e.nameFilter(n._ParamName)}:int
{
${e.nameFilter(n._ParamName)}_VIPUndefined = 2147483647,
${(i=n.children)!=null&&i.length?(o=n.children)==null?void 0:o.map((d,g)=>`
${e.nameFilter(n._ParamName)}_${e.nameFilter(d._Value)} = ${d._ID}${g>=(n.children||[]).length-1?"":","} //注意最后一个不需要逗号,Value中的空格 点 括号等特殊字符需去除
`).join(""):""}
};
NonProtocolEnumeration<Enum${e.nameFilter(n._ParamName)}, EnumLookup${e.nameFilter(n._ParamName)}, ${((u=n.children)==null?void 0:u.length)||0}>*
${e.nameFilter(n._ParamName)};
`:`
NonProtocolParameter<VIP_${e.dftMap({},n,0)}, VIP_Type_${e.dftMap({},n,0)}>* ${e.nameFilter(n._ParamName)};
`}).join(""):""}
};
`}).join("")}


class NPDInputs : public NonProtocolDataIOManager
{
public:
 NPDInputs(VIP_ParticipantHandle aParticipantHandle);
 virtual ~NPDInputs();
 VIP_Result setupIO();
 ${f.map(t=>`
  NPDMessage_${e.nameFilter(t._PortName)}* ${e.nameFilter(t._PortName)};
`).join("")}
};
`}function It(f){var a;const t=f._DataFormatType||"";return t==="String"||t.includes("Array")?`
${e.nameFilter(f._ParamName)}= new NonProtocolArrayParameter<VIP_${e.dftMap({},f,0)}, VIP_Type_${e.dftMap({},f,0)}Array> (lHandle, "${f._ParamName}");
`:t==="Enumeration"?`
${e.nameFilter(f._ParamName)} = new NonProtocolEnumeration<Enum${e.nameFilter(f._ParamName)}, EnumLookup${e.nameFilter(f._ParamName)}, ${((a=f.children)==null?void 0:a.length)||0}>(lHandle, "${f._ParamName}");
`:(console.log(f,e.nameFilter(f._ParamName)),`
 ${e.nameFilter(f._ParamName)} = new NonProtocolParameter<VIP_${e.dftMap({},f,0)}, VIP_Type_${e.dftMap({},f,0)}>(lHandle, "${f._ParamName}"); 
`)}function $t(f){return`
      #pragma once
      #include "NPDInputs_CG.h"
      #ifndef __linux__
      #pragma comment (lib, "User32.lib") 
      #include <windows.h>
      #endif
        ${f.map(t=>{var a,n;return`
NPDMessage_${e.nameFilter(t._PortName)}::NPDMessage_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle aParticpantHandle,
 std::string aName,
 VIP_Direction aDirection,
 VIP_QueueType aQueueType,
 VIP_Int32 aQueueLength,
 VIP_QueueLossType aQueueLossType)
 : NonProtocolMessage(aParticpantHandle, aName,
 aDirection, aQueueType, aQueueLength, aQueueLossType)
{
 ${(a=t.children)!=null&&a.length?(n=t.children)==null?void 0:n.map(r=>`
${e.nameFilter(r._ParamName)} = NULL;
`).join(""):""}
}
`}).join("")}

        ${f.map(t=>{var a,n;return`
NPDMessage_${e.nameFilter(t._PortName)}::~NPDMessage_${e.nameFilter(t._PortName)}()
{
  ${(a=t.children)!=null&&a.length?(n=t.children)==null?void 0:n.map(r=>`
  if (${e.nameFilter(r._ParamName)}!= NULL)
  {
  delete ${e.nameFilter(r._ParamName)};
  }
`).join(""):""}
}
`}).join("")}
        ${f.map(t=>`
VIP_Result NPDMessage_${e.nameFilter(t._PortName)}::initialise()
{
  VIP_Result lResult;
  lResult = NonProtocolMessage::initialise();
  if (lResult == VIP_Success)
  {
    this->initialiseAPeriodic(NonProtocolMessage::getHandle());
    lResult = NonProtocolMessage::setDirection();
  }
  return lResult;
}
`).join("")}

${f.map(t=>{var a,n;return`
VIP_Result NPDMessage_${e.nameFilter(t._PortName)}::setupParameters()
{
///1)
 VIP_Result lResult = VIP_Success;
 VIP_Result lLocalResult = VIP_Success;
 VIP_ParameterHandle lHandle = NonProtocolMessage::getHandle();
///2)
 ${(a=t.children)!=null&&a.length?(n=t.children)==null?void 0:n.map(r=>`
${It(r)}
if (${e.nameFilter(r._ParamName)}!= NULL)
 {
 lLocalResult =${e.nameFilter(r._ParamName)}->initialise();
 }
 else
 {
 lLocalResult = VIP_NullParameter;
 }
 if (lLocalResult != VIP_Success)
 {
 lResult = lLocalResult;
 std::string lMessage;
 lMessage.append ("Parameter: ${e.nameFilter(r._ParamName)}");
 lMessage.append ("was not found in NPDMessage_${e.nameFilter(t._PortName)}");
 VIP_SendHealthMessage(NonProtocolMessage::getParentHandle(), VIP_HealthLevel_Error,
lMessage.c_str()); 

}
`).join(""):""}
return lResult;
}
`}).join("")}

NPDInputs::NPDInputs(VIP_ParticipantHandle aParticipantHandle)
 : NonProtocolDataIOManager(aParticipantHandle)
{
${f.map(t=>`
${e.nameFilter(t._PortName)}= NULL;
`).join("")}
}

NPDInputs::~NPDInputs()
{
${f.map(t=>`
  if (${e.nameFilter(t._PortName)}!= NULL)
  {
  delete ${e.nameFilter(t._PortName)};
  }
`).join("")}
}


VIP_Result NPDInputs::setupIO()
{
 VIP_Result lResult = VIP_Success;
 VIP_Result lLocalResult = VIP_Success;
 ${f.map(t=>`
 ${e.nameFilter(t._PortName)} = new NPDMessage_${e.nameFilter(t._PortName)}(m_ParticipantHandle, "${t._PortName}", VIP_Direction_Subscribe,
VIP_QueueType_Stream, 20, VIP_QueueLossType_Lossy);
 lLocalResult =${e.nameFilter(t._PortName)}->initialise();
 if (lLocalResult == VIP_Success)
 {
  addAPeriodicMessage(${e.nameFilter(t._PortName)});
 }
 else
 {
 lResult = lLocalResult;
 }
`).join("")}
 return lResult;
}

${f.map(t=>{var a,n;return`
 ${(a=t.children)!=null&&a.length?(n=t.children)==null?void 0:n.map(r=>{var i,o;return r._DataFormatType==="Enumeration"?`
    const EnumLookup NPDMessage_${e.nameFilter(t._PortName)}::EnumLookup${e.nameFilter(r._ParamName)}[${((i=r.children)==null?void 0:i.length)||0}] =
    {
    ${r.children?(o=r.children)==null?void 0:o.map(u=>`
    ${e.nameFilter(r._ParamName)}_${e.nameFilter(u._Value)}, "${e.nameFilter(u._Value)}",
    `).join(""):""}
    };
    `:""}).join(""):""}
 `}).join("")}

        `}function Nt(f){return`
#pragma once
#ifndef __linux__
#include "SimInterface\\NonProtocolArrayParameter.h" 
#include "SimInterface\\NonProtocolParameter.h" 
#include "SimInterface\\NonProtocolEnumeration.h" 
#include "SimInterface\\NonProtocolIOManager.h" 
#include "SimInterface\\NonProtocolMessage.h" 
#include "SimInterface\\NonProtocolAPeriodic.h" 
#include "SimInterface\\NonProtocolPeriodic.h"
#else
#include "SimInterface/NonProtocolArrayParameter.h" 
#include "SimInterface/NonProtocolParameter.h" 
#include "SimInterface/NonProtocolEnumeration.h" 
#include "SimInterface/NonProtocolIOManager.h" 
#include "SimInterface/NonProtocolMessage.h" 
#include "SimInterface/NonProtocolAPeriodic.h" 
#include "SimInterface/NonProtocolPeriodic.h"
#endif

${f.map(t=>{var a,n;return`
class NPDMessage_${e.nameFilter(t._PortName)} : public NonProtocolMessage, public NonProtocolAPeriodic
{
protected:
 VIP_Result setupParameters();
public:
public:
 NPDMessage_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle aParticpantHandle, std::string aName, VIP_Direction
aDirection);
 virtual ~NPDMessage_${e.nameFilter(t._PortName)}();
 VIP_Result initialise();
 ${(a=t.children)!=null&&a.length?(n=t.children)==null?void 0:n.map(r=>{var o,u,d;let i="";return r._DataFormatType==="String"||(o=r._DataFormatType)!=null&&o.includes("Array")?i=`NonProtocolArrayParameter<VIP_${e.dftMap({},r,0)}, VIP_Type_${e.dftMap({},r,0)}Array>* ${e.nameFilter(r._ParamName)};`:r._DataFormatType==="Enumeration"?i=`
        static const EnumLookup EnumLookup${e.nameFilter(r._ParamName)}[];
        enum Enum${e.nameFilter(r._ParamName)}:int
        {
        ${e.nameFilter(r._ParamName)}_VIPUndefined = 2147483647,
        ${(u=r.children)!=null&&u.length?r.children.map((g,F)=>`
          ${e.nameFilter(r._ParamName)}_${e.nameFilter(g._Value)} = ${g._ID}${F>=(r.children||[]).length-1?"":","} //注意最后一个不需要逗号,Value中的空格 点 括号等特殊字符需去除
          `).join(""):""}
        };
        NonProtocolEnumeration<Enum${e.nameFilter(r._ParamName)}, EnumLookup${e.nameFilter(r._ParamName)}, ${((d=r.children)==null?void 0:d.length)||0}>* ${e.nameFilter(r._ParamName)};
`:i=`NonProtocolParameter<VIP_${e.dftMap({},r,0)}, VIP_Type_${e.dftMap({},r,0)}>* ${e.nameFilter(r._ParamName)};`,i}).join(""):""}
};
`}).join("")}

class NPDOutputs : public NonProtocolDataIOManager
{
public:
 NPDOutputs(VIP_ParticipantHandle aParticipantHandle);
 virtual ~NPDOutputs();
 VIP_Result setupIO();
 
${f.map(t=>`
    NPDMessage_${e.nameFilter(t._PortName)}* ${e.nameFilter(t._PortName)};
`).join("")}
};

`}function At(f){return`
#pragma once
#include "NPDOutputs_CG.h"
#ifndef __linux__
#pragma comment (lib, "User32.lib") 
#include <windows.h>
#endif
  
${f.map(t=>{var a;return`
NPDMessage_${e.nameFilter(t._PortName)}::NPDMessage_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle aParticpantHandle,
 std::string aName,
 VIP_Direction aDirection)
 : NonProtocolMessage(aParticpantHandle, aName,
 aDirection)
{
 ${(a=t.children)!=null&&a.length?t.children.map(n=>`
  ${e.nameFilter(n._ParamName)} = NULL;
`).join(""):""}
}
`}).join("")}

${f.map(t=>{var a;return`
NPDMessage_${e.nameFilter(t._PortName)}::~NPDMessage_${e.nameFilter(t._PortName)}()
{
 ${(a=t.children)!=null&&a.length?t.children.map(n=>`
  if (${e.nameFilter(n._ParamName)}!= NULL)
  {
  delete ${e.nameFilter(n._ParamName)};
  }
`).join(""):""}
}
`}).join("")}
${f.map(t=>`
VIP_Result NPDMessage_${e.nameFilter(t._PortName)}::initialise()
{
 VIP_Result lResult;
 lResult = NonProtocolMessage::initialise();
 if (lResult == VIP_Success)
 {
    this->initialiseAPeriodic(NonProtocolMessage::getHandle());
    lResult = NonProtocolMessage::setDirection();
 }
 return lResult;
}
`).join("")}
${f.map(t=>{var a;return`
VIP_Result NPDMessage_${e.nameFilter(t._PortName)}::setupParameters()
{
///1)
 VIP_Result lResult = VIP_Success;
 VIP_Result lLocalResult = VIP_Success;
 VIP_ParameterHandle lHandle = NonProtocolMessage::getHandle();
///2)
 ${(a=t.children)!=null&&a.length?t.children.map((n={})=>{var i,o;let r="";return n._DataFormatType==="String"||(i=n._DataFormatType)!=null&&i.includes("Array")?r=`
${e.nameFilter(n._ParamName)}= new NonProtocolArrayParameter<VIP_${e.dftMap({},n,0)}, VIP_Type_${e.dftMap({},n,0)}Array>(lHandle, "${n._ParamName}");
`:n._DataFormatType==="Enumeration"?r=`
${e.nameFilter(n._ParamName)} = new NonProtocolEnumeration<Enum${e.nameFilter(n._ParamName)}, EnumLookup${e.nameFilter(n._ParamName)}, ${((o=n.children)==null?void 0:o.length)||0}>(lHandle, "${n._ParamName}");
`:r=`
${e.nameFilter(n._ParamName)} = new NonProtocolParameter<VIP_${e.dftMap({},n,0)}, VIP_Type_${e.dftMap({},n,0)}>(lHandle, "${n._ParamName}");
`,`
${r}
 if (${e.nameFilter(n._ParamName)}!= NULL)
 {
 lLocalResult =${e.nameFilter(n._ParamName)}->initialise();
 }
 else
 {
 lLocalResult = VIP_NullParameter;
 }
 if (lLocalResult != VIP_Success)
 {
 lResult = lLocalResult;
 std::string lMessage;
 lMessage.append ("Parameter: ${e.nameFilter(n._ParamName)}");
 lMessage.append ("was not found in NPDMessage_${e.nameFilter(t._PortName)}");
 VIP_SendHealthMessage(NonProtocolMessage::getParentHandle(), VIP_HealthLevel_Error,
lMessage.c_str()); 
 }
`}).join(""):""}
 return lResult;
}
`}).join("")}


NPDOutputs::NPDOutputs(VIP_ParticipantHandle aParticipantHandle)
 : NonProtocolDataIOManager(aParticipantHandle)
{
${f.map(t=>`
${e.nameFilter(t._PortName)}= NULL;
 `).join("")}
}

NPDOutputs::~NPDOutputs()
{
${f.map(t=>`
 if (${e.nameFilter(t._PortName)}!= NULL)
 {
 delete ${e.nameFilter(t._PortName)};
 }
`).join("")}
}

VIP_Result NPDOutputs::setupIO()
{
 VIP_Result lResult = VIP_Success;
 VIP_Result lLocalResult = VIP_Success;
 ${f.map(t=>`
 ${e.nameFilter(t._PortName)} = new NPDMessage_${e.nameFilter(t._PortName)}(m_ParticipantHandle, "${t._PortName}",
VIP_Direction_Publish);
 lLocalResult =${e.nameFilter(t._PortName)}->initialise();
 if (lLocalResult == VIP_Success)
 {
  addAPeriodicMessage(${e.nameFilter(t._PortName)});
 }
 else
 {
 lResult = lLocalResult;
 }
 `).join("")}
 return lResult;
}

${f.map(t=>{var a,n;return`
 ${(a=t.children)!=null&&a.length?(n=t.children)==null?void 0:n.map(r=>{var i,o;return r._DataFormatType==="Enumeration"?`
const EnumLookup NPDMessage_${e.nameFilter(t._PortName)}::EnumLookup${e.nameFilter(r._ParamName)}[${((i=r.children)==null?void 0:i.length)||0}] =
{
${r.children?(o=r.children)==null?void 0:o.map(u=>`
${e.nameFilter(r._ParamName)}_${e.nameFilter(u._Value)}, "${e.nameFilter(u._Value)}",
`).join(""):""}
};
`:""}).join(""):""}
 `}).join("")}

`}function Ft(f){return`
#pragma once
#define __STR2__(x) #x
#define __STR1__(x) __STR2__(x)
#define __LOC__ __FILE__ "("__STR1__(__LINE__)") : Warning Msg: "
#ifndef __linux__
#include "SimInterface\\A664ArrayParameter.h" 
#include "SimInterface\\A664Parameter.h" 
#include "SimInterface\\A664IOManager.h" 
#include "SimInterface\\A664DataSet.h" 
#include "SimInterface\\A664APeriodic.h" 
#include "SimInterface\\A664Periodic.h" 
#include "SimInterface\\A664Enumeration.h" 
#include "SimInterface\\A429ParaWord.h" 
#include "SimInterface\\A429Parameter.h" 
#include "SimInterface\\A429Block.h"
#else
#include "SimInterface/A664ArrayParameter.h" 
#include "SimInterface/A664Parameter.h" 
#include "SimInterface/A664IOManager.h" 
#include "SimInterface/A664DataSet.h" 
#include "SimInterface/A664APeriodic.h" 
#include "SimInterface/A664Periodic.h" 
#include "SimInterface/A664Enumeration.h" 
#include "SimInterface/A429ParaWord.h" 
#include "SimInterface/A429Parameter.h" 
#include "SimInterface/A429Block.h"
#endif
#include "VIPBaseTypes.h"
  

/////////////////////////////////////Iteration ofeachA664SubscribePort//////////////////////////////////////////////////////
${L(f,t=>`
 /////////////////////////Iteration of each A664DataSet inA664Message//////////////////////////////
 ${L(t.children,a=>`
      ${L(a.children,n=>n._WordName?`
class A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}_${e.nameFilter(n._WordName)} : public A429ParaWord
{
protected:
 VIP_Result setupParameters();
 
public:
 // Constructor
 A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}_${e.nameFilter(n._WordName)}(VIP664_DatasetHandle aDataSetHandle, std::string
aName, VIP_UInt32 aLabel);
 // Destructor
 virtual ~A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}_${e.nameFilter(n._WordName)}();
 
 // A429Word Parameters
 //////Iteration of each A429Param/////////
 ${L(n.children,r=>{var i,o;return r._DataFormatType==="Enumeration"?`
// case1: Enumeration
// A664Enumeration<Enum${e.nameFilter(r._ParamName)}, EnumLookup${e.nameFilter(r._ParamName)}, ${((i=r.children)==null?void 0:i.length)||0}>* ${e.nameFilter(r._ParamName)};

static const EnumLookup EnumLookup${e.nameFilter(r._ParamName)}[];
 enum Enum${e.nameFilter(r._ParamName)}:int
 {
 ${e.nameFilter(r._ParamName)}_VIPUndefined = 2147483647,
 //////////////////Iteration for eachA429Parameter/////////////////////////////////////
 ${L(r.children,(u,d)=>`
 ${e.nameFilter(r._ParamName)}_${e.nameFilter(u._Value)} = ${u._ID}${d>=(r.children||[]).length-1?"":","}
 `)}
 /////////////////////////End of Iteration//////////////////////////////////////
 };
 A429Enumeration<Enum${e.nameFilter(r._ParamName)}, EnumLookup${e.nameFilter(r._ParamName)}, ${((o=r.children)==null?void 0:o.length)||0}>* ${e.nameFilter(r._ParamName)};            
`:r._DataFormatType==="String"?`
// case 2 :A664Param，对于Opaque String
A429ArrayParameter<VIP_${e.dftMap({},r,0)}, VIP_Type_${e.dftMap({},r,0)}Array>* ${e.nameFilter(r._ParamName)};
            `:`
//case3 :A664Param，对于其他类型
A429Parameter<VIP_${e.dftMap({},r,0)}, VIP_Type_${e.dftMap({},r,0)}>* ${e.nameFilter(r._ParamName)};
            `})}
 //////End of Iteration of each A429Param/////////
};
`:"")}
`)}
 //////////////////////////End of Iteration of each A664DataSet inA664Message///////////////////////////////////////
 `)}
/////////////////////////////////End of Iteration ofeachA664SubscribePort////////////////////////////////////////////////////////////


/////////////////////////////////////Iteration ofeachA664SubscribePort//////////////////////////////////////////////////////
${L(f,t=>`
 /////////////////////////Iteration of each A664DataSet inA664Message//////////////////////////////
      ${L(t.children,a=>`
class A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)} : public A664Dataset
{
protected:
 //1)
 VIP_Result setupParameters(); 
 
public:
 //2) Constructor
 A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}(VIP664_MessageHandle aMessageHandle, std::string aName);
 //2) Destructor
 virtual ~A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}();
 //3)指针变量
 ////////////////////Iteration of each A664Param/A429Word/////////////// 
 ${L(a.children,n=>{var r;return n._ParamName?n._DataFormatType==="Enumeration"?`
//case1 : A664Param，对于Enumeration
static const EnumLookup EnumLookup${e.nameFilter(n._ParamName)}[];
enum Enum${e.nameFilter(n._ParamName)}:int
{
${e.nameFilter(n._ParamName)}_VIPUndefined = 2147483647,
//////Iteration of Enumeration/////////
${L(n.children,(i,o)=>`
  ${e.nameFilter(n._ParamName)}_${e.nameFilter(i._Value)} = ${e.nameFilter(i._ID)}${o>=(n.children||[]).length-1?"":","}
  `)}
/////End of Iteration of Enumeration///////
};
A664Enumeration<Enum${e.nameFilter(n._ParamName)}, EnumLookup${e.nameFilter(n._ParamName)}, ${((r=n.children)==null?void 0:r.length)||0}>* ${e.nameFilter(n._ParamName)};
`:n._DataFormatType==="String"?`
case 2 :A664Param，对于Opaque String
A664ArrayParameter<VIP_${e.dftMap({},n,0)}, VIP_Type_${e.dftMap({},n,0)}Array>* ${e.nameFilter(n._ParamName)};
`:n._DataFormatType==="Opaque"?`
//case3 :A664Param，对于其他类型
A664Parameter<VIP_UInt32, VIP_Type_UInt32>* ${e.nameFilter(n._ParamName)};
            `:`
//case3 :A664Param，对于其他类型
A664Parameter<VIP_${e.dftMap({},n,0)}, VIP_Type_${e.dftMap({},n,0)}>* ${e.nameFilter(n._ParamName)}; 
              `:`
//case4 : A429Word
A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}_${e.nameFilter(n._WordName)}* ${e.nameFilter(n._WordName)};
`})}
 ////////////////////end of Iteration of each A664Param/A429Word///////////////
};
`)}
 //////////////////////////End of Iteration of each A664DataSet inA664Message///////////////////////////////////////
`)}
/////////////////////////////////End of Iteration ofeachA664SubscribePort////////////////////////////////////////////////////////////



/////////////////////////////////Iteration ofeachA664SubscribePort////////////////////////////////////////////////////////////
${L(f,t=>`
class A664Message_${e.nameFilter(t._PortName)} : public A664Message, public A664APeriodic
{
protected:
 VIP_Result setupData();
public:
 A664Message_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle aParticpantHandle,
 std::string aName,
 VIP_Direction aDirection,
 VIP_QueueType aQueueType,
 VIP_Int32 aQueueLength,
 VIP_QueueLossType aQueueLossType);
 virtual ~A664Message_${e.nameFilter(t._PortName)}();
 VIP_Result initialise();
/////////////////////////Iteration of each A664DataSet in A664Message//////////////////////////////
${L(t.children,a=>`
 A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}* ${e.nameFilter(a._DataSetName)};
 `)}
/////////////////////////End of Iteration of each A664DataSet inA664Message//////////////////////////////
};
`)}
/////////////////////////////////End of Iteration of eachA664SubscribePort//////////////////////////////////////////////////////////


class A664Inputs : public A664IOManager
{
public:
 // Constructor
 A664Inputs(VIP_ParticipantHandle aParticipantHandle);
 // Destructor
 virtual ~A664Inputs();
 VIP_Result setupMessages();
 
 // A664 Messages
/////////////////////////Iteration of each A664SubscribePort//////////////////////////////
${L(f,t=>`
 A664Message_${e.nameFilter(t._PortName)}* ${e.nameFilter(t._PortName)};
 `)}
};
/////////////////////////End of Iteration of each A664SubscribePort////////////////////////
`}function St(f){return`
#pragma once
#include "A664Inputs_CG.h"
#ifndef __linux__
#pragma comment (lib, "User32.lib") 
#include <windows.h>
#endif

////////////////////////Iteration for A664SubscribePort////////////
${L(f,t=>`
A664Message_${e.nameFilter(t._PortName)}::A664Message_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle aParticpantHandle,
 std::string aName,
 VIP_Direction aDirection,
 VIP_QueueType aQueueType,
 VIP_Int32 aQueueLength,
 VIP_QueueLossType aQueueLossType)
 : A664Message(aParticpantHandle, aName, ${t._SizeInBytes}, aDirection,
 aQueueType, aQueueLength, aQueueLossType)
{
 // Initialise all the member object pointers.
 /////////////////////////Iteration of each A664DataSet in A664Message//////////////////////////////
 ${L(t.children,a=>`
 ${e.nameFilter(a._DataSetName)}= NULL;
 `)}
 /////////////////////////End of Iteration of each A664DataSet inA664Message/////////////////////// 
}
`)}
////////////////////////end of Iteration ///////////////////////////


////////////////////////Iteration for A664SubscribePort////////////
${L(f,t=>`
A664Message_${e.nameFilter(t._PortName)}::~A664Message_${e.nameFilter(t._PortName)}()
{
 // Delete member objects
 /////////////////////////Iteration of each A664DataSet in A664Message//////////////////////////////
 ${L(t.children,a=>`
 if ( ${e.nameFilter(a._DataSetName)} != NULL)
 {
 delete ${e.nameFilter(a._DataSetName)};
 }
 `)}
 /////////////////////////End of Iteration of each A664DataSet inA664Message/////////////////////// 
}
`)}
////////////////////////end of Iteration ///////////////////////////

////////////////////////Iteration for A664SubscribePort////////////
${L(f,t=>`
VIP_Result A664Message_${e.nameFilter(t._PortName)}::initialise()
{
 VIP_Result lResult = A664Message::initialise();
 if (lResult == VIP_Success)
 {
  if (lResult == VIP_Success)
  {
     this->initialiseAPeriodic(A664Message::getHandle());
     lResult =A664Message::setDirection();
  }   
 }
 return lResult;
}
`)}
////////////////////////end of Iteration ///////////////////////////

////////////////////////Iteration for A664SubscribePort////////////
${L(f,t=>`
VIP_Result A664Message_${e.nameFilter(t._PortName)}::setupData()
{
 VIP_Result lResult = VIP_Success; 
 VIP_Result lLocalResult = VIP_Success; 
 ////////////////////////Iteration for Dataset////////////
 ${L(t.children,a=>`
 ${e.nameFilter(a._DataSetName)} = new A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}(A664Message::getHandle(), "${a._DataSetName}");
 
 if (${e.nameFilter(a._DataSetName)} != NULL)
 {
 lLocalResult = ${e.nameFilter(a._DataSetName)}->initialise();
 if(lLocalResult != VIP_Success)
 {
 lResult = lLocalResult;
 std::string lMessage;
 lMessage += "Parameter wasn't found in the Data Set: ";
 lMessage += "${e.nameFilter(a._DataSetName)}";
 lMessage += " VIP_Result = ";
 lMessage += VIP_GetErrorMessage( lLocalResult );
 VIP_SendHealthMessage(A664Message::getParentHandle(), VIP_HealthLevel_Error,
lMessage.c_str());
 std::wstring lWide(lMessage.begin(), lMessage.end()); 
 std::cout << lWide.c_str() <<std::endl;
 }
 } 
 else
 { 
 std::string lMessage;
 lMessage += "${e.nameFilter(a._DataSetName)} is Null "; 
 lMessage += " VIP_Result = ";
 lMessage += VIP_GetErrorMessage( lLocalResult );
 VIP_SendHealthMessage(A664Message::getParentHandle(), VIP_HealthLevel_Error, lMessage.c_str());
 lResult = VIP_ItemNotFound;
 }
 `)}
 ////////////////////////End of Iteration for Dataset////////////
 return lResult;
}
`)}
////////////////////////end of Itmaineration //////////////////////////


////////////////////////Iteration for A664SubscribePort////////////
${L(f,t=>`
 ////////////////////////Iteration for Dataset////////////
 ${L(t.children,a=>`
A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}::A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}(VIP664_MessageHandle
aMessageHandle, std::string aName)
 : A664Dataset(aMessageHandle, aName)
{
 // Initialise all the member object pointers.
 ////////////////////////Iteration for A664Param/A429word //////////// 
 ${L(a.children,n=>`
        ${n._ParamName?`${e.nameFilter(n._ParamName)} = NULL;`:`${e.nameFilter(n._WordName)} = NULL;`}
 `)}
        ////////////////////////Iteration for A664Param/A429word////////////
        
}
A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}::~A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}()
{
 // Delete all the member objects.
 ////////////////////////Iteration for A664Param/A429word //////////// 
 ${L(a.children,n=>n._ParamName?`
//case 1： A664Param
if ( ${e.nameFilter(n._ParamName)}!= NULL)
{
delete ${e.nameFilter(n._ParamName)};
}
          `:`
          //case 2： A429word
          if ( ${e.nameFilter(n._WordName)}!= NULL)
          {
          delete ${e.nameFilter(n._WordName)};
          }
          `)}
////////////////////////end of Iteration for A664Param/A429word////////////
}
`)}
 ////////////////////////end Iteration forDataset////////////
 `)}
////////////////////////end Iteration for A664SubscribePort////////////



////////////////////////Iteration for A664SubscribePort////////////
${L(f,t=>`
 ////////////////////////Iteration for Dataset////////////
 ${L(t.children,a=>`
VIP_Result A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}::setupParameters()
{
//1) 
 VIP_Result lResult = VIP_Success;
 VIP_Result lLocalResult = VIP_Success;
 ////////////////////////Iteration for A664Param/A429word //////////// 
 ${L(a.children,n=>{var r;return n._ParamName?n._DataFormatType==="Enumeration"?`
//case1 
${e.nameFilter(n._ParamName)}= new A664Enumeration<Enum${e.nameFilter(n._ParamName)}, EnumLookup${e.nameFilter(n._ParamName)}, ${((r=n.children)==null?void 0:r.length)||0}>
(A664Dataset::getHandle(), "${n._ParamName}");
  lLocalResult = ${e.nameFilter(n._ParamName)}->initialise();
  if (lLocalResult != VIP_Success)
  {
  lResult = lLocalResult;
  std::string lMessage;
  lMessage.append ("Parameter: ${e.nameFilter(n._ParamName)}");
  lMessage.append ("was not found in A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}"); 
  std::wstring lWide(lMessage.begin(), lMessage.end()); 
  std::cout << lWide.c_str() <<std::endl; 
  }
            `:n._DataFormatType==="String"?`
//case2 
${e.nameFilter(n._ParamName)} = new A664ArrayParameter<VIP_${e.dftMap({},n,0)}, VIP_Type_${e.dftMap({},n,0)}Array>
(A664Dataset::getHandle(), "${n._ParamName}");

lLocalResult = ${e.nameFilter(n._ParamName)}->initialise();
if (lLocalResult != VIP_Success)
{
lResult = lLocalResult;
std::string lMessage;
lMessage.append ("Parameter: ${e.nameFilter(n._ParamName)}");
lMessage.append ("was not found in A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}"); 
std::wstring lWide(lMessage.begin(), lMessage.end()); 
std::cout << lWide.c_str() <<std::endl; 
} 
              `:n._DataFormatType==="Opaque"?`
//case3
${e.nameFilter(n._ParamName)} = new A664Parameter<VIP_UInt32, VIP_Type_UInt32>
(A664Dataset::getHandle(), "${n._ParamName}");

 lLocalResult = ${e.nameFilter(n._ParamName)}->initialise();
 if (lLocalResult != VIP_Success)
 {
 lResult = lLocalResult;
 std::string lMessage;
 lMessage.append ("Parameter: ${e.nameFilter(n._ParamName)}");
 lMessage.append ("was not found in A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}"); 
 std::wstring lWide(lMessage.begin(), lMessage.end()); 
 std::cout << lWide.c_str() <<std::endl; 
 }
`:`
//case3
${e.nameFilter(n._ParamName)} = new A664Parameter<VIP_${e.dftMap({},n,0)}, VIP_Type_${e.dftMap({},n,0)}>
(A664Dataset::getHandle(), "${n._ParamName}");

 lLocalResult = ${e.nameFilter(n._ParamName)}->initialise();
 if (lLocalResult != VIP_Success)
 {
 lResult = lLocalResult;
 std::string lMessage;
 lMessage.append ("Parameter: ${e.nameFilter(n._ParamName)}");
 lMessage.append ("was not found in A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}"); 
 std::wstring lWide(lMessage.begin(), lMessage.end()); 
 std::cout << lWide.c_str() <<std::endl; 
 }
`:`
//case4
${e.nameFilter(n._WordName)} = new A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}_${e.nameFilter(n._WordName)}(A664Dataset::getHandle(), "${n._WordName}", ${n._Label});
lLocalResult = ${e.nameFilter(n._WordName)}->initialise();
if (${e.nameFilter(n._WordName)} != NULL)
{
if (lLocalResult != VIP_Success)
{
lResult = lLocalResult;
std::string lMessage;
lMessage.append ("Parameter: ${e.nameFilter(n._WordName)}");
lMessage.append ("was not found in A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}"); 
std::wstring lWide(lMessage.begin(), lMessage.end()); 
std::cout << lWide.c_str() <<std::endl; 
}
}else
{ 
std::string lMessage;
lMessage += "${e.nameFilter(n._WordName)} is Null "; 
lMessage += " VIP_Result = ";
lMessage += VIP_GetErrorMessage( lLocalResult );
VIP_SendHealthMessage(A664Dataset::getParentHandle(), VIP_HealthLevel_Error, lMessage.c_str());
lResult = VIP_ItemNotFound;
}
    `})}
return lResult;
        ////////////////////////end of Iteration for A664Param/A429word //////////// 
}
`)}
 ////////////////////////end Iteration forDataset////////////
 `)}
////////////////////////end Iteration for A664SubscribePort////////////



////////////////////////Iteration for A664SubscribePort////////////
${L(f,t=>`
 ////////////////////////Iteration for Dataset////////////
 ${L(t.children,a=>`
////////////////////////Iteration forWordName////////////
${L(a.children,n=>n._WordName?`
A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}_${e.nameFilter(n._WordName)}::A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}_${e.nameFilter(n._WordName)}
(VIP664_DatasetHandle aDataSetHandle, std::string aName, VIP_UInt32 aLabel )
 : A429ParaWord(aDataSetHandle, aName, aLabel)
{
 // Initialise the parameter object pointers.
//////////////////////// Iteration for A429Param ////////////
${L(n.children,r=>`
  ${e.nameFilter(r._ParamName)}= NULL;
  `)}
////////////////////////end of Iteration for A429Param ////////////
}
A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}_${e.nameFilter(n._WordName)}::~A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}_${e.nameFilter(n._WordName)}()
{
 // Delete the parameter objects.
//////////////////////// Iteration for A429Param ////////////
${L(n.children,r=>`
 if (${e.nameFilter(r._ParamName)}!= NULL)
 {
  delete ${e.nameFilter(r._ParamName)};
 }
 `)}
////////////////////////end of Iteration for A429Param ////////////
}
VIP_Result A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}_${e.nameFilter(n._WordName)}::setupParameters()
{
 VIP_Result lResult = VIP_Success;
 VIP_Result lLocalResult = VIP_Success;
 
 //////////////////////// Iteration for A429Param ////////////
 ${L(n.children,r=>{var o;const i=`
  VIP429_ParameterType ${e.nameFilter(r._ParamName)}Type{ VIP429_${r._DataFormatType} ,${r._Resolution||1},${r._SizeInBits||1},${r._BitOffset||1}
   };
  `;return r._DataFormatType==="Enumeration"?`
                ${i}
//case1 
${e.nameFilter(r._ParamName)}= new A429Enumeration<Enum${e.nameFilter(r._ParamName)}, EnumLookup${e.nameFilter(r._ParamName)}, ${((o=r.children)==null?void 0:o.length)||0}>
(getHandle(), "${r._ParamName}", ${e.nameFilter(r._ParamName)}Type); 

  lLocalResult = ${e.nameFilter(r._ParamName)}->initialise();
  if (lLocalResult != VIP_Success)
  {
  lResult = lLocalResult;
  std::string lMessage;
  lMessage.append ("Parameter: ${e.nameFilter(r._ParamName)}");
  lMessage.append ("was not found in A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}"); 
  std::wstring lWide(lMessage.begin(), lMessage.end()); 
  std::cout << lWide.c_str() <<std::endl; 
  }    
            `:r._DataFormatType==="String"?`
                ${i}
//case2 
${e.nameFilter(r._ParamName)} = new A429ArrayParameter<VIP_${e.dftMap({},r,0)}, VIP_Type_${e.dftMap({},r,0)}Array>
(getHandle(), "${r._ParamName}", ${e.nameFilter(r._ParamName)}Type);

lLocalResult = ${e.nameFilter(r._ParamName)}->initialise();
if (lLocalResult != VIP_Success)
{
lResult = lLocalResult;
std::string lMessage;
lMessage.append ("Parameter: ${e.nameFilter(r._ParamName)}");
lMessage.append ("was not found in A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}"); 
std::wstring lWide(lMessage.begin(), lMessage.end()); 
std::cout << lWide.c_str() <<std::endl; 
} 
            
            `:`
              ${i}
//case3
 ${e.nameFilter(r._ParamName)}= new A429Parameter<VIP_${e.dftMap({},r,0)}, VIP_Type_${e.dftMap({},r,0)}>
 (A429ParaWord::getHandle(), "${r._ParamName}",${e.nameFilter(r._ParamName)}Type);

 lLocalResult = ${e.nameFilter(r._ParamName)}->initialise();
 if (lLocalResult != VIP_Success)
 {
 lResult = lLocalResult;
 std::string lMessage;
 lMessage.append ("Parameter: ${e.nameFilter(r._ParamName)}");
 lMessage.append ("was not found in A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}"); 
 std::wstring lWide(lMessage.begin(), lMessage.end()); 
 std::cout << lWide.c_str() <<std::endl; 
 }
 `})}
 ////////////////////////end of Iteration for A429Param //////////// 
 return lResult;
}
`:"")}
////////////////////////end of Iteration forWordName////////////
`)}
////////////////////////end of Iteration for Dataset////////////
`)}
////////////////////////end of Iteration for A664SubscribePort///////////

// 4.X
////////////////////////Iteration for A664Port ////////////
${L(f,t=>`
 ////////////////////////Iteration for Dataset////////////
 ${L(t.children,a=>`
          ${L(a.children,n=>{var r;return n._ParamName?n._DataFormatType==="Enumeration"?`
// case 1 对于A664Param
/////////////////Iteration forA664Param with DataFormatType="Enumeration"///////////
const EnumLookup A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}::EnumLookup${e.nameFilter(n._ParamName)}[${((r=n.children)==null?void 0:r.length)||0}] =
{
/////////////Iteration for Enumeration////////////
${L(n.children,i=>`
${e.nameFilter(n._ParamName)}_${e.nameFilter(i._Value)}, "${i._Value}",
`)}
////////////End of Iteration for Enumeration////////////
};
////////////////////////end of Iteration forA664Param with DataFormatType="Enumeration"///////////
`:"":`
// case 2 对于429word
/////////////////////////Iteration for each 429word//////////////////////////////////////
${L(n.children,i=>i._DataFormatType==="Enumeration"?`
/////////////////////////////////Iteration for eachA429Parameter which dataformatTyep is Enumeration//////////////////////////////////////////////////
const EnumLookup A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}_${e.nameFilter(n._WordName)}::EnumLookup${e.nameFilter(i._ParamName)}[${i.children.length||0}] =
{
/////////////////////////Iteration for eachEnumeration//////////////////////////////////////
${L(i.children,o=>`
${e.nameFilter(i._ParamName)}_${e.nameFilter(o._Value)}, "${o._Value}",
`)}
////////////////////////////////////End of Iteration Enumeration////////////////////////////////////////////////////
};
////////////////////////////////////End of Iteration A429Parameter////////////////////////////////////////////////////
`:"")}
////////////////////////////////////End of Iteration 429word////////////////////////////////////////////////////
`})}
`)}
 ////////////////////////end of Iteration for Dataset////////////
`)}
////////////////////////end of Iteration for A664Port////////////



A664Inputs::A664Inputs(VIP_ParticipantHandle aParticipantHandle)
 : A664IOManager(aParticipantHandle)
{
 // Initialise message objects.
////////////////////////Iteration for A664SubscribePort////////////
${L(f,t=>`
 ${e.nameFilter(t._PortName)} = NULL;
 `)}
////////////////////////end of Iteration for A664SubscribePort/////
}


A664Inputs::~A664Inputs()
{
 // Delete message objects.
////////////////////////Iteration for A664SubscribePort////////////
${L(f,t=>`
 ${e.nameFilter(t._PortName)} = NULL;
 if ( ${e.nameFilter(t._PortName)}!= NULL)
 {
 delete ${e.nameFilter(t._PortName)};
 }
 `)}
////////////////////////end of Iteration for A664SubscribePort/////
 
}


VIP_Result A664Inputs::setupMessages()
{
 VIP_Result lLocalResult = VIP_Success;
 VIP_Result lResult = VIP_Success; 
////////////////////////Iteration for A664SubscribePort//////////// 
${L(f,t=>`
 ${e.nameFilter(t._PortName)} = new A664Message_${e.nameFilter(t._PortName)}(m_ParticipantHandle, "${t._PortName}",
VIP_Direction_Subscribe, VIP_QueueType_Stream, ${t._QueueLength||""}, VIP_QueueLossType_${t._QueueType||""});
 lLocalResult = ${e.nameFilter(t._PortName)}->initialise();
 if (lLocalResult == VIP_Success)
 {
  addAPeriodicMessage(${e.nameFilter(t._PortName)});
 }
 else
 {
 lResult = lLocalResult; 
 } 
 `)}
////////////////////////end of Iteration for A664SubscribePort///// 
 
 return lResult;
}



`}function yt(f){return`
#pragma once
#define __STR2__(x) #x
#define __STR1__(x) __STR2__(x)
#define __LOC__ __FILE__ "("__STR1__(__LINE__)") : Warning Msg: "
#ifndef __linux__
#include "SimInterface\\A664ArrayParameter.h" 
#include "SimInterface\\A664Parameter.h" 
#include "SimInterface\\A664IOManager.h" 
#include "SimInterface\\A664DataSet.h" 
#include "SimInterface\\A664APeriodic.h" 
#include "SimInterface\\A664Periodic.h" 
#include "SimInterface\\A664Enumeration.h" 
#include "SimInterface\\A429ParaWord.h" 
#include "SimInterface\\A429Block.h"
#include "SimInterface\\A429Parameter.h"
#else
#include "SimInterface/A664ArrayParameter.h" 
#include "SimInterface/A664Parameter.h" 
#include "SimInterface/A664IOManager.h" 
#include "SimInterface/A664DataSet.h" 
#include "SimInterface/A664APeriodic.h" 
#include "SimInterface/A664Periodic.h" 
#include "SimInterface/A664Enumeration.h" 
#include "SimInterface/A429ParaWord.h" 
#include "SimInterface/A429Block.h"
#include "SimInterface/A429Parameter.h"
#endif
#include "VIPBaseTypes.h"


/////////////////////////////////////Iteration ofeachA664PublishPort//////////////////////////////////////////////////////
${L(f,t=>`
 /////////////////////////Iteration of each A664DataSet inA664Message//////////////////////////////
 ${L(t.children,a=>`${L(a.children,n=>n._WordName?`
        class A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}_${e.nameFilter(n._WordName)} : public A429ParaWord
        {
        protected:
         VIP_Result setupParameters();
         
        public:
         // Constructor
         A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}_${e.nameFilter(n._WordName)}(VIP664_DatasetHandle aDataSetHandle, std::string
        aName, VIP_UInt32 aLabel);
         // Destructor
         virtual ~A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}_${e.nameFilter(n._WordName)}();
         
         // A429Word Parameters
         //////Iteration of each A429Param/////////
         ${L(n.children,r=>{var i;return r._DataFormatType==="Enumeration"?`
            //case1: Enumeration
 static const EnumLookup EnumLookup${e.nameFilter(r._ParamName)}[];
 enum Enum${e.nameFilter(r._ParamName)}:int
 {
 ${e.nameFilter(r._ParamName)}_VIPUndefined = 2147483647,
 //////////////////Iteration for eachA429Parameter/////////////////////////////////////
 ${L(r.children,(o,u)=>`
 ${e.nameFilter(r._ParamName)}_${e.nameFilter(o._Value)} = ${o._ID}${u>=(r.children||[]).length-1?"":","}
  `)}
 /////////////////////////End of Iteration//////////////////////////////////////
 };
 A429Enumeration<Enum${e.nameFilter(r._ParamName)}, EnumLookup${e.nameFilter(r._ParamName)}, ${((i=r.children)==null?void 0:i.length)||0}>* ${e.nameFilter(r._ParamName)};
            
            `:r._DataFormatType==="String"?`
            // case 2 :T，对于Opaque String
            A429ArrayParameter<VIP_${e.dftMap({},r,0)}, VIP_Type_${e.dftMap({},r,0)}Array>* ${e.nameFilter(r._ParamName)};
            `:`
            //case3 :A664Param，对于其他类型
            A429Parameter<VIP_${e.dftMap({},r,0)}, VIP_Type_${e.dftMap({},r,0)}>* ${e.nameFilter(r._ParamName)};
            `})}
        ////////////////////end of Iteration of each A664Param/A429Word///////////////
        //////End of Iteration of each A429Param/////////
          };
    `:"")}`)}
 //////////////////////////End of Iteration of each A664DataSet inA664Message///////////////////////////////////////
 `)}
/////////////////////////////////End of Iteration ofeach A664PublishPort////////////////////////////////////////////////////////////



/////////////////////////////////////Iteration of eachA664PublishPort//////////////////////////////////////////////////////
${L(f,t=>`
 /////////////////////////Iteration of each A664DataSet inA664Message//////////////////////////////
 ${L(t.children,a=>`
class A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)} : public A664Dataset
{
protected:
 //1)
 VIP_Result setupParameters(); 
 
public:
 //2) Constructor
 A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}(VIP664_MessageHandle aMessageHandle, std::string aName);
 //2) Destructor
 virtual ~A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}();
 //3)指针变量
 ////////////////////Iteration of each A664Param/A429Word/////////////// 
 ${L(a.children,n=>n._ParamName?n._DataFormatType==="Enumeration"?`
//case1 : A664Param，对于Enumeration
static const EnumLookup EnumLookup${e.nameFilter(n._ParamName)}[];
enum Enum${e.nameFilter(n._ParamName)}:int
{
${e.nameFilter(n._ParamName)}_VIPUndefined = 2147483647,
//////Iteration of Enumeration/////////
${L(n.children,(r,i)=>`
  ${e.nameFilter(n._ParamName)}_${e.nameFilter(r._Value)} = ${r._ID}${i>=(n.children||[]).length-1?"":","}
`)}
/////End of Iteration of Enumeration///////
};
A664Enumeration<Enum${e.nameFilter(n._ParamName)}, EnumLookup${e.nameFilter(n._ParamName)}, ${(n.children||[]).length}>* ${e.nameFilter(n._ParamName)};
      `:n._DataFormatType==="String"?`
            case 2 :A664Param，对于Opaque String
            A664ArrayParameter<VIP_${e.dftMap({},n,0)}, VIP_Type_${e.dftMap({},n,0)}Array>* ${e.nameFilter(n._ParamName)};
        `:n._DataFormatType==="Opaque"?`
            //case3 :A664Param，对于其他类型
            A664Parameter<VIP_UInt32, VIP_Type_UInt32>* ${e.nameFilter(n._ParamName)};
            `:`
          //case3 :A664Param，对于其他类型
          A664Parameter<VIP_${e.dftMap({},n,0)}, VIP_Type_${e.dftMap({},n,0)}>* ${e.nameFilter(n._ParamName)};
          `:`
          //case4 : A429Word
          A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}_${e.nameFilter(n._WordName)}* ${e.nameFilter(n._WordName)};
          `)}
 ////////////////////end of Iteration of each A664Param/A429Word///////////////
};
`)}
 //////////////////////////End of Iteration of each A664DataSet inA664Message///////////////////////////////////////
 `)}
/////////////////////////////////End of Iteration of eachA664PublishPort////////////////////////////////////////////////////////////





/////////////////////////////////Iteration of eachA664PublishPort////////////////////////////////////////////////////////////
${L(f,t=>`
class A664Message_${e.nameFilter(t._PortName)} : public A664Message, public A664APeriodic
{
protected:
 VIP_Result setupData();
public:
 A664Message_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle aParticpantHandle,
 std::string aName,
 VIP_Direction aDirection);
 virtual ~A664Message_${e.nameFilter(t._PortName)}();
 VIP_Result initialise();
/////////////////////////Iteration of each A664DataSet in A664Message//////////////////////////////
${L(t.children,a=>`
 A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}* ${e.nameFilter(a._DataSetName)};
 `)}
/////////////////////////End of Iteration of each A664DataSet inA664Message//////////////////////////////
 
};
`)}
/////////////////////////////////End of Iteration of eachA664PublishPort////////////////////////////////////////////////////////////


class A664Outputs : public A664IOManager
{
public:
 // Constructor
 A664Outputs(VIP_ParticipantHandle aParticipantHandle);
 // Destructor
 virtual ~A664Outputs();
 VIP_Result setupMessages();
 
 // A664 Messages
/////////////////////////Iteration of eachA664PublishPort//////////////////////////////
${L(f,t=>`
 A664Message_${e.nameFilter(t._PortName)}* ${e.nameFilter(t._PortName)};
 `)}
/////////////////////////End of Iteration of eachA664PublishPort////////////////////////
};
`}function bt(f){return`
#pragma once
#include "A664Outputs_CG.h"
#ifndef __linux__
#pragma comment (lib, "User32.lib")
#include <windows.h>
#endif
////////////////////////Iteration for A664PublishPort////////////
${L(f,t=>`
A664Message_${e.nameFilter(t._PortName)}::A664Message_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle aParticpantHandle,
 std::string aName,
 VIP_Direction aDirection)
 : A664Message(aParticpantHandle, aName, ${t._SizeInBytes}, aDirection)
{
 // Initialise all the member object pointers.
 /////////////////////////Iteration of each A664DataSet in A664Message//////////////////////////////
 ${L(t.children,a=>`
 ${e.nameFilter(a._DataSetName)}= NULL;
 `)}
 /////////////////////////End of Iteration of each A664DataSet inA664Message/////////////////////// 
}
`)}
////////////////////////end of Iteration ///////////////////////////



////////////////////////Iteration for A664PublishPort////////////
${L(f,t=>`
A664Message_${e.nameFilter(t._PortName)}::~A664Message_${e.nameFilter(t._PortName)}()
{
 // Delete member objects
 /////////////////////////Iteration of each A664DataSet in A664Message//////////////////////////////
 ${L(t.children,a=>`
 if ( ${e.nameFilter(a._DataSetName)} != NULL)
 {
 delete ${e.nameFilter(a._DataSetName)};
 }
 `)}
 /////////////////////////End of Iteration of each A664DataSet in A664Message/////////////////////// 
}
`)}
////////////////////////end of Iteration ///////////////////////////


////////////////////////Iteration for A664PublishPort////////////
${L(f,t=>`
VIP_Result A664Message_${e.nameFilter(t._PortName)}::initialise()
{
 VIP_Result lResult = A664Message::initialise();
 if (lResult == VIP_Success)
 {
 if (lResult == VIP_Success)
 {
 this->initialiseAPeriodic(A664Message::getHandle());
 lResult = A664Message::setDirection();
 }
 }
 return lResult;
}
`)}
////////////////////////end of Iteration //////////////////////////



////////////////////////Iteration for A664SubscribePort////////////
${L(f,t=>`
VIP_Result A664Message_${e.nameFilter(t._PortName)}::setupData()
{
 VIP_Result lResult = VIP_Success; 
 VIP_Result lLocalResult = VIP_Success; 
 ////////////////////////Iteration for Dataset////////////
 ${L(t.children,a=>`
 ${e.nameFilter(a._DataSetName)} = new A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}(A664Message::getHandle(), "${a._DataSetName}");
 
 if (${e.nameFilter(a._DataSetName)} != NULL)
 {
 lLocalResult = ${e.nameFilter(a._DataSetName)}->initialise();
 if(lLocalResult != VIP_Success)
 {
 lResult = lLocalResult;
 std::string lMessage;
 lMessage += "Parameter wasn't found in the Data Set: ";
 lMessage += "${e.nameFilter(a._DataSetName)}";
 lMessage += " VIP_Result = ";
 lMessage += VIP_GetErrorMessage( lLocalResult );
 VIP_SendHealthMessage(A664Message::getParentHandle(), VIP_HealthLevel_Error,
lMessage.c_str());
 std::wstring lWide(lMessage.begin(), lMessage.end()); 
 std::cout << lWide.c_str() << std::endl;
 }
 } 
 else
 { 
 std::string lMessage;
 lMessage += "${e.nameFilter(a._DataSetName)} is Null "; 
 lMessage += " VIP_Result = ";
 lMessage += VIP_GetErrorMessage( lLocalResult );
 VIP_SendHealthMessage(A664Message::getParentHandle(), VIP_HealthLevel_Error, lMessage.c_str());
 lResult = VIP_ItemNotFound;
 }
 `)}
 ////////////////////////End of Iteration for Dataset////////////
 return lResult;
}
`)}
////////////////////////end of Itmaineration //////////////////////



////////////////////////Iteration for A664PublishPort ////////////
${L(f,t=>`
 ////////////////////////Iteration for Dataset////////////
 ${L(t.children,a=>`
A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}::A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}(VIP664_MessageHandle
aMessageHandle, std::string aName)
 : A664Dataset(aMessageHandle, aName)
{
 // Initialise all the member object pointers.
 ////////////////////////Iteration for A664Param/A429word //////////// 
 ${L(a.children,n=>n._ParamName?`
//case 1： A664Param
${e.nameFilter(n._ParamName)} = NULL;
`:`
//case 2： A429word
${e.nameFilter(n._WordName)} = NULL;
`)}
 ////////////////////////Iteration for A664Param/A429word////////////
}
A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}::~A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}()
{
 // Delete all the member objects.
 ////////////////////////Iteration for A664Param/A429word //////////// 
 ${L(a.children,n=>n._ParamName?`
          //case 1： A664Param
          if ( ${e.nameFilter(n._ParamName)}!= NULL)
          {
          delete ${e.nameFilter(n._ParamName)};
          }
    `:`
      //case 2： A429word
      if ( ${e.nameFilter(n._WordName)}!= NULL)
      {
      delete ${e.nameFilter(n._WordName)};
      }
      `)}
 ////////////////////////end of Iteration for A664Param/A429word////////////
}
`)}
 ////////////////////////end Iteration forDataset////////////
 `)}
////////////////////////end Iteration for A664SubscribePort///////////


// 4.6
////////////////////////Iteration for A664PublishPort ////////////
${L(f,t=>`
 ////////////////////////Iteration for Dataset////////////
 ${L(t.children,a=>`
VIP_Result A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}::setupParameters()

{
//1) 
 VIP_Result lResult = VIP_Success;
 VIP_Result lLocalResult = VIP_Success;

 ////////////////////////Iteration for A664Param/A429word //////////// 
 ${L(a.children,n=>{var r;return n._ParamName?n._DataFormatType==="Enumeration"?`
            //case1 
${e.nameFilter(n._ParamName)}= new A664Enumeration<Enum${e.nameFilter(n._ParamName)}, EnumLookup${e.nameFilter(n._ParamName)}, ${((r=n.children)==null?void 0:r.length)||0}>
(A664Dataset::getHandle(), "${n._ParamName}");
 lLocalResult = ${e.nameFilter(n._ParamName)}->initialise();
 if (lLocalResult != VIP_Success)
 {
 lResult = lLocalResult;
 std::string lMessage;
 lMessage.append ("Parameter: ${e.nameFilter(n._ParamName)}");
 lMessage.append ("was not found in A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}"); 
 std::wstring lWide(lMessage.begin(), lMessage.end()); 
 std::cout << lWide.c_str() << std::endl;
 }
            `:n._DataFormatType==="String"?`
            //case2 
${e.nameFilter(n._ParamName)} = new A664ArrayParameter<VIP_${e.dftMap({},n,0)},
VIP_Type_${e.dftMap({},n,0)}Array>
(A664Dataset::getHandle(), "${n._ParamName}");

 lLocalResult = ${e.nameFilter(n._ParamName)}->initialise();
 if (lLocalResult != VIP_Success)
 {
 lResult = lLocalResult;
 std::string lMessage;
 lMessage.append ("Parameter: ${e.nameFilter(n._ParamName)}");
 lMessage.append ("was not found in A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}"); 
 std::wstring lWide(lMessage.begin(), lMessage.end()); 
 std::cout << lWide.c_str() << std::endl;
 }
            `:n._DataFormatType==="Opaque"?`
//case3
${e.nameFilter(n._ParamName)} = new A664Parameter<VIP_UInt32, VIP_Type_UInt32>
(A664Dataset::getHandle(), "${n._ParamName}");

 lLocalResult = ${e.nameFilter(n._ParamName)}->initialise();
 if (lLocalResult != VIP_Success)
 {
 lResult = lLocalResult;
 std::string lMessage;
 lMessage.append ("Parameter: ${e.nameFilter(n._ParamName)}");
 lMessage.append ("was not found in A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}"); 
 std::wstring lWide(lMessage.begin(), lMessage.end()); 
 std::cout << lWide.c_str() << std::endl;
 }
              `:`
//case3
${e.nameFilter(n._ParamName)} = new A664Parameter<VIP_${e.dftMap({},n,0)}, VIP_Type_${e.dftMap({},n,0)}>
(A664Dataset::getHandle(), "${n._ParamName}");

 lLocalResult = ${e.nameFilter(n._ParamName)}->initialise();
 if (lLocalResult != VIP_Success)
 {
 lResult = lLocalResult;
 std::string lMessage;
 lMessage.append ("Parameter: ${e.nameFilter(n._ParamName)}");
 lMessage.append ("was not found in A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}"); 
 std::wstring lWide(lMessage.begin(), lMessage.end()); 
 std::cout << lWide.c_str() << std::endl;
 }
              `:`
//case4
${e.nameFilter(n._WordName)} = new A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}_${e.nameFilter(n._WordName)}(A664Dataset::getHandle(), "${n._WordName}", ${n._Label});
lLocalResult = ${e.nameFilter(n._WordName)}->initialise();
if (${e.nameFilter(n._WordName)} != NULL)
{
if (lLocalResult != VIP_Success)
{
lResult = lLocalResult;
std::string lMessage;
lMessage.append ("Parameter: ${e.nameFilter(n._WordName)}");
lMessage.append ("was not found in A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}"); 
std::wstring lWide(lMessage.begin(), lMessage.end()); 
std::cout << lWide.c_str() << std::endl;
}
}else
{ 
std::string lMessage;
lMessage += "${e.nameFilter(n._WordName)} is Null "; 
lMessage += " VIP_Result = ";
lMessage += VIP_GetErrorMessage( lLocalResult );
VIP_SendHealthMessage(A664Dataset::getParentHandle(), VIP_HealthLevel_Error, lMessage.c_str());
lResult = VIP_ItemNotFound;
}
          `})}
return lResult;
 ////////////////////////end of Iteration for A664Param/A429word //////////// 
}
`)}
 ////////////////////////end Iteration forDataset////////////
 `)}
////////////////////////end Iteration for A664PublishPort //////////


// 4.7
////////////////////////Iteration for A664PublishPort ////////////
${L(f,t=>`
 ////////////////////////Iteration for Dataset////////////
 ${L(t.children,a=>`
////////////////////////Iteration forWordName////////////
${L(a.children,n=>n._WordName?`
A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}_${e.nameFilter(n._WordName)}::A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}_${e.nameFilter(n._WordName)}
(VIP664_DatasetHandle aDataSetHandle, std::string aName, VIP_UInt32 aLabel )
 : A429ParaWord(aDataSetHandle, aName, aLabel)
{
 // Initialise the parameter object pointers.
//////////////////////// Iteration for A429Param ////////////
${L(n.children,r=>`
 ${e.nameFilter(r._ParamName)}= NULL;
 `)}
////////////////////////end of Iteration for A429Param ////////////
}


A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}_${e.nameFilter(n._WordName)}::~A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}_${e.nameFilter(n._WordName)}()
{
 // Delete the parameter objects.
//////////////////////// Iteration for A429Param ////////////
${L(n.children,r=>`
 if (${e.nameFilter(r._ParamName)}!= NULL)
 {
 delete ${e.nameFilter(r._ParamName)};
 }
 `)}
////////////////////////end of Iteration for A429Param ////////////
}

VIP_Result A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}_${e.nameFilter(n._WordName)}::setupParameters()
{
 VIP_Result lResult = VIP_Success;
 VIP_Result lLocalResult = VIP_Success;
 
 //////////////////////// Iteration for A429Param ////////////
 ${L(n.children,r=>{var o;const i=`
  VIP429_ParameterType ${e.nameFilter(r._ParamName)}Type{ VIP429_${r._DataFormatType} ,${r._Resolution||1},${r._SizeInBits||1},${r._BitOffset||1}
  };
  `;return r._DataFormatType==="Enumeration"?`
                    ${i}
                    //case1 
${e.nameFilter(r._ParamName)} = new A429Enumeration<Enum${e.nameFilter(r._ParamName)}, EnumLookup${e.nameFilter(r._ParamName)}, ${((o=r.children)==null?void 0:o.length)||0}>
(getHandle(), "${r._ParamName}", ${e.nameFilter(r._ParamName)}Type); 

 lLocalResult = ${e.nameFilter(r._ParamName)}->initialise();
 if (lLocalResult != VIP_Success)
 {
 lResult = lLocalResult;
 std::string lMessage;
 lMessage.append ("Parameter: ${e.nameFilter(r._ParamName)}");
 lMessage.append ("was not found in A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}"); 
 std::wstring lWide(lMessage.begin(), lMessage.end()); 
 std::cout << lWide.c_str() << std::endl;
 }
                    `:r._DataFormatType==="String"?`
                    ${i}
//case2 
${e.nameFilter(r._ParamName)}= new A429ArrayParameter<VIP_${e.dftMap({},r,0)}, VIP_Type_${e.dftMap({},r,0)}Array>
(getHandle(), "${r._ParamName}", ${e.nameFilter(r._ParamName)}Type); 

lLocalResult = ${e.nameFilter(r._ParamName)}->initialise();
if (lLocalResult != VIP_Success)
{
lResult = lLocalResult;
std::string lMessage;
lMessage.append ("Parameter: ${e.nameFilter(r._ParamName)}");
lMessage.append ("was not found in A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}"); 
std::wstring lWide(lMessage.begin(), lMessage.end()); 
std::cout << lWide.c_str() << std::endl;
}
`:`
                    ${i}
                    //case3
 ${e.nameFilter(r._ParamName)}= new A429Parameter<VIP_${e.dftMap({},r,0)}, VIP_Type_${e.dftMap({},r,0)}>
 (A429ParaWord::getHandle(), "${r._ParamName}", ${e.nameFilter(r._ParamName)}Type);

 lLocalResult = ${e.nameFilter(r._ParamName)}->initialise();
 if (lLocalResult != VIP_Success)
 {
 lResult = lLocalResult;
 std::string lMessage;
 lMessage.append ("Parameter: ${e.nameFilter(r._ParamName)}");
 lMessage.append ("was not found in A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}"); 
 std::wstring lWide(lMessage.begin(), lMessage.end()); 
 std::cout << lWide.c_str() << std::endl;
 }
                    `})}
 ////////////////////////end of Iteration for A429Param //////////// 
 
 return lResult;
}
`:"")}
////////////////////////end of Iteration forWordName////////////
`)}
////////////////////////end of Iteration for Dataset////////////
`)}
////////////////////////end of Iteration for A664SubscribePort/////////


// 4.X
////////////////////////Iteration for A664Port ////////////
${L(f,t=>`
 ////////////////////////Iteration for Dataset////////////
 ${L(t.children,a=>`
${L(a.children,n=>{var r;return n._ParamName?n._DataFormatType==="Enumeration"?`
// case 1 对于A664Param
/////////////////Iteration forA664Param with DataFormatType="Enumeration"///////////
const EnumLookup A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}::EnumLookup${e.nameFilter(n._ParamName)}[${((r=n.children)==null?void 0:r.length)||0}] =
{
/////////////Iteration for Enumeration////////////
${L(n.children,i=>`
  ${e.nameFilter(n._ParamName)}_${e.nameFilter(i._Value)}, "${i._Value}",
`)}
////////////End of Iteration for Enumeration////////////
};
////////////////////////end of Iteration forA664Param with DataFormatType="Enumeration"///////////
`:"":`
// case 2 对于429word
/////////////////////////Iteration for each 429word//////////////////////////////////////
${L(n.children,i=>{var o;return i._DataFormatType==="Enumeration"?`
/////////////////////////////////Iteration for eachA429Parameter which dataformatTyep is Enumeration//////////////////////////////////////////////////

const EnumLookup A664Message_${e.nameFilter(t._PortName)}_${e.nameFilter(a._DataSetName)}_${e.nameFilter(n._WordName)}::EnumLookup${e.nameFilter(i._ParamName)}[${((o=i.children)==null?void 0:o.length)||0}] =
{
/////////////////////////Iteration for eachEnumeration//////////////////////////////////////
${L(i.children,u=>`
  ${e.nameFilter(i._ParamName)}_${e.nameFilter(u._Value)}, "${u._Value}",
`)}
////////////////////////////////////End of Iteration Enumeration////////////////////////////////////////////////////
};
////////////////////////////////////End of Iteration A429Parameter////////////////////////////////////////////////////
`:""})}
////////////////////////////////////End of Iteration 429word////////////////////////////////////////////////////          
`})}
`)}
 ////////////////////////end of Iteration for Dataset////////////
`)}
////////////////////////end of Iteration for A664Port////////////


A664Outputs::A664Outputs(VIP_ParticipantHandle aParticipantHandle)
 : A664IOManager(aParticipantHandle)
{
 // Initialise message objects.
////////////////////////Iteration for A664PublishPort ////////////
${L(f,t=>`
 ${e.nameFilter(t._PortName)} = NULL;
`)}

////////////////////////end of Iteration for A664PublishPort /////
}



A664Outputs::~A664Outputs()
{
 // Delete message objects.
////////////////////////Iteration for A664PublishPort////////////
${L(f,t=>`
 ${e.nameFilter(t._PortName)} = NULL;
 if ( ${e.nameFilter(t._PortName)}!= NULL)
 {
 delete ${e.nameFilter(t._PortName)};
 }
 `)}
 ////////////////////////end of Iteration for A664PublishPort/////
}


VIP_Result A664Outputs::setupMessages()
{
 VIP_Result lLocalResult = VIP_Success;
 VIP_Result lResult = VIP_Success; 
////////////////////////Iteration for A664SubscribePort//////////// 
${L(f,t=>`
 ${e.nameFilter(t._PortName)} = new A664Message_${e.nameFilter(t._PortName)}(m_ParticipantHandle, "${t._PortName}",
VIP_Direction_Publish);
 lLocalResult = ${e.nameFilter(t._PortName)}->initialise();
 if (lLocalResult == VIP_Success)
 {
  addAPeriodicMessage(${e.nameFilter(t._PortName)});
 }
 else
 {
 lResult = lLocalResult; 
 } 
 `)}
////////////////////////end of Iteration for A664PublishPort///// 
 
 return lResult;
}
`}function Mt(f){return`
#pragma once
#ifndef __linux__
#include "SimInterface\\A825IOManager.h"
#else
#include "SimInterface/A825IOManager.h"
#endif
#include "A825MsgData_CG.h"

${L(f,t=>`class A825Bus_${e.nameFilter(t._PortName)} : public A825Bus
{
protected:
    VIP_Result setupMessage();
public:
    // Constructor.
    A825Bus_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle aParticipantHandle,
                      std::string aPortName,
                      VIP_Direction aDirection, VIP_UInt16 aQueueLength, 
VIP_QueueLossType aQueueLossType);
    // Destructor.
    virtual ~A825Bus_${e.nameFilter(t._PortName)}();


    // A825 Message Objects.
    ${L(t.children,a=>`A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}* ${e.nameFilter(a._MsgName)};
`)}
};
`)}

${L(f,t=>`class A825Inputs: public A825DataIOManager
{
public:
   A825Inputs(VIP_ParticipantHandle aParticipantHandle);

    // Destructor.
    virtual ~A825Inputs();

    VIP_Result setupIO();

    // A825 Bus objects with the port name.
    A825Bus_${e.nameFilter(t._PortName)}* ${e.nameFilter(t._PortName)};

};
`)}
`}function Vt(f){return`#pragma once
#include "A825Inputs_CG.h"

${L(f,t=>`A825Bus_${e.nameFilter(t._PortName)}::A825Bus_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle aParticipantHandle,
                std::string aPortName,
                VIP_Direction aDirection, VIP_UInt16 aQueueLength, 
VIP_QueueLossType aQueueLossType)
    :A825Bus(aParticipantHandle, aPortName, aDirection, aQueueLength, aQueueLossType)
{
    // Initialise word objects
    ${L(t.children,a=>`${e.nameFilter(a._MsgName)} = NULL;
`)}
}
`)}

  ${L(f,t=>L(t.children,a=>`A825Bus_${e.nameFilter(t._PortName)}::~A825Bus_${e.nameFilter(t._PortName)}()
{
    // Delete word objects
    if (${e.nameFilter(a._MsgName)} != NULL)
    {
        delete ${e.nameFilter(a._MsgName)};
    }
}
`))}


  ${L(f,t=>`VIP_Result A825Bus_${e.nameFilter(t._PortName)}::setupMessage()
{
    VIP_Result lResult = VIP_Success;
    VIP_Result lLocalResult = VIP_Success;

    ${L(t.children,a=>`// Create labeled Word
    ${e.nameFilter(a._MsgName)} = new A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}(getHandle(), "${e.nameFilter(a._MsgName)}", VIP_Direction_Publish);
    lLocalResult = ${e.nameFilter(a._MsgName)}->initialise();
    if (lLocalResult == VIP_Success)
    {
        ${e.nameFilter(a._MsgName)}->initialiseAPeriodic(getHandle(), ${e.nameFilter(a._MsgName)}->getHandle());
        addAPeriodicMsg(${e.nameFilter(a._MsgName)});
    }
    else
    {
        lResult = lLocalResult;
    }
`)}
    
    return lResult;
}
`)}

  ${L(f,t=>`A825Inputs::A825Inputs(VIP_ParticipantHandle aParticipantHandle)
    : A825DataIOManager(aParticipantHandle)
{
    // Initialise buses.
    ${e.nameFilter(t._PortName)} = NULL;
   
}
`)}

  ${L(f,t=>`A825Inputs::~A825Inputs()
{
    // Delete buses
    if (${e.nameFilter(t._PortName)} != NULL)
    {
        delete ${e.nameFilter(t._PortName)};
    }
    
}
`)}


${L(f,t=>`VIP_Result A825Inputs::setupIO()
{
    VIP_Result lResult = VIP_Success;
    VIP_Result lLocalResult = VIP_Success;

    // Setup buses
    ${e.nameFilter(t._PortName)} = new A825Bus_${e.nameFilter(t._PortName)}(m_participantHandle, "${t._PortName}", VIP_Direction_Subscribe, 
    ${t._QueueLength}, VIP_QueueLossType_Lossy); //此处<origin PortName>为PortName原始值，如EICU.po429_EICU_B
    // Initialise bus.
    lLocalResult = ${e.nameFilter(t._PortName)}->initialise();

    if (lLocalResult == VIP_Success)
    {
        // if successful add the bus.
        addBus(${e.nameFilter(t._PortName)});
    }
    else
    {
        lResult = lLocalResult;
    }
    
    return lResult;
}
`)}

`}function Rt(f){return`#pragma once
#ifndef __linux__
#include "SimInterface\\A825IOManager.h"
#else
#include "SimInterface/A825IOManager.h"
#endif
#include "A825MsgData_CG.h"

${L(f,t=>`class A825Bus_${e.nameFilter(t._PortName)} : public A825Bus
{
protected:
    VIP_Result setupMessage();
public:
    // Constructor.
    A825Bus_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle aParticipantHandle,
                      std::string aPortName,
                      VIP_Direction aDirection);
    // Destructor.
    virtual ~A825Bus_${e.nameFilter(t._PortName)}();


    // A825 Message Objects.
    ${L(t.children,a=>`A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}* ${e.nameFilter(a._MsgName)};
`)}
};
`)}


  ${L(f,t=>` class A825Outputs : public A825DataIOManager
{
public:
       A825Outputs(VIP_ParticipantHandle aParticipantHandle);
       virtual ~A825Outputs();
       VIP_Result setupIO();
       A825Bus_${e.nameFilter(t._PortName)}* ${e.nameFilter(t._PortName)};
};
`)}
 

`}function wt(f){return`#pragma once
#include "A825Outputs_CG.h"
// 4.2
${L(f,t=>`A825Bus_${e.nameFilter(t._PortName)}::A825Bus_${e.nameFilter(t._PortName)}(VIP_ParticipantHandle aParticipantHandle,
                std::string aPortName,
                VIP_Direction aDirection)
    : A825Bus(aParticipantHandle, aPortName, aDirection)
{
    // Initialise word objects
    ${L(t.children,a=>`${e.nameFilter(a._MsgName)} = NULL;
`)}
}
`)}
// 4.3
  ${L(f,t=>`A825Bus_${e.nameFilter(t._PortName)}::~A825Bus_${e.nameFilter(t._PortName)}()
{
    // Delete word objects
    ${L(t.children,a=>`if (${e.nameFilter(a._MsgName)} != NULL)
    {
        delete ${e.nameFilter(a._MsgName)};
    }
      `)}
}
`)}
// 4.4
${L(f,t=>`VIP_Result A825Bus_${e.nameFilter(t._PortName)}::setupMessage()
{
    VIP_Result lResult = VIP_Success;
    VIP_Result lLocalResult = VIP_Success;
    // Create Message
    ${L(t.children,a=>`${e.nameFilter(a._MsgName)} = new A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}(getHandle(), "${e.nameFilter(a._MsgName)}", VIP_Direction_Publish);
    lLocalResult = ${e.nameFilter(a._MsgName)}->initialise();
    if (lLocalResult == VIP_Success)
    {
        ${e.nameFilter(a._MsgName)}->initialiseAPeriodic(getHandle(), ${e.nameFilter(a._MsgName)}->getHandle());
        addAPeriodicMsg(${e.nameFilter(a._MsgName)});
    }
    else
    {
        lResult = lLocalResult;
    }
      `)}
    
    return lResult;
}
`)}
// 4.5
${L(f,t=>`A825Outputs::A825Outputs(VIP_ParticipantHandle aParticipantHandle)
    : A825DataIOManager(aParticipantHandle)
{
    // Initialise buses.
    ${e.nameFilter(t._PortName)} = NULL;

}
        `)}
      
// 4.6
${L(f,t=>`A825Outputs::~A825Outputs()
{
    // Delete buses
    if (${e.nameFilter(t._PortName)} != NULL)
    {
        delete ${e.nameFilter(t._PortName)};
    }
}
        `)}
// 4.7
${L(f,t=>`VIP_Result A825Outputs::setupIO()
{
    VIP_Result lResult = VIP_Success;
    VIP_Result lLocalResult = VIP_Success;

    // Setup buses
    ${e.nameFilter(t._PortName)} = new A825Bus_${e.nameFilter(t._PortName)}(m_participantHandle, "${t._PortName}", VIP_Direction_Publish); //此处<origin PortName>为PortName原始值，如EICU.po429_EICU_B
    // Initialise bus.
    lLocalResult = ${e.nameFilter(t._PortName)}->initialise();

    if (lLocalResult == VIP_Success)
    {
        // if successful add the bus.
        addBus(${e.nameFilter(t._PortName)});
    }
    else
    {
        lResult = lLocalResult;
    }
    
    return lResult;
}
    `)}


`}function Dt(f){return`#pragma once
#define __STR2__(x) #x
#define __STR1__(x) __STR2__(x)
#define __LOC__ __FILE__ "("__STR1__(__LINE__)") : Warning Msg: "
#ifndef __linux__
#include "SimInterface\\A825Message.h"
#include "SimInterface\\Periodic.h"
#include "SimInterface\\A825APeriodic.h"
#include "SimInterface\\A825Parameter.h"
#include "SimInterface\\A825Enumeration.h"
#else
#include "SimInterface/Periodic.h"
#include "SimInterface/A825APeriodic.h"
#include "SimInterface/A825Message.h"
#include "SimInterface/A825Parameter.h"
#include "SimInterface/A825Enumeration.h"
#endif

${L(f,t=>L(t.children,a=>`class A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)} : public A825Message, public A825APeriodic{
protected:
    VIP_Result setupParameters();
public:
    A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}(VIP825_BusHandle aBusHandle, std::string aWordName, VIP_Direction aDirection);
    virtual ~A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}();

${L(a.children,n=>{var r;return n._WordName?`A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}_${e.nameFilter(n._WordName)}* ${e.nameFilter(n._WordName)};
`:n._DataFormatType==="Enumeration"?`
          static const EnumLookup EnumLookup${e.nameFilter(n._ParamName)}[];
          enum Enum${e.nameFilter(n._ParamName)}:int
          {
              ${e.nameFilter(n._ParamName)}_VIPUndefined = 2147483647,
              ${((n==null?void 0:n.children)||[]).map((i,o)=>`
                ${e.nameFilter(n._ParamName)}_${e.nameFilter(i._Value)} = ${i._ID}${o>=(n.children||[]).length-1?"":","}
                `).join("")}
          };
          A825Enumeration<Enum${e.nameFilter(n._ParamName)}, EnumLookup${e.nameFilter(n._ParamName)}, ${((r=n.children)==null?void 0:r.length)||0}>* ${e.nameFilter(n._ParamName)};
        `:`A825Parameter<VIP_${e.transfor825Map({},n,0)}, VIP_Type_${e.transfor825Map({},n,0)}>* ${e.nameFilter(n._ParamName)};
`})}
};
`))}

${L(f,t=>L(t.children,a=>L(a.children,n=>n._WordName?`class A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}_${e.nameFilter(n._WordName)} ： public A429ParaWord
{
protected:
    VIP_Result setupParameters();
public:
    A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}_${e.nameFilter(n._WordName)}(VIP825_MessageHandle aMessageHandle, std::string aName, VIP_UInt32 aLabel);
    virtual ~A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}_${e.nameFilter(n._WordName)}();

    ${L(n.children,r=>{var i;return r._DataFormatType==="String"?`A429ArrayParameter<VIP_${e.transfor825Map({},r,0)}, VIP_Type_${e.transfor825Map({},r,0)}Array>* ${e.nameFilter(r._ParamName)}; 
`:r._DataFormatType==="Enumeration"?`enum Enum${e.nameFilter(r._ParamName)}:int { 
${e.nameFilter(r._ParamName)}_VIPUndefined = 2147483647, 
//////////////////Iteration for eachA429Parameter///////////////////////////////////// 
 ${L(r.children,(o,u)=>`${e.nameFilter(r._ParamName)}_${e.nameFilter(o._Value)} = ${o._ID}${u>=(r.children||[]).length-1?"":","}
`)}
/////////////////////////End of Iteration////////////////////////////////////// 
}; 
A429Enumeration<Enum${e.nameFilter(r._ParamName)}, EnumLookup${e.nameFilter(r._ParamName)}, ${((i=r.children)==null?void 0:i.length)||0}>* ${e.nameFilter(r._ParamName)}; 
`:`A429Parameter<VIP_${e.transfor825Map({},r,0)}, VIP_Type_${e.transfor825Map({},r,0)}>* ${e.nameFilter(r._ParamName)};
`})}
}
`:"")))}

  `}function vt(f){return`#pragma once

#define __STR2__(x) #x
#define __STR1__(x) __STR2__(x)
#define __LOC__ __FILE__ "("__STR1__(__LINE__)") : Warning Msg: "

#include "A825MsgData_CG.h"
#ifndef __linux__
#pragma comment (lib, "User32.lib")
#include <windows.h>
#endif
// 5.2
${L(f,t=>L(t.children,a=>`A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}::A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}(VIP825_BusHandle aBusHandle, std::string aWordName, VIP_Direction aDirection)
    :A825Message(aBusHandle, aWordName, aDirection)
{
    // Initialise Parameters.
    ${L(a.children,n=>`${e.nameFilter(n._ParamName)}= NULL;
`)}
    
}
`))}

// 5.3
  ${L(f,t=>L(t.children,a=>` A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}::~A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}()
{
    // Delete Parameters.
     ${L(a.children,n=>`if (${e.nameFilter(n._ParamName)} != NULL)
    {
        delete ${e.nameFilter(n._ParamName)};
    }
        `)}
}
`))}
 
// 5.4
${L(f,(t,a)=>L(t.children,(n,r)=>`VIP_Result A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(n._MsgName)}::setupParameters()
{
    VIP_Result lResult = VIP_Success;
    VIP_Result lLocalResult = VIP_Success;
    VIP825_ParameterType paramType;
///////////////////////////////////////////////////////////////////////////////////
     ${L(n.children,i=>{var u;let o=null;return i._DataFormatType==="Enumeration"?o=`paramType.DataFormat = VIP825_ENUM;
${e.nameFilter(i._ParamName)}= new A825Enumeration<Enum${e.nameFilter(i._ParamName)}, EnumLookup${e.nameFilter(i._ParamName)}, ${((u=i.children)==null?void 0:u.length)||0}>(getHandle(), "${i._ParamName}");
`:o=`paramType.DataFormat = VIP825_${e.transfor825Map(t,i,r,a)}; 
        paramType.BitOffset = ${i._BitOffset};
        paramType.SignificantBits = ${i._SizeInBits};

        //对于 Discrete UBN BCD BNR
        ${e.nameFilter(i._ParamName)} = new A825Parameter<VIP_${e.transfor825Map(t,i,r,a)}, VIP_Type_${e.transfor825Map(t,i,r,a)}>(getHandle(), "${e.nameFilter(i._ParamName)}");
`,`
        ${o}
        if (${e.nameFilter(i._ParamName)}!= NULL)
        {
            lLocalResult = ${e.nameFilter(i._ParamName)}->initialise();
        }
        else
        {
            lLocalResult = VIP_NullParameter;
        }

        if( lLocalResult != VIP_Success)
        {
            lResult = lLocalResult;
            std::string lMessage;
            lMessage.append ("Parameter: ${e.nameFilter(i._ParamName)}");
            lMessage.append ("was not found in A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(n._MsgName)}");            
            std::wstring lWide(lMessage.begin(), lMessage.end());            
            std::cout << lWide.c_str() <<std::endl;
        }
      `})}
////////////////////////////////////////////////////////////////////////////////////////
   return lResult;
}
`))}
  
// 5.5
${L(f,t=>L(t.children,a=>L(a.children,n=>n._WordName?`
A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}_${e.nameFilter(n._WordName)}::A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}_${e.nameFilter(n._WordName)}
(VIP825_MessageHandle aMessageHandle, std::string aName, VIP_UInt32 aLabel ) 
: A429ParaWord(aMessageHandle, aName, aLabel) 
{ // Initialise the parameter object pointers. 
${L(n.children,r=>`${e.nameFilter(r._ParamName)}= NULL; 
`)}
}
A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}_${e.nameFilter(n._WordName)}::~A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}_${e.nameFilter(n._WordName)}() 
{ 
// Delete the parameter objects. 
${L(n.children,r=>`if (${e.nameFilter(r._ParamName)}!= NULL) {
 delete ${e.nameFilter(r._ParamName)}; 
}
`)}
} 
VIP_Result A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}_${e.nameFilter(n._WordName)}::setupParameters() 
{ 
VIP_Result lResult = VIP_Success; 
VIP_Result lLocalResult = VIP_Success; 
${L(n.children,r=>{var o;const i=`VIP429_ParameterType Type{ VIP_${e.transfor825Map({},r,0)} ,${r._Resolution||1},${r._SizeInBits||1}, ${r._BitOffset||1}}; 
`;return r._DataFormatType==="Enumeration"?`${i}//case1
${e.nameFilter(r._ParamName)} = new A429Enumeration<Enum${e.nameFilter(r._ParamName)}, EnumLookup${e.nameFilter(r._ParamName)}, ${((o=r.children)==null?void 0:o.length)||0}> (getHandle(), "${r._ParamName}", ${e.nameFilter(r._ParamName)}Type);
lLocalResult = ${e.nameFilter(r._ParamName)}->initialise(); 
if (lLocalResult != VIP_Success) 
{ 
lResult = lLocalResult; 
std::string lMessage; 
lMessage.append ("Parameter: ${e.nameFilter(r._ParamName)}"); 
lMessage.append ("was not found in A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}"); 
std::wstring lWide(lMessage.begin(), lMessage.end()); 
MessageBoxW(NULL, lWide.c_str(), NULL, NULL); 
}
`:r._DataFormatType==="String"?`${i}//case2 
${e.nameFilter(r._ParamName)} = new A429ArrayParameter<VIP_${e.transfor825Map({},r,0)}>, VIP_Type_${e.transfor825Map({},r,0)}Array> (getHandle(), "${r._ParamName}", ${e.nameFilter(r._ParamName)}Type);
lLocalResult = ${e.nameFilter(r._ParamName)}->initialise(); 
if (lLocalResult != VIP_Success) 
{ 
lResult = lLocalResult; 
std::string lMessage; 
lMessage.append ("Parameter: ${e.nameFilter(r._ParamName)}"); 
lMessage.append ("was not found in A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}"); 
std::wstring lWide(lMessage.begin(), lMessage.end()); 
MessageBoxW(NULL, lWide.c_str(), NULL, NULL); 
}
`:`${i}//case3
${e.nameFilter(r._ParamName)} = new A429Parameter<VIP_${e.transfor825Map({},r,0)}>, VIP_Type_${e.transfor825Map({},r,0)}> (A429ParaWord::getHandle(), "${r._ParamName}", ${e.nameFilter(r._ParamName)}Type);
lLocalResult = ${e.nameFilter(r._ParamName)}->initialise(); 
if (lLocalResult != VIP_Success) 
{ 
lResult = lLocalResult; 
std::string lMessage; 
lMessage.append ("Parameter: ${e.nameFilter(r._ParamName)}");
lMessage.append ("was not found in A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}");
std::wstring lWide(lMessage.begin(), lMessage.end()); 
MessageBoxW(NULL, lWide.c_str(), NULL, NULL); 
}
`})}
return lResult; } 
`:"")))}

// 5.6
${L(f,t=>L(t.children,a=>L(a.children,n=>{var r;return n._ParamName?n._DataFormatType==="Enumeration"?`//case 1 对于A664Param 
const EnumLookup A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}::EnumLookup${e.nameFilter(n._ParamName)}[${((r=n.children)==null?void 0:r.length)||0}] = 
{ 
${L(n.children,i=>`${e.nameFilter(n._ParamName)}_${e.nameFilter(i._Value)}, "${i._Value}",
`)}
}; 
`:"":L(n.children,i=>{var o;return`const EnumLookup A825Bus_${e.nameFilter(t._BusName)}_${e.nameFilter(a._MsgName)}_${e.nameFilter(i._WordName)}::EnumLookup${e.nameFilter(i._ParamName)}[${((o=i.children)==null?void 0:o.length)||0}] = 
{ 
${L(i.children,u=>`${e.nameFilter(i._ParamName)}_${e.nameFilter(u._Value)}, "${u._Value}",
`)}
}; 
`})})))}


  `}function Lt(f){let t="",a=!1;for(let n=0;n<f.length;n++)f.slice(n,n+2)==="/*"&&!a?(a=!0,n++):f.slice(n,n+2)==="*/"&&a?(a=!1,n++):f.slice(n,n+2)==="//"?n=f.indexOf(`
`,n)-1:a||(t+=f[n]);return t}function kt(f){const t=Lt(f);let a=0,n="";const r=["if","else","for","while","do","switch","case"],i=t.split(`
`);for(let o=0;o<i.length;o++){const u=i[o].trim();u!==""&&(u.slice(0,2)==="}"&&a>0&&a--,r.includes(u.split(" ")[0])?(n+="  ".repeat(a)+u+`
`,a++):n+="  ".repeat(a)+u+`
`)}return n}async function Et(f,t){const a=await f.createWritable();await a.write(t),await a.close()}function Bt(f,t,a,n={},r){if(f.key==="-1")return;const i=new Be,o=i.file;i.__proto__.file=function(u,d,g){if(typeof d=="string"){const F=u.includes(".cpp")||u.includes(".h");return o.call(this,u,F?kt(d):d,g)}return o.call(this,...arguments)},i.loadAsync(t).then(()=>{const{AnalogPublishPort:u,AnalogSubscribePort:d,DiscretePublishPort:g,A429PublishPort:F,A429SubscribePort:A,DiscreteSubscribePort:N,NonProtocolPublishPort:m,NonProtocolSubscribePort:I,sub_Protocals:c,pub_Protocals:p,totalPubAndSub:_,hasPublish:$,hasSubscribe:y,A664SubscribePort:b,A664PublishPort:M,A825PublishPort:E,A825SubscribePort:O}=We(f),W=ze(f,a);if(_.includes("Discrete")){if(g.length){const w=Ue(g),l=je(g);i.file("DiscreteOutputs_CG.h",w),i.file("DiscreteOutputs_CG.cpp",l)}if(N.length){const w=Ge(N),l=Ze(N);i.file("DiscreteInputs_CG.h",w),i.file("DiscreteInputs_CG.cpp",l)}}if(_.includes("Analog")){if(d.length){const w=Qe(d),l=qe(d);i.file("AnalogInputs_CG.h",w),i.file("AnalogInputs_CG.cpp",l)}if(u.length){const w=Ke(u),l=Xe(u);i.file("AnalogOutputs_CG.h",w),i.file("AnalogOutputs_CG.cpp",l)}}if(_.includes("A429")){const w=_t([...A,...F]),l=dt([...A,...F]);if(i.file("A429WordData_CG.h",w),i.file("A429WordData_CG.cpp",l),A.length){const x=ft(A),X=ht(A);i.file("A429Inputs_CG.h",x),i.file("A429Inputs_CG.cpp",X)}if(F.length){const x=pt(F),X=Pt(F);i.file("A429Outputs_CG.h",x),i.file("A429Outputs_CG.cpp",X)}}if(_.includes("NPD")){if(I.length){const w=gt(I),l=$t(I);i.file("NPDInputs_CG.h",w),i.file("NPDInputs_CG.cpp",l)}if(m.length){const w=Nt(m),l=At(m);i.file("NPDOutputs_CG.h",w),i.file("NPDOutputs_CG.cpp",l)}}if(_.includes("A664")){if(b.length){const w=Ft(b);i.file("A664Inputs_CG.h",w);const l=St(b);i.file("A664Inputs_CG.cpp",l)}if(M.length){const w=yt(M);i.file("A664Outputs_CG.h",w);const l=bt(M);i.file("A664Outputs_CG.cpp",l)}}if(_.includes("A825")){const w=Dt([...O,...E]),l=vt([...O,...E]);if(i.file("A825MsgData_CG.h",w),i.file("A825MsgData_CG.cpp",l),O.length){const x=Mt(O);i.file("A825Inputs_CG.h",x);const X=Vt(O);i.file("A825Inputs_CG.cpp",X)}if(E.length){const x=Rt(E);i.file("A825Outputs_CG.h",x);const X=wt(E);i.file("A825Outputs_CG.cpp",X)}}const C=Ye(),G=it(f._SimulationName,n.modelName,n.mapping,f.language===void 0?1:f.language),J=st($,y),S=lt($,y,f._SimulationName);if(i.file("Simulation.h",C),i.file("Simulation.cpp",G),i.file("SimulationBase.h",J),i.file("SimulationBase.cpp",S),c.length){const w=ot(c),l=ut(c);i.file("SimulationInputs_CG.h",w),i.file("SimulationInputs_CG.cpp",l)}if(p.length){const w=ct(p),l=mt(p);i.file("SimulationOutputs_CG.h",w),i.file("SimulationOutputs_CG.cpp",l)}if(i.file("Main_CG.cpp",W),r)return r(i);i.generateAsync({type:"blob"}).then(w=>{const l=window.showSaveFilePicker,x=`Cplus_${f._SimulationName}_Simshell.zip`;l?l({suggestedName:x,types:[{accept:{"application/zip":[".zip"]}}]}).then(X=>{Et(X,w)}):Te.saveAs(w,x)})})}function Tt(f){return Ie.post("/VIPSystem/api/RT/create_task",f)}function Ht(){return Ie.get("/VIPSystem/api/RT/rt_task_list")}const Wt=f=>Ie.post("/VIPSystem/api/RT/gen_code",f,{headers:{"Content-Type":"multipart/form-data"}}),zt=f=>Ie.post("/VIPSystem/api/RT/gen_so_code",f,{headers:{"Content-Type":"multipart/form-data"}});function Ut(f){return Ie.post("/VIPSystem/api/RT/get_task_info",f)}function jt(f){return new Promise(t=>{Ie.get(`/VIPSystem/api/RT/download_file?path=${f}`).then(t)})}const Gt=f=>Ie.post("/VIPSystem/api/RT/distribute",f,{headers:{"Content-Type":"multipart/form-data"}}),Zt=f=>Ie.post("/VIPSystem/api/RT/compile_code",f,{headers:{"Content-Type":"multipart/form-data"}});export{_t as A,zt as B,Bt as C,Ge as D,Zt as E,Te as F,Ht as G,Gt as H,Be as J,Nt as N,dt as a,ft as b,ht as c,pt as d,L as e,Pt as f,Ze as g,Ue as h,je as i,Qe as j,qe as k,We as l,Ke as m,Xe as n,Ft as o,St as p,yt as q,bt as r,At as s,gt as t,$t as u,ye as v,Ut as w,jt as x,Tt as y,Wt as z};
