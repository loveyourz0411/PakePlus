import{s as F,r as I,b3 as T,t as D,j as f,c as a,m as l,a as v,bk as U,f as B,n as o,F as W,A as M,a8 as R,g,z as C,p as y,y as s,i as G}from"./index-Dju9e0Mk.js";import{a as V}from"./history-HliKBwvq.js";import{u as H}from"./util-CASLgOZv.js";import{c as z}from"./calculateTimeDifference-lnPCxxL5.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./http-Cr7o0t0N.js";function Z(d){var t,u;let p=0,A=0;d.cases.forEach(n=>{n.result==="Pass"?p++:A++});const m=d.cases.map(n=>`
    <tr>
    <td>${n.caseInfo.caseName}</td>
    <td>
      <div class="${n.result}" style="width: 50px;margin: 0 auto;">
        ${n.result}
      </div>
    </td>
    <td>
      <div class="primary" style="width: 50px;margin: 0 auto;">
        ${n.output}
      </div>
    </td>
    <td>${n.caseInfo.units}</td>
    <td>${n.caseInfo.low_limit}</td>
    <td>${n.caseInfo.high_limit}</td>
    <td>${n.caseInfo.data_type}</td>
  </tr>    
`).join(`
`);return`
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Test Report</title>

  <style>
    * {
      padding: 0;
      margin: 0;
    }

    body {
      background-color: #e1e2e5;
      padding-bottom: 30px;
    }

    .item {
      display: flex;
    }

    .item div {
      padding: 8px 10px;
      box-sizing: border-box;
      font-size: 12px;
    }

    .item div:nth-child(1) {
      width: 200px;
      background-color: #3f4145;
      color: #fff;
      font-weight: bold;
    }

    .item div:nth-child(2) {
      width: 300px;
      background-color: #e1e2e5;
      color: #313337;
      border-top: 1px solid #bfc2c5;
    }

    table {
      width: 100%;
      border-spacing: 0;
    }

    td,
    th {
      padding: 2px 0;
      text-align: center;
    }

    th {
      background-color: #3f4145;
      color: #fff;
      font-size: 12px;
      padding: 8px;
    }

    tbody tr:nth-child(even) {
      background-color: #EDEEEF;
    }

    tbody tr:nth-child(odd) {
      background-color: #edeeef;
    }

    td {
      padding: 8px;
      font-size: 12px;
      color: #313337;
      border-top: 1px solid #bfc2c5;
    }

    .title {
      font-weight: bold;
      padding: 10px 0;
    }

    .box-logo {

      height: 60px;
      background-color: #13161a;
    }

    .box-logo img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }

    .box-logo span {
      color: #fff;
      font-size: 18px;
    }

    .box-logo .content {
      width: 90%;
      height: 100%;
      display: flex;
      align-items: center;
      margin: 0 auto;
    }

    .card {
      background-color: #fff;
      padding: 15px;
      border-radius: 3px;
      margin-top: 15px;
    }

    .fail,
    .success,
    .primary,
    .Pass,
    .Fail {
      padding: 3px 12px;
      color: #fff;
      border-radius: 4px;
      font-size: 12px;
    }

    .fail,
    .Fail {
      background-color: #ee3324;
    }

    .success,
    .Pass {
      background-color: #67C23A;
    }

    .primary {
      background-color: #409EFF;
    }

  </style>
</head>

<body>
  <div class="box-logo">
    <div class="content">
      <img
        src="data:image/png;base64,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"
        alt="">
      <span>Test Report</span>
    </div>
  </div>
  <div style="width: 90%;margin: 0 auto;">
    <div class="card">
      <div class="title">基本信息</div>
      <div class="info">
        <div class="item">
        <div>所属项目</div>
          <div>${((t=d.projectInfo)==null?void 0:t.projectName)||""}</div>
        </div>
        <div class="item">
          <div>执行人</div>
          <div>${((u=d.userInfo)==null?void 0:u.userName)||""}</div>
        </div>
        <div class="item">
          <div>执行开始时间</div>
          <div>${d.startTime}</div>
        </div>
        <div class="item">
          <div>执行结束时间</div>
          <div>${d.endTime}</div>
        </div>
        <div class="item">
          <div>总用时</div>
          <div>${d.excutePeroid}</div>
        </div>
        <div class="item">
          <div>执行次数</div>
          <div>${d.runCount}</div>
        </div>
        <div class="item">
          <div>状态</div>
          <div>${d.excuteResult?"执行完成":"执行中···"}</div>
        </div>

        <div class="item">
          <div>执行结果</div>
          <div>
            <span class="${d.excuteResult}">${d.excuteResult}</span>
          </div>
        </div>
        <div class="item">
          <div>成功数</div>
          <div>
            <span class="success">${p}</span>
          </div>
        </div>
        <div class="item">
          <div>失败数</div>
          <div>
            <span class="fail">${A}</span>
          </div>
        </div>
        <div class="item">
          <div>UUTPartNumber</div>
          <div>${d.UUTPartNumber}</div>
        </div>
        <div class="item">
          <div>UUTSerialNumber</div>
          <div>${d.UUTSerialNumber}</div>
        </div>
        <div class="item">
          <div>UUTHWModNumber</div>
          <div>${d.UUTHWModNumber}</div>
        </div>
        <div class="item">
          <div>UUTSWModNumber</div>
          <div>${d.UUTSWModNumber}</div>
        </div>
        <div class="item">
          <div>ATEPartNumber</div>
          <div>${d.ATEPartNumber}</div>
        </div>
        <div class="item">
          <div>ATESerialNumber</div>
          <div>${d.ATESerialNumber}</div>
        </div>
        <div class="item">
          <div>创建时间</div>
          <div>${d.createTime}</div>
        </div>
      </div>
    </div>


    <div class="card">
      <div class="title">详情</div>
      <table>
        <thead>
          <tr>
            <th>Case</th>
            <th>Status</th>
            <th>Value</th>
            <th>Units</th>
            <th>Low Limit</th>
            <th>High Limit</th>
            <th>Data Type</th>
          </tr>
        </thead>

        <tbody>
          ${m}
        </tbody>
      </table>
    </div>
  </div>

</body>

</html>
`}const P={class:"main-content"},K={class:"title-text"},q={__name:"history-detail",setup(d){const{appContext:p}=F(),{$message:A}=p.config.globalProperties,m=R(),t=I({}),u=I([]);let n=null;T(E);const x=I([]);D(u,e=>{x.value=new Array(e.length).fill().map(()=>[])},{immediate:!0});const w=(e,c)=>{const r=x.value[c],i=r.indexOf(e);i===-1?r.push(e):r.splice(i,1)},S=f({width:50,expandedRowRender:e=>a("div",{class:"expand-box"},[a("div",{class:"txt"},[l("执行的 Python Code")]),a(v("Code"),{code:e.caseInfo.code||""},null)])}),k=f([{title:"用例ID",align:"center",render:({record:e})=>e.caseInfo.id},{title:"用例名称",align:"center",render:({record:e})=>e.caseInfo.caseName},{title:"执行开始时间",dataIndex:"startTime",align:"center",width:220},{title:"执行结束时间",dataIndex:"endTime",align:"center",width:220},{title:"下位机IP",dataIndex:"IP",align:"center"},{title:"状态",align:"center",render:({record:e})=>["初始化","正在执行中","执行结束"][e.status]},{title:"执行结果",dataIndex:"output",align:"center"},{title:"最小值",align:"center",render:({record:e})=>e.caseInfo.low_limit},{title:"最大值",align:"center",render:({record:e})=>e.caseInfo.high_limit},{title:"单位",align:"center",render:({record:e})=>e.caseInfo.units},{title:"数据类型",align:"center",render:({record:e})=>e.caseInfo.data_type},{title:"错误信息",dataIndex:"errMsg",align:"center"}]);function E(){clearTimeout(n),V(m.query.recordId).then(e=>{if(console.log(e),e.code!==200)return A.error(e.errMsg||"获取失败");t.value=e.data;const c=[];t.value.cases.forEach(r=>{const i=r.runCount-1;c[i]||(c[i]=[]),c[i].push(r)}),u.value=c,t.value.excuteResult?t.value.excutePeroid=z(t.value):n=setTimeout(E,800)})}U(()=>clearTimeout(n));function Q(){const e=Z({...t.value,caseTable:u.value});H.downloadBlob(`${Date.now()}.html`,new Blob([e],{type:"text/html"}))}return(e,c)=>{const r=v("a-button"),i=v("a-descriptions-item"),O=v("a-tag"),N=v("a-descriptions"),J=v("a-table");return g(),B("div",P,[a(N,{style:{"margin-top":"10px","background-color":"#fff",padding:"20px"},title:"基本信息",column:2,size:e.size,bordered:""},{extra:o(()=>[t.value.excuteResult?(g(),C(r,{key:0,type:"primary",onClick:Q},{default:o(()=>c[0]||(c[0]=[l("导出生成报告")])),_:1})):y("",!0)]),default:o(()=>[a(i,{label:"所属项目"},{default:o(()=>[l(s((t.value.projectInfo||{}).projectName),1)]),_:1}),a(i,{label:"执行人"},{default:o(()=>[l(s((t.value.userInfo||{}).userName),1)]),_:1}),a(i,{label:"执行开始时间"},{default:o(()=>[l(s(t.value.startTime),1)]),_:1}),a(i,{label:"执行结束时间"},{default:o(()=>[l(s(t.value.endTime),1)]),_:1}),a(i,{label:"总用时"},{default:o(()=>[l(s(t.value.excutePeroid),1)]),_:1}),a(i,{label:"执行次数"},{default:o(()=>[l(s(t.value.runCount),1)]),_:1}),a(i,{label:"状态"},{default:o(()=>[a(O,null,{default:o(()=>[l(s(t.value.excuteResult?"执行完成":"执行中···"),1)]),_:1})]),_:1}),t.value.excuteResult?(g(),C(i,{key:0,label:"执行结果"},{default:o(()=>[l(s(t.value.excuteResult),1)]),_:1})):y("",!0),a(i,{label:"被测设备部件号"},{default:o(()=>[l(s(t.value.UUTPartNumber),1)]),_:1}),a(i,{label:"被测设备序列号"},{default:o(()=>[l(s(t.value.UUTSerialNumber),1)]),_:1}),a(i,{label:"硬件版本号"},{default:o(()=>[l(s(t.value.UUTHWModNumber),1)]),_:1}),a(i,{label:"软件版本号"},{default:o(()=>[l(s(t.value.UUTSWModNumber),1)]),_:1}),a(i,{label:"试验台部件号"},{default:o(()=>[l(s(t.value.ATEPartNumber),1)]),_:1}),a(i,{label:"试验台序列号"},{default:o(()=>[l(s(t.value.ATESerialNumber),1)]),_:1}),a(i,{label:"创建时间"},{default:o(()=>[l(s(t.value.createTime),1)]),_:1})]),_:1},8,["size"]),(g(!0),B(W,null,M(u.value,(L,h)=>(g(),B("div",{key:h,class:"card-box"},[G("div",K,"第"+s(h+1)+"次执行记录",1),a(J,{data:L,columns:k,expandable:S,bordered:!0,stripe:!0,size:"large","expanded-keys":x.value[h],"row-key":b=>b.id,onExpand:(b,X)=>w(b,h)},null,8,["data","columns","expandable","expanded-keys","row-key","onExpand"])]))),128))])}}},ae=Y(q,[["__scopeId","data-v-6289b1d9"]]);export{ae as default};
