import { motion } from "framer-motion";
import { skills as skillsData } from "../../data/skills";

const TAG_LINKS: Record<string, string> = {
  react: 'https://reactjs.org',
  tailwind: 'https://tailwindcss.com',
  laravel: 'https://laravel.com',
  firebase: 'https://firebase.google.com',
  kotlin: 'https://kotlinlang.org',
  swift: 'https://developer.apple.com/swift/',
  'android studio': 'https://developer.android.com/studio',
  xcode: 'https://developer.apple.com/xcode/',
  tensorflow: 'https://www.tensorflow.org',
  pandas: 'https://pandas.pydata.org',
  'hugging face': 'https://huggingface.co',
  onnx: 'https://onnx.ai',
  sql: 'https://en.wikipedia.org/wiki/SQL',
  'google sheets': 'https://www.google.com/sheets/about/',
  'apache beam': 'https://beam.apache.org',
  'timescaledb': 'https://www.timescale.com',
  'polygon id': 'https://polygon.technology/blog/introducing-polygon-id-zero-knowledge-own-your-identity-for-web3',
  'passkeys': 'https://passkeys.dev',
  ceramic: 'https://ceramic.network',
  'zk proofs': 'https://zkproofs.org',
  'dexscreener': 'https://dexscreener.com',
  'binance apis': 'https://binance-docs.github.io/apidocs/spot/en',
  phantom: 'https://phantom.app',
};

function getTagLink(tag: string) {
  const key = tag.toLowerCase().trim();
  if (TAG_LINKS[key]) return TAG_LINKS[key];
  // try a few normalized variants
  const normalized = key.replace(/[^a-z0-9]+/g, ' ').trim();
  if (TAG_LINKS[normalized]) return TAG_LINKS[normalized];
  // fallback to google search
  return `https://www.google.com/search?q=${encodeURIComponent(tag)}`;
}

export default function Skills() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4">
          Core Technical Focus
        </h2>
        <p className="text-[#9AA7BD] max-w-2xl mx-auto">
          Engineering solutions at the intersection of artificial intelligence,
          security, and user experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.id}
              whileHover={{ y: -8 }}
              className="group relative bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#00E5FF] to-[#A4FF6F] opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#A4FF6F] flex items-center justify-center mb-4">
                    <Icon size={28} className="text-[#0F172A]" />
                  </div>
                  <h3 className="text-2xl font-space-grotesk font-semibold mb-2">
                    {skill.title}
                  </h3>
                </div>

                <p className="text-[#9AA7BD] mb-4 flex-1">
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.tags.map((tag, i) => {
                    const href = getTagLink(tag);
                    return (
                      <a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 bg-[rgba(255,255,255,0.08)] rounded-md text-sm font-medium border border-[rgba(255,255,255,0.06)] hover:underline"
                      >
                        {tag}
                      </a>
                    );
                  })}
                </div>

                <div className="text-[#A4FF6F] font-medium text-sm mt-auto pt-4 border-t border-[rgba(255,255,255,0.06)]">
                  {skill.metric}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
