import axios from 'axios'
import { BILLPAY_COLUMNS, IPG_COLUMNS, COMMERCE_CONNECT_COLUMNS, CCAVENUE_COLUMNS } from '../../tableConfigs/transactions'
import { Fun_NestedTernaryOprator, Fun_IfElseCondition, getDateAndTIme, convertTimezone } from '../../utils/index'

export const Fun_GetTableColumns = (setColumns, setDefaultColumns, pageName) => {
    const gateway = localStorage.getItem('gateway')
    let allColumns = []
    switch (gateway) {
        case 'FISERV_BILLPAY': {
            allColumns = BILLPAY_COLUMNS
            if (pageName === 'payments') {
                allColumns[1].filterCondition = 'notEquals'
                allColumns[1].filterValue = ' '

                allColumns[6].filterCondition = 'contains'
                allColumns[6].filterValue = 'Sale'
            }
            if (pageName === 'refunds') {
                allColumns[6].filterCondition = 'contains'
                allColumns[6].filterValue = 'Return'
            }
            setColumns([...allColumns])
            setDefaultColumns([...allColumns])
            return
        }
        case "FISERV_IPG": {
            setColumns(IPG_COLUMNS)
            localStorage.setItem('defaultTableColumns', JSON.stringify(IPG_COLUMNS))
            return
        }
        case "COMMERCE_CONNECT": {
            let allColumns = [...COMMERCE_CONNECT_COLUMNS]
            if (pageName === 'payments') {
                allColumns[5].filterCondition = 'contains'
                allColumns[5].filterValue = 'Sale'
            }
            if (pageName === 'refunds') {
                allColumns[5].filterCondition = 'contains'
                allColumns[5].filterValue = 'Return'
            }
            setColumns(allColumns)
            localStorage.setItem('defaultTableColumns', JSON.stringify(allColumns))
            return
        }
        case "CC_AVENUE": {
            let allColumns = [...CCAVENUE_COLUMNS]
            if (pageName === 'payments') {
                allColumns[5].filterCondition = 'contains'
                allColumns[5].filterValue = 'Sale'
            }
            if (pageName === 'refunds') {
                allColumns[5].filterCondition = 'contains'
                allColumns[5].filterValue = 'Return'
            }
            setColumns(allColumns)
            localStorage.setItem('defaultTableColumns', JSON.stringify(allColumns))
            return
        }
        default: return
    }
}

export function Fun_SetTableDropDowns(columns, setColumns) {
    columns.forEach((column, index) => {
        if (column?.dropdownName) {
            getOptions(column, index, columns, setColumns)
        }
    })
}

async function getOptions(column, index, columns, setColumns) {
    try {
        let optionsArr = await Fun_GetDropdownOptions(column.dropdownName)
        let allColumns = [...columns]
        allColumns[index].filterOptions = optionsArr
        setColumns(allColumns)
    } catch(err) {

    }
}

export const Fun_GetDropdownOptions = async (name) => {
    let response = await Fun_GetDropdownOptions_API(name)
    let dropdownArr = response?.data?.data
    let optionsArr = []
    if (dropdownArr.length > 0) {
        dropdownArr.forEach(item => {
            optionsArr.push({
                label: item.value,
                value: item.value
            })
        })
    }
    return optionsArr
}

export const Fun_GetDropdownOptions_API = (name) => {
    return axios.get(`https://qaapi1.monay.com/v1/admin/drop_downs?name=${name}`)
}

export const Fun_GetData = async ({ columns, setColumns, rows, setRows, pageConfiguration, setPageConfiguration, setIsLoading }) => {
    const merchantId = localStorage.getItem('mainMerchantId')
    const payload = await Fun_GetFilterObject(columns, pageConfiguration)
    setIsLoading(true)
    try {
        const apiResponse = await Fun_PaymentTransactions_API(merchantId, payload);
        const responseData = apiResponse?.data?.data
        setRows(responseData?.data)
        setPageConfiguration({ ...pageConfiguration, count: responseData?.totalRecord, isFilterActive: false })
        setIsLoading(false)
    } catch (err) {
        setIsLoading(false)
    }
}

export const Fun_PaymentTransactions_API = (
    merchant_id,
    payload
) => {

    console.log('payload in transaction api: ', payload)

    const token = localStorage.getItem("token");
    // let newAPI = APII;
    let data = {
        page_number: Fun_NestedTernaryOprator(payload?.page_number, payload.page_number, 1),
        page_size: Fun_NestedTernaryOprator(payload?.page_size, payload.page_size, 15),
        filter: payload?.filter,
        merchant_id: merchant_id
    }

    const Fun_TransactionURL = () => {
        const getCountryCode = localStorage.getItem("country_code");
        let getNewId = getCountryCode
        let newTitle = "transactions";

        Fun_IfElseCondition([getNewId === "IND", () => {
            newTitle = "transactions_ind";
            data.merchant_id = merchant_id;
        }])
        return newTitle
    }
    return axios.post(
        `https://qaapi1.monay.com/v2/payment/${Fun_TransactionURL()}`,
        data,
        {
            headers: {
                authorization: "Bearer " + token,
            },
        }
    );
};

export const Fun_GetFilterObject = async (columns, pageConfiguration, Fun_DateSubmitHandler) => {
    let payload = {}
    let filterObj = {}
    let allColumns = [...columns];
    allColumns.forEach(column => {
        if (Fun_ValidateFilterCondition(column)) {
            if (column.filterType === 'dateTime' && column.filterCondition !== 'between') {
                let convertedDate = convertTimezone(column, pageConfiguration)
                if (column.time) {
                    filterObj[Fun_NestedTernaryOprator(column.filterName, column.filterName, column.name)] =
                        //** `${column.filterCondition}:` +  covertZone(userTImeZone, getconvetedTimezone(gateway), getDateAndTIme(column.date, column.time), true, column.filterConditio);
                        `${column.filterCondition}:${convertedDate}`
                } else {
                    filterObj[Fun_NestedTernaryOprator(column.filterName, column.filterName, column.name)] = `${column.filterCondition}:${column.date}`
                }
            }
            else if (column.filterCondition === 'between') {
                console.log(getDateAndTIme(column.date, column.time))
                console.log(getDateAndTIme(column.date2, column.time2))
                filterObj[Fun_NestedTernaryOprator(column.filterName, column.filterName, column.name)] =
                    `${column.filterCondition}:${column.date},${column.date2}`
            } else {
                filterObj[Fun_NestedTernaryOprator(column.filterName, column.filterName, column.name)] = `${column.filterCondition}:${column.filterValue}`
            }

        }
    })
    if (!pageConfiguration.usePageNumber) {
        payload = {
            filter: filterObj,
            limit: pageConfiguration.pageSize,
            offset: (pageConfiguration.pageNumber - 1) * pageConfiguration.pageSize
        }
    } else {
        payload = {
            filter: filterObj,
            page_number: pageConfiguration.pageNumber,
            page_size: pageConfiguration.pageSize
        }
    }
    return payload
}

const Fun_ValidateFilterCondition = (column) => {
    if (column.filterCondition) {
        if (column.filterValue || column.filterValue === 0) return true
        if (column.time && column.date && column.timeZone) return true
        if (column.date && column.date2) return true
    }
    return false
}
