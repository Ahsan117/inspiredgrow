import React, { useState } from "react";

const SystemTab = () => {
  const [timezone, setTimezone] = useState("");
  const [dateFormat, setDateFormat] = useState("");
  const [timeFormat, setTimeFormat] = useState("");
  const [currency, setCurrency] = useState("");
  const [currencySymbolPlacement, setCurrencySymbolPlacement] = useState("");
  const [decimals, setDecimals] = useState("");
  const [decimalForQuantity, setDecimalForQuantity] = useState("");
  const [language, setLanguage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      Timezone: timezone,
      DateFormat: dateFormat,
      TimeFormat: timeFormat,
      Currency: currency,
      CurrencySymbolPlacement: currencySymbolPlacement,
      Decimals: decimals,
      DecimalForQuantity: decimalForQuantity,
      Language: language,
    };

    try {
      const response = await fetch(
        "http://localhost:5000/admin/Store/add/systemzone",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to create timezone");
      }
      const result = await response.json();
      console.log("Store created successfully", result);

      // Reset form fields after successful submission
      setTimezone("");
      setDateFormat("");
      setTimeFormat("");
      setCurrency("");
      setCurrencySymbolPlacement("");
      setDecimals("");
      setDecimalForQuantity("");
      setLanguage("");
    } catch (Err) {
      console.error("Error found", Err);
    }
  };

  return (
    <div className="mx-auto overflow-y-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-20">
          <div className="flex gap-32 w-full">
            {/* Left Column */}
            <div className="space-y-4 w-full">
              <div>
                <label htmlFor="timezone" className="block font-medium mb-2">
                  TimeZone*
                </label>
                <input
                  id="timezone"
                  type="text"
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="dateFormat" className="block font-medium mb-2">
                  Date Format
                </label>
                <input
                  id="dateFormat"
                  type="text"
                  value={dateFormat}
                  onChange={(e) => setDateFormat(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="timeFormat" className="block font-medium mb-2">
                  Time Format
                </label>
                <input
                  id="timeFormat"
                  type="text"
                  value={timeFormat}
                  onChange={(e) => setTimeFormat(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="currency" className="block font-medium mb-2">
                  Currency
                </label>
                <input
                  id="currency"
                  type="text"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="currencySymbolPlacement"
                  className="block font-medium mb-2"
                >
                  Currency Symbol Placement
                </label>
                <input
                  id="currencySymbolPlacement"
                  type="text"
                  value={currencySymbolPlacement}
                  onChange={(e) => setCurrencySymbolPlacement(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 w-full">
              <div>
                <label htmlFor="decimals" className="block font-medium mb-2">
                  Decimals*
                </label>
                <input
                  id="decimals"
                  type="text"
                  value={decimals}
                  onChange={(e) => setDecimals(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="decimalForQuantity"
                  className="block font-medium mb-2"
                >
                  Decimals for Quantity*
                </label>
                <input
                  id="decimalForQuantity"
                  type="text"
                  value={decimalForQuantity}
                  onChange={(e) => setDecimalForQuantity(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="language" className="block font-medium mb-2">
                  Language*
                </label>
                <select
                  id="language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                >
                  <option value="">Select Language</option>
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  {/* Add more language options here */}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="col-span-1 sm:col-span-2 flex justify-center gap-4 mt-10">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md"
          >
            Save
          </button>
          <button
            type="button"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default SystemTab;
