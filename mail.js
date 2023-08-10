function sendEmail(){
    let message = document.getElementById('message').value;
    console.log(message);
    let email = document.getElementById('email').value;
    console.log(email);
    let productTable =' ';
    if(localStorage.getItem('cartItems') != null && localStorage.getItem('cartItems').length > 0)
    {
      // Retrieve cart data from local storage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    console.log(cartItems);
  
    // Add cart items to table
    productTable = `<h1>Product List</h1> <hr> <table><tr><th>Product Name</th><th>Quantity</th>`;
    cartItems.forEach((item ) => {
      const row = `
      <tr>
  <td style="vertical-align:middle; font-size:18px;">${item.name}</td>
  <td style="vertical-align:middle;">
    <span>${item.quantity}</span>
  </td>
</tr>

      `;
      productTable += row;
    });
    productTable += '</table>';
  }

    Email.send({
    SecureToken : "7b5b8299-7b98-4158-b037-653d2cfe6fc2",
    To : 'uditg0510@gmail.com',
    From : 'uditg0510@gmail.com',
    Subject : "Contact Form filled",
    Body: `<html>
         <head>
           <style>
             /* CSS styles go here */
             table {
               border-collapse: collapse;
               margin-top: 1rem;
               margin-bottom: 1rem;
               width: 100%;
             }
             th {
               background-color: #007bff;
               color: #fff;
               font-weight: bold;
               padding: 0.5rem;
               text-align: left;
               border: 1px solid #ccc;
             }
             td {
               border: 1px solid #ccc;
               padding: 0.5rem;
             }
           </style>
         </head>
         <body>
           <h1>New Enquiry</h1>
           <hr>
           <table>
           <tr>
              <th>Name:</th>
              <td>${document.getElementById('name').value}</td>
            </tr>
             <tr>
               <th>Email:</th>
               <td>${email}</td>
             </tr>
             <tr>
               <th>Message:</th>
               <td>${message}</td>
             </tr>
           </table>
           ${productTable}
         </body>
       </html>`


    }).then(
      message => alert(message)
    );
}