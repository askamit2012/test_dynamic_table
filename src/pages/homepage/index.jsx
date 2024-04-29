import React, { useEffect, useState } from 'react'
import DataTable from '../../dataTable'
import { Fun_GetTableColumns, Fun_SetTableDropDowns, Fun_GetData } from './controller'

function Index(props) {
    const { isLoading, setIsLoading } = { ...props }
    const [rows, setRows] = useState([])
    const [columns, setColumns] = useState([])
    const [defaultColumns, setDefaultColumns] = useState([])
    const [gateway, setGateway] = useState('FISERV_BILLPAY')
    const [country, setCountry] = useState('US')
    const [pageConfiguration, setPageConfiguration] = useState({
        pageNumber: 1,
        pageSize: 15,
        count: 0,
        isFilterActive: false,
        rowsPerPageOptions: [15, 25, 50, 100, 500],
        showFilters: true,
        apiType: 'java',
        userTimeZone: "GMT+00:00"
    });

    useEffect(() => {
        Fun_GetTableColumns(setColumns, setDefaultColumns, 'transactions',)
    }, [])

    useEffect(() => {
        if (columns?.length > 0) {
            Fun_SetTableDropDowns(columns, setColumns)
        }
    }, [columns?.length])


    useEffect(() => {
        console.log('default table columns: ', defaultColumns)
        Fun_GetData({ columns, setColumns, rows, setRows, pageConfiguration, setPageConfiguration, setIsLoading })
    }, [pageConfiguration.pageNumber, pageConfiguration.pageSize, pageConfiguration.isFilterActive])

    function resetTableColumns() {
        console.log('please reset the table: ', defaultColumns)
        setColumns(defaultColumns)
        setPageConfiguration({ ...pageConfiguration, isFilterActive: true })
    }

    function changeGateway(e) {
        console.log(e.target.value)
        setGateway(e.target.value)
        localStorage.setItem('gateway', e.target.value)
    }

    function changeCountry(e) {
        console.log(e.target.value)
        setCountry(e.target.value)
        localStorage.setItem('country_code', e.target.value)
    }

    function checkIfGatewaySelected(value) {
        let gateway = localStorage.getItem('gateway')
        if(gateway === value) {
            return true
        }
        return false
    }

    function checkIfCountrySelected(value) {
        let country = localStorage.getItem('country_code')
        if(country === value) {
            return true
        }
        return false
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', background: '#CCC' }}>
                <h3>Transactions</h3>
                <nav>
                    <select value={gateway} onChange={(e) => changeGateway(e)}>
                        <option disabled value="XYZ">Select Payment Gateway</option>
                        <option selected={() => checkIfGatewaySelected("FISERV_BILLPAY")} value="FISERV_BILLPAY">FISERV_BILLPAY</option>
                        <option selected={() => checkIfGatewaySelected("FISERV_IPG")} value="FISERV_IPG">FISERV_IPG</option>
                        <option selected={() => checkIfGatewaySelected("COMMERCE_CONNECT")} value="COMMERCE_CONNECT">COMMERCE_CONNECT</option>
                        <option selected={() => checkIfGatewaySelected("CC_AVENUE")} value="CC_AVENUE">CC_AVENUE</option>
                    </select>
                </nav>
                <nav>
                    <select value={country} onChange={(e) => changeCountry(e)}>
                        <option disabled value="XYZ">Select Country</option>
                        <option selected={() => checkIfCountrySelected("IND")} value="IND">India</option>
                        <option selected={() => checkIfCountrySelected("US")} value="US">United States</option>
                    </select>
                </nav>
            </div>
            <DataTable
                pageConfiguration={pageConfiguration}
                setPageConfiguration={setPageConfiguration}
                data={rows}
                TABLE_COLUMNS={columns}
                setTableColumns={setColumns}
                showPagination={true}
                resetTableColumns={resetTableColumns}
            />
        </div>
    )
}

export default Index