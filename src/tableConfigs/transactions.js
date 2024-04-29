export const BILLPAY_COLUMNS = [
    {
      id: 1,
      name: "clientReqId",
      display_name: "Client Request ID",
      isFilterable: true,
      filterType: "text",
      filterCondition: "",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "300px",
      tabIndex: 1
    },
    {
      id: 2,
      name: "paymentEventId",
      display_name: "paymentEventId",
      isFilterable: true,
      filterType: "text",
      filterCondition: "",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 2
    },
    {
      id: 3,
      name: "capturedDateTime",
      display_name: "Date & Time",
      isFilterable: true,
      filterType: "dateTime",
      filterCondition: "",
      filterValue: "",
      fromDate: "",
      toDate: "",
      fromtTime: '',
      toTime: '',
      minWidth: "200px",
      maxWidth: "200px",
      type: "date",
      tabIndex: 3
    },
    {
      id: 4,
      name: "customerNumber",
      display_name: "Customer Number",
      isFilterable: true,
      filterType: "text",
      filterCondition: "",
      filterValue: "",
      minWidth: "200px",
      maxWidth: "200px",
      tabIndex: 4
    },
    {
      id: 5,
      name: "amount",
      display_name: "Amount",
      isFilterable: true,
      filterType: "text",
      filterCondition: "",
      filterValue: "",
      minWidth: "200px",
      maxWidth: "200px",
      tabIndex: 5
    },
    {
      id: 6,
      name: "ipgTransactionId",
      display_name: "Remittance ID",
      isFilterable: true,
      filterType: "text",
      filterCondition: "",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 6
    },
    {
      id: 7,
      name: "reqType",
      display_name: "Type",
      isFilterable: true,
      filterType: "select",
      filterOptions: [],
      filterCondition: "",
      dropdownName: "Fiserv_Billpay_Type",
      equalsType: "equals",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "100px",
      tabIndex: 7
    },
    {
      id: 8,
      name: "cardType",
      display_name: "Payment Type",
      isFilterable: true,
      filterType: "select",
      filterOptions: [],
      filterCondition: "",
      dropdownName: "cardType",
      equalsType: "equals",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 8
    },
    {
      id: 9,
      name: "lastFourDigit",
      display_name: "Last Four Digits",
      isFilterable: false,
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 9
    },
    {
      id: 10,
      name: "email",
      display_name: "Email",
      isFilterable: true,
      filterType: "text",
      filterCondition: "",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 10
    },
    {
      id: 11,
      name: "channel",
      display_name: "Channel",
      isFilterable: true,
      filterType: "select",
      filterOptions: [],
      filterCondition: "",
      dropdownName: "channel",
      equalsType: "equals",
      filterValue: "",
      minWidth: "200px",
      maxWidth: "200px",
      tabIndex: 11
    },
    {
      id: 12,
      name: "transactionStatus",
      display_name: "Status",
      isFilterable: true,
      filterType: "select",
      filterOptions: [],
      dropdownName: "Billpay_Status",
      filterCondition: "",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 12
    },
  ]
  
  export const IPG_COLUMNS = [
    {
      id: 1,
      name: "clientReqId",
      display_name: "Client Request ID",
      isFilterable: true,
      filterType: "text",
      filterCondition: "",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "300px",
      tabIndex: 1
    },
    {
      id: 2,
      name: "orderId",
      display_name: "Authorization ID",
      isFilterable: true,
      filterType: "text",
      filterCondition: "",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "300px",
      tabIndex: 2
    },
    {
      id: 3,
      name: "capturedDateTime",
      display_name: "Date & Time",
      isFilterable: true,
      filterType: "date",
      filterCondition: "",
      filterValue: "",
      minWidth: "200px",
      maxWidth: "200px",
      type: "date",
      tabIndex: 3
    },
    {
      id: 4,
      name: "customerNumber",
      display_name: "Customer Number",
      isFilterable: true,
      filterType: "text",
      filterCondition: "",
      filterValue: "",
      minWidth: "200px",
      maxWidth: "200px",
      tabIndex: 4
    },
    {
      id: 5,
      name: "amount",
      display_name: "Amount",
      isFilterable: false,
      minWidth: "100px",
      maxWidth: "100px",
      tabIndex: 5
    },
    {
      id: 6,
      name: "ipgTransactionId",
      display_name: "Remittance ID",
      isFilterable: true,
      filterType: "text",
      filterCondition: "",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 6
    },
    {
      id: 7,
      name: "reqType",
      display_name: "Type",
      isFilterable: true,
      filterType: "select",
      filterOptions: [],
      filterCondition: "",
      dropdownName: "Fiserv_IPG_Type",
      equalsType: "equals",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 7
    },
    {
      id: 8,
      name: "lastFourDigit",
      display_name: "Last Four Digits",
      isFilterable: false,
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 8
    },
    {
      id: 9,
      name: "cardType",
      display_name: "Payment Type",
      isFilterable: false,
      filterType: "select",
      filterOptions: [],
      filterCondition: "",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 9
    },
    {
      id: 10,
      name: "*********",
      display_name: "Bank Account",
      isFilterable: false,
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 10
    },
    {
      id: 11,
      name: "phone",
      display_name: "Mobile Number",
      isFilterable: true,
      filterType: "text",
      filterCondition: "",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 11
    },
    {
      id: 12,
      name: "email",
      display_name: "Email",
      isFilterable: true,
      filterType: "text",
      filterCondition: "",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 12
    },
    {
      id: 13,
      name: "channel",
      display_name: "Channel",
      isFilterable: true,
      filterType: "select",
      filterOptions: [],
      filterCondition: "",
      dropdownName: "channel",
      equalsType: "equals",
      filterValue: "",
      minWidth: "200px",
      maxWidth: "200px",
      tabIndex: 11
    },
    {
      id: 14,
      name: "transactionStatus",
      display_name: "Status",
      isFilterable: true,
      filterType: "select",
      dropdownName: "IPG_Status",
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 13
    },
  ]
  
  export const COMMERCE_CONNECT_COLUMNS = [
    {
      id: 1,
      name: "merchantTransactionId",
      display_name: "Merchant Transaction ID",
      isFilterable: true,
      filterType: "text",
      filterCondition: "",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "300px",
      tabIndex: 1
    },
    {
      id: 2,
      name: "sessionToken",
      display_name: "Session Token ID",
      isFilterable: true,
      filterType: "text",
      filterCondition: "",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 2
    },
    {
      id: 3,
      name: "transactionDate",
      display_name: "Date & Time",
      isFilterable: true,
      filterType: "date",
      filterCondition: "",
      filterValue: "",
      minWidth: "200px",
      maxWidth: "200px",
      type: "date",
      tabIndex: 3
    },
    /**{
        id: 4,
        name: "customerNumber",
        display_name: "Customer Number",
        isFilterable: true,
        filterType: "text",
        filterCondition: "",
        filterValue: "",
        minWidth: "200px",
        maxWidth: "200px",
      },*/
    {
      id: 4,
      name: "amount",
      display_name: "Amount",
      isFilterable: true,
      filterType: "text",
      filterCondition: "",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "100px",
      tabIndex: 4
    },
    {
      id: 5,
      name: "gatewayRrn",
      display_name: "Gateway RRN",
      isFilterable: true,
      filterType: "text",
      filterCondition: "",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 5
    },
    {
      id: 6,
      name: "paymentMethod",
      display_name: "Payment Method",
      isFilterable: true,
      filterType: "select",
      filterOptions: [],
      filterCondition: "",
      dropdownName: "CC_Avenue_Type",
      equalsType: "equals",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 6
    },
    {
      id: 7,
      name: "lastFourDigit",
      display_name: "Payment Source",
      isFilterable: false,
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 7
    },
    {
      id: 8,
      name: "Phone",
      display_name: "Mobile Number",
      isFilterable: true,
      filterType: "text",
      filterCondition: "",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 8
    },
    {
      id: 9,
      name: "email",
      display_name: "Email",
      isFilterable: true,
      filterType: "text",
      filterCondition: "",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 9
    },
    {
      id: 10,
      name: "transactionStatus",
      display_name: "Status",
      isFilterable: true,
      filterType: "select",
      dropdownName: "CC_Avenue_Status",
      filterCondition: "",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 10
    },
  ]
  
  export const CCAVENUE_COLUMNS = [
    {
      id: 1,
      name: "merchantTransactionId",
      display_name: "Merchant Transaction ID",
      isFilterable: true,
      filterType: "text",
      filterCondition: "",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "300px",
      tabIndex: 1
    },
    {
      id: 2,
      name: "sessionToken",
      display_name: "Session Token ID",
      isFilterable: true,
      filterType: "text",
      filterCondition: "",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 2
    },
    {
      id: 3,
      name: "transactionDate",
      display_name: "Date & Time",
      isFilterable: true,
      filterType: "date",
      filterCondition: "",
      filterValue: "",
      minWidth: "200px",
      maxWidth: "200px",
      type: "date",
      tabIndex: 3
    },
    /**{
        id: 4,
        name: "customerNumber",
        display_name: "Customer Number",
        isFilterable: true,
        filterType: "text",
        filterCondition: "",
        filterValue: "",
        minWidth: "200px",
        maxWidth: "200px",
      }, */
    {
      id: 4,
      name: "amount",
      display_name: "Amount",
      isFilterable: false,
      minWidth: "100px",
      maxWidth: "100px",
      tabIndex: 4
    },
    {
      id: 5,
      name: "gatewayRrn",
      display_name: "Gateway RRN",
      isFilterable: true,
      filterType: "text",
      filterCondition: "",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 5
    },
    {
      id: 6,
      name: "paymentMethod",
      display_name: "Payment Method",
      isFilterable: true,
      filterType: "select",
      filterOptions: [{ Option1: "option1", Option2: "option2" }],
      filterCondition: "",
      dropdownName: "CC_Avenue_Type",
      equalsType: "equals",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 6
    },
    {
      id: 7,
      name: "cardType",
      display_name: "Payment Source",
      isFilterable: false,
      filterType: "select",
      filterOptions: [{ Credit: "credit", Debit: "debit" }],
      filterCondition: "",
      filterValue: "",
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 7
    },
    {
      id: 8,
      name: "phone",
      display_name: "Mobile Number",
      isFilterable: false,
      minWidth: "false",
      maxWidth: "200px",
      tabIndex: 8
    },
    {
      id: 9,
      name: "email",
      display_name: "Email",
      isFilterable: false,
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 9
    },
    {
      id: 10,
      name: "transactionStatus",
      display_name: "Status",
      isFilterable: true,
      filterType: "select",
      dropdownName: "IPG_Status",
      minWidth: "100px",
      maxWidth: "200px",
      tabIndex: 10
    },
  ]