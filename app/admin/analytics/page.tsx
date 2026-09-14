export default function Analytics() {
  return (
    <div className="p-5 md:p-8">
      <p className="text-sm text-gray-500">Reports</p>
      <h1 className="mt-1 text-3xl font-black">Analytics</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {[
          ["Conversion rate", "4.82%", "+0.8%"],
          ["Average order", "$146.80", "+4.2%"],
          ["Returning customers", "38.4%", "+6.1%"],
        ].map((x) => (
          <div className="rounded-2xl border bg-white p-6" key={x[0]}>
            <div className="text-sm text-gray-500">{x[0]}</div>
            <div className="mt-4 text-3xl font-black">{x[1]}</div>
            <div className="mt-2 text-xs font-bold text-green-600">{x[2]}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border bg-white p-6">
        <h2 className="font-bold">Traffic & revenue</h2>
        <div className="mt-10 grid h-72 place-items-center rounded-xl bg-soft text-sm text-gray-500">
          Analytics chart placeholder — connect your API / database here.
        </div>
      </div>
    </div>
  );
}
