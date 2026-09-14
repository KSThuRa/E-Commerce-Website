const customers = [
  ["Olivia Martin", "olivia@example.com", "12 orders", "$2,840"],
  ["James Wilson", "james@example.com", "8 orders", "$1,492"],
  ["Emma Davis", "emma@example.com", "15 orders", "$4,120"],
  ["Noah Brown", "noah@example.com", "3 orders", "$418"],
];
export default function Customers() {
  return (
    <div className="p-5 md:p-8">
      <p className="text-sm text-gray-500">People</p>
      <h1 className="mt-1 text-3xl font-black">Customers</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {customers.map((c) => (
          <div key={c[0]} className="rounded-2xl border bg-white p-5">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-soft font-bold">
                {c[0][0]}
              </div>
              <div>
                <div className="font-bold">{c[0]}</div>
                <div className="text-sm text-gray-500">{c[1]}</div>
              </div>
            </div>
            <div className="mt-5 flex justify-between border-t pt-4 text-sm">
              <span>{c[2]}</span>
              <strong>{c[3]}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
