import React from 'react'

const OrderDetails = () => {
  return (
    <div class="WrapperArea">
        <div class="WrapperBox">
            <div class="Small-Wrapper"> 
                <h4 class="Title">Order  Details </h4>
                <div class="OrderArea">
                    <ul>
                        <li><span>Order ID</span> #24563298</li>
                        <li><span>Order Date</span> 20/3/2019</li>
                        <li><span>Customer Name</span> David Winsky</li>
                        <li><span>Contact Number</span> 876543219</li>
                        <li><span>Amount</span> $ 360</li> 
                        <li><span>Payment Mode</span> Visa Debit</li>
                        <li><span>Order Status</span> Complete</li>
                        <li><span>Address</span> H-146/147, Noida sector-63, U.P-201301</li> 
                    </ul>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default OrderDetails
