import html2canvas from 'html2canvas';
import { MenuAction } from '../../../models/action';
const DOM_STYLE = 'style';

export class ExportSignAction implements MenuAction {
  public execute() {
    const divElement = document.getElementById('sign');
    const style: Attr = divElement?.attributes.getNamedItem(DOM_STYLE)!;
    divElement?.attributes.removeNamedItem(DOM_STYLE);

    html2canvas(divElement!).then((canvas) => {
      divElement?.attributes.setNamedItem(style);
      const imgData = canvas.toDataURL('image/png');

      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'div_image.png';
      link.click();
    });
  }
}
