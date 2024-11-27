export default function Faq() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-800 to-red-900 p-4">
      {/* Title */}
      <h1 className="text-center text-xl font-bold text-white mb-4">
        Donor/Patient Chart
      </h1>

      {/* Chart Section */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-center text-md font-semibold text-red-800 mb-4">
          Donor Blood Types
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-center text-sm">
            {/* Table Header */}
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 bg-red-100">
                  Recipient / Donor
                </th>
                <th className="border border-gray-300 p-2 bg-red-100">O-</th>
                <th className="border border-gray-300 p-2 bg-red-100">O+</th>
                <th className="border border-gray-300 p-2 bg-red-100">B-</th>
                <th className="border border-gray-300 p-2 bg-red-100">B+</th>
                <th className="border border-gray-300 p-2 bg-red-100">A-</th>
                <th className="border border-gray-300 p-2 bg-red-100">A+</th>
                <th className="border border-gray-300 p-2 bg-red-100">AB-</th>
                <th className="border border-gray-300 p-2 bg-red-100">AB+</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {[
                ["O-", "🩸", "🩸", "", "", "", "", "", ""],
                ["O+", "", "🩸", "", "", "", "", "", ""],
                ["B-", "", "", "🩸", "🩸", "", "", "", ""],
                ["B+", "", "", "", "🩸", "", "", "", ""],
                ["A-", "", "", "", "", "🩸", "🩸", "", ""],
                ["A+", "", "", "", "", "", "🩸", "", ""],
                ["AB-", "", "", "", "", "", "", "🩸", "🩸"],
                ["AB+", "", "", "", "", "", "", "", "🩸"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`border border-gray-300 p-2 ${
                        j === 0 ? "bg-red-100 font-semibold" : ""
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Eligibility Section */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-md font-semibold text-red-800 mb-4">
          Eligibility to Donate Blood
        </h2>
        <ul className="text-sm text-gray-700 list-disc list-inside space-y-2">
          <li>Be at least 17 years old in most states</li>
          <li>Weight: At least 45 kg (100 lbs) for both males and females</li>
          <li>
            Well Being: Feeling well that day. Not having a fever or active
            illness
          </li>
        </ul>
      </div>
    </div>
  );
}
