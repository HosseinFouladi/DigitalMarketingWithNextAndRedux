import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

      const Notif=(type,message,title='Warning')=>{
          return(
            store.addNotification({
                title: title,
                message: message,
                type: type,
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                  duration: 4000,
                  onScreen: true
                }
              })
          )
      }

      export default Notif;



