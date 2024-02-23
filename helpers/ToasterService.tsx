import { Toast } from 'primereact/toast';
import React, { useContext, useRef } from 'react';

const ToastContext: any = React.createContext(null);

const ToastProvider = (props: any) => {
    const toast: any = useRef(null);

    const showSuccess = (msg: any) => {
        toast.current.show({
            severity: 'success',
            summary: 'Success',
            detail: msg,
            life: 3000
        });
    }

    const showError = (msg: any) => {
        toast.current.show({
            severity: 'error',
            summary: 'Error',
            detail: msg,
            life: 3000
        });
    }

    return (
        <ToastContext.Provider value={{showSuccess, showError}}>
            <Toast ref={toast} />
            {props?.children}
        </ToastContext.Provider>
    )
}

export const useToast = () => useContext(ToastContext);
export default ToastProvider;