import { EventEmitter } from "@angular/core";
import { MenuItem } from "primeng/api";
import html2canvas from 'html2canvas'

function exportToPng() {
    const divElement = document.getElementById("sign");

    html2canvas(divElement!).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = imgData;
        link.download = "div_image.png";
        link.click();
    });

}

export function baseMenu(output: EventEmitter<string>): MenuItem[] {
    return [
        {
            label: 'Fichier',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'Nouveau',
                    icon: 'pi pi-file-plus',
                    command: () => output.next("file.new")
                },
                {
                    icon: 'pi pi-folder-open',
                    label: 'Ouvrir',
                    command: () => output.next("file.open")
                },
                {
                    icon: 'pi pi-save',
                    label: 'Enregistrer',
                    command: () => output.next("file.save")
                },
                {
                    icon: 'pi pi-file-export',
                    label: 'Exporter le panneau',
                    command: () => exportToPng()
                }
            ]
        },
        {
            icon: 'pi pi-box',
            label: 'Panneau',
            items: [
                {
                    label: 'Ajouter un sous panneau',
                    icon: 'pi pi-folder-plus',
                    command: () => output.next("sign.new.subPanel")
                },
                {
                    label: 'Ajouter un élément à ce sous panneau',
                    icon: 'pi pi-box',
                    command: () => output.next("sign.new.subPanelItem")
                }
            ]
        },
        {
            label: 'Aide',
            icon: 'pi pi-question-circle',
            items: [
                {
                    label: 'Aide',
                    icon: 'pi pi-question-circle'
                },
                {
                    label: 'À Propos de',
                    icon: 'pi pi-info-circle'
                }
            ]
        },
    ]
}