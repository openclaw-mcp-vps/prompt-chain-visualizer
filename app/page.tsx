export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For AI &amp; Prompt Engineers
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Visualize Your{" "}
          <span className="text-[#58a6ff]">AI Prompt Chains</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload a JSON or YAML file and instantly get interactive flowcharts showing prompt dependencies, execution order, and data flow across your entire AI workflow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get Started – $25/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        {/* Mock flowchart preview */}
        <div className="mt-16 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
            <span className="ml-2 text-xs text-[#8b949e]">prompt-chain.yaml</span>
          </div>
          <div className="flex flex-wrap gap-3 items-center justify-center py-4">
            <div className="bg-[#0d1117] border border-[#58a6ff] rounded-lg px-4 py-2 text-sm text-[#58a6ff] font-mono">system_prompt</div>
            <div className="text-[#30363d] text-lg">→</div>
            <div className="bg-[#0d1117] border border-[#3fb950] rounded-lg px-4 py-2 text-sm text-[#3fb950] font-mono">context_builder</div>
            <div className="text-[#30363d] text-lg">→</div>
            <div className="bg-[#0d1117] border border-[#d29922] rounded-lg px-4 py-2 text-sm text-[#d29922] font-mono">response_parser</div>
            <div className="text-[#30363d] text-lg">→</div>
            <div className="bg-[#0d1117] border border-[#f78166] rounded-lg px-4 py-2 text-sm text-[#f78166] font-mono">output_formatter</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border border-[#58a6ff] rounded-xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$25<span className="text-xl text-[#8b949e] font-normal">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to manage prompt chains</p>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited prompt chain uploads",
              "Interactive drag-and-drop editor",
              "JSON &amp; YAML support",
              "API integration",
              "Export as PNG / SVG",
              "Priority support"
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: f }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What file formats are supported?</h3>
            <p className="text-[#8b949e] text-sm">You can upload JSON or YAML files that describe your prompt chains. We also support direct API connections so you can pull chain configs from your own backend.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I edit the flowchart after it's generated?</h3>
            <p className="text-[#8b949e] text-sm">Yes. The visualizer includes a drag-and-drop editor so you can rearrange nodes, add new prompts, and update dependencies — then export the updated config.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my data stored on your servers?</h3>
            <p className="text-[#8b949e] text-sm">No. Prompt configs are processed in-browser and never persisted on our servers. Your IP and workflow logic stay private.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Prompt Chain Visualizer. All rights reserved.
      </footer>
    </main>
  )
}
