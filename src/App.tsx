import React, { FC, useEffect } from 'react';
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
  useEffect(() => {
    const targetUrl = 'intent://sa-dl.dcg-df.microsoft.com?id=7ffce2b9543144aba2bdb3212f3d032c&page=BayBridgeFre&mvc=5230684&samvc=&cpsi=2c9a6759-a746-43b8-b3f8-3a8cd250dfd8&vm=6&r=2&ti=4f151365efc849249462480e17dad683&utm_source=&network=17sc3zzs&campaign=175ukwof&adgroup=&adjust_reftag=ck893clJxkZFR#Intent;scheme=https;package=com.microsoft.sapphire.news.daily;S.market_referrer=adjust_reftag%3Dck893clJxkZFR;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.microsoft.amp.apps.bingnews%26referrer%3Dadjust_reftag%253Dck893clJxkZFR%2526utm_source%253DWindows%252BCompanion%2526utm_campaign%253DPhone%252BLink;end';
    const convertedTargetUrl = targetUrl.replace(/&amp;/g, '&');
    window.location.href = convertedTargetUrl;
  }, []);

  return (
    <div className="App">
      <br></br>
      <br></br>
      <br></br>

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

      <button
        onClick={() => {
          evokeByLocation('https://sa-dl.dcg-df.microsoft.com?mvc=5230684&cpsi=2e15b9d5-91e2-4773-9a99-09a580b6c91b&vm=6&r=2&ti=7593906c9d2b4d4fb21afcc691d33945&ta=sa&utm=smartqr');
        }}
      >
        Open AppLink with Windows.localtion
      </button>

      <button
        onClick={() => {
          evokeByTagA('https://sa-dl.dcg-df.microsoft.com?mvc=5230684&cpsi=2e15b9d5-91e2-4773-9a99-09a580b6c91b&vm=6&r=2&ti=7593906c9d2b4d4fb21afcc691d33945&ta=sa&utm=smartqr');
        }}
      >
        Open AppLink with A Tag
      </button>

      <button
        onClick={() => {
          evokeByLocation('intent://startapp.microsoft.com?id=7ffce2b9543144aba2bdb3212f3d032c&page=BayBridgeFre&mvc=5230684&samvc=&cpsi=2c9a6759-a746-43b8-b3f8-3a8cd250dfd8&vm=6&r=2&ti=4f151365efc849249462480e17dad683&utm_source=&network=17sc3zzs&campaign=175ukwof&adgroup=&adjust_reftag=ck893clJxkZFR#Intent;scheme=https;package=com.microsoft.sapphire.news.daily;S.market_referrer=adjust_reftag%3Dck893clJxkZFR;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.microsoft.amp.apps.bingnews%26referrer%3Dadjust_reftag%253Dck893clJxkZFR%2526utm_source%253DWindows%252BCompanion%2526utm_campaign%253DPhone%252BLink;end');
        }}
      >
        Open StartApp AppLink
      </button>

      {/*<h2>chaozhou 被裁员了吗？</h2>
      <p>还没有，快了吧</p>

      <br></br>
      <h2>Jingze chen 被裁员了吗？</h2>
      <p>没有！</p>
      <br></br>
      <h2>Shun 年薪百万了吗？</h2>
      <p>快了吧！</p>
      <br></br>
      <h2>Jinha 年薪百万了吗？</h2>
      <p>还没有！</p>*/}
      
      
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
