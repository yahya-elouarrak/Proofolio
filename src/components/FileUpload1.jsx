"use client"
import React, { useState } from 'react';
const FileUpload1 = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState('');

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            setSelectedFile(file);
            setError('');
        } else {
            setSelectedFile(null);
            setError('Please select a PDF file');
        }
    };

    const handleClear = () => {
        setSelectedFile(null);
        setError('');
    };

    return (
        <div className="p-4 space-y-4">
            <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 border-gray-300 dark:border-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload PDF</span> or drag and drop
                        </p>
                    </div>
                    <input 
                        type="file" 
                        className="hidden" 
                        onChange={handleFileSelect}
                        accept=".pdf,application/pdf"
                    />
                </label>
            </div>
            
            {error && (
                <p className="text-sm text-red-500 mt-2">{error}</p>
            )}

            {selectedFile && (
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
                    <h4 className="text-lg font-semibold mb-2">File Details</h4>
                    <div className="space-y-2">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Name: {selectedFile.name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Size: {(selectedFile.size / 1024).toFixed(2)} KB
                        </p>
                        <button 
                            onClick={handleClear}
                            className="mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                        >
                            Clear File
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FileUpload1;