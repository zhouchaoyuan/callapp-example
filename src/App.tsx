import React, { FC } from 'react';
import CallApp from 'callapp-lib';
//import { UAParser } from 'ua-parser-js';
import './App.css';

const option = {
  scheme: {
    protocol: 'zhihu',
  },
  intent: {
    package: 'com.zhihu.android',
    scheme: 'zhihu',
  },
  universal: {
    host: 'oia.zhihu.com',
    pathKey: '',
  },
  appstore: 'https://itunes.apple.com/cn/app/id432274380',
  yingyongbao: '//a.app.qq.com/o/simple.jsp?pkgname=com.zhihu.android',
  fallback: 'https://oia.zhihu.com/',
  timeout: 2000,
};

const lib = new CallApp(option);

const ua = navigator.userAgent || '';

function evoke(url: string) {
  var iFrame;

  iFrame = document.createElement('iframe');
  iFrame.setAttribute('src', url);
  iFrame.setAttribute('style', 'display:none;');
  iFrame.setAttribute('height', '0px');
  iFrame.setAttribute('width', '0px');
  iFrame.setAttribute('frameborder', '0');
  document.body.appendChild(iFrame);

  iFrame = null;
}

function evokeByLocation(uri: string): void {
  window.location.href = uri;
}

function evokeByTagA(uri: string): void {
  const tagA = document.createElement('a');

  tagA.setAttribute('href', uri);
  tagA.style.display = 'none';
  document.body.appendChild(tagA);

  tagA.click();
}

const App: FC = () => {
  return (
    <div className="App">
      <br></br>
      <br></br>
      <br></br>
      
      <h2>chaozhou 被裁员了吗？</h2>
      <p>还没有，快了吧</p>

      {/* <button
        onClick={() => {
          alert(ua);
        }}
      >
        userAgent
      </button>
      <button
        onClick={() => {
          evoke('zhihu://question/270839820');
        }}
      >
        schema - iframe
      </button>
      <button
        onClick={() => {
          evokeByLocation('zhihu://question/270839820');
        }}
      >
        schema - location
      </button>
      <button
        onClick={() => {
          evokeByTagA('zhihu://question/270839820');
        }}
      >
        schema - A Tag
      </button>
      <button
        onClick={() => {
          evokeByLocation(lib.generateIntent({ path: '' }));
        }}
      >
        intent - location
      </button>
      <button
        onClick={() => {
          evokeByLocation('https://oia.zhihu.com/question/270839820/answer/477722658');
        }}
      >
        universal-link
      </button>
      <button
        onClick={() => {
          lib.open({ path: 'question/270839820/answer/477722658' });
        }}
      >
        callapp-lib 唤端
      </button> */}
      <br></br>
      <br></br>
      <br></br>
      {/* <button
        onClick={() => {
          window.location.href = "mimarket://details?id=com.tencent.mm"
          window.location.href = "samsungapps://ProductDetail/com.tencent.mm"
          window.location.href = "appmarket://details?id=com.tencent.mm"
          window.location.href = "oppomarket://details?packagename=com.tencent.mm"
          window.location.href = "vivomarket://details?id=com.tencent.mm"
        }}
      >
        Go to App Store
      </button> */}
    </div>
  );
};

export default App;
