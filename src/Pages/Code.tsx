import { useRef, useState, type JSX } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function Code(): JSX.Element {
  const [text, setText] = useState<string>(" ");
  const qrRef = useRef<HTMLCanvasElement>(null);

  const downloadQRCode = () => {
    if (qrRef.current) {
      const url = qrRef.current.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = url;
      link.download = `qr-${Date.now()}.png`;
      link.click();
    }
  };

  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="flex flex-col items-start">
        <h2 className="text-2xl font-semibold mb-4">
          Generate a QR Code for your Visitors
        </h2>

        <label htmlFor=""className="font-semibold">Enter Name of Visitor</label>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder=""
          className="w-full max-w-md border rounded p-2 mb-4"
        />
      </div>

      <div className="p-4 bg-white rounded shadow">
        <QRCodeCanvas
          ref={qrRef}
          value={text}
          size={200}
          
        />
      </div>
      <p>QRcode expires in 24hrs</p>

      <button
        onClick={downloadQRCode}
        className="px-4 py-2 mt-6  bg-indigo-700 rounded text-white hover:bg-blue-700"
      >
        Download QR Code
      </button>
      <p className="cursor-pointer hover:text-indigo-700 pt-1"><NavLink to={"/number"} >Click here to generate text code</NavLink></p>
    </div>
    </>
  );
}
