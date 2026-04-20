import { MenuItem } from 'primeng/api';
import { Subject } from 'rxjs';

export function baseMenu(output: Subject<string>): MenuItem[] {
  return [
    {
      label: 'Fichier',
      icon: 'pi pi-file',
      items: [
        {
          label: 'Nouveau',
          icon: 'pi pi-file-plus',
          command: () => output.next('file.new'),
        },
        {
          icon: 'pi pi-folder-open',
          label: 'Ouvrir',
          command: () => output.next('file.open'),
        },
        {
          icon: 'pi pi-save',
          label: 'Enregistrer',
          command: () => output.next('file.save'),
        },
        {
          icon: 'pi pi-file-export',
          label: 'Exporter le panneau',
          command: () => output.next('file.export'),
        },
      ],
    },
    {
      icon: 'pi pi-box',
      label: 'Panneau',
      items: [
        {
          label: 'Ajouter un sous panneau',
          icon: 'pi pi-folder-plus',
          command: () => output.next('sign.new.subPanel'),
        },
        {
          label: 'Ajouter un élément à ce sous panneau',
          icon: 'pi pi-box',
          command: () => output.next('sign.new.subPanelItem'),
        },
      ],
    },
    {
      label: 'Aide',
      icon: 'pi pi-question-circle',
      items: [
        {
          label: 'Aide',
          icon: 'pi pi-question-circle',
          command: () => output.next('app.help'),
        },
        {
          label: 'A Propos de',
          icon: 'pi pi-info-circle',
          command: () => output.next('app.about'),
        },
      ],
    },
  ];
}
