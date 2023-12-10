import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="bg-primary text-white pt-8">
            <div className="container mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Column 1 */}
                    <div>
                        <h3 className="text-2xl text-white font-bold mb-4">About Us</h3>
                        <p className="">Our mission is to empower businesses by providing a reliable and user-friendly platform that enhances communication and support ticket management. We are committed to delivering innovative solutions that save you time, reduce complexities, and contribute to your overall success.</p>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-2xl font-bold  mb-4">Documentation</h3>
                        <ul>
                            <li>
                                <a href="#">How to Create Ticket.</a>
                            </li>
                            <li>
                                <a href="#">How To get Mail Support.</a>
                            </li>
                            {/* Add more products as needed */}
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Support</h3>
                        {/* Support Section */}
                        <div>
                            
                            <ul>
                                <li>
                                    <strong>Tamal Mazumder</strong>
                                    <br />
                                    Email: tamal.it@hameemgroup.com
                                    <br />
                                    Ext: 1029
                                </li>
                                <li className="mt-4">
                                    <strong>Rakibul Hasan </strong>
                                    <br />
                                    Email: rakibul.it@hameemgroup.com
                                    <br />
                                    Ext: 1024
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white p-3 my-3 flex justify-center items-center rounded-b content-around ">
                <p className="text-black">&copy;2023.Ha-meem Group. All rights reserved.</p>
            </div>
        </footer>
    </>
  )
}

export default Footer
