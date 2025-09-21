import { useState } from "react";
import { GoCopy } from "react-icons/go";
import Navbar from "../Components/Navbar";

const Number = () => {
  const [code, setCode] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  // Function to generate alphanumeric code
  const generateCode = (length: number = 8): string => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleGenerate = () => {
    setCode(generateCode(8)); // 8-character code
  };

  const handleCopy = async () => {
    if (code) {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <>
    <Navbar/>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h2 className="text-2xl font-semibold mb-4">Code Generator</h2>

        <button
          onClick={handleGenerate}
          className="px-4 py-2 mb-4 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Generate Code
        </button>

        {code && (
          <div className="flex items-center gap-3 text-xl font-mono bg-white px-6 py-3 rounded shadow">
            <span>{code}</span>
            <button
              onClick={handleCopy}
              className="text-gray-600 hover:text-blue-600"
              title="Copy code"
            >
              <GoCopy size={20} />
            </button>
            {copied && <span className="text-green-600 text-sm">Copied!</span>}
          </div>
        )}
      </div>
    </>
  );
};

export default Number;
