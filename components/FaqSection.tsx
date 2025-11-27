
export default function FAQ(){
  const faqs = [
    { q: 'What’s the fabric & weight?', a: '100% combed cotton, 240 GSM (heavy). Breathable yet structured.'},
    { q: 'How do sizes run?', a: 'True to size. For an oversized look, go one size up.'},
    { q: 'Wash & care?', a: 'Cold wash, inside out. Do not tumble dry. Iron on reverse.'},
    { q: 'Returns & exchange?', a: '30‑day free returns. Instant exchange on size issues.'},
  ]
  return (
    <section id="faq" className="bg-zinc-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold">Questions? We’ve got answers.</h2>
        <div className="mt-6">
          {faqs.map((f, i)=> (
            <details key={f.q} className="group mb-1 open:bg-zinc-50 rounded-2xl border border-zinc-300">
              <summary className="flex cursor-pointer items-center justify-between p-4 hover:bg-zinc-50  rounded-2xl">
                <span className="font-medium">{f.q}</span>
                <span className="text-zinc-500 group-open:rotate-45 transition">＋</span>
              </summary>
              <div className="px-4 pb-4 text-sm text-zinc-600 ">{f.a}</div>
            </details>
            
          ))}
          

        </div>
      </div>
    </section>
  )
}