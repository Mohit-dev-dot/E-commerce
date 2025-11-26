import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuickViewModal({ product, onClose, onAdd }) {
  return (
    <AnimatePresence>
      {product && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* BACKDROP */}
          <motion.div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* MODAL CARD */}
          <motion.div
            key="modal"
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ duration: 0.25 }}
            className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-3xl w-full mx-4 overflow-hidden z-50"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-72 object-cover rounded"
                />
              </div>

              <div className="p-4 flex flex-col">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">
                  {product.category} · {product.rating} ★
                </p>

                <p className="mt-3 text-lg font-bold">₹{product.price}</p>

                <p className="mt-3 text-sm text-gray-600">
                  {product.description ||
                    "High quality product with excellent performance."}
                </p>

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => {
                      onAdd(product);
                      onClose();
                    }}
                    className="bg-indigo-600 text-white px-4 py-2 rounded"
                  >
                    Add to cart
                  </button>

                  <button
                    onClick={onClose}
                    className="px-4 py-2 border rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
