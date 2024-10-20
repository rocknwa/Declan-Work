// import { useState, useRef } from 'react'
// import { Upload, FileText, Check } from 'lucide-react'
// import { Label } from '@/components/ui/label'

// export default function ResumeUpload({onChange, value, error}) {
//   const [file, setFile] = useState(null)
//   const fileInputRef = useRef(null)

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0]
//     if (selectedFile) {
//       setFile(selectedFile)
//     }
//   }

//   const handleDragOver = (event) => {
//     event.preventDefault()
//   }

//   const handleDrop = (event) => {
//     event.preventDefault()
//     const droppedFile = event.dataTransfer.files[0]
//     if (droppedFile) {
//       setFile(droppedFile)
//     }
//   }

//   const handleClick = () => {
//     fileInputRef.current.click()
//   }

//   const formatFileSize = (bytes) => {
//     if (bytes < 1024) return bytes + ' B'
//     else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB'
//     else return (bytes / 1048576).toFixed(1) + ' MB'
//   }

//   return (
//     <div className="w-full max-w-md">
//       <Label className="my-2">Upload Resume</Label>
//       {!file ? (
//         <div
//           className="border-2 border-gray-400 rounded-lg p-4 text-center cursor-pointer"
//           onClick={handleClick}
//           onDragOver={handleDragOver}
//           onDrop={handleDrop}
//         >
//           <Upload className="mx-auto text-gray-400 mb-2" size={24} />
//           <p className="text-green-500 font-medium mb-1">Click to upload or drag and drop</p>
//           <p className="text-sm text-gray-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
//           <input
//             ref={fileInputRef}
//             type="file"
//             accept=".svg,.png,.jpg,.jpeg,.gif,.pdf"
//             onChange={handleFileChange}
//             className="hidden"
//           />
//         </div>
//       ) : (
//         <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center">
//           <FileText className="text-green-500 mr-3" size={24} />
//           <div className="flex-grow">
//             <p className="font-semibold text-gray-700">{file.name}</p>
//             <p className="text-sm text-gray-500">
//               {formatFileSize(file.size)} - 100% uploaded
//             </p>
//           </div>
//           <Check className="text-green-500" size={24} />
//         </div>
//       )}
//     </div>
//   )
// }

import React, { useRef } from 'react'
import { Upload, FileText, Check } from 'lucide-react'
import { Label } from '@/components/ui/label'

export default function ResumeUpload({ onChange, value, error }) {
  const fileInputRef = useRef(null)

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]
    if (selectedFile) {
      onChange(selectedFile)
    }
  }

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  const handleDrop = (event) => {
    event.preventDefault()
    const droppedFile = event.dataTransfer.files[0]
    if (droppedFile) {
      onChange(droppedFile)
    }
  }

  const handleClick = () => {
    fileInputRef.current.click()
  }

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B'
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB'
    else return (bytes / 1048576).toFixed(1) + ' MB'
  }

  return (
    <div className="w-full max-w-md">
      <Label className="my-2">Upload Resume</Label>
      {!value ? (
        <div
          className="border-2 border-gray-400 rounded-lg p-4 text-center cursor-pointer"
          onClick={handleClick}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <Upload className="mx-auto text-gray-400 mb-2" size={24} />
          <p className="text-green-500 font-medium mb-1">Click to upload or drag and drop</p>
          <p className="text-sm text-gray-500">SVG, PNG, JPG, PDF or GIF (max. 800x400px)</p>
          <input
            required={true}
            ref={fileInputRef}
            type="file"
            accept=".svg,.png,.jpg,.jpeg,.gif,.pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      ) : (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center">
          <FileText className="text-green-500 mr-3" size={24} />
          <div className="flex-grow">
            <p className="font-semibold text-gray-700">{value.name}</p>
            <p className="text-sm text-gray-500">
              {formatFileSize(value.size)} - 100% uploaded
            </p>
          </div>
          <Check className="text-green-500" size={24} />
        </div>
      )}
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  )
}