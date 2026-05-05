const BUG_REPORT_URL =
  "https://github.com/bluetoolsio/support-octopie/issues/new?template=bug_report.yml";

export default function OctoPieBugRedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${BUG_REPORT_URL}`} />
      <div className="relative mx-auto flex min-h-[55vh] max-w-2xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="mb-4 font-mono text-3xl font-bold uppercase tracking-[0.1em]">
          Opening OctoPie Bug Report
        </h1>
        <p className="section-copy mb-8 text-lg">
          Redirecting you to the current OctoPie bug report form.
        </p>
        <a
          className="border border-cyan-200/18 bg-black/30 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.12em] text-cyan-100 transition-colors hover:bg-black/35 hover:text-white"
          href={BUG_REPORT_URL}
        >
          Continue to GitHub
        </a>
      </div>
    </>
  );
}
