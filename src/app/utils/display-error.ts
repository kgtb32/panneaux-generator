export function generateUnifiedErrorMessage(error: Error, key?: string) {
    return {
        modal: true,
        key,
        message: `Une erreur technique s'est produite :</br> ${error}`,
        icon: 'pi pi-times',
        acceptLabel: 'ok',
        rejectVisible: false,
    };
}
