import{_ as s,p as a,q as e,a1 as n}from"./framework-5866ffd3.js";const i={},l=n(`<h1 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h1><h2 id="部署方式" tabindex="-1"><a class="header-anchor" href="#部署方式" aria-hidden="true">#</a> 部署方式</h2><p>两种部署方式</p><ol><li><p>github actions</p><ul><li>将 <code>.github/workflows/ci.yml</code> 文件注释打开</li><li>检查配置，默认部署分支是 <code>gh-pages</code></li></ul></li><li><p>push 打包后的静态文件夹 检查配置,默认配置如下</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 项目发布域名</span>
<span class="token assign-left variable">web_url</span><span class="token operator">=</span>https://wuxin0011.github.io/vuepress2/
<span class="token comment"># 项目git 地址</span>
<span class="token assign-left variable">git_source</span><span class="token operator">=</span>https://github.com/wuxin0011/vuepress2
<span class="token comment"># 上传分支，如果是 master 请使用 main_branch=master</span>
<span class="token assign-left variable">main_branch</span><span class="token operator">=</span>main
<span class="token comment"># 项目打包生成的上传分支</span>
<span class="token assign-left variable">pages_branch</span><span class="token operator">=</span>gh-pages
<span class="token comment"># 上传消息</span>
<span class="token assign-left variable">git_message</span><span class="token operator">=</span><span class="token string">&quot;deploy <span class="token variable">$web_url</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> run deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),t=[l];function c(o,r){return a(),e("div",null,t)}const d=s(i,[["render",c],["__file","deployment.html.vue"]]);export{d as default};
