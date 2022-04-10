const getTravelers = {};
const URL = process.env.REACT_APP_URL_SERVER + "invoices/";

// find all invoice to confirm invoice_status = 0
invoicesFinder.toConfirm = async () => {
  const response = await fetch(URL + "toconfirm", {
    method: "GET",
    headers: { "Content-Type": "application/json", token: localStorage.token },
  });
  return await response.json();
};

// change payment_to_confirm invoice status of 0 to 1 (payment confirm)
invoicesFinder.confirm = async (invoices) => {
  const response = await fetch(URL + "payment/confirm", {
    method: "PUT",
    headers: { "Content-Type": "application/json", token: localStorage.token },
    body: JSON.stringify({ invoices }),
  });
  return await response.json();
};

invoicesFinder.allById = async (user) => {
  const response = await fetch(URL + "pending", {
    method: "POST",
    headers: { "Content-Type": "application/json", token: localStorage.token },
    body: JSON.stringify({ ...user }),
  });
  return await response.json();
};

// find all invoice with payment confirm
invoicesFinder.paymentsConfirm = async () => {
  const response = await fetch(URL + "paymentconfirm", {
    method: "GET",
    headers: { "Content-Type": "application/json", token: localStorage.token },
  });
  return await response.json();
};

export default getTraveller;
