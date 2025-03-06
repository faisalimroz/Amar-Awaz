import React, { useState } from 'react';
import removedproductsdata from '../../removedproducts.json'
import { TbFilterX } from "react-icons/tb";

const RemovedProducts = () => {
    const [products, setProducts] = useState(removedproductsdata);
    const [filteredProducts, setFilteredProducts] = useState(removedproductsdata);
    const [search, setSearch] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    // Apply all filters when clicked
    const applyFilters = () => {
        let filtered = products;

        // Apply search filter
        if (search.trim()) {
            filtered = filtered.filter(product => {
                const lowerSearch = search.toLowerCase().trim(); // Case-insensitive search term

                return (
                    product.phone.includes(search) || // Search by phone
                    product.productInfo.brand.toLowerCase().includes(lowerSearch) || // Search by brand
                    product.productInfo.product_type.toLowerCase().includes(lowerSearch) || // Search by product type
                    product.productInfo.model.toLowerCase().includes(lowerSearch) || // Search by model
                    product.productInfo.sr_number.toLowerCase().includes(lowerSearch) // Search by SR number
                );
            });
        }

        // Apply from date filter
        if (fromDate) {
            filtered = filtered.filter(product => new Date(product.removedAt) >= new Date(fromDate));
        }

        // Apply to date filter
        if (toDate) {
            filtered = filtered.filter(product => new Date(product.removedAt) <= new Date(toDate));
        }

        setFilteredProducts(filtered);
    };
   const handleremove=(model)=>{
    const updateProducts=filteredProducts.filter(product=>product.productInfo.model!=model);
    setFilteredProducts(updateProducts)
   }
    return (
        <div>
            <div className='flex justify-between mb-4'>
                <div>
                    <h1 className='font-bold mt-6'>Removed Products</h1>
                </div>
                <div className='flex gap-2'>

                    {/* From Date */}
                    <div className="flex flex-col">
                        <label htmlFor="fromDate" className="text-sm font-medium text-gray-600 ">
                            From
                        </label>
                        <input
                            type="date"
                            id="fromDate"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            className="h-8 border rounded px-2 outline-none text-sm"
                        />
                    </div>

                    {/* To Date */}
                    <div className="flex flex-col">
                        <label htmlFor="toDate" className="text-sm font-medium text-gray-600">
                            To
                        </label>
                        <input
                            type="date"
                            id="toDate"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            className="h-8 border rounded px-2 outline-none text-sm"
                        />
                    </div>

                    {/* Search Input */}
                    <label className="flex h-8 items-center gap-2 border rounded px-2 py-1 mt-5">
                        <input
                            type="text"
                            className="grow outline-none"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </label>
                    <TbFilterX
                        className='h-8 w-8 text-red-500 cursor-pointer mt-5'
                        onClick={applyFilters}
                    />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="table  w-[1000px] border border-gray-300 ">
                    <thead className='bg-gray-100'>
                        <tr>
                            <th>Phone</th>
                            <th>Product Info</th>
                            <th>Removed At</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product, index) => (
                            <tr key={index}>
                                <td>{product.phone}</td>
                                <td>
                                    <span className="font-bold">Brand: </span> {product.productInfo.brand} <br />
                                    <span className="font-bold">Product Type: </span> {product.productInfo.product_type} <br />
                                    <span className="font-bold">Model: </span> {product.productInfo.model}<br />
                                    <span className="font-bold">SR Number: </span> {product.productInfo.sr_number}<br />
                                    <span className="font-bold">Warranty Card: </span> {product.productInfo.warranty_card}
                                </td>
                                <td>{product.removedAt}</td>
                                <td>
                                    <button onClick={() => handleremove(product.productInfo.model)} className="px-2 py-1 rounded text-white bg-red-500">Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RemovedProducts;
