import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useDropzone } from 'react-dropzone';
import './PDFPreview.css'; // Import the CSS file

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFPreview = () => {
  const [pdfFile, setPdfFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setPdfFile(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="pdf-preview-container">
      <div {...getRootProps()} style={{ border: '1px dashed black', padding: '20px', marginBottom: '20px' }}>
        <input {...getInputProps()} />
        <p>Drag and drop a PDF file here, or click to select a file</p>
      </div>
      {pdfFile && (
        <div>
          <Document
            file={pdfFile}
            options={{ cMapUrl: 'cmaps/', cMapPacked: true }}
          >
            <Page pageNumber={1} />
          </Document>
        </div>
      )}
    </div>
  );
};

export default PDFPreview;
