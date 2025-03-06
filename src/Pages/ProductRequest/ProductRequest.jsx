import React, { useState } from 'react';
import productdata from '../../productrequest.json';
import { TbFilterX } from "react-icons/tb";

const ProductRequest = () => {
    const [products, setProducts] = useState(productdata);
    const [filteredProducts, setFilteredProducts] = useState(productdata);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [warrantyFilter, setWarrantyFilter] = useState('All');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    // Apply all filters when clicked
    const applyFilters = () => {
        let filtered = products;

        // Apply search filter
        if (search.trim()) {
            filtered = filtered.filter(product =>
                product.phone.includes(search) ||
                product.seller.toLowerCase().includes(search.toLowerCase()) ||
                product.product_info.brand.toLowerCase().includes(search.toLowerCase()) ||
                product.product_info.product_type.toLowerCase().includes(search.toLowerCase()) 

            );
        }

        // Apply status filter
        if (statusFilter !== 'All') {
            filtered = filtered.filter(product => product.status === statusFilter);
        }

        // Apply warranty filter
        if (warrantyFilter !== 'All') {
            filtered = filtered.filter(product => product.product_info.warranty_card === warrantyFilter);
        }

        // Apply date filters
        if (fromDate) {
            filtered = filtered.filter(product => new Date(product.added_at) >= new Date(fromDate));
        }
        if (toDate) {
            filtered = filtered.filter(product => new Date(product.added_at) <= new Date(toDate));
        }

        setFilteredProducts(filtered);
    };

    return (
        <div>
            <div className='flex justify-between mb-4'>
                <div>
                    <h1>Product Request</h1>
                    <button className='bg-green-500 rounded-md p-2 text-white'>Force Auto Approve</button>
                </div>
                <div className='flex gap-2 here'>


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

                    {/* Status Filter */}
                    <div className="flex flex-col">
                        <label htmlFor="status" className="text-sm font-medium text-gray-600">
                            Status
                        </label>
                        <select
                            id="status"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="h-8 border rounded px-2 outline-none text-sm"
                        >
                            <option value="All">All</option>
                            <option value="Approved">Approved</option>
                            <option value="Pending">Pending</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="warranty" className="text-sm font-medium text-gray-600">
                            Warranty
                        </label>
                        <select
                            id="warranty"
                            value={warrantyFilter}
                        onChange={(e) => setWarrantyFilter(e.target.value)}
                            className="h-8 border rounded px-2 outline-none text-sm"
                        >
                            <option value="All">All</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        </select>
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
                   
                    {/* Apply Filters Button */}
                    {/* <button 
                        onClick={applyFilters} 
                        className="bg-blue-500 rounded-md p-2 text-white"
                    >
                        Apply Filters
                    </button> */}

                    {/* Clear Filters */}
                    <TbFilterX
                        className='h-8 w-8 text-red-500 cursor-pointer mt-5'
                        onClick={applyFilters}
                    />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-md">
                    <thead className='bg-gray-100'>
                        <tr>
                            <th>Phone</th>
                            <th>Product Info</th>
                            <th>Seller</th>
                            <th>Remark</th>
                            <th>Processed By</th>
                            <th>Processed At</th>
                            <th>Added At</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product, index) => (
                            <tr key={index}>
                                <td>{product.phone}</td>
                                <td>
                                    <span className="font-bold">Brand: </span> {product.product_info.brand} <br />
                                    <span className="font-bold">Product Type: </span> {product.product_info.product_type} <br />
                                    <span className="font-bold">Model: </span> {product.product_info.model}<br />
                                    <span className="font-bold">SR Number: </span> {product.product_info.sr_number}<br />
                                    <span className="font-bold">Warranty Card: </span> {product.product_info.warranty_card}
                                </td>
                                <td>{product.seller}</td>
                                <td>{product.remark || 'N/A'}</td>
                                <td>{product.processed_by || 'Pending'}</td>
                                <td>{product.processed_at}</td>
                                <td>{product.added_at}</td>
                                <td className='flex gap-3'>
                                    <div className="flex space-x-2">
                                        {product.status === 'Approved' ? (
                                            <>
                                                <button className="px-2 py-1 rounded text-white bg-green-600">Approved</button>
                                                <button className="px-2 py-1 rounded text-white bg-red-500">Remove</button>
                                            </>
                                        ) : (
                                            <>
                                                <button className="px-2 py-1 rounded text-white bg-green-500">Approve</button>
                                                <button className="px-2 py-1 rounded text-white bg-red-500">Reject</button>
                                                <button className="px-2 py-1 rounded text-white bg-red-500">Remove</button>
                                            </>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductRequest;
