import { useEffect, useState } from "react";

import { FaTrash, FaFilePdf } from "react-icons/fa";
import API from "../api/axios";

export default function PdfListPanel() {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch list
  const fetchPdfs = async () => {
    try {
      setLoading(true);
      const { data } = await API.get("/pdf/list");
      setPdfs(data || []);
    } catch (e) {
      console.error("Error fetching PDFs:", e);
    } finally {
      setLoading(false);
    }
  };

  // Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this PDF?")) return;
    try {
      await API.delete(`/pdf/${id}`);
      setPdfs((prev) => prev.filter((p) => p._id !== id));
    } catch (e) {
      console.error("Delete failed:", e);
      alert("Error deleting PDF.");
    }
  };

  useEffect(() => {
    fetchPdfs();
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <FaFilePdf className="text-red-500" /> Uploaded PDFs
      </h2>

      {loading ? (
        <p className="text-gray-500 text-sm">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-2 px-3 text-left">#</th>
                <th className="py-2 px-3 text-left">Filename</th>
                <th className="py-2 px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pdfs.length > 0 ? (
                pdfs.map((pdf, index) => (
                  <tr
                    key={pdf._id}
                    className="border-t border-gray-200 hover:bg-gray-50 transition"
                  >
                    <td className="py-2 px-3">{index + 1}</td>
                    <td className="py-2 px-3 font-medium">{pdf.filename}</td>
                  
                    <td className="py-2 px-3 text-center">
                      <button
                        onClick={() => handleDelete(pdf._id)}
                        className="text-red-500 hover:text-red-700 transition cursor-pointer"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-4 text-center text-gray-500">
                    No PDFs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
