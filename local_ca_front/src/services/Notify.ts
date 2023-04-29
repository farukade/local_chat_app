import { BehaviorSubject } from "rxjs";
import { toast, cssTransition } from "react-toastify";

const notifications = new BehaviorSubject<any>(null);

const Sliders = cssTransition({
  enter: "slide-in-left",
  exit: "slide-out-left",
});

class NotificationService {
  notifications = notifications.asObservable();
  configuration = {
    position: toast.POSITION.TOP_RIGHT,
    transition: Sliders,
    hideProgressBar: true,
    draggable: true,
    draggablePercent: 50,
  };

  sendNotification = (message: string, type: Symbol, options = {}) => {
    try {
      if (message) {
        switch (type) {
          case AlertTypes.success:
            notifications.next(() => toast.success(message, this.configuration));
            break;
          case AlertTypes.error:
            notifications.next(() => toast.error(message, this.configuration));
            break;
          case AlertTypes.custom:
          default:
            notifications.next(() => toast(message, { ...this.configuration, ...options }));
            break;
        }
      }
    } catch (ex: any) {
      notifications.next(() => toast.error(ex.message, this.configuration));
    }
  };
}

const Notify = new NotificationService();

export default Notify;

const AlertTypes = Object.freeze({
  success: Symbol("success"),
  error: Symbol("error"),
  custom: Symbol("custom"),
});

export const notifyCustom = (message: string, options: object) => {
  Notify.sendNotification(message, AlertTypes.custom, options);
};

export const notifySuccess = (message: string) => {
  Notify.sendNotification(message, AlertTypes.success);
};

export const notifyError = (message: string) => {
  Notify.sendNotification(message, AlertTypes.error);
};
