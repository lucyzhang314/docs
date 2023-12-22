import{M as a}from"./chunks/MainnetVersionTags.fb2bbd6e.js";import{o,c as t,H as s,Q as e}from"./chunks/framework.51d6c45b.js";import"./chunks/mainnet_versions.07334282.js";import"./chunks/constants.01c4bef2.js";const l="/img/Mainnet-Beta.png",n=e('<h1 id="mainnet-beta" tabindex="-1">Mainnet Beta <a class="header-anchor" href="#mainnet-beta" aria-label="Permalink to &quot;Mainnet Beta&quot;">​</a></h1><p><img src="'+l+'" alt="Mainnet Beta"></p><p>Welcome to the guide for Celestia’s Mainnet Beta, the production network that marks the pinnacle of Celestia’s evolution since its inception in 2019. This network is where all components of the Celestia ecosystem come to life in a real-world environment.</p><p>Mainnet Beta is the culmination of rigorous community testing, upgrades, and feedback. It serves as the platform for deploying mainnet rollups and applications.</p><h2 id="network-stability-and-upgrades" tabindex="-1">Network stability and upgrades <a class="header-anchor" href="#network-stability-and-upgrades" aria-label="Permalink to &quot;Network stability and upgrades&quot;">​</a></h2><p>Mainnet Beta is a stable network, but will still receive updates and improvements. Any changes or upgrades will be coordinated with node operators and the broader Celestia community to ensure seamless integration and minimal service interruptions.</p><p>As we step into unexplored territories with groundbreaking technologies like data availability sampling, it&#39;s crucial to remember that Mainnet Beta remains experimental at this stage. While the network is live and functional, users may encounter occasional instability or reduced performance.</p><h2 id="software-version-numbers" tabindex="-1">Software version numbers <a class="header-anchor" href="#software-version-numbers" aria-label="Permalink to &quot;Software version numbers&quot;">​</a></h2>',8),i=e(`<h2 id="integrations" tabindex="-1">Integrations <a class="header-anchor" href="#integrations" aria-label="Permalink to &quot;Integrations&quot;">​</a></h2><p>This guide contains the relevant sections for how to connect to Mainnet Beta, depending on the type of node you are running. Your best approach to participating is to first determine which node you would like to run. Each node’s guide will link to the relevant network in order to show you how to connect to them. Learn about the different endpoint types <a href="https://docs.cosmos.network/v0.50/learn/advanced/grpc_rest" target="_blank" rel="noreferrer">in the Cosmos SDK documentation</a>.</p><p>Here is a list of options of the type of nodes you can run in order to participate in Mainnet Beta:</p><h3 id="consensus-nodes" tabindex="-1">Consensus nodes <a class="header-anchor" href="#consensus-nodes" aria-label="Permalink to &quot;Consensus nodes&quot;">​</a></h3><ul><li><a href="./consensus-node">Full consensus node</a></li><li><a href="./consensus-node#optional-setting-up-a-validator">Validator node</a></li></ul><h4 id="consensus-rpc-endpoints" tabindex="-1">Consensus RPC endpoints <a class="header-anchor" href="#consensus-rpc-endpoints" aria-label="Permalink to &quot;Consensus RPC endpoints&quot;">​</a></h4><ul><li><code>public-celestia-rpc.numia.xyz</code></li><li><code>celestia-rpc.mesa.newmetric.xyz</code></li><li><code>rpc.lunaroasis.net</code></li><li><code>rpc.celestia.nodestake.top</code></li><li><code>celestia-rpc.brightlystake.com</code></li><li><code>celestia-rpc.spidey.services</code></li><li><code>rpc-celestia.contributiondao.com</code></li><li><code>celestia.rpc.stakin-nodes.com</code></li><li><code>celestia.cumulo.org.es</code></li><li><code>rpc-celestia.mzonder.com</code></li><li><code>rpc-celestia-01.stakeflow.io</code></li><li><code>rpc-celestia.alphab.ai</code></li><li><code>rpc-celestia-full.avril14th.org</code></li></ul><h4 id="api-endpoints" tabindex="-1">API endpoints <a class="header-anchor" href="#api-endpoints" aria-label="Permalink to &quot;API endpoints&quot;">​</a></h4><ul><li><code>public-celestia-lcd.numia.xyz</code></li><li><code>celestia-rest.mesa.newmetric.xyz</code></li><li><code>api.celestia.pops.one</code></li><li><code>api.lunaroasis.net</code></li><li><code>api.celestia.nodestake.top</code></li><li><code>celestia-rpc.brightlystake.com/api</code></li><li><code>celestia-api.spidey.services</code></li><li><code>api-celestia.contributiondao.com</code></li><li><code>celestia.rest.stakin-nodes.com</code></li><li><code>celestia.api.cumulo.org.es</code></li><li><code>api-celestia.mzonder.com</code></li><li><code>api-celestia-01.stakeflow.io</code></li><li><code>api-celestia.alphab.ai</code></li><li><code>api-celestia-full.avril14th.org</code></li></ul><h4 id="grpc-endpoints" tabindex="-1">gRPC endpoints <a class="header-anchor" href="#grpc-endpoints" aria-label="Permalink to &quot;gRPC endpoints&quot;">​</a></h4><ul><li><code>public-celestia-grpc.numia.xyz</code></li><li><code>celestia-grpc.mesa.newmetric.xyz</code></li><li><code>grpc.celestia.pops.one</code></li><li><code>grpc.lunaroasis.net:443</code></li><li><code>grpc.celestia.nodestake.top</code></li><li><code>celestia-rpc.brightlystake.com:9090</code></li><li><code>celestia-grpc.spidey.services</code></li><li><code>grpc-celestia.contributiondao.com</code></li><li><code>celestia.grpc.stakin-nodes.com:443</code></li><li><code>celestia.grpc.cumulo.org.es:443</code></li><li><code>grpc-celestia.mzonder.com:443</code></li><li><code>grpc-celestia-01.stakeflow.io:15002</code></li><li><code>rpc-celestia.alphab.ai:9090</code></li><li><code>grpc-celestia-full.avril14th.org</code></li></ul><h3 id="data-availability-nodes" tabindex="-1">Data availability nodes <a class="header-anchor" href="#data-availability-nodes" aria-label="Permalink to &quot;Data availability nodes&quot;">​</a></h3><ul><li><a href="./light-node">Light node</a></li><li><a href="./bridge-node">Bridge node</a></li><li><a href="./full-storage-node">Full storage node</a></li></ul><h4 id="da-rpc-endpoints" tabindex="-1">DA RPC endpoints <a class="header-anchor" href="#da-rpc-endpoints" aria-label="Permalink to &quot;DA RPC endpoints&quot;">​</a></h4><p>These RPC endpoints for DA nodes are to provide state access for querying the chain’s state and broadcasting transactions (balances, blobs, etc.) to the Celestia network. For users, they will need to provide a <code>–core.ip string</code> from a consensus node’s URL or IP that populates 2 ports for 2 types (RPC and gRPC, at ports 26657 and 9090, respectively) to their respective DA node.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">celestia</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">da_typ</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">–core.ip</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">ur</span><span style="color:#E1E4E8;">l</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">–core.rpc.port</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">por</span><span style="color:#E1E4E8;">t</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">–core.grpc.port</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">por</span><span style="color:#E1E4E8;">t</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">celestia</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">da_typ</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">–core.ip</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">ur</span><span style="color:#24292E;">l</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">–core.rpc.port</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">por</span><span style="color:#24292E;">t</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">–core.grpc.port</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">por</span><span style="color:#24292E;">t</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">Bridge nodes</p><p>Not all of the RPC endpoints do not guarantee the full block history. Find <a href="https://celestia-tools.brightlystake.com/" target="_blank" rel="noreferrer">an archive endpoint on the community dashboard</a> or run your own consensus full node with no pruning for your bridge node.</p></div><p>RPCs for DA nodes to initialise or start your celestia-node to Mainnet Beta with:</p><ul><li><code>public-celestia-consensus.numia.xyz</code><ul><li>gRPC: port 9090</li><li>RPC: port 26657</li></ul></li><li><code>celestia-consensus.mesa.newmetric.xyz</code><ul><li>gRPC: port 9090</li><li>RPC: port 26657</li></ul></li><li><code>rpc.celestia.pops.one</code><ul><li>gRPC: port 9090</li><li>RPC: port 26657</li></ul></li><li><code>consensus.lunaroasis.net</code><ul><li>gRPC: port 9090</li><li>RPC: port 26657</li></ul></li><li><code>rpc-celestia.alphab.ai</code><ul><li>gRPC: port 9090</li><li>RPC: port 26657</li></ul></li></ul><p>DA full and light nodes might have troubles connecting to the networks, so you can checkout this <a href="https://celestia.grafana.net/public-dashboards/a10eff0043bb4bf0839004e2746e2bc6" target="_blank" rel="noreferrer">Grafana dashboard</a> to see health/uptime status of DA bootstrappers (now <code>celestia</code> network only).</p><p>You can <a href="https://celestia-tools.brightlystake.com/" target="_blank" rel="noreferrer">find the status of these endpoints</a>.</p><h2 id="explorers" tabindex="-1">Explorers <a class="header-anchor" href="#explorers" aria-label="Permalink to &quot;Explorers&quot;">​</a></h2><p>There are multiple explorers you can use for Mainnet Beta:</p><ul><li><a href="https://celenium.io" target="_blank" rel="noreferrer">https://celenium.io</a></li><li><a href="https://celestia.explorers.guru" target="_blank" rel="noreferrer">https://celestia.explorers.guru</a></li><li><a href="https://explorer.modular.cloud/celestia-mainnet" target="_blank" rel="noreferrer">https://explorer.modular.cloud/celestia-mainnet</a></li><li><a href="https://mintscan.io/celestia" target="_blank" rel="noreferrer">https://mintscan.io/celestia</a></li><li><a href="https://explorer.nodestake.top/celestia" target="_blank" rel="noreferrer">https://explorer.nodestake.top/celestia</a></li><li><a href="https://stakeflow.io/celestia" target="_blank" rel="noreferrer">https://stakeflow.io/celestia</a></li></ul><h2 id="analytics" tabindex="-1">Analytics <a class="header-anchor" href="#analytics" aria-label="Permalink to &quot;Analytics&quot;">​</a></h2><p>The following websites provide analytics for Celestia:</p><ul><li><a href="https://analytics.smartstake.io/celestia" target="_blank" rel="noreferrer">https://analytics.smartstake.io/celestia</a></li><li><a href="https://alphab.ai/s/m/celestia/" target="_blank" rel="noreferrer">https://alphab.ai/s/m/celestia/</a></li></ul><h2 id="network-upgrades" tabindex="-1">Network upgrades <a class="header-anchor" href="#network-upgrades" aria-label="Permalink to &quot;Network upgrades&quot;">​</a></h2><p>Join the <a href="https://t.me/+smSFIA7XXLU4MjJh" target="_blank" rel="noreferrer">Community Telegram announcement channel</a> for network upgrades.</p>`,29),y=JSON.parse('{"title":"Mainnet Beta","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Mainnet Beta | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/mainnet.md","filePath":"nodes/mainnet.md","lastUpdated":1702909548000}'),r={name:"nodes/mainnet.md"},b=Object.assign(r,{setup(c){return(p,d)=>(o(),t("div",null,[n,s(a),i]))}});export{y as __pageData,b as default};
