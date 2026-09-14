export default function Settings() {
  return (
    <div className="p-5 md:p-8">
      <p className="text-sm text-gray-500">Configuration</p>
      <h1 className="mt-1 text-3xl font-black">Store settings</h1>
      <div className="mt-8 max-w-2xl rounded-2xl border bg-white p-6">
        <div className="grid gap-5">
          <label className="grid gap-2 text-sm font-bold">
            Store name
            <input
              className="rounded-xl border px-4 py-3 font-normal"
              defaultValue="NOVA"
            />
          </label>
          <label className="grid gap-2 text-sm font-bold">
            Store email
            <input
              className="rounded-xl border px-4 py-3 font-normal"
              defaultValue="hello@nova.store"
            />
          </label>
          <label className="grid gap-2 text-sm font-bold">
            Currency
            <select className="rounded-xl border px-4 py-3 font-normal">
              <option>USD — US Dollar</option>
              <option>MMK — Myanmar Kyat</option>
            </select>
          </label>
          <button className="rounded-xl bg-ink px-5 py-3 font-bold text-white">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
