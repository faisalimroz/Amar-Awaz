import React, { useState } from 'react';
import bannerdata from '../../promotionalbanner.json'
import { IoAddCircleOutline } from "react-icons/io5";
const PromotionalBanner = () => {
    const [products, setProducts] = useState(bannerdata);
    return (
        <div>
            <div className='flex justify-between mb-4'>
                <div>
                    <h1 className='font-bold mt-6'>Feed</h1>
                </div>
             
                    <div className='flex items-center bg-blue-500 flex-row h-6 p-4  rounded-lg'>
                    <IoAddCircleOutline className='text-white'
                    />
                        <p className='text-white'>Add</p>

                 
                    </div>
               
            </div>

            <div className="overflow-x-auto">
                <table className="table  w-[1200px] border border-gray-300 ">
                    <thead className='bg-gray-100'>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Heading </th>
                            <th> URL</th>
                            <th>Status</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td> <div className="flex-none">
                                    <button className="btn btn-square btn-ghost">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            className="inline-block h-5 w-5 stroke-current">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"></path>
                                        </svg>
                                    </button>
                                </div></td>
                                <td><img className='w-[800px] h-auto' src={product.image} alt='walton' /></td>
                                <td>{product.title}</td>
                                <td>{product.link}</td>

                                <td>
                                    <button className="px-2 py-1 rounded text-white bg-red-700">Make Inactive</button>
                                </td>
                                <td>
                                    <button  className="px-2 py-1 rounded text-white bg-blue-500">Update</button>
                                </td>
                                <td>
                                    <button className="px-2 py-1 rounded text-white bg-red-500">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default PromotionalBanner;