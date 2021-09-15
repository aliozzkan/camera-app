import React, { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const Barcode = () => {
  const [data, setData] = useState(null);
  return (
    <div>
      {!!data ? (
        data
      ) : (
        <BarcodeScannerComponent
          width={500}
          height={500}
          onUpdate={(err, result) => {
            if (result) setData(result.text);
          }}
        />
      )}
      <button
        onClick={() => {
          setData(null);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Barcode;
