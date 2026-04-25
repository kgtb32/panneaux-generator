export const SIGN_TAB_DELETE_SIGN_POPUP = {
    key: 'popup',
    message: 'Êtes vous sûr de vouloir supprimer ce panneau',
    icon: 'pi pi-exclamation-triangle',
    acceptLabel: 'Oui',
    rejectLabel: 'Non',
    rejectButtonProps: {
        severity: 'secondary',
        outlined: true,
    },
    acceptButtonProps: {
        severity: 'danger',
    },
};

export const SIGN_TAB_FILENAME_DIALOG = {
    header: 'Enregistrer le panneau',
    closable: true,
    data: {
        description: 'Veuillez entrer le nom à donner au panneau :',
        placeholder: 'Nom',
    },
};
