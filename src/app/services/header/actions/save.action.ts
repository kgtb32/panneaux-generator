import { MenuAction } from "../../../models/action";
import { EventsService } from "../../events.service";

export class SaveSignAction implements MenuAction {
    constructor(private readonly eventsService: EventsService) { }
    execute() {
        this.eventsService.submenuClicked('file.save')
    };

}