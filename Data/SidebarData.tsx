import { TiHome } from "react-icons/ti";
import { FaCreditCard, FaHandHoldingDollar, FaLightbulb, FaMagnifyingGlassChart, FaMoneyBillTransfer } from "react-icons/fa6";
import { FaTools, FaUserAlt } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";


export const dataSidebar = {
    data: [
        {
            icon: <TiHome />,
            title: 'dashboard',
            onClick: () => console.log('Hemos dado click a dashboard')
        },
        {
            icon: <FaMoneyBillTransfer />,
            title: 'Transactions',
            onClick: () => console.log('Hemos dado click a Transactions')
        },
        {
            icon: <FaUserAlt />,
            title: 'Acounts',
            onClick: () => console.log('Hemos dado click a Acounts')
        },
        {
            icon: <FaMagnifyingGlassChart />,
            title: 'Investiments',
            onClick: () => console.log('Hemos dado click a Investiments')
        },
        {
            icon: <FaCreditCard />,
            title: 'Credit Cards',
            onClick: () => console.log('Hemos dado click a Credit Cards')
        },
        {
            icon: <FaHandHoldingDollar />,
            title: 'Loans',
            onClick: () => console.log('Hemos dado click a Loans')
        },
        {
            icon: <FaTools />,
            title: 'Services',
            onClick: () => console.log('Hemos dado click a Services')
        },
        {
            icon: <FaLightbulb />,
            title: 'Privileges',
            onClick: () => console.log('Hemos dado click a My Privileges')
        },
        {
            icon: <IoIosSettings />,
            title: 'Setting',
            onClick: () => console.log('Hemos dado click a Setting')
        },
    ]
}