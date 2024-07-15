import { CiSettings } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";


export const dataIconButtons = {
    dataIcons: [
        {
            onClick: console.log('click en el icono de herramientas'),
            icon: <CiSettings color="#718ebf" />,
            ariaLabel: 'Herramientas'
        },
        {
            onClick: console.log('click en el icono de notificaciones'),
            icon: <IoMdNotificationsOutline color="#fe5c73" />,
            ariaLabel: 'Notification'
        },
    ]
}