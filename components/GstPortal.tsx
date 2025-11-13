import React from 'react';

const GstPortal: React.FC = () => {
    const invoiceData = [
        { id: 1, number: 'INV-001', supplier: 'Supplier A', date: '2023-01-15', amount: 1500, status: 'Pending' },
        { id: 2, number: 'INV-002', supplier: 'Supplier B', date: '2023-01-16', amount: 2500, status: 'Accepted' },
        { id: 3, number: 'INV-003', supplier: 'Supplier C', date: '2023-01-17', amount: 1000, status: 'Rejected' },
    ];

    return (
        <div>
            <header className="bg-gray-800 text-white p-4 text-center">
                <h1 className="text-2xl">GST Invoice Management System</h1>
            </header>
            <main className="p-4">
                <section id="dashboard" className="mb-8">
                    <h2 className="text-xl mb-4">Dashboard</h2>
                    <div id="invoice-stats" className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="stat-card bg-gray-700 p-4 rounded text-center">
                            <h3>Total Invoices</h3>
                            <p>{invoiceData.length}</p>
                        </div>
                        <div className="stat-card bg-gray-700 p-4 rounded text-center">
                            <h3>Pending</h3>
                            <p>{invoiceData.filter(inv => inv.status === 'Pending').length}</p>
                        </div>
                        <div className="stat-card bg-gray-700 p-4 rounded text-center">
                            <h3>Accepted</h3>
                            <p>{invoiceData.filter(inv => inv.status === 'Accepted').length}</p>
                        </div>
                        <div className="stat-card bg-gray-700 p-4 rounded text-center">
                            <h3>Rejected</h3>
                            <p>{invoiceData.filter(inv => inv.status === 'Rejected').length}</p>
                        </div>
                    </div>
                </section>
                <section id="invoice-list">
                    <h2 className="text-xl mb-4">Invoices</h2>
                    <div className="invoice-actions mb-4">
                        <button id="upload-invoice" className="bg-green-500 text-white py-2 px-4 rounded" onClick={() => console.log('Upload Invoice clicked')}>Upload Invoice</button>
                        <button id="bulk-accept" className="bg-blue-500 text-white py-2 px-4 rounded ml-2" onClick={() => console.log('Bulk Accept clicked')}>Bulk Accept</button>
                        <button id="bulk-reject" className="bg-red-500 text-white py-2 px-4 rounded ml-2" onClick={() => console.log('Bulk Reject clicked')}>Bulk Reject</button>
                    </div>
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-700">
                                <th className="p-2"><input type="checkbox" id="select-all" /></th>
                                <th>Invoice Number</th>
                                <th>Supplier</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoiceData.map(invoice => (
                                <tr key={invoice.id}>
                                    <td className="p-2"><input type="checkbox" className="invoice-checkbox" data-id={invoice.id} /></td>
                                    <td>{invoice.number}</td>
                                    <td>{invoice.supplier}</td>
                                    <td>{invoice.date}</td>
                                    <td>{invoice.amount}</td>
                                    <td>{invoice.status}</td>
                                    <td>
                                        <button className="bg-green-500 text-white py-1 px-2 rounded" onClick={() => console.log(`Accept invoice ${invoice.id}`)}>Accept</button>
                                        <button className="bg-red-500 text-white py-1 px-2 rounded ml-2" onClick={() => console.log(`Reject invoice ${invoice.id}`)}>Reject</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default GstPortal;
